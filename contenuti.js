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

/* ---------- quiz ----------
   Sono otto di proposito: gli ospiti sono ventuno, e 21 e 8 non
   hanno divisori in comune. Così i due cicli si sfasano e le
   combinazioni ospite-domanda sono 168 prima di ripetersi.
   Se aggiungi domande, evita di arrivare a un numero che condivida
   divisori con 21 (cioè 3, 7, 14, 21…), o le coppie si irrigidiscono.
   ------------------------------------------------------------ */

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
  },
  {
    domanda: "Chi fu proclamata dottore della Chiesa nel 2012, insieme a Giovanni d'Ávila?",
    opzioni: ["Ildegarda di Bingen", "Caterina da Siena", "Teresa d'Ávila", "Edith Stein"],
    corretta: 0,
    spiegazione: "Benedetto XVI proclamò Ildegarda di Bingen dottore della Chiesa il 7 ottobre 2012, poche settimane dopo averla iscritta al catalogo dei santi."
  }
];

/* ---------- ospiti del colloquio ----------
   ATTENZIONE: qui c'è solo ciò che serve a disegnare la pagina.
   Le istruzioni date al modello (il "carattere" di ogni ospite)
   stanno SOLO nel proxy Apps Script, lato server: se stessero qui
   chiunque potrebbe riscriverle e usare la tua chiave API per
   farsi rispondere qualunque cosa.
   L'id deve coincidere con quello in proxy/Codice.gs.

   Ordine cronologico di nascita: la rotazione percorre i secoli
   in fila, dal sub-apostolico a ieri.
   ------------------------------------------------------------ */

const OSPITI = [
  {
    id: "ignazio",
    nome: "Ignazio di Antiochia",
    epoca: "c. 35 – c. 107",
    presentazione: "Vescovo condotto a Roma per essere giustiziato. Le sue sette lettere le scrisse durante quel viaggio, sapendo come sarebbe finito."
  },
  {
    id: "perpetua",
    nome: "Perpetua",
    epoca: "c. 181 – 203",
    presentazione: "Giovane madre cartaginese, uccisa nell'anfiteatro a ventidue anni. Il suo diario dal carcere è una delle pochissime voci femminili giunte intatte dall'antichità."
  },
  {
    id: "origene",
    nome: "Origene",
    epoca: "c. 185 – c. 254",
    presentazione: "Alessandrino, il primo a costruire una teologia sistematica. Tre secoli dopo la morte alcune sue tesi furono condannate: geniale e scomodo insieme."
  },
  {
    id: "ambrogio",
    nome: "Ambrogio",
    epoca: "339 – 397",
    presentazione: "Governatore acclamato vescovo di Milano quando non era ancora battezzato. Impose una penitenza pubblica all'imperatore Teodosio, e la spuntò."
  },
  {
    id: "crisostomo",
    nome: "Giovanni Crisostomo",
    epoca: "c. 349 – 407",
    presentazione: "“Bocca d'oro”, il più grande predicatore greco. Disse in faccia alla corte imperiale cosa pensava del lusso, e morì in esilio."
  },
  {
    id: "agostino",
    nome: "Agostino d'Ippona",
    epoca: "354 – 430",
    presentazione: "Retore convertito, vescovo, autore delle Confessioni. Parla volentieri di memoria, tempo, desiderio e inquietudine."
  },
  {
    id: "benedetto",
    nome: "Benedetto da Norcia",
    epoca: "c. 480 – 547",
    presentazione: "Scrisse una Regola breve e senza slanci, pensata per gente comune. Su quella misura si è organizzata buona parte dell'Europa."
  },
  {
    id: "anselmo",
    nome: "Anselmo d'Aosta",
    epoca: "1033 – 1109",
    presentazione: "Monaco e arcivescovo di Canterbury. La fede che cerca di capire sé stessa: fides quaerens intellectum."
  },
  {
    id: "ildegarda",
    nome: "Ildegarda di Bingen",
    epoca: "1098 – 1179",
    presentazione: "Badessa, visionaria, compositrice, e per giunta autrice di trattati di medicina. Dottore della Chiesa dal 2012."
  },
  {
    id: "francesco",
    nome: "Francesco d'Assisi",
    epoca: "1181 – 1226",
    presentazione: "Figlio di mercante che restituì al padre perfino i vestiti. Chiamava fratelli il sole, la morte e i lupi."
  },
  {
    id: "tommaso",
    nome: "Tommaso d'Aquino",
    epoca: "1225 – 1274",
    presentazione: "Domenicano, maestro a Parigi. Procede per obiezioni e distinzioni: chiedigli qualcosa di contorto e sarà a suo agio."
  },
  {
    id: "caterina",
    nome: "Caterina da Siena",
    epoca: "1347 – 1380",
    presentazione: "Terziaria domenicana senza studi regolari. Dettava lettere al papa chiamandolo “babbo mio dolce” e intimandogli di tornare a Roma."
  },
  {
    id: "lutero",
    nome: "Martin Lutero",
    epoca: "1483 – 1546",
    presentazione: "Monaco agostiniano e professore di Bibbia. Da una disputa sulle indulgenze nacque una frattura che dura ancora."
  },
  {
    id: "teresa",
    nome: "Teresa d'Ávila",
    epoca: "1515 – 1582",
    presentazione: "Mistica e fondatrice instancabile, con una prosa spiritosa e nessuna pazienza per la devozione sdolcinata."
  },
  {
    id: "pascal",
    nome: "Blaise Pascal",
    epoca: "1623 – 1662",
    presentazione: "Matematico di prim'ordine e apologeta per frammenti. Portava cucita nella giacca la nota di una notte di fuoco."
  },
  {
    id: "newman",
    nome: "John Henry Newman",
    epoca: "1801 – 1890",
    presentazione: "Anglicano di Oxford passato a Roma nel 1845, pagandola con amicizie e carriera. Sullo sviluppo del dogma e sulla coscienza ha scritto pagine decisive."
  },
  {
    id: "guardini",
    nome: "Romano Guardini",
    epoca: "1885 – 1968",
    presentazione: "Italiano di nascita, tedesco di formazione. Liturgia, modernità ed educazione: maestro di una generazione intera."
  },
  {
    id: "stein",
    nome: "Edith Stein",
    epoca: "1891 – 1942",
    presentazione: "Assistente di Husserl, ebrea, atea, poi carmelitana. Deportata ad Auschwitz proprio in quanto ebrea, non nonostante il velo."
  },
  {
    id: "rahner",
    nome: "Karl Rahner",
    epoca: "1904 – 1984",
    presentazione: "Gesuita, il teologo più influente del Novecento cattolico. Parte sempre dall'uomo per arrivare al mistero."
  },
  {
    id: "bonhoeffer",
    nome: "Dietrich Bonhoeffer",
    epoca: "1906 – 1945",
    presentazione: "Pastore luterano impiccato a Flossenbürg poche settimane prima della fine della guerra. Sulla “grazia a caro prezzo” non faceva sconti."
  },
  {
    id: "ratzinger",
    nome: "Joseph Ratzinger",
    epoca: "1927 – 2022",
    presentazione: "Professore, perito conciliare, prefetto, papa, e infine il primo in sei secoli a rinunciare. Scrive con una chiarezza rara."
  }
];
