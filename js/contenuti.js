/* ===========================================================
   AD DIEM — contenuti
   Questo è l'unico file da toccare per aggiungere o correggere
   frasi, domande e ospiti. Nessuna logica qui dentro.
   =========================================================== */

const DATA_TARGET = new Date("2027-09-01T00:00:00");

/* ---------- frasi ---------- */

const FRASI = [
  /* --- Padri e martiri --- */
  { testo: "Inquietum est cor nostrum donec requiescat in te.", autore: "Agostino, Confessioni I,1" },
  { testo: "Tardi ti ho amato, bellezza tanto antica e tanto nuova.", autore: "Agostino, Confessioni X,27" },
  { testo: "Dilige et quod vis fac.", autore: "Agostino, Commento alla Prima lettera di Giovanni VII,8" },
  { testo: "I tempi sono come siamo noi.", autore: "Agostino, Discorso 80,8" },
  { testo: "Cantare è proprio di chi ama.", autore: "Agostino, Discorso 336" },
  { testo: "Sono frumento di Dio, e vengo macinato dai denti delle fiere.", autore: "Ignazio di Antiochia, Ai Romani 4" },
  { testo: "Dove è Gesù Cristo, là è la Chiesa cattolica.", autore: "Ignazio di Antiochia, Agli Smirnesi 8,2 — prima attestazione dell'aggettivo" },
  { testo: "Non posso chiamarmi con altro nome che quello che sono: cristiana.", autore: "Perpetua, Passio Perpetuae 3" },
  { testo: "Anche il Padre patisce: soffre un patire d'amore.", autore: "Origene, Omelie su Ezechiele 6,6" },
  { testo: "Cristiani si diventa, non si nasce.", autore: "Tertulliano, Apologetico 18" },
  { testo: "La gloria di Dio è l'uomo vivente.", autore: "Ireneo di Lione, Contro le eresie IV,20,7" },
  { testo: "Ubi Petrus, ibi Ecclesia.", autore: "Attribuito ad Ambrogio, Commento al Salmo 40" },
  { testo: "Quando sono a Roma digiuno di sabato, quando sono qui non digiuno.", autore: "Ambrogio a Monica, riferito da Agostino, Lettera 54 — l'origine del proverbio" },
  { testo: "Non onorare Cristo con vesti di seta e poi lasciarlo fuori, nudo e infreddolito.", autore: "Giovanni Crisostomo, Omelie su Matteo 50" },
  { testo: "Ignorare le Scritture è ignorare Cristo.", autore: "Girolamo, prologo al Commento a Isaia" },
  { testo: "La Scrittura cresce insieme a chi la legge.", autore: "Gregorio Magno, Commento morale a Giobbe XX,1" },

  /* --- Monaci, mistici, dottori --- */
  { testo: "Ascolta, figlio, e inclina l'orecchio del tuo cuore.", autore: "Benedetto da Norcia, Regola, Prologo" },
  { testo: "Perché in ogni cosa sia glorificato Dio.", autore: "Benedetto da Norcia, Regola 57" },
  { testo: "Fides quaerens intellectum.", autore: "Anselmo d'Aosta, Proslogion" },
  { testo: "Non cerco di capire per credere, ma credo per capire.", autore: "Anselmo d'Aosta, Proslogion 1" },
  { testo: "O nobilissima viriditas, che affondi le radici nel sole.", autore: "Ildegarda di Bingen, Symphonia" },
  { testo: "Laudato si', mi' Signore, cum tucte le Tue creature.", autore: "Francesco d'Assisi, Cantico delle creature" },
  { testo: "La grazia non sopprime la natura, ma la porta a compimento.", autore: "Tommaso d'Aquino, Summa Theologiae I, q.1, a.8" },
  { testo: "Temo l'uomo di un solo libro.", autore: "Tradizionalmente attribuito a Tommaso d'Aquino; non se ne conosce la fonte diretta" },
  { testo: "Se sarete quello che dovete essere, metterete fuoco in tutta Italia.", autore: "Caterina da Siena, Lettera 368" },
  { testo: "Nulla ti turbi, nulla ti spaventi: solo Dio basta.", autore: "Teresa d'Ávila, poesia trovata nel suo breviario" },
  { testo: "Anche tra le pentole cammina il Signore.", autore: "Teresa d'Ávila, Fondazioni 5" },
  { testo: "Alla sera della vita saremo giudicati sull'amore.", autore: "Giovanni della Croce, Avvisi" },

  /* --- Riforma ed età moderna --- */
  { testo: "Qui sto, non posso fare altrimenti.", autore: "Martin Lutero a Worms, 1521 — le parole esatte sono discusse dagli storici" },
  { testo: "Il cuore ha le sue ragioni, che la ragione non conosce.", autore: "Blaise Pascal, Pensieri 423" },
  { testo: "L'uomo è una canna, la più debole della natura; ma è una canna che pensa.", autore: "Blaise Pascal, Pensieri 200" },
  { testo: "Tutta l'infelicità degli uomini viene da una cosa sola: non saper restare in una stanza.", autore: "Blaise Pascal, Pensieri 136" },
  { testo: "Vivere è cambiare, ed essere perfetti è aver cambiato spesso.", autore: "John Henry Newman, Sullo sviluppo della dottrina cristiana" },
  { testo: "Cor ad cor loquitur.", autore: "Motto cardinalizio di Newman, ripreso da Francesco di Sales" },

  /* --- Novecento --- */
  { testo: "Chi cerca la verità cerca Dio, che ne sia consapevole o no.", autore: "Edith Stein" },
  { testo: "La grazia a buon mercato è il nemico mortale della nostra Chiesa.", autore: "Dietrich Bonhoeffer, Sequela" },
  { testo: "Quando Cristo chiama un uomo, gli ordina di venire e di morire.", autore: "Dietrich Bonhoeffer, Sequela" },
  { testo: "Il cristiano del futuro o sarà un mistico, o non sarà affatto.", autore: "Karl Rahner, Scritti di teologia" },
  { testo: "La liturgia è, davanti a Dio, un gioco: ha senso, non scopo.", autore: "Romano Guardini, Lo spirito della liturgia" },
  { testo: "Non siamo il prodotto casuale e senza senso dell'evoluzione.", autore: "Joseph Ratzinger, omelia del 24 aprile 2005" },
  { testo: "L'attenzione assolutamente pura è preghiera.", autore: "Simone Weil, Attesa di Dio" },
  { testo: "La vita si comprende all'indietro, ma si vive in avanti.", autore: "Søren Kierkegaard, Diari" },

  /* --- Filosofia antica --- */
  { testo: "Se c'è un Dio, da dove viene il male? E da dove il bene, se non c'è?", autore: "Boezio, Consolazione della Filosofia I,4" },
  { testo: "Conosci te stesso.", autore: "Massima delfica, ripresa da Socrate" },
  { testo: "La vita non esaminata non è degna di essere vissuta.", autore: "Socrate, in Platone, Apologia 38a" },
  { testo: "La virtù sta nel giusto mezzo.", autore: "Aristotele, Etica Nicomachea II" },
  { testo: "Ignoranti quem portum petat, nullus suus ventus est.", autore: "Seneca, Lettere a Lucilio 71" },

  /* --- Sull'insegnare --- */
  { testo: "Gli uomini imparano mentre insegnano.", autore: "Seneca, Lettere a Lucilio 7,8" },
  { testo: "Non scholae sed vitae discimus.", autore: "Motto scolastico che capovolge Seneca, Lettere a Lucilio 106,12" },
  { testo: "La mente non è un vaso da riempire, ma un fuoco da accendere.", autore: "Parafrasi corrente di Plutarco, L'arte di ascoltare 48c" },
  { testo: "Nei più piccoli lo studio sia un gioco.", autore: "Quintiliano, Istituzione oratoria I,1,20" },
  { testo: "Non basta istruire la mente: dovete toccare i cuori.", autore: "Giovanni Battista de La Salle, Meditazioni 43" },
  { testo: "L'educazione è cosa del cuore.", autore: "Giovanni Bosco" }
];

/* ---------- quiz ----------
   Sono otto di proposito: gli ospiti sono ventuno, e 21 e 8 non
   hanno divisori in comune. Così i due cicli si sfasano e le
   combinazioni ospite-domanda sono 168 prima di ripetersi.
   Se aggiungi domande, evita di arrivare a un numero che condivida
   divisori con 21 (cioè 3, 7, 14, 21…), o le coppie si irrigidiscono.
   ------------------------------------------------------------ */

const QUIZ = [
  /* ============ ANTICHITÀ CRISTIANA ============ */
  {
    domanda: "Chi scrisse le “Confessioni”?",
    opzioni: ["Agostino", "Girolamo", "Origene", "Tommaso d'Aquino"],
    corretta: 0,
    spiegazione: "Composte fra il 397 e il 400 circa, sono uno dei testi autobiografici più letti della storia occidentale."
  },
  {
    domanda: "In quale opera si trova l'incipit sull'inquietudine del cuore?",
    opzioni: ["La città di Dio", "Confessioni", "De Trinitate", "La dottrina cristiana"],
    corretta: 1,
    spiegazione: "È l'apertura delle Confessioni (I,1): «ci hai fatti per te, e il nostro cuore è inquieto finché non riposa in te»."
  },
  {
    domanda: "Quale evento del 410 spinse Agostino a scrivere “La città di Dio”?",
    opzioni: ["La caduta di Cartagine", "La morte di Costantino", "Il sacco di Roma dei Visigoti", "Il concilio di Efeso"],
    corretta: 2,
    spiegazione: "Dopo il sacco di Alarico molti accusarono i cristiani del crollo di Roma. Agostino rispose con un'opera durata tredici anni."
  },
  {
    domanda: "Chi battezzò Agostino nel 387?",
    opzioni: ["Girolamo", "Monica", "Simpliciano", "Ambrogio"],
    corretta: 3,
    spiegazione: "Ambrogio lo battezzò a Milano nella notte di Pasqua. Erano state le sue prediche a smontare le obiezioni di Agostino alla Bibbia."
  },
  {
    domanda: "Come si chiamava la madre di Agostino?",
    opzioni: ["Monica", "Felicita", "Elena", "Perpetua"],
    corretta: 0,
    spiegazione: "Monica lo seguì fino a Milano e morì a Ostia poco dopo la conversione del figlio."
  },
  {
    domanda: "Chi tradusse la Bibbia in latino nella versione detta Vulgata?",
    opzioni: ["Ambrogio", "Girolamo", "Agostino", "Gregorio Magno"],
    corretta: 1,
    spiegazione: "Girolamo vi lavorò per oltre vent'anni a Betlemme, traducendo l'Antico Testamento direttamente dall'ebraico."
  },
  {
    domanda: "Quale vescovo impose una penitenza pubblica all'imperatore Teodosio?",
    opzioni: ["Basilio di Cesarea", "Leone Magno", "Ambrogio di Milano", "Atanasio di Alessandria"],
    corretta: 2,
    spiegazione: "Dopo la strage di Tessalonica del 390, Ambrogio gli negò la comunione finché non ebbe fatto penitenza. Teodosio cedette."
  },
  {
    domanda: "Perché Giovanni di Costantinopoli fu soprannominato “Crisostomo”?",
    opzioni: ["Per un miracolo con l'oro", "Per il colore dei capelli", "Per le vesti dorate", "Per l'eloquenza, “bocca d'oro”"],
    corretta: 3,
    spiegazione: "Il soprannome greco significa bocca d'oro e gli fu dato per la potenza della sua predicazione."
  },
  {
    domanda: "Chi scrisse un diario dal carcere prima di essere uccisa nell'anfiteatro di Cartagine nel 203?",
    opzioni: ["Perpetua", "Lucia", "Agnese", "Cecilia"],
    corretta: 0,
    spiegazione: "La Passio Perpetuae conserva la sua voce in prima persona: una delle pochissime scritture femminili giunte intatte dall'antichità."
  },
  {
    domanda: "Chi si definì “frumento di Dio” mentre veniva condotto al martirio a Roma?",
    opzioni: ["Policarpo di Smirne", "Ignazio di Antiochia", "Clemente Romano", "Giustino"],
    corretta: 1,
    spiegazione: "Lo scrisse nella lettera ai Romani, supplicandoli di non intercedere per salvarlo."
  },
  {
    domanda: "In quale scritto compare per la prima volta l'espressione “Chiesa cattolica”?",
    opzioni: ["Negli Atti degli Apostoli", "Nella Didaché", "In una lettera di Ignazio di Antiochia", "Nel Pastore di Erma"],
    corretta: 2,
    spiegazione: "Nella Lettera agli Smirnesi (8,2), all'inizio del II secolo: cattolica vale universale."
  },
  {
    domanda: "Chi fu il grande maestro della scuola di Alessandria condannato tre secoli dopo la morte?",
    opzioni: ["Atanasio", "Cirillo", "Clemente Alessandrino", "Origene"],
    corretta: 3,
    spiegazione: "Alcune tesi di Origene furono condannate nel 553, al secondo concilio di Costantinopoli."
  },
  {
    domanda: "Chi scrisse “La gloria di Dio è l'uomo vivente”?",
    opzioni: ["Ireneo di Lione", "Tertulliano", "Cipriano", "Atanasio"],
    corretta: 0,
    spiegazione: "Si trova nel Contro le eresie (IV,20,7), scritto verso il 180 contro le dottrine gnostiche."
  },
  {
    domanda: "Chi affermò che “cristiani si diventa, non si nasce”?",
    opzioni: ["Origene", "Tertulliano", "Giustino", "Ambrogio"],
    corretta: 1,
    spiegazione: "È nell'Apologetico (18) di Tertulliano, cartaginese, primo grande autore cristiano di lingua latina."
  },
  {
    domanda: "Quale editto del 313 concesse libertà di culto ai cristiani?",
    opzioni: ["L'editto di Nicea", "L'editto di Costantinopoli", "L'editto di Milano", "L'editto di Tessalonica"],
    corretta: 2,
    spiegazione: "Costantino e Licinio posero fine alle persecuzioni. Il cristianesimo diventerà religione di Stato solo nel 380."
  },
  {
    domanda: "Con quale provvedimento il cristianesimo divenne religione ufficiale dell'impero?",
    opzioni: ["Il concilio di Nicea, 325", "La Donazione di Costantino", "L'editto di Milano, 313", "L'editto di Tessalonica, 380"],
    corretta: 3,
    spiegazione: "Fu Teodosio, con l'editto di Tessalonica del 380. La confusione con l'editto di Milano è frequentissima."
  },

  /* ============ CONCILI ============ */
  {
    domanda: "In che anno si tenne il primo concilio di Nicea?",
    opzioni: ["325", "381", "451", "313"],
    corretta: 0,
    spiegazione: "Convocato da Costantino, affrontò la crisi ariana e produsse il nucleo del Credo."
  },
  {
    domanda: "Quale dottrina fu condannata a Nicea nel 325?",
    opzioni: ["Il pelagianesimo", "L'arianesimo", "Il nestorianesimo", "Il monofisismo"],
    corretta: 1,
    spiegazione: "Ario sosteneva che il Figlio fosse creato e non eterno. Il concilio rispose col termine “consostanziale”."
  },
  {
    domanda: "Quale concilio del 451 definì le due nature di Cristo?",
    opzioni: ["Nicea II", "Efeso", "Calcedonia", "Costantinopoli I"],
    corretta: 2,
    spiegazione: "Calcedonia formulò l'unione delle nature divina e umana “senza confusione né separazione”."
  },
  {
    domanda: "Quale concilio del 431 proclamò Maria “Theotókos”, madre di Dio?",
    opzioni: ["Calcedonia", "Nicea", "Cartagine", "Efeso"],
    corretta: 3,
    spiegazione: "Il concilio di Efeso lo definì contro Nestorio, che preferiva il titolo di madre di Cristo."
  },
  {
    domanda: "Su cosa verteva la disputa risolta al secondo concilio di Nicea, nel 787?",
    opzioni: ["Il culto delle immagini", "La data della Pasqua", "Il primato di Roma", "Il celibato dei preti"],
    corretta: 0,
    spiegazione: "Il concilio pose fine alla prima fase iconoclasta, distinguendo la venerazione delle icone dall'adorazione dovuta a Dio."
  },
  {
    domanda: "In che anno si aprì il concilio di Trento?",
    opzioni: ["1517", "1545", "1600", "1648"],
    corretta: 1,
    spiegazione: "Si aprì nel 1545 e si chiuse nel 1563, dopo lunghe interruzioni e tre distinti periodi di lavoro."
  },
  {
    domanda: "Quale istituzione nacque dal concilio di Trento per formare il clero?",
    opzioni: ["Lo studium generale", "L'università", "Il seminario", "Il noviziato"],
    corretta: 2,
    spiegazione: "Il decreto del 1563 obbligò ogni diocesi ad aprire un seminario: fu una delle riforme di maggiore effetto pratico."
  },
  {
    domanda: "Quale concilio definì il dogma dell'infallibilità pontificia?",
    opzioni: ["Vaticano II", "Lateranense IV", "Trento", "Vaticano I"],
    corretta: 3,
    spiegazione: "Il Vaticano I lo definì nel 1870, con precisi limiti: solo quando il papa parla ex cathedra su fede e morale."
  },
  {
    domanda: "Chi convocò il concilio Vaticano II?",
    opzioni: ["Giovanni XXIII", "Paolo VI", "Giovanni Paolo II", "Pio XII"],
    corretta: 0,
    spiegazione: "Giovanni XXIII lo annunciò nel 1959 e lo aprì l'11 ottobre 1962. Morì l'anno dopo; a chiuderlo fu Paolo VI."
  },
  {
    domanda: "In quale anno si chiuse il concilio Vaticano II?",
    opzioni: ["1963", "1965", "1968", "1962"],
    corretta: 1,
    spiegazione: "Si chiuse l'8 dicembre 1965, dopo quattro sessioni e sedici documenti approvati."
  },
  {
    domanda: "Quale documento del Vaticano II tratta della Chiesa?",
    opzioni: ["Sacrosanctum Concilium", "Dei Verbum", "Lumen Gentium", "Gaudium et Spes"],
    corretta: 2,
    spiegazione: "Lumen Gentium è la costituzione dogmatica sulla Chiesa. Dei Verbum riguarda la rivelazione, Sacrosanctum Concilium la liturgia."
  },
  {
    domanda: "Quale documento conciliare riguarda le religioni non cristiane?",
    opzioni: ["Dignitatis Humanae", "Unitatis Redintegratio", "Ad Gentes", "Nostra Aetate"],
    corretta: 3,
    spiegazione: "Nostra Aetate (1965) segnò una svolta nel rapporto con l'ebraismo e con le altre religioni."
  },

  /* ============ MONACHESIMO E MEDIOEVO ============ */
  {
    domanda: "Con quale parola si apre la Regola di san Benedetto?",
    opzioni: ["“Ascolta”", "“Lavora”", "“Taci”", "“Prega”"],
    corretta: 0,
    spiegazione: "«Obsculta, o fili»: ascolta, figlio, e inclina l'orecchio del cuore. L'ascolto viene prima di tutto il resto."
  },
  {
    domanda: "Il motto “ora et labora” si trova nella Regola di san Benedetto?",
    opzioni: ["Sì, nel capitolo 48", "No, è una sintesi molto posteriore", "Sì, ma solo in alcuni codici", "Sì, nel prologo"],
    corretta: 1,
    spiegazione: "Nella Regola non compare: è una formula riassuntiva diffusasi nell'Ottocento. Il contenuto però riflette bene il testo."
  },
  {
    domanda: "Quale abbazia fondò Benedetto da Norcia intorno al 529?",
    opzioni: ["Bobbio", "Cluny", "Montecassino", "Subiaco"],
    corretta: 2,
    spiegazione: "A Subiaco era vissuto prima come eremita; a Montecassino fondò il monastero e scrisse la Regola."
  },
  {
    domanda: "Chi scrisse la “Consolazione della Filosofia” in carcere, in attesa dell'esecuzione?",
    opzioni: ["Cassiodoro", "Isidoro di Siviglia", "Beda", "Boezio"],
    corretta: 3,
    spiegazione: "Boezio la scrisse verso il 524 mentre attendeva la condanna di Teodorico. Fu uno dei libri più letti del Medioevo."
  },
  {
    domanda: "In che anno si consumò la rottura fra Roma e Costantinopoli?",
    opzioni: ["1054", "1204", "1378", "1453"],
    corretta: 0,
    spiegazione: "Nel 1054 le scomuniche reciproche fra il cardinale Umberto e il patriarca Michele Cerulario sancirono una frattura già maturata."
  },
  {
    domanda: "Quale espressione latina riassume il metodo di Anselmo d'Aosta?",
    opzioni: ["Credo quia absurdum", "Fides quaerens intellectum", "Cogito ergo sum", "Sola Scriptura"],
    corretta: 1,
    spiegazione: "La fede che cerca di capire: si crede per comprendere, non si comprende per credere."
  },
  {
    domanda: "In quale opera Anselmo espone la cosiddetta prova ontologica?",
    opzioni: ["De veritate", "Monologion", "Proslogion", "Cur Deus homo"],
    corretta: 2,
    spiegazione: "Nel Proslogion (1078): Dio come ciò di cui non si può pensare nulla di maggiore. Il monaco Gaunilone obiettò subito."
  },
  {
    domanda: "Chi fu proclamata dottore della Chiesa nel 2012, insieme a Giovanni d'Ávila?",
    opzioni: ["Caterina da Siena", "Teresa d'Ávila", "Edith Stein", "Ildegarda di Bingen"],
    corretta: 3,
    spiegazione: "Benedetto XVI proclamò Ildegarda dottore della Chiesa il 7 ottobre 2012, poche settimane dopo averla iscritta fra i santi."
  },
  {
    domanda: "Di che cosa si occupano i trattati “Physica” e “Causae et curae” di Ildegarda?",
    opzioni: ["Di medicina e scienze naturali", "Di diritto canonico", "Di esegesi biblica", "Di liturgia"],
    corretta: 0,
    spiegazione: "Ildegarda scrisse di erbe, pietre, animali e rimedi: una badessa che praticava anche la medicina."
  },
  {
    domanda: "Quale parola usa Ildegarda per il vigore verde che percorre le creature?",
    opzioni: ["Caritas", "Viriditas", "Claritas", "Humilitas"],
    corretta: 1,
    spiegazione: "Viriditas, dal latino viridis: è una delle sue immagini più originali, fra teologia e osservazione naturale."
  },
  {
    domanda: "In quale lingua e forma Francesco d'Assisi compose il “Cantico delle creature”?",
    opzioni: ["In provenzale", "In latino, in esametri", "In volgare umbro", "In greco"],
    corretta: 2,
    spiegazione: "È uno dei primi testi poetici in volgare italiano, composto attorno al 1224."
  },
  {
    domanda: "Chi incontrò il sultano al-Malik al-Kamil durante la quinta crociata?",
    opzioni: ["Bernardo di Chiaravalle", "Antonio da Padova", "Domenico di Guzmán", "Francesco d'Assisi"],
    corretta: 3,
    spiegazione: "Francesco attraversò le linee a Damietta nel 1219 e fu ricevuto dal sultano. Tornò vivo, cosa tutt'altro che scontata."
  },
  {
    domanda: "Quale ordine fondò Domenico di Guzmán?",
    opzioni: ["I domenicani", "I carmelitani", "I cistercensi", "I francescani"],
    corretta: 0,
    spiegazione: "L'Ordine dei Predicatori, approvato nel 1216, nato per contrastare l'eresia catara con la predicazione e lo studio."
  },
  {
    domanda: "Chi scrisse la “Summa Theologiae”?",
    opzioni: ["Duns Scoto", "Tommaso d'Aquino", "Alberto Magno", "Bonaventura"],
    corretta: 1,
    spiegazione: "Vi lavorò dal 1265 al 1274 e la lasciò incompiuta: smise di scrivere pochi mesi prima di morire."
  },
  {
    domanda: "Come chiama Tommaso d'Aquino le cinque argomentazioni sull'esistenza di Dio?",
    opzioni: ["Le cinque tesi", "Le cinque prove", "Le quinque viae", "I cinque assiomi"],
    corretta: 2,
    spiegazione: "Le “cinque vie” della Summa: moto, causa, contingenza, gradi di perfezione, ordine del mondo."
  },
  {
    domanda: "Chi fu il maestro di Tommaso d'Aquino a Colonia e a Parigi?",
    opzioni: ["Bonaventura", "Sigieri di Brabante", "Abelardo", "Alberto Magno"],
    corretta: 3,
    spiegazione: "Alberto Magno, che difese il giovane Tommaso dai compagni che lo chiamavano “bue muto”."
  },
  {
    domanda: "Quale filosofo antico Tommaso chiama semplicemente “il Filosofo”?",
    opzioni: ["Aristotele", "Plotino", "Cicerone", "Platone"],
    corretta: 0,
    spiegazione: "Aristotele, riscoperto in Occidente nel XII secolo attraverso le traduzioni dall'arabo e dal greco."
  },
  {
    domanda: "Dove risiedettero i papi fra il 1309 e il 1377?",
    opzioni: ["A Ravenna", "Ad Avignone", "A Napoli", "A Costanza"],
    corretta: 1,
    spiegazione: "La cosiddetta cattività avignonese. Caterina da Siena fu tra chi premette perché Gregorio XI tornasse a Roma."
  },
  {
    domanda: "Come si rivolgeva Caterina da Siena al papa nelle sue lettere?",
    opzioni: ["“Servo dei servi”", "“Santissimo Padre”", "“Babbo mio dolce”", "“Illustrissimo Signore”"],
    corretta: 2,
    spiegazione: "Tenerezza e rimprovero insieme: nella stessa lettera lo chiamava così e gli intimava di essere “uomo virile”."
  },
  {
    domanda: "Quale concilio pose fine allo scisma d'Occidente, quando c'erano tre papi?",
    opzioni: ["Basilea", "Ferrara-Firenze", "Lateranense V", "Costanza"],
    corretta: 3,
    spiegazione: "Il concilio di Costanza (1414-1418) chiuse una crisi durata quarant'anni ed elesse Martino V."
  },

  /* ============ RIFORMA ED ETÀ MODERNA ============ */
  {
    domanda: "In che anno Lutero rese pubbliche le 95 tesi?",
    opzioni: ["1517", "1545", "1555", "1492"],
    corretta: 0,
    spiegazione: "Nel 1517, a Wittenberg. Riguardavano le indulgenze, non l'intero edificio dottrinale: la rottura venne dopo."
  },
  {
    domanda: "Che cosa contestavano direttamente le 95 tesi?",
    opzioni: ["Il celibato del clero", "La pratica delle indulgenze", "Il culto dei santi", "La lingua latina della messa"],
    corretta: 1,
    spiegazione: "Il bersaglio era la predicazione delle indulgenze per la basilica di San Pietro. Da lì la discussione si allargò."
  },
  {
    domanda: "Quali sono i tre “sola” della Riforma protestante?",
    opzioni: ["Sola lex, sola gratia, solus Deus", "Sola Scriptura, sola traditio, sola ratio", "Sola fide, sola gratia, sola Scriptura", "Sola fide, sola spes, sola caritas"],
    corretta: 2,
    spiegazione: "Sono una formula riassuntiva coniata dopo Lutero, non una sua espressione letterale, ma ne condensa bene il pensiero."
  },
  {
    domanda: "Che cosa fece Lutero durante il ritiro forzato alla Wartburg?",
    opzioni: ["Compose i corali", "Redasse la Confessione augustana", "Scrisse le 95 tesi", "Tradusse il Nuovo Testamento in tedesco"],
    corretta: 3,
    spiegazione: "Vi tradusse il Nuovo Testamento in undici settimane. Quella lingua influenzò profondamente il tedesco moderno."
  },
  {
    domanda: "Chi guidò la Riforma a Ginevra?",
    opzioni: ["Giovanni Calvino", "Filippo Melantone", "Martin Bucero", "Ulrico Zwingli"],
    corretta: 0,
    spiegazione: "Calvino vi organizzò una città-chiesa e scrisse l'Istituzione della religione cristiana."
  },
  {
    domanda: "Quale ordine fondò Ignazio di Loyola?",
    opzioni: ["I teatini", "La Compagnia di Gesù", "Gli oratoriani", "I barnabiti"],
    corretta: 1,
    spiegazione: "Approvata nel 1540, si distinse per istruzione, missioni e un quarto voto di obbedienza al papa."
  },
  {
    domanda: "Quale gesuita operò alla corte imperiale cinese fra Cinque e Seicento?",
    opzioni: ["Pietro Canisio", "Francesco Saverio", "Matteo Ricci", "Roberto Bellarmino"],
    corretta: 2,
    spiegazione: "Matteo Ricci imparò cinese, vestì da letterato e cercò un incontro fra cristianesimo e cultura confuciana."
  },
  {
    domanda: "Chi denunciò il trattamento degli indigeni americani nella “Brevissima relazione della distruzione delle Indie”?",
    opzioni: ["Francisco de Vitoria", "Junípero Serra", "Antonio de Montesinos", "Bartolomé de Las Casas"],
    corretta: 3,
    spiegazione: "Domenicano, prima colono e poi loro difensore: il suo scritto del 1552 ebbe enorme eco in Europa."
  },
  {
    domanda: "Con chi collaborò Teresa d'Ávila alla riforma del Carmelo?",
    opzioni: ["Giovanni della Croce", "Filippo Neri", "Pietro d'Alcántara", "Ignazio di Loyola"],
    corretta: 0,
    spiegazione: "Giovanni della Croce guidò il ramo maschile della riforma e ne pagò il prezzo con il carcere."
  },
  {
    domanda: "Chi furono le prime due donne proclamate dottore della Chiesa, nel 1970?",
    opzioni: ["Ildegarda e Caterina", "Teresa d'Ávila e Caterina da Siena", "Teresa di Lisieux e Edith Stein", "Chiara e Ildegarda"],
    corretta: 1,
    spiegazione: "Paolo VI proclamò Teresa d'Ávila il 27 settembre e Caterina da Siena una settimana dopo."
  },
  {
    domanda: "In quale opera Pascal formula la celebre “scommessa”?",
    opzioni: ["Le Lettere", "Le Provinciali", "I Pensieri", "Il trattato sul vuoto"],
    corretta: 2,
    spiegazione: "Nei Pensieri, raccolta di frammenti pubblicata dopo la sua morte per un'apologia mai terminata."
  },
  {
    domanda: "Quale scoperta scientifica costò a Galileo la condanna del 1633?",
    opzioni: ["La teoria atomica", "Il calcolo infinitesimale", "La legge di gravitazione", "La difesa del sistema copernicano"],
    corretta: 3,
    spiegazione: "Fu condannato per aver sostenuto il moto della Terra nel Dialogo sopra i due massimi sistemi."
  },
  {
    domanda: "La frase “Eppur si muove” fu davvero pronunciata da Galileo?",
    opzioni: ["No, compare solo un secolo dopo", "Sì, l'ha scritta nel Dialogo", "Sì, davanti al tribunale", "Sì, ma in privato"],
    corretta: 0,
    spiegazione: "La prima attestazione è del 1757, oltre un secolo dopo il processo. È una leggenda ben costruita."
  },

  /* ============ OTTOCENTO E NOVECENTO ============ */
  {
    domanda: "In quale anno Newman passò dall'anglicanesimo al cattolicesimo?",
    opzioni: ["1833", "1845", "1864", "1879"],
    corretta: 1,
    spiegazione: "Nel 1845, dopo anni di studio sui Padri. Perse amicizie, posizione accademica e parte della famiglia."
  },
  {
    domanda: "Quale enciclica del 1891 aprì la dottrina sociale della Chiesa?",
    opzioni: ["Pacem in Terris", "Populorum Progressio", "Rerum Novarum", "Quadragesimo Anno"],
    corretta: 2,
    spiegazione: "Leone XIII affrontò la questione operaia: salario giusto, diritto di associazione, critica sia al liberismo sia al socialismo."
  },
  {
    domanda: "Chi fu proclamato “patrono di tutti gli educatori” da Pio XII nel 1950?",
    opzioni: ["Filippo Neri", "Giuseppe Calasanzio", "Giovanni Bosco", "Giovanni Battista de La Salle"],
    corretta: 3,
    spiegazione: "Fondatore dei Fratelli delle Scuole Cristiane, promosse l'insegnamento in lingua volgare e la formazione dei maestri."
  },
  {
    domanda: "Quale metodo educativo è legato a don Bosco?",
    opzioni: ["Il sistema preventivo", "Il metodo globale", "Il sistema mutuo", "Il metodo repressivo"],
    corretta: 0,
    spiegazione: "Ragione, religione e amorevolezza: prevenire invece di punire, stando in mezzo ai ragazzi."
  },
  {
    domanda: "Di chi fu assistente Edith Stein prima della conversione?",
    opzioni: ["Martin Heidegger", "Edmund Husserl", "Max Scheler", "Karl Jaspers"],
    corretta: 1,
    spiegazione: "Fu assistente di Husserl a Friburgo e curò l'edizione di suoi manoscritti. La sua tesi riguardava l'empatia."
  },
  {
    domanda: "Perché Edith Stein fu deportata ad Auschwitz nel 1942?",
    opzioni: ["Per i suoi scritti filosofici", "Per la sua attività politica", "In quanto ebrea", "Per aver nascosto perseguitati"],
    corretta: 2,
    spiegazione: "Fu arrestata in Olanda insieme ad altri ebrei battezzati, per rappresaglia contro i vescovi olandesi che avevano protestato."
  },
  {
    domanda: "Quale teologo luterano fu impiccato a Flossenbürg nell'aprile 1945?",
    opzioni: ["Rudolf Bultmann", "Martin Niemöller", "Karl Barth", "Dietrich Bonhoeffer"],
    corretta: 3,
    spiegazione: "Bonhoeffer fu giustiziato il 9 aprile 1945, poche settimane prima della resa tedesca, per il coinvolgimento nella cospirazione contro Hitler."
  },
  {
    domanda: "Quale espressione di Bonhoeffer denuncia una fede che non costa nulla?",
    opzioni: ["“Grazia a buon mercato”", "“Religione civile”", "“Cristianesimo anonimo”", "“Fede implicita”"],
    corretta: 0,
    spiegazione: "Apre la Sequela: la grazia a buon mercato è predicazione del perdono senza conversione, comunione senza confessione."
  },
  {
    domanda: "A quale teologo si deve l'espressione “cristiano anonimo”?",
    opzioni: ["Hans Urs von Balthasar", "Karl Rahner", "Yves Congar", "Henri de Lubac"],
    corretta: 1,
    spiegazione: "Rahner la usò per indicare chi accoglie la grazia senza riconoscerla come cristiana. È fra le sue tesi più discusse."
  },
  {
    domanda: "Quale arcivescovo fu ucciso mentre celebrava messa a San Salvador nel 1980?",
    opzioni: ["Juan Gerardi", "Enrique Angelelli", "Óscar Romero", "Hélder Câmara"],
    corretta: 2,
    spiegazione: "Romero fu colpito il 24 marzo 1980, il giorno dopo aver chiesto ai soldati di non obbedire all'ordine di uccidere."
  },
  {
    domanda: "Quale frate offrì la propria vita al posto di un padre di famiglia ad Auschwitz?",
    opzioni: ["Titus Brandsma", "Bernhard Lichtenberg", "Giuseppe Girotti", "Massimiliano Kolbe"],
    corretta: 3,
    spiegazione: "Kolbe si offrì al posto di Franciszek Gajowniczek nel 1941. Gajowniczek sopravvisse e fu presente alla canonizzazione."
  },
  {
    domanda: "Chi fu il primo papa a rinunciare al ministero dopo quasi sei secoli?",
    opzioni: ["Benedetto XVI", "Paolo VI", "Pio XII", "Giovanni Paolo I"],
    corretta: 0,
    spiegazione: "Benedetto XVI annunciò la rinuncia l'11 febbraio 2013. Il precedente più simile era Gregorio XII, nel 1415."
  },

  /* ============ FILOSOFIA ANTICA ============ */
  {
    domanda: "Quale principio originario indicò Talete di Mileto?",
    opzioni: ["L'aria", "L'acqua", "Il fuoco", "L'apeiron"],
    corretta: 1,
    spiegazione: "Talete individuò nell'acqua l'archè. Anassimene disse l'aria, Eraclito il fuoco, Anassimandro l'apeiron, l'indefinito."
  },
  {
    domanda: "A chi si deve la formula “tutto scorre”?",
    opzioni: ["Democrito", "Parmenide", "Eraclito", "Empedocle"],
    corretta: 2,
    spiegazione: "Eraclito di Efeso, il filosofo del divenire e della guerra come padre di tutte le cose."
  },
  {
    domanda: "Quale filosofo sostenne che l'essere è e il non essere non è?",
    opzioni: ["Zenone di Cizio", "Anassagora", "Eraclito", "Parmenide"],
    corretta: 3,
    spiegazione: "Parmenide di Elea, avversario speculare di Eraclito: l'essere è immobile, uno, ingenerato."
  },
  {
    domanda: "Chi teorizzò per primo che la realtà è composta di atomi e vuoto?",
    opzioni: ["Democrito", "Anassagora", "Pitagora", "Empedocle"],
    corretta: 0,
    spiegazione: "Democrito, riprendendo Leucippo. Duemila anni prima che la fisica moderna recuperasse quel nome."
  },
  {
    domanda: "Come morì Socrate nel 399 a.C.?",
    opzioni: ["In battaglia", "Bevendo la cicuta", "In esilio", "Assassinato"],
    corretta: 1,
    spiegazione: "Condannato per empietà e corruzione dei giovani, rifiutò la fuga che gli amici gli avevano organizzato."
  },
  {
    domanda: "Quante opere scrisse Socrate?",
    opzioni: ["Una raccolta di lettere", "Un trattato sull'anima", "Nessuna", "Solo i dialoghi giovanili"],
    corretta: 2,
    spiegazione: "Nulla. Lo conosciamo attraverso Platone, Senofonte e Aristofane, che ne danno ritratti anche molto diversi."
  },
  {
    domanda: "Come si chiama il metodo socratico che aiuta a “partorire” le idee?",
    opzioni: ["Retorica", "Ermeneutica", "Dialettica", "Maieutica"],
    corretta: 3,
    spiegazione: "Dal mestiere della madre, levatrice: Socrate non insegna verità, aiuta l'interlocutore a tirarle fuori."
  },
  {
    domanda: "Quale scuola fondò Platone ad Atene?",
    opzioni: ["L'Accademia", "La Stoa", "Il Giardino", "Il Liceo"],
    corretta: 0,
    spiegazione: "L'Accademia, attorno al 387 a.C. Il Liceo è di Aristotele, la Stoa di Zenone, il Giardino di Epicuro."
  },
  {
    domanda: "In quale opera di Platone si trova il mito della caverna?",
    opzioni: ["Il Simposio", "La Repubblica", "Il Fedone", "Il Timeo"],
    corretta: 1,
    spiegazione: "All'inizio del libro VII della Repubblica: prigionieri che scambiano le ombre per la realtà."
  },
  {
    domanda: "Di chi fu precettore Aristotele?",
    opzioni: ["Pericle", "Filippo il Macedone", "Alessandro Magno", "Tolomeo"],
    corretta: 2,
    spiegazione: "Fu chiamato alla corte macedone per educare il futuro conquistatore, allora tredicenne."
  },
  {
    domanda: "Quale scuola filosofica fondò Zenone di Cizio?",
    opzioni: ["L'epicureismo", "Il cinismo", "Lo scetticismo", "Lo stoicismo"],
    corretta: 3,
    spiegazione: "Insegnava sotto un portico dipinto, la Stoà Poikìle, ad Atene attorno al 300 a.C."
  },
  {
    domanda: "Che cosa indicano gli stoici con “atarassia” e “apatia”?",
    opzioni: ["L'imperturbabilità dell'animo", "L'assenza di pensiero", "Il piacere moderato", "L'indifferenza morale"],
    corretta: 0,
    spiegazione: "Non insensibilità, ma libertà dal turbamento delle passioni. Distinguevano ciò che dipende da noi da ciò che non dipende."
  },
  {
    domanda: "Chi scrisse i “Ricordi”, appunti personali mai destinati alla pubblicazione?",
    opzioni: ["Epitteto", "Marco Aurelio", "Cicerone", "Seneca"],
    corretta: 1,
    spiegazione: "L'imperatore li scrisse in greco, per sé stesso, durante le campagne militari sul Danubio."
  },
  {
    domanda: "Che cosa scriveva davvero Seneca, poi capovolto nel motto scolastico moderno?",
    opzioni: ["“Non scholae sed vitae discimus”", "“Carpe diem”", "“Non vitae sed scholae discimus”", "“Vita brevis, ars longa”"],
    corretta: 2,
    spiegazione: "Nell'epistola 106 lamentava che si studiasse per la scuola e non per la vita. Il motto diffuso ne rovescia il senso."
  },
  {
    domanda: "Chi fu il maestro stoico nato schiavo?",
    opzioni: ["Panezio", "Crisippo", "Seneca", "Epitteto"],
    corretta: 3,
    spiegazione: "Epitteto, liberto e zoppo, insegnò che la libertà sta nel giudizio, non nelle condizioni esterne."
  },
  {
    domanda: "Chi scrisse le “Enneadi”, testo fondamentale del neoplatonismo?",
    opzioni: ["Plotino", "Porfirio", "Giamblico", "Proclo"],
    corretta: 0,
    spiegazione: "Plotino le dettò; fu il discepolo Porfirio a ordinarle in sei gruppi di nove trattati, da cui il nome."
  },

  /* ============ FILOSOFIA MEDIEVALE E MODERNA ============ */
  {
    domanda: "Su che cosa verteva la disputa medievale sugli universali?",
    opzioni: ["Sull'esistenza di Dio", "Sullo statuto dei concetti generali", "Sull'immortalità dell'anima", "Sul libero arbitrio"],
    corretta: 1,
    spiegazione: "I concetti come “uomo” o “albero” esistono nella realtà, solo nella mente, o solo come nomi? Realismo contro nominalismo."
  },
  {
    domanda: "Il famoso “rasoio” si trova formulato letteralmente nelle opere di Guglielmo di Ockham?",
    opzioni: ["Sì, nel Commento alle Sentenze", "Sì, nella Summa logicae", "No, la formula corrente è posteriore", "Sì, ma solo in latino volgare"],
    corretta: 2,
    spiegazione: "Ockham usa principi di economia, ma la formula “entia non sunt multiplicanda” è di autori successivi."
  },
  {
    domanda: "Quale filosofo medievale è ricordato per la corrispondenza con Eloisa?",
    opzioni: ["Bernardo di Chiaravalle", "Ugo di San Vittore", "Pietro Lombardo", "Pietro Abelardo"],
    corretta: 3,
    spiegazione: "Abelardo, logico brillante e maestro conteso, il cui “Sic et non” insegnava a mettere a confronto autorità discordanti."
  },
  {
    domanda: "Quale medico e filosofo andaluso fu il grande commentatore di Aristotele per il Medioevo latino?",
    opzioni: ["Averroè", "Al-Farabi", "Maimonide", "Avicenna"],
    corretta: 0,
    spiegazione: "Averroè (Ibn Rushd) era chiamato semplicemente “il Commentatore”, come Aristotele era “il Filosofo”."
  },
  {
    domanda: "In quale opera del 1637 compare “penso, dunque sono”?",
    opzioni: ["Le Meditazioni metafisiche", "Il Discorso sul metodo", "I Principi di filosofia", "Le Regole per la guida dell'ingegno"],
    corretta: 1,
    spiegazione: "Nel Discorso sul metodo, scritto in francese e non in latino, perché fosse leggibile da tutti."
  },
  {
    domanda: "Quale opera di Kant, pubblicata nel 1781, apre la filosofia critica?",
    opzioni: ["Prolegomeni", "Critica della ragion pratica", "Critica della ragion pura", "Critica del Giudizio"],
    corretta: 2,
    spiegazione: "La prima delle tre Critiche. Kant vi chiede non che cosa sia il mondo, ma che cosa possiamo conoscerne."
  },
  {
    domanda: "Quali due cose, secondo Kant, riempiono l'animo di ammirazione sempre nuova?",
    opzioni: ["La natura e la storia", "La ragione e la fede", "La bellezza e la verità", "Il cielo stellato e la legge morale"],
    corretta: 3,
    spiegazione: "È la conclusione della Critica della ragion pratica: il cielo stellato sopra di me, la legge morale dentro di me."
  },
  {
    domanda: "Quale filosofo danese riflette sul sacrificio di Isacco in “Timore e tremore”?",
    opzioni: ["Søren Kierkegaard", "Nikolaj Grundtvig", "Harald Høffding", "Knud Løgstrup"],
    corretta: 0,
    spiegazione: "Kierkegaard vi descrive Abramo come “cavaliere della fede”, sospeso oltre le categorie dell'etica."
  },
  {
    domanda: "Quale movimento filosofico fondò Edmund Husserl?",
    opzioni: ["L'esistenzialismo", "La fenomenologia", "Il neopositivismo", "Lo strutturalismo"],
    corretta: 1,
    spiegazione: "Il suo motto era “alle cose stesse”: descrivere i fenomeni come si danno alla coscienza, prima di spiegarli."
  },
  {
    domanda: "Chi pubblicò “Essere e tempo” nel 1927?",
    opzioni: ["Hans-Georg Gadamer", "Karl Jaspers", "Martin Heidegger", "Max Scheler"],
    corretta: 2,
    spiegazione: "Heidegger, allievo di Husserl. L'opera restò incompiuta rispetto al piano annunciato."
  },
  {
    domanda: "Quale filosofa francese scrisse che l'attenzione pura è preghiera?",
    opzioni: ["Hannah Arendt", "Edith Stein", "Simone de Beauvoir", "Simone Weil"],
    corretta: 3,
    spiegazione: "Simone Weil, che lavorò in fabbrica per condividerne la condizione e restò sulla soglia del battesimo."
  },

  /* ============ BIBBIA E LITURGIA ============ */
  {
    domanda: "In quali lingue fu scritto originariamente l'Antico Testamento?",
    opzioni: ["Ebraico e aramaico, con parti in greco", "Solo in greco", "Ebraico e latino", "Solo in ebraico"],
    corretta: 0,
    spiegazione: "Prevalentemente ebraico, con sezioni in aramaico e alcuni libri deuterocanonici composti in greco."
  },
  {
    domanda: "Come si chiama l'antica traduzione greca dell'Antico Testamento?",
    opzioni: ["La Vulgata", "La Settanta", "La Peshitta", "Il Targum"],
    corretta: 1,
    spiegazione: "La Settanta (LXX), realizzata ad Alessandria dal III secolo a.C. È la Bibbia usata dai primi cristiani."
  },
  {
    domanda: "Quanti sono i vangeli detti sinottici?",
    opzioni: ["Sette", "Due", "Tre", "Quattro"],
    corretta: 2,
    spiegazione: "Matteo, Marco e Luca: si possono leggere “con un solo sguardo”, affiancati in colonne parallele. Giovanni segue un'altra via."
  },
  {
    domanda: "Quale vangelo è considerato dagli studiosi il più antico?",
    opzioni: ["Luca", "Giovanni", "Matteo", "Marco"],
    corretta: 3,
    spiegazione: "Marco, il più breve e scarno, databile attorno al 70. Matteo e Luca sembrano averlo usato come fonte."
  },
  {
    domanda: "Che cosa sono i manoscritti di Qumran, scoperti dal 1947?",
    opzioni: ["Testi biblici e settari ebraici", "Lettere di Paolo", "Codici medievali", "Vangeli apocrifi"],
    corretta: 0,
    spiegazione: "Trovati presso il Mar Morto, hanno retrodatato di mille anni i più antichi testimoni del testo ebraico della Bibbia."
  },
  {
    domanda: "Quali sono i colori liturgici dell'Avvento e della Quaresima?",
    opzioni: ["Bianco", "Viola", "Verde", "Rosso"],
    corretta: 1,
    spiegazione: "Il viola segna i tempi di attesa e penitenza. Il verde è del tempo ordinario, il rosso di martiri e Pentecoste."
  },
  {
    domanda: "Come si determina la data della Pasqua cristiana?",
    opzioni: ["Quaranta giorni dopo l'equinozio", "È fissa al 25 marzo", "Domenica dopo il primo plenilunio di primavera", "Prima domenica di aprile"],
    corretta: 2,
    spiegazione: "La regola fu fissata a Nicea nel 325. Il calendario diverso spiega perché gli ortodossi la celebrino spesso in altra data."
  },
  {
    domanda: "Che cosa raccoglie la Liturgia delle Ore, o breviario?",
    opzioni: ["I canti gregoriani", "Le vite dei santi", "Le letture della messa", "La preghiera quotidiana scandita nella giornata"],
    corretta: 3,
    spiegazione: "Lodi, Ora media, Vespri, Compieta e Ufficio delle letture: la giornata scandita da salmi e letture."
  },

  /* ============ MITI DA SFATARE ============ */
  {
    domanda: "Nel Medioevo si credeva comunemente che la Terra fosse piatta?",
    opzioni: ["No, la sfericità era data per acquisita", "Solo nei monasteri", "Sì, fino a Galileo", "Sì, fino a Colombo"],
    corretta: 0,
    spiegazione: "La sfericità terrestre era nota fin dai Greci e mai contestata da Tommaso, Dante o Beda. Il mito nasce nell'Ottocento."
  },
  {
    domanda: "La frase “credo quia absurdum” si trova negli scritti di Tertulliano?",
    opzioni: ["Sì, nel De carne Christi", "No, è una parafrasi posteriore", "Sì, nelle lettere", "Sì, nell'Apologetico"],
    corretta: 1,
    spiegazione: "Tertulliano scrive qualcosa di simile ma non queste parole. La formula corrente è una semplificazione moderna."
  },
  {
    domanda: "Quanti sono i Re Magi secondo il vangelo di Matteo?",
    opzioni: ["Tre", "Dodici", "Il numero non è indicato", "Sette"],
    corretta: 2,
    spiegazione: "Matteo non ne dice il numero né i nomi: il tre deriva dai tre doni. Nomi e corone sono aggiunte della tradizione."
  },
  {
    domanda: "Il frutto proibito della Genesi è identificato come una mela?",
    opzioni: ["Sì, ma solo in ebraico", "Sì, nel libro dei Giubilei", "Sì, esplicitamente", "No, il testo non lo specifica"],
    corretta: 3,
    spiegazione: "La Genesi dice solo “frutto”. La mela nasce da un gioco di parole latino fra malum, male, e malum, mela."
  },
  {
    domanda: "L'espressione “Roma locuta, causa finita” è una citazione letterale di Agostino?",
    opzioni: ["No, è una sintesi posteriore di un suo passo", "Sì, dalle Ritrattazioni", "Sì, dai Discorsi", "Sì, dalle Lettere"],
    corretta: 0,
    spiegazione: "Nel Discorso 131 Agostino dice qualcosa di affine, ma la formula lapidaria che circola non è sua."
  },

  /* ============ SULL'INSEGNARE ============ */
  {
    domanda: "Quale autore latino scrisse che nei più piccoli lo studio dev'essere un gioco?",
    opzioni: ["Cicerone", "Quintiliano", "Seneca", "Plinio il Giovane"],
    corretta: 1,
    spiegazione: "Nell'Istituzione oratoria (I,1,20). Quintiliano fu il primo insegnante stipendiato dallo Stato romano."
  },
  {
    domanda: "A chi risale la frase “gli uomini imparano mentre insegnano”?",
    opzioni: ["Agostino", "Quintiliano", "Seneca", "Cicerone"],
    corretta: 2,
    spiegazione: "Seneca, nella settima lettera a Lucilio: «homines dum docent discunt»."
  },
  {
    domanda: "Che cosa sono il trivio e il quadrivio?",
    opzioni: ["Due vie di pellegrinaggio", "Due metodi di preghiera", "Due ordini religiosi", "Le sette arti liberali medievali"],
    corretta: 3,
    spiegazione: "Trivio: grammatica, retorica, dialettica. Quadrivio: aritmetica, geometria, musica, astronomia."
  },
  {
    domanda: "In quale secolo nacquero le prime università europee?",
    opzioni: ["XI-XII secolo", "XIV secolo", "XVI secolo", "IX secolo"],
    corretta: 0,
    spiegazione: "Bologna attorno al 1088, poi Parigi e Oxford: corporazioni di maestri e studenti, da cui il nome universitas."
  },
  {
    domanda: "Che cos'era la “disputatio” nell'insegnamento medievale?",
    opzioni: ["Un esame finale", "Un esercizio pubblico di argomentazione contrapposta", "Una lite fra ordini religiosi", "Una lettura commentata"],
    corretta: 1,
    spiegazione: "Si esponeva una tesi, si raccoglievano le obiezioni e si rispondeva. La Summa di Tommaso ne conserva la struttura."
  },
  {
    domanda: "Quale opera di Newman raccoglie le sue riflessioni sull'università?",
    opzioni: ["Lo sviluppo della dottrina", "Apologia pro vita sua", "L'idea di università", "Grammatica dell'assenso"],
    corretta: 2,
    spiegazione: "Nata da conferenze dublinesi del 1852: l'università forma l'intelligenza in quanto tale, non solo il professionista."
  },
  {
    domanda: "In quale anno è ambientato il viaggio della Divina Commedia?",
    opzioni: ["1321", "1348", "1265", "1300"],
    corretta: 3,
    spiegazione: "Nella settimana santa del 1300, anno del primo giubileo. Dante lo scriverà negli anni successivi, in esilio."
  },
  {
    domanda: "Quali fratelli evangelizzarono i popoli slavi creando un alfabeto per la loro lingua?",
    opzioni: ["Cirillo e Metodio", "Basilio e Gregorio", "Benedetto e Scolastica", "Cosma e Damiano"],
    corretta: 0,
    spiegazione: "Nel IX secolo tradussero la liturgia in slavo, contro chi ammetteva solo ebraico, greco e latino. Giovanni Paolo II li fece compatroni d'Europa."
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
    presentazione: "Assistente di Husserl, ebrea, atea, poi carmelitana. Deportata ad Auschwitz proprio in quanto ebrea, nonostante il velo."
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
