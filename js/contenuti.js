/* ===========================================================
   AD DIEM — contenuti
   Questo è l'unico file da toccare per aggiungere o correggere
   frasi, domande e ospiti. Nessuna logica qui dentro.
   =========================================================== */

const DATA_TARGET = new Date("2027-09-01T00:00:00");

/* ---------- frasi ---------- */

const FRASI = [
  { testo: "Inquietum est cor nostrum donec requiescat in te.", autore: "Sant'Agostino, Confessioni I,1" },
  { testo: "L'educazione è cosa del cuore.", autore: "San Giovanni Bosco" },
  { testo: "Non scholae sed vitae discimus.", autore: "Motto scolastico (capovolge una frase di Seneca — vedi il quiz)" },
  { testo: "Ignoranti quem portum petat, nullus suus ventus est.", autore: "Seneca, Lettere a Lucilio, 71" },
  { testo: "Conosci te stesso.", autore: "Massima delfica, ripresa da Socrate" },
  { testo: "La vita non esaminata non è degna di essere vissuta.", autore: "Socrate, in Platone, Apologia 38a" },
  { testo: "Dilige et quod vis fac.", autore: "Sant'Agostino, In Ep. Ioannis, VII,8" },
  { testo: "La virtù sta nel giusto mezzo.", autore: "Aristotele, Etica Nicomachea" },
  { testo: "Fides quaerens intellectum.", autore: "Sant'Anselmo d'Aosta" },
  { testo: "Non è mai troppo tardi per imparare.", autore: "Massima classica" }
];

/* ---------- quiz ---------- */

const QUIZ = [
  {
    domanda: "Chi scrisse le “Confessioni”?",
    opzioni: ["Sant'Agostino", "San Girolamo", "Origene", "San Tommaso d'Aquino"],
    corretta: 0,
    spiegazione: "Le Confessioni (397-400 d.C. circa) sono uno dei testi autobiografici più letti della storia occidentale."
  },
  {
    domanda: "In che anno si aprì il Concilio di Trento?",
    opzioni: ["1517", "1545", "1600", "1648"],
    corretta: 1,
    spiegazione: "Il Concilio di Trento si aprì nel 1545 e si chiuse, tra varie interruzioni, nel 1563."
  },
  {
    domanda: "Chi fu proclamato “patrono di tutti gli educatori” da Pio XII nel 1950?",
    opzioni: ["San Giovanni Bosco", "San Giovanni Battista de La Salle", "San Filippo Neri", "San Carlo Borromeo"],
    corretta: 1,
    spiegazione: "San Giovanni Battista de La Salle, fondatore dei Fratelli delle Scuole Cristiane, è il patrono ufficiale degli educatori."
  },
  {
    domanda: "Quale scuola filosofica fondò Zenone di Cizio?",
    opzioni: ["Lo Scetticismo", "Lo Stoicismo", "L'Epicureismo", "Il Neoplatonismo"],
    corretta: 1,
    spiegazione: "Zenone fondò la Stoa ad Atene intorno al 300 a.C., dando origine allo Stoicismo."
  },
  {
    domanda: "Chi scrisse la “Summa Theologiae”?",
    opzioni: ["San Bonaventura", "Duns Scoto", "San Tommaso d'Aquino", "Sant'Alberto Magno"],
    corretta: 2,
    spiegazione: "San Tommaso d'Aquino la scrisse tra il 1265 e il 1274, restando incompiuta."
  },
  {
    domanda: "Cosa scriveva davvero Seneca nell'Epistula 106, poi capovolto nel motto moderno?",
    opzioni: [
      "“Non scholae sed vitae discimus”",
      "“Carpe diem”",
      "“Non vitae sed scholae discimus”",
      "“Vita brevis, ars longa”"
    ],
    corretta: 2,
    spiegazione: "Seneca lamentava che si studiasse per la scuola e non per la vita: il motto oggi diffuso ribalta il suo senso originale."
  },
  {
    domanda: "In quale opera si trova l'incipit sull'inquietudine del cuore?",
    opzioni: ["La città di Dio", "Confessioni", "De Trinitate", "De Doctrina Christiana"],
    corretta: 1,
    spiegazione: "È l'apertura delle Confessioni (I,1), scritte da Sant'Agostino."
  }
];

/* ---------- ospiti del colloquio ----------
   ATTENZIONE: qui c'è solo ciò che serve a disegnare la pagina.
   Le istruzioni date al modello (il "carattere" di ogni ospite)
   stanno SOLO nel proxy Apps Script, lato server: se stessero qui
   chiunque potrebbe riscriverle e usare la tua chiave API per
   farsi rispondere qualunque cosa.
   L'id deve coincidere con quello in proxy/Codice.gs.
   ------------------------------------------------------------ */

const OSPITI = [
  {
    id: "agostino",
    nome: "Agostino d'Ippona",
    epoca: "354 – 430",
    presentazione: "Retore convertito, vescovo, autore delle Confessioni. Parla volentieri di memoria, tempo, desiderio e inquietudine."
  },
  {
    id: "seneca",
    nome: "Lucio Anneo Seneca",
    epoca: "4 a.C. – 65 d.C.",
    presentazione: "Stoico, precettore e poi vittima di Nerone. Sul tempo che ci sfugge e su come spenderlo ha scritto pagine difficili da dimenticare."
  },
  {
    id: "socrate",
    nome: "Socrate",
    epoca: "470 – 399 a.C.",
    presentazione: "Non ha lasciato nulla di scritto. Risponde quasi sempre con un'altra domanda: è il suo mestiere, non un difetto."
  },
  {
    id: "tommaso",
    nome: "Tommaso d'Aquino",
    epoca: "1225 – 1274",
    presentazione: "Domenicano, maestro a Parigi. Procede per obiezioni e distinzioni: chiedigli qualcosa di contorto e sarà a suo agio."
  },
  {
    id: "marcoaurelio",
    nome: "Marco Aurelio",
    epoca: "121 – 180",
    presentazione: "Imperatore che scriveva appunti a sé stesso, di notte, in greco, senza intenzione di pubblicarli."
  },
  {
    id: "anselmo",
    nome: "Anselmo d'Aosta",
    epoca: "1033 – 1109",
    presentazione: "Monaco e arcivescovo di Canterbury. La fede che cerca di capire sé stessa: fides quaerens intellectum."
  },
  {
    id: "boezio",
    nome: "Severino Boezio",
    epoca: "477 – 524",
    presentazione: "Scrisse la Consolazione della Filosofia in carcere, in attesa dell'esecuzione. Sulla fortuna che gira, sa il fatto suo."
  }
];
