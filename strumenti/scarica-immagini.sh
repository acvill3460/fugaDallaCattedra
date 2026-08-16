#!/usr/bin/env bash
#
# AD DIEM — scarica le immagini delle opere in img/
# -----------------------------------------------------------------
# Legge js/opere.js, per ogni opera interroga l'API di ricerca di
# Wikimedia Commons con il campo `ricerca`, prende il primo file
# immagine trovato e lo scarica in img/ con il nome del campo `file`.
#
# ┌───────────────────────────────────────────────────────────────┐
# │ PRIMA DI LANCIARLO: compila CONTATTO qui sotto.               │
# │ Wikimedia richiede che il User-Agent contenga un recapito     │
# │ vero (email o indirizzo del repository). Le richieste con un  │
# │ User-Agent generico vengono respinte con 403.                 │
# └───────────────────────────────────────────────────────────────┘
#
# USO
#   cd /percorso/di/ad-diem
#   bash strumenti/scarica-immagini.sh --prova     # una richiesta sola, output grezzo
#   bash strumenti/scarica-immagini.sh             # scarica ciò che manca
#   bash strumenti/scarica-immagini.sh --tutto     # riscarica tutto
#
# RICHIEDE  curl, jq, python3

set -u

# ============ DA COMPILARE ============
CONTATTO="acvill3460@gmail.com"        # email, oppure URL del repository
# ======================================

LARGHEZZA=1200                 # px del lato lungo richiesto a Commons
PAUSA=3                        # secondi fra una ricerca e l'altra
TENTATIVI=4                    # quante volte riprovare su 429 / 503
CARTELLA="img"
SORGENTE="js/opere.js"
API="https://commons.wikimedia.org/w/api.php"
AGENTE="AdDiem/1.1 ($CONTATTO)"

MODO="normale"
case "${1:-}" in
  --tutto) MODO="tutto" ;;
  --prova) MODO="prova" ;;
esac

for programma in curl jq python3; do
  if ! command -v "$programma" >/dev/null 2>&1; then
    echo "Manca $programma. Installalo e riprova." >&2
    exit 1
  fi
done

if [ "$CONTATTO" = "tua@email.it" ]; then
  echo "!! CONTATTO non compilato in cima allo script." >&2
  echo "   Wikimedia respinge le richieste senza un recapito nel User-Agent." >&2
  echo "   Mettici la tua email o l'URL del repository e rilancia." >&2
  exit 1
fi

# -----------------------------------------------------------------
# chiama_api  — esegue la richiesta e stampa il corpo su stdout.
# Restituisce 0 solo con HTTP 200 e corpo JSON valido; altrimenti
# scrive su stderr COSA è tornato davvero, invece di far inciampare
# jq su una riga di stato. Riprova con attesa crescente su 429 e 503.
# -----------------------------------------------------------------
chiama_api() {
  local attesa=5 tentativo=1 risposta codice corpo

  while [ "$tentativo" -le "$TENTATIVI" ]; do
    risposta=$(curl -sS -G "$API" "$@" \
                 -A "$AGENTE" \
                 -H "Accept: application/json" \
                 -w $'\n%{http_code}' 2>/dev/null)

    codice="${risposta##*$'\n'}"
    corpo="${risposta%$'\n'*}"

    case "$codice" in
      200)
        if printf '%s' "$corpo" | jq -e . >/dev/null 2>&1; then
          printf '%s' "$corpo"
          return 0
        fi
        echo "   HTTP 200 ma la risposta non è JSON. Primi caratteri:" >&2
        printf '   %s\n' "$(printf '%s' "$corpo" | head -c 160)" >&2
        return 1
        ;;
      429|503)
        echo "   HTTP $codice — limitato dal server. Attendo ${attesa}s (tentativo $tentativo/$TENTATIVI)" >&2
        sleep "$attesa"
        attesa=$((attesa * 3))
        tentativo=$((tentativo + 1))
        ;;
      403)
        echo "   HTTP 403 — richiesta respinta, quasi sempre per il User-Agent." >&2
        echo "   Verifica che CONTATTO sia un recapito vero." >&2
        printf '   %s\n' "$(printf '%s' "$corpo" | head -c 160)" >&2
        return 1
        ;;
      *)
        echo "   HTTP $codice. Primi caratteri della risposta:" >&2
        printf '   %s\n' "$(printf '%s' "$corpo" | head -c 160)" >&2
        return 1
        ;;
    esac
  done

  echo "   Esauriti i tentativi. Riprova fra qualche minuto." >&2
  return 1
}

# --prova: una sola richiesta, tutto in chiaro, per capire cosa risponde il server
if [ "$MODO" = "prova" ]; then
  echo "User-Agent: $AGENTE"
  echo "Richiesta di prova all'API di Commons..."
  echo
  curl -sS -G "$API" \
    --data-urlencode "action=query" \
    --data-urlencode "format=json" \
    --data-urlencode "list=search" \
    --data-urlencode "srnamespace=6" \
    --data-urlencode "srlimit=1" \
    --data-urlencode "srsearch=Van Gogh Pieta Delacroix" \
    -A "$AGENTE" -H "Accept: application/json" \
    -w $'\n--- HTTP %{http_code} ---\n' | head -c 800
  echo
  exit 0
fi

if [ ! -f "$SORGENTE" ]; then
  echo "Non trovo $SORGENTE. Lancia lo script dalla radice del progetto." >&2
  exit 1
fi

mkdir -p "$CARTELLA"

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
echo "User-Agent: $AGENTE"
echo

scaricate=0; saltate=0; fallite=0
manuali=""

while IFS=$'\t' read -r nomefile ricerca; do
  [ -z "$nomefile" ] && continue

  if [ -f "$CARTELLA/$nomefile" ] && [ "$MODO" != "tutto" ]; then
    echo "·  $nomefile — già presente"
    saltate=$((saltate + 1))
    continue
  fi

  echo "→  $nomefile"
  echo "   cerco: $ricerca"

  if ! risultato=$(chiama_api \
        --data-urlencode "action=query" \
        --data-urlencode "format=json" \
        --data-urlencode "list=search" \
        --data-urlencode "srnamespace=6" \
        --data-urlencode "srlimit=1" \
        --data-urlencode "srsearch=$ricerca"); then
    fallite=$((fallite + 1)); manuali="$manuali$nomefile|$ricerca"$'\n'; echo; continue
  fi

  titolo=$(printf '%s' "$risultato" | jq -r '.query.search[0].title // empty')

  if [ -z "$titolo" ]; then
    echo "   Nessun risultato: riformula il campo 'ricerca' in js/opere.js."
    fallite=$((fallite + 1)); manuali="$manuali$nomefile|$ricerca"$'\n'; echo; continue
  fi

  echo "   trovato: $titolo"

  if ! informazioni=$(chiama_api \
        --data-urlencode "action=query" \
        --data-urlencode "format=json" \
        --data-urlencode "prop=imageinfo" \
        --data-urlencode "iiprop=url" \
        --data-urlencode "iiurlwidth=$LARGHEZZA" \
        --data-urlencode "titles=$titolo"); then
    fallite=$((fallite + 1)); manuali="$manuali$nomefile|$ricerca"$'\n'; echo; continue
  fi

  url=$(printf '%s' "$informazioni" | jq -r '.query.pages[].imageinfo[0] | (.thumburl // .url) // empty')

  if [ -z "$url" ]; then
    echo "   L'API non ha restituito un URL utilizzabile."
    fallite=$((fallite + 1)); manuali="$manuali$nomefile|$ricerca"$'\n'; echo; continue
  fi

  temporaneo="$CARTELLA/.$nomefile.parziale"
  if curl -sS -L -A "$AGENTE" -o "$temporaneo" "$url" && [ -s "$temporaneo" ]; then
    mv "$temporaneo" "$CARTELLA/$nomefile"
    echo "   OK ($(du -h "$CARTELLA/$nomefile" | cut -f1))"
    scaricate=$((scaricate + 1))
  else
    rm -f "$temporaneo"
    echo "   Download del file fallito."
    fallite=$((fallite + 1)); manuali="$manuali$nomefile|$ricerca"$'\n'
  fi

  echo
  sleep "$PAUSA"
done <<< "$elenco"

echo "---------------------------------------------"
echo "scaricate: $scaricate   già presenti: $saltate   fallite: $fallite"

if [ -n "$manuali" ]; then
  echo
  echo "Da recuperare a mano — apri l'indirizzo, scarica l'immagine e"
  echo "salvala in $CARTELLA/ con il nome indicato:"
  echo
  while IFS='|' read -r nomefile ricerca; do
    [ -z "$nomefile" ] && continue
    interrogazione=$(printf '%s' "$ricerca" | python3 -c 'import sys,urllib.parse; print(urllib.parse.quote(sys.stdin.read().strip()))')
    echo "  $nomefile"
    echo "    https://commons.wikimedia.org/w/index.php?search=$interrogazione&ns6=1"
    echo
  done <<< "$manuali"
fi

echo "Poi APRI la cartella $CARTELLA e guarda le immagini una per una:"
echo "la ricerca automatica prende il primo risultato e a volte sbaglia."
