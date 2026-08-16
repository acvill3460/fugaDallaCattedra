#!/usr/bin/env bash
#
# AD DIEM — scarica le immagini delle opere in img/
# -----------------------------------------------------------------
# Legge js/opere.js, per ogni opera interroga l'API di ricerca di
# Wikimedia Commons con il campo `ricerca`, prende il primo file
# immagine trovato e lo scarica in img/ con il nome del campo `file`.
#
# Perché uno script invece di URL scritti a mano nel codice: i nomi
# dei file su Commons sono imprevedibili ("Van Gogh - Pietà (nach
# Delacroix)1.jpeg"). Farli risolvere all'API elimina una classe
# intera di link rotti.
#
# USO
#   cd /percorso/di/ad-diem
#   bash strumenti/scarica-immagini.sh              # scarica il mancante
#   bash strumenti/scarica-immagini.sh --tutto      # riscarica tutto
#
# RICHIEDE  curl, jq, python3
#
# ATTENZIONE: la ricerca automatica prende il PRIMO risultato, che
# non sempre è quello giusto. Apri img/ e guarda le immagini una per
# una prima di pubblicare: dieci minuti che evitano figuracce.

set -u

LARGHEZZA=1200          # px del lato lungo richiesto a Commons
CARTELLA="img"
SORGENTE="js/opere.js"
API="https://commons.wikimedia.org/w/api.php"
AGENTE="AdDiem/1.0 (progetto didattico personale)"

RISCARICA_TUTTO=0
[ "${1:-}" = "--tutto" ] && RISCARICA_TUTTO=1

for programma in curl jq python3; do
  if ! command -v "$programma" >/dev/null 2>&1; then
    echo "Manca $programma. Installalo e riprova." >&2
    exit 1
  fi
done

if [ ! -f "$SORGENTE" ]; then
  echo "Non trovo $SORGENTE. Lancia lo script dalla radice del progetto." >&2
  exit 1
fi

mkdir -p "$CARTELLA"

# Estrae le coppie "file<TAB>ricerca" da js/opere.js
elenco=$(python3 - "$SORGENTE" << 'PYEOF'
import re, sys
testo = open(sys.argv[1], encoding='utf-8').read()
blocchi = re.findall(r'\{(.*?)\n  \}', testo, re.S)
for blocco in blocchi:
    f = re.search(r'file:\s*"([^"]+)"', blocco)
    r = re.search(r'ricerca:\s*"([^"]+)"', blocco)
    if f and r:
        print(f.group(1) + "\t" + r.group(1))
PYEOF
)

totale=$(printf '%s\n' "$elenco" | grep -c .)
echo "Opere trovate in $SORGENTE: $totale"
echo

scaricate=0; saltate=0; fallite=0

while IFS=$'\t' read -r nomefile ricerca; do
  [ -z "$nomefile" ] && continue

  if [ -f "$CARTELLA/$nomefile" ] && [ "$RISCARICA_TUTTO" -eq 0 ]; then
    echo "·  $nomefile — già presente"
    saltate=$((saltate + 1))
    continue
  fi

  echo "→  $nomefile"
  echo "   cerco: $ricerca"

  # 1. cerca il titolo del file nello spazio dei nomi File: (ns 6)
  titolo=$(curl -sS -G "$API" \
    --data-urlencode "action=query" \
    --data-urlencode "format=json" \
    --data-urlencode "list=search" \
    --data-urlencode "srnamespace=6" \
    --data-urlencode "srlimit=1" \
    --data-urlencode "srsearch=$ricerca" \
    -A "$AGENTE" \
    | jq -r '.query.search[0].title // empty')

  if [ -z "$titolo" ]; then
    echo "   NIENTE — nessun risultato. Cerca a mano su commons.wikimedia.org"
    fallite=$((fallite + 1)); echo; continue
  fi

  echo "   trovato: $titolo"

  # 2. chiede l'URL della miniatura alla larghezza voluta
  url=$(curl -sS -G "$API" \
    --data-urlencode "action=query" \
    --data-urlencode "format=json" \
    --data-urlencode "prop=imageinfo" \
    --data-urlencode "iiprop=url" \
    --data-urlencode "iiurlwidth=$LARGHEZZA" \
    --data-urlencode "titles=$titolo" \
    -A "$AGENTE" \
    | jq -r '.query.pages[].imageinfo[0] | (.thumburl // .url) // empty')

  if [ -z "$url" ]; then
    echo "   NIENTE — l'API non ha restituito un URL utilizzabile"
    fallite=$((fallite + 1)); echo; continue
  fi

  # 3. scarica su file temporaneo, così un download interrotto non
  #    lascia un file rotto al posto di uno buono
  temporaneo="$CARTELLA/.$nomefile.parziale"
  if curl -sS -L -A "$AGENTE" -o "$temporaneo" "$url" && [ -s "$temporaneo" ]; then
    mv "$temporaneo" "$CARTELLA/$nomefile"
    peso=$(du -h "$CARTELLA/$nomefile" | cut -f1)
    echo "   OK ($peso)"
    scaricate=$((scaricate + 1))
  else
    rm -f "$temporaneo"
    echo "   NIENTE — download fallito"
    fallite=$((fallite + 1))
  fi

  echo
  sleep 1          # cortesia verso i server di Wikimedia
done <<< "$elenco"

echo "---------------------------------------------"
echo "scaricate: $scaricate   già presenti: $saltate   fallite: $fallite"
echo
echo "Ora APRI la cartella $CARTELLA e guarda le immagini una per una:"
echo "la ricerca automatica prende il primo risultato e a volte sbaglia."
