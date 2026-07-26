/* ===========================================================
   AD DIEM — logica di base
   Countdown, frase del giorno, quiz del giorno.
   Il colloquio con l'ospite sta in colloquio.js.
   =========================================================== */

/* Indice stabile del giorno: serve a far comparire la stessa
   frase, lo stesso quiz e lo stesso ospite a chiunque apra la
   pagina nello stesso giorno. Niente caso, niente memoria. */
function giorniAssoluti(data) {
  return Math.floor(data.getTime() / 86400000);
}

const INDICE_OGGI = giorniAssoluti(new Date());

function numeroRomano(num) {
  const valori = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
  ];
  let risultato = "";
  let n = num;
  for (const [valore, simbolo] of valori) {
    while (n >= valore) {
      risultato += simbolo;
      n -= valore;
    }
  }
  return risultato;
}

/* ---------- countdown ---------- */

function aggiornaCountdown() {
  const ora = new Date();
  const diff = DATA_TARGET - ora;
  const elGiorni = document.getElementById("giorni");
  const elRomano = document.getElementById("numero-romano");
  const elDettaglio = document.getElementById("dettaglio");

  if (diff <= 0) {
    elGiorni.textContent = "0";
    elRomano.textContent = "";
    elDettaglio.textContent = "Ci siamo!";
    return;
  }

  const giorni = Math.floor(diff / 86400000);
  const ore = Math.floor((diff % 86400000) / 3600000);
  const minuti = Math.floor((diff % 3600000) / 60000);
  const secondi = Math.floor((diff % 60000) / 1000);

  elGiorni.textContent = giorni;
  elRomano.textContent = numeroRomano(giorni);
  elDettaglio.textContent = ore + " ore, " + minuti + " minuti, " + secondi + " secondi";
}

/* ---------- frase del giorno ---------- */

let indiceFraseCorrente = null;

function mostraFrase(frase) {
  document.getElementById("frase-testo").textContent = "“" + frase.testo + "”";
  document.getElementById("frase-autore").textContent = "— " + frase.autore;
}

function impostaFraseDelGiorno() {
  indiceFraseCorrente = INDICE_OGGI % FRASI.length;
  mostraFrase(FRASI[indiceFraseCorrente]);
  document.getElementById("frase-eyebrow").textContent = "Frase del giorno";
}

function sorprendimi() {
  if (FRASI.length <= 1) return;
  let indice;
  do {
    indice = Math.floor(Math.random() * FRASI.length);
  } while (indice === indiceFraseCorrente);
  indiceFraseCorrente = indice;
  mostraFrase(FRASI[indice]);
  document.getElementById("frase-eyebrow").textContent = "Frase a sorpresa";
}

/* ---------- quiz del giorno ---------- */

function impostaQuizDelGiorno() {
  const quiz = QUIZ[INDICE_OGGI % QUIZ.length];
  document.getElementById("quiz-domanda").textContent = quiz.domanda;

  const contenitore = document.getElementById("quiz-opzioni");
  contenitore.textContent = "";

  quiz.opzioni.forEach(function (testoOpzione, i) {
    const bottone = document.createElement("button");
    bottone.type = "button";
    bottone.className = "quiz-opzione";
    bottone.textContent = testoOpzione;
    bottone.addEventListener("click", function () {
      gestisciRispostaQuiz(i, quiz, contenitore);
    });
    contenitore.appendChild(bottone);
  });

  document.getElementById("quiz-feedback").textContent = "";
}

function gestisciRispostaQuiz(indiceScelto, quiz, contenitore) {
  const bottoni = contenitore.querySelectorAll(".quiz-opzione");
  bottoni.forEach(function (b) { b.disabled = true; });

  if (indiceScelto === quiz.corretta) {
    bottoni[indiceScelto].classList.add("corretta");
  } else {
    bottoni[indiceScelto].classList.add("sbagliata");
    bottoni[quiz.corretta].classList.add("corretta");
  }
  document.getElementById("quiz-feedback").textContent = quiz.spiegazione;
}

/* ---------- avvio ---------- */

document.getElementById("data-odierna").textContent =
  new Date().toLocaleDateString("it-IT", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });

impostaFraseDelGiorno();
impostaQuizDelGiorno();
aggiornaCountdown();
setInterval(aggiornaCountdown, 1000);

document.getElementById("btn-sorprendimi").addEventListener("click", sorprendimi);
