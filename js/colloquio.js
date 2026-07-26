/* ===========================================================
   AD DIEM — colloquio con l'ospite del giorno
   -----------------------------------------------------------
   La pagina NON contiene (e non deve contenere) la chiave API.
   Parla con un proxy Apps Script che tiene la chiave lato server
   e decide lui il carattere dell'ospite. Vedi proxy/Codice.gs.
   =========================================================== */

const CONFIG_COLLOQUIO = {
  /* Incolla qui l'URL /exec della web app Apps Script, dopo il deploy.
     Finché resta vuoto la sezione si presenta spenta, senza rompersi. */
  urlProxy: "https://script.google.com/macros/s/AKfycbydd1Xu7a5S3db7eVqSJE8VcaCVUz0IDjFnDiqQzDZtb2Z3X1E7bc5yyPZeL3nUe7g1qA/exec",

  /* Quante domande può fare un visitatore in una visita. Serve a te,
     non a lui: ogni scambio consuma token della tua chiave. */
  maxScambi: 6,

  lunghezzaMassimaDomanda: 400
};

const ospiteDelGiorno = OSPITI[INDICE_OGGI % OSPITI.length];

/* Cronologia inviata al proxy a ogni richiesta: il modello non ha
   memoria fra una chiamata e l'altra, il filo lo teniamo noi. */
const cronologia = [];
let scambiUsati = 0;
let richiestaInCorso = false;

const elDialogo = document.getElementById("dialogo");
const elCampo = document.getElementById("campo-domanda");
const elBottone = document.getElementById("btn-chiedi");
const elContatore = document.getElementById("contatore-scambi");

/* ---------- disegno del dialogo ----------
   Tutto il testo entra con textContent, mai con innerHTML:
   quello che torna dal modello è contenuto non fidato come
   qualunque altro input. */

function aggiungiRiga(tipo, testo) {
  const riga = document.createElement("div");
  riga.className = "riga-dialogo riga-dialogo--" + tipo;

  const sigla = document.createElement("div");
  sigla.className = "sigla";
  /* ℣ = versetto (chi domanda) · ℞ = responsorio (chi risponde) */
  if (tipo === "domanda") {
    sigla.textContent = "℣";
  } else if (tipo === "errore") {
    sigla.textContent = "!";
  } else {
    sigla.textContent = "℞";
  }
  sigla.setAttribute("aria-hidden", "true");

  const paragrafo = document.createElement("p");
  paragrafo.className = "testo-dialogo";
  paragrafo.textContent = testo;

  riga.appendChild(sigla);
  riga.appendChild(paragrafo);
  elDialogo.appendChild(riga);
  return riga;
}

function aggiornaContatore() {
  const rimasti = CONFIG_COLLOQUIO.maxScambi - scambiUsati;
  if (rimasti <= 0) {
    elContatore.textContent = "Colloquio concluso. Ricarica la pagina per ricominciare.";
  } else if (rimasti === 1) {
    elContatore.textContent = "Ancora una domanda.";
  } else {
    elContatore.textContent = "Ancora " + rimasti + " domande.";
  }
}

function bloccaComposizione(motivo) {
  elCampo.disabled = true;
  elBottone.disabled = true;
  if (motivo) elContatore.textContent = motivo;
}

/* ---------- chiamata al proxy ---------- */

async function interroga(testoDomanda) {
  const risposta = await fetch(CONFIG_COLLOQUIO.urlProxy, {
    method: "POST",
    /* text/plain di proposito: evita il preflight OPTIONS, che le
       web app Apps Script non gestiscono. Il corpo resta JSON e
       arriva integro in e.postData.contents. */
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      ospite: ospiteDelGiorno.id,
      messaggi: cronologia.concat([{ ruolo: "utente", testo: testoDomanda }])
    })
  });

  if (!risposta.ok) {
    throw new Error("Il proxy ha risposto con codice " + risposta.status + ".");
  }

  const dati = await risposta.json();
  if (!dati.ok) {
    throw new Error(dati.errore || "Il proxy ha rifiutato la richiesta.");
  }
  return dati.testo;
}

/* ---------- invio di una domanda ---------- */

async function chiedi() {
  if (richiestaInCorso) return;

  const testoDomanda = elCampo.value.trim();
  if (!testoDomanda) {
    elCampo.focus();
    return;
  }
  if (testoDomanda.length > CONFIG_COLLOQUIO.lunghezzaMassimaDomanda) {
    aggiungiRiga("errore", "Domanda troppo lunga: stai sotto i " +
      CONFIG_COLLOQUIO.lunghezzaMassimaDomanda + " caratteri.");
    return;
  }

  richiestaInCorso = true;
  elCampo.value = "";
  elCampo.disabled = true;
  elBottone.disabled = true;

  aggiungiRiga("domanda", testoDomanda);
  const rigaAttesa = aggiungiRiga("attesa", ospiteDelGiorno.nome + " sta pensando…");

  try {
    const testoRisposta = await interroga(testoDomanda);

    rigaAttesa.remove();
    aggiungiRiga("risposta", testoRisposta);

    cronologia.push({ ruolo: "utente", testo: testoDomanda });
    cronologia.push({ ruolo: "ospite", testo: testoRisposta });

    scambiUsati += 1;
    if (scambiUsati >= CONFIG_COLLOQUIO.maxScambi) {
      bloccaComposizione("Colloquio concluso. Ricarica la pagina per ricominciare.");
    } else {
      elCampo.disabled = false;
      elBottone.disabled = false;
      aggiornaContatore();
      elCampo.focus();
    }
  } catch (errore) {
    rigaAttesa.remove();
    aggiungiRiga("errore", "La domanda non è arrivata a destinazione. " +
      errore.message + " Riprova fra un momento.");
    elCampo.value = testoDomanda;
    elCampo.disabled = false;
    elBottone.disabled = false;
  } finally {
    richiestaInCorso = false;
  }
}

/* ---------- avvio della sezione ---------- */

document.getElementById("ospite-nome").textContent = ospiteDelGiorno.nome;
document.getElementById("ospite-epoca").textContent = ospiteDelGiorno.epoca;
document.getElementById("ospite-presentazione").textContent = ospiteDelGiorno.presentazione;

if (!CONFIG_COLLOQUIO.urlProxy) {
  bloccaComposizione("");
  aggiungiRiga("errore",
    "Il colloquio non è ancora collegato. Serve l'URL della web app Apps Script " +
    "in CONFIG_COLLOQUIO.urlProxy, dentro js/colloquio.js. Le istruzioni sono nel README.");
} else {
  aggiornaContatore();
  elBottone.addEventListener("click", chiedi);
  /* Invio manda la domanda, Maiusc+Invio va a capo. */
  elCampo.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter" && !evento.shiftKey) {
      evento.preventDefault();
      chiedi();
    }
  });
}
