/* ===========================================================
   AD DIEM — opera del giorno
   -----------------------------------------------------------
   Ruota su 85 opere. 85 = 5 × 17, quindi si sfasa con
   frasi (53), domande (121) e ospiti (21): la quaterna non si
   ripete mai nell'arco che ci interessa.

   Se un file manca da img/, la sezione NON si rompe: mostra
   comunque didascalia e link alla fonte, con una nota che dice
   quale file cercare. Meglio una mancanza dichiarata che
   l'icona di immagine spezzata del browser.
   =========================================================== */

const CARTELLA_IMMAGINI = "img/";

const operaDelGiorno = OPERE[INDICE_OGGI % OPERE.length];

function componiDidascalia(opera) {
  const contenitore = document.getElementById("opera-didascalia");
  contenitore.textContent = "";

  const riga = document.createElement("p");
  riga.className = "opera-riga";

  const titolo = document.createElement("em");
  titolo.textContent = opera.titolo;
  riga.appendChild(titolo);
  riga.appendChild(document.createTextNode(", " + opera.anno));

  const periodo = document.createElement("p");
  periodo.className = "opera-periodo";
  periodo.textContent = opera.periodo;

  const autore = document.createElement("p");
  autore.className = "opera-autore";
  autore.textContent = opera.autore;

  const dove = document.createElement("p");
  dove.className = "opera-dove";
  dove.textContent = opera.dove;

  contenitore.appendChild(periodo);
  contenitore.appendChild(autore);
  contenitore.appendChild(riga);
  contenitore.appendChild(dove);

  if (opera.nota) {
    const nota = document.createElement("p");
    nota.className = "opera-nota";
    nota.textContent = opera.nota;
    contenitore.appendChild(nota);
  }

  /* Il link alla fonte si costruisce dal termine di ricerca invece
     che da un URL fisso: una ricerca su Commons risponde sempre,
     mentre un indirizzo di categoria scritto a mano può non esistere. */
  if (opera.ricerca) {
    const fonte = document.createElement("p");
    fonte.className = "opera-fonte";
    const link = document.createElement("a");
    link.href = "https://commons.wikimedia.org/w/index.php?ns6=1&search=" +
                encodeURIComponent(opera.ricerca);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Cerca su Wikimedia Commons";
    fonte.appendChild(link);
    contenitore.appendChild(fonte);
  }
}

function mostraOperaDelGiorno() {
  const cornice = document.getElementById("opera-cornice");
  cornice.textContent = "";

  const immagine = document.createElement("img");
  immagine.className = "opera-immagine";
  immagine.src = CARTELLA_IMMAGINI + operaDelGiorno.file;
  immagine.alt = operaDelGiorno.titolo + ", " + operaDelGiorno.autore;
  immagine.loading = "lazy";

  /* Se il file non c'è, al suo posto una nota leggibile. */
  immagine.addEventListener("error", function () {
    cornice.textContent = "";
    const avviso = document.createElement("p");
    avviso.className = "opera-mancante";
    avviso.textContent = "Immagine non ancora presente in " +
      CARTELLA_IMMAGINI + operaDelGiorno.file +
      ". Lo script strumenti/scarica-immagini.sh la recupera da Wikimedia Commons.";
    cornice.appendChild(avviso);
  });

  cornice.appendChild(immagine);
  componiDidascalia(operaDelGiorno);
}

mostraOperaDelGiorno();
