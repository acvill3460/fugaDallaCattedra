/* ===========================================================
   AD DIEM — opera del giorno
   -----------------------------------------------------------
   Ottantacinque opere di tema religioso, dal II secolo al 1938.
   85 = 5 × 17: coprimo con frasi (53), domande (121) e ospiti
   (21), quindi la quaterna non si ripete.

   DIRITTI — due regimi diversi, da non confondere.

   1. Opere antiche, medievali, moderne fino all'Ottocento.
      Nessun problema: l'opera è in pubblico dominio, e dal
      d.lgs. 177/2021 (art. 32-quater della legge sul diritto
      d'autore, che recepisce l'art. 14 della direttiva UE
      2019/790) anche la FOTOGRAFIA fedele di un'opera delle
      arti visive in pubblico dominio è libera da diritto
      d'autore e diritti connessi. Prima non era pacifico.

   2. Opere fra Otto e Novecento. Qui conta ancora l'anno di
      morte dell'autore: 70 anni dalla morte. Nel 2026 sono
      liberi gli artisti morti entro il 1955, e il più recente
      di questo elenco è Kollwitz (1945). Restano fuori Rouault
      (libero dal 2029), Nolde (2027), Chagall (2056), Dalí
      (2060), Manzù (2062).

   Se aggiungi un'opera del Novecento, controlla PRIMA l'anno di
   morte. Se aggiungi un'opera antica, non serve.

   Nota a margine: il Codice dei beni culturali (artt. 107-108)
   regola separatamente la riproduzione di beni culturali
   italiani a fini di lucro. Un sito personale senza scopo di
   lucro non rientra in quel caso.

   Il campo `file` è il nome del file dentro img/.
   Il campo `ricerca` serve a strumenti/scarica-immagini.sh, che
   interroga l'API di Wikimedia Commons, e alla pagina per
   costruire il link alla fonte.
   =========================================================== */

const OPERE = [  /* ============ ARTE PALEOCRISTIANA ============ */
  {
    periodo: "Arte paleocristiana",
    autore: "Anonimo",
    titolo: "Graffito di Alessameno",
    anno: "II-III secolo",
    dove: "Antiquarium del Palatino, Roma",
    nota: "La più antica raffigurazione nota della crocifissione è una presa in giro: un uomo con testa d'asino in croce, e la scritta «Alessameno adora il suo dio». Un compagno di caserma derideva un cristiano, e senza volerlo ci ha lasciato una testimonianza.",
    file: "graffito-alessameno.jpg",
    ricerca: "Alexamenos graffito Palatine Rome"
  },
  {
    periodo: "Arte paleocristiana",
    autore: "Anonimo",
    titolo: "Il Buon Pastore",
    anno: "III secolo",
    dove: "Catacombe di Priscilla, Roma",
    nota: "Un giovane imberbe con la pecora sulle spalle: nei primi secoli Cristo si dipinge così, o come filosofo. La barba e la croce arriveranno molto dopo.",
    file: "priscilla-buon-pastore.jpg",
    ricerca: "Good Shepherd fresco Catacomb Priscilla Rome"
  },
  {
    periodo: "Arte paleocristiana",
    autore: "Anonimo",
    titolo: "Cristo-Sole sul carro",
    anno: "III secolo",
    dove: "Mausoleo M, necropoli vaticana",
    nota: "Cristo raffigurato come Helios sulla quadriga, con la corona di raggi. Il linguaggio è ancora quello del culto solare romano, riempito di un contenuto nuovo.",
    file: "cristo-helios-vaticano.jpg",
    ricerca: "Christ Helios mosaic Mausoleum M Vatican necropolis"
  },
  {
    periodo: "Arte paleocristiana",
    autore: "Anonimo",
    titolo: "Sarcofago di Giunio Basso",
    anno: "359",
    dove: "Museo del Tesoro di San Pietro, Città del Vaticano",
    nota: "Dieci scene bibliche in due registri, scolpite per un prefetto di Roma battezzato in punto di morte. Cristo vi appare giovane e imperiale, seduto sopra la volta del cielo.",
    file: "sarcofago-giunio-basso.jpg",
    ricerca: "Sarcophagus Junius Bassus Vatican"
  },
  {
    periodo: "Arte paleocristiana",
    autore: "Anonimo",
    titolo: "Orante",
    anno: "III-IV secolo",
    dove: "Catacombe di Priscilla, Roma",
    nota: "Una figura in piedi con le braccia aperte: la posizione della preghiera antica, prima che diventasse l'inginocchiarsi con le mani giunte. È rimasta nei gesti del sacerdote alla messa.",
    file: "orante-priscilla.jpg",
    ricerca: "Orans fresco catacomb Priscilla Rome"
  },
  {
    periodo: "Arte paleocristiana",
    autore: "Anonimo",
    titolo: "Cristo in trono fra gli apostoli",
    anno: "402-417",
    dove: "Basilica di Santa Pudenziana, Roma",
    nota: "Il più antico mosaico absidale cristiano di Roma. Cristo siede come un imperatore fra i senatori, con la Gerusalemme celeste alle spalle: il potere imperiale ha appena cambiato padrone.",
    file: "pudenziana-abside.jpg",
    ricerca: "Santa Pudenziana apse mosaic Rome"
  },
  {
    periodo: "Arte paleocristiana",
    autore: "Anonimo",
    titolo: "Simboli: il pesce e l'ancora",
    anno: "II-III secolo",
    dove: "Catacombe di San Callisto, Roma",
    nota: "Ichthýs, pesce in greco, è l'acrostico di «Gesù Cristo Figlio di Dio Salvatore». Quando dipingere una croce era impensabile, si scriveva per enigmi.",
    file: "callisto-simboli.jpg",
    ricerca: "Ichthys fish symbol catacomb Rome early Christian"
  },
  {
    periodo: "Arte paleocristiana",
    autore: "Anonimo",
    titolo: "Il Buon Pastore",
    anno: "425-450 circa",
    dove: "Mausoleo di Galla Placidia, Ravenna",
    nota: "Lo stesso soggetto delle catacombe, due secoli dopo e in mosaico d'oro: il pastore è ora vestito di porpora e oro, seduto fra le pecore come un sovrano in campagna.",
    file: "galla-placidia-pastore.jpg",
    ricerca: "Good Shepherd mosaic Mausoleum Galla Placidia Ravenna"
  },

  /* ============ MOSAICI BIZANTINI ============ */
  {
    periodo: "Mosaico bizantino",
    autore: "Anonimo",
    titolo: "Battesimo di Cristo",
    anno: "450 circa",
    dove: "Battistero Neoniano, Ravenna",
    nota: "Al centro della cupola, sopra la vasca battesimale: chi veniva immerso vedeva sopra di sé la scena che stava ripetendo. Il vecchio col mantello è il fiume Giordano personificato, ereditato dall'arte pagana.",
    file: "battistero-neoniano.jpg",
    ricerca: "Neonian Baptistery dome mosaic Ravenna baptism"
  },
  {
    periodo: "Mosaico bizantino",
    autore: "Anonimo",
    titolo: "Processione delle sante vergini",
    anno: "VI secolo",
    dove: "Sant'Apollinare Nuovo, Ravenna",
    nota: "Ventidue martiri in fila lungo tutta la navata, con le corone in mano. Il ritmo è ipnotico di proposito: si guardava camminando, e la processione dipinta accompagnava quella reale.",
    file: "apollinare-nuovo-vergini.jpg",
    ricerca: "Procession Virgins mosaic Sant'Apollinare Nuovo Ravenna"
  },
  {
    periodo: "Mosaico bizantino",
    autore: "Anonimo",
    titolo: "L'imperatrice Teodora e il suo seguito",
    anno: "547",
    dove: "Basilica di San Vitale, Ravenna",
    nota: "Teodora porta il calice per l'offertorio, coperta di gemme. Non mise mai piede a Ravenna: il mosaico afferma una presenza politica, non registra un fatto.",
    file: "san-vitale-teodora.jpg",
    ricerca: "Theodora mosaic San Vitale Ravenna"
  },
  {
    periodo: "Mosaico bizantino",
    autore: "Anonimo",
    titolo: "Trasfigurazione e croce gemmata",
    anno: "549",
    dove: "Sant'Apollinare in Classe, Ravenna",
    nota: "La trasfigurazione raccontata per simboli: una croce di gemme al posto di Cristo, tre pecore per gli apostoli, Mosè ed Elia fra le nuvole. Astrazione teologica, mille anni prima dell'arte astratta.",
    file: "apollinare-classe-abside.jpg",
    ricerca: "Sant'Apollinare in Classe apse mosaic Ravenna"
  },
  {
    periodo: "Mosaico bizantino",
    autore: "Anonimo",
    titolo: "Cristo Pantocratore",
    anno: "1148 circa",
    dove: "Cattedrale di Cefalù, Sicilia",
    nota: "Nel catino absidale, con il vangelo aperto in greco e latino. Maestranze bizantine al servizio di un re normanno: la Sicilia del XII secolo mescolava tre culture senza troppi scrupoli.",
    file: "cefalu-pantocratore.jpg",
    ricerca: "Christ Pantocrator mosaic Cefalù Cathedral"
  },
  {
    periodo: "Mosaico bizantino",
    autore: "Anonimo",
    titolo: "Déesis",
    anno: "XIII secolo",
    dove: "Hagia Sophia, Istanbul",
    nota: "Maria e il Battista intercedono presso Cristo. Sopravvissuto alla calce ottomana e riscoperto nel Novecento: il volto di Cristo è fra i più umani di tutta l'arte bizantina.",
    file: "hagia-sophia-deesis.jpg",
    ricerca: "Deesis mosaic Hagia Sophia Istanbul"
  },
  {
    periodo: "Mosaico bizantino",
    autore: "Anonimo",
    titolo: "Creazione del mondo",
    anno: "XIII secolo",
    dove: "Basilica di San Marco, Venezia",
    nota: "Nella cupola dell'atrio, la Genesi in ventisei scene concentriche, copiate da un codice paleocristiano perduto. Un'opera che conserva un'opera scomparsa.",
    file: "san-marco-genesi.jpg",
    ricerca: "Creation dome mosaic San Marco Venice Genesis"
  },
  {
    periodo: "Mosaico bizantino",
    autore: "Anonimo",
    titolo: "Cristo Pantocratore",
    anno: "1180-1190",
    dove: "Duomo di Monreale, Palermo",
    nota: "Sedici metri di larghezza, il più grande Pantocratore del mondo. La mano benedicente da sola misura più di un uomo.",
    file: "monreale-pantocratore.jpg",
    ricerca: "Christ Pantocrator apse Monreale Cathedral"
  },

  /* ============ ICONE D'ORIENTE ============ */
  {
    periodo: "Icona",
    autore: "Anonimo",
    titolo: "Cristo Pantocratore del Sinai",
    anno: "VI secolo",
    dove: "Monastero di Santa Caterina, Sinai",
    nota: "Dipinta a encausto, sopravvissuta all'iconoclastia perché il Sinai era fuori dall'impero. I due lati del volto sono diversi: severo a destra, mite a sinistra — le due nature, dicono, in un solo sguardo.",
    file: "sinai-pantocratore.jpg",
    ricerca: "Christ Pantocrator Sinai encaustic icon Saint Catherine"
  },
  {
    periodo: "Icona",
    autore: "Anonimo",
    titolo: "Vergine di Vladimir",
    anno: "1130 circa",
    dove: "Galleria Tret'jakov, Mosca",
    nota: "Dipinta a Costantinopoli, portata a Kiev e poi a Vladimir. È il tipo dell'Eleusa, la tenerezza: il bambino preme la guancia contro quella della madre, che guarda altrove.",
    file: "vergine-di-vladimir.jpg",
    ricerca: "Theotokos of Vladimir icon"
  },
  {
    periodo: "Icona",
    autore: "Andrej Rublëv",
    titolo: "Trinità",
    anno: "1425-1427",
    dove: "Galleria Tret'jakov, Mosca",
    nota: "I tre angeli ospiti di Abramo a Mamre, disposti in un cerchio che lascia un posto vuoto al lato dello spettatore. Nessuna scena di ospitalità intorno: solo la conversazione silenziosa.",
    file: "rublev-trinita.jpg",
    ricerca: "Andrei Rublev Trinity icon"
  },
  {
    periodo: "Icona",
    autore: "Andrej Rublëv",
    titolo: "Il Salvatore di Zvenigorod",
    anno: "1400 circa",
    dove: "Galleria Tret'jakov, Mosca",
    nota: "Trovata nel 1918 in una legnaia, sotto una scala. Del volto resta poco più degli occhi, ed è abbastanza.",
    file: "rublev-salvatore.jpg",
    ricerca: "Rublev Saviour Zvenigorod icon"
  },
  {
    periodo: "Icona",
    autore: "Teofane il Greco",
    titolo: "Trasfigurazione",
    anno: "1403 circa",
    dove: "Galleria Tret'jakov, Mosca",
    nota: "La luce del Tabor come raggi geometrici che feriscono gli apostoli, rovesciati a terra. Teofane venne da Bisanzio e insegnò a Rublëv una pittura molto più drammatica di quella che l'allievo scelse.",
    file: "teofane-trasfigurazione.jpg",
    ricerca: "Theophanes the Greek Transfiguration icon"
  },
  {
    periodo: "Icona",
    autore: "Anonimo",
    titolo: "Vergine del Segno",
    anno: "XII secolo",
    dove: "Cattedrale di Santa Sofia, Novgorod",
    nota: "Maria a braccia aperte con il medaglione del Figlio sul petto, tipo iconografico legato alla profezia di Isaia. La tradizione le attribuisce la salvezza di Novgorod da un assedio.",
    file: "vergine-del-segno.jpg",
    ricerca: "Our Lady of the Sign Znamenie icon Novgorod"
  },
  {
    periodo: "Icona",
    autore: "Dionisij",
    titolo: "Crocifissione",
    anno: "1500 circa",
    dove: "Galleria Tret'jakov, Mosca",
    nota: "Figure allungate, colori chiari, nessun sangue: l'ultima grande stagione dell'icona russa prima che il gusto occidentale prendesse il sopravvento.",
    file: "dionisij-crocifissione.jpg",
    ricerca: "Dionisius Crucifixion icon 1500 Russian"
  },

  /* ============ MEDIOEVO OCCIDENTALE ============ */
  {
    periodo: "Medioevo",
    autore: "Anonimo",
    titolo: "Pagina del Chi Rho",
    anno: "800 circa",
    dove: "Trinity College, Dublino",
    nota: "Nel Libro di Kells, tre lettere greche occupano un'intera pagina in un labirinto di spirali. Un monaco irlandese impiegò mesi per scrivere l'inizio di un versetto.",
    file: "kells-chi-rho.jpg",
    ricerca: "Book of Kells Chi Rho page folio"
  },
  {
    periodo: "Medioevo",
    autore: "Anonimo",
    titolo: "Giudizio universale, portale",
    anno: "1130-1146",
    dove: "Abbazia di Sainte-Foy, Conques",
    nota: "Centoventiquattro figure scolpite sopra l'ingresso, con l'inferno a destra pieno di dettagli sgradevoli. Serviva a chi non sapeva leggere, ed era efficace.",
    file: "conques-timpano.jpg",
    ricerca: "Conques tympanum Last Judgement Sainte-Foy"
  },
  {
    periodo: "Medioevo",
    autore: "Anonimo",
    titolo: "Vetrata dell'albero di Iesse",
    anno: "1145 circa",
    dove: "Cattedrale di Chartres",
    nota: "La genealogia di Cristo che cresce dal corpo di Iesse addormentato. Il blu di Chartres non è stato più riprodotto: se ne è persa la ricetta.",
    file: "chartres-jesse.jpg",
    ricerca: "Chartres Cathedral Tree of Jesse window"
  },
  {
    periodo: "Medioevo",
    autore: "Cimabue",
    titolo: "Crocifisso",
    anno: "1287-1288",
    dove: "Museo dell'Opera di Santa Croce, Firenze",
    nota: "Devastato dall'alluvione del 1966, che ne portò via il 60% del colore. Restaurato senza reintegrare le perdite: la ferita si vede, ed è diventata parte dell'opera.",
    file: "cimabue-crocifisso.jpg",
    ricerca: "Cimabue Crucifix Santa Croce Florence"
  },
  {
    periodo: "Medioevo",
    autore: "Giotto",
    titolo: "Compianto sul Cristo morto",
    anno: "1303-1305",
    dove: "Cappella degli Scrovegni, Padova",
    nota: "Le due figure di spalle in primo piano non hanno volto: costringono lo spettatore a entrare nella scena dal loro posto. Gli angeli in cielo si contorcono per il dolore.",
    file: "giotto-compianto.jpg",
    ricerca: "Giotto Lamentation Scrovegni Chapel"
  },
  {
    periodo: "Medioevo",
    autore: "Giotto",
    titolo: "Il bacio di Giuda",
    anno: "1303-1305",
    dove: "Cappella degli Scrovegni, Padova",
    nota: "Il mantello giallo di Giuda avvolge Cristo come una rete. I due profili si fronteggiano al centro, e nessuno dei due abbassa lo sguardo.",
    file: "giotto-bacio-di-giuda.jpg",
    ricerca: "Giotto Kiss of Judas Scrovegni Chapel"
  },
  {
    periodo: "Medioevo",
    autore: "Duccio di Buoninsegna",
    titolo: "Maestà",
    anno: "1308-1311",
    dove: "Museo dell'Opera del Duomo, Siena",
    nota: "Portata in duomo con una processione di tutta la città, a suon di campane. Fu segata in pezzi nel Settecento e le tavole sono ancora sparse fra vari musei.",
    file: "duccio-maesta.jpg",
    ricerca: "Duccio Maestà Siena Cathedral Museum"
  },
  {
    periodo: "Medioevo",
    autore: "Simone Martini",
    titolo: "Annunciazione",
    anno: "1333",
    dove: "Galleria degli Uffizi, Firenze",
    nota: "Le parole dell'angelo sono scritte in rilievo sull'oro e vanno verso Maria, che si ritrae infastidita stringendosi il mantello. Il vaso di gigli sta esattamente fra i due.",
    file: "martini-annunciazione.jpg",
    ricerca: "Simone Martini Annunciation Uffizi"
  },
  {
    periodo: "Medioevo",
    autore: "Anonimo",
    titolo: "Miniatura dell'Apocalisse",
    anno: "X-XI secolo",
    dove: "Codici del Beato di Liébana",
    nota: "Colori piatti e accesi, mostri geometrici, nessuna prospettiva: la miniatura mozarabica spagnola commentava l'Apocalisse con una libertà che al Novecento è parsa familiare.",
    file: "beato-apocalisse.jpg",
    ricerca: "Beatus of Liébana Apocalypse manuscript illumination"
  },

  /* ============ QUATTROCENTO ============ */
  {
    periodo: "Quattrocento",
    autore: "Masaccio",
    titolo: "Trinità",
    anno: "1427",
    dove: "Basilica di Santa Maria Novella, Firenze",
    nota: "La prima prospettiva costruita matematicamente in un affresco: la volta dipinta sembra sfondare il muro. In basso uno scheletro avverte: «Io fui già quel che voi siete».",
    file: "masaccio-trinita.jpg",
    ricerca: "Masaccio Holy Trinity Santa Maria Novella fresco"
  },
  {
    periodo: "Quattrocento",
    autore: "Masaccio",
    titolo: "Cacciata dal Paradiso terrestre",
    anno: "1424-1428",
    dove: "Cappella Brancacci, Firenze",
    nota: "Eva urla a bocca spalancata, Adamo si copre il viso. Nessuna eleganza gotica: due corpi nudi che camminano nel dolore, e l'angelo che li spinge senza pietà.",
    file: "masaccio-cacciata.jpg",
    ricerca: "Masaccio Expulsion from Paradise Brancacci Chapel"
  },
  {
    periodo: "Quattrocento",
    autore: "Jan van Eyck",
    titolo: "Polittico dell'Agnello mistico",
    anno: "1432",
    dove: "Cattedrale di San Bavone, Gand",
    nota: "Rubato, smembrato, nascosto in una miniera di sale dai nazisti, recuperato dai Monuments Men. Un pannello, i Giudici giusti, è sparito nel 1934 e non è mai tornato.",
    file: "van-eyck-agnello-mistico.jpg",
    ricerca: "Ghent Altarpiece Adoration Mystic Lamb van Eyck"
  },
  {
    periodo: "Quattrocento",
    autore: "Rogier van der Weyden",
    titolo: "Deposizione",
    anno: "1435 circa",
    dove: "Museo del Prado, Madrid",
    nota: "Le figure sono compresse in una nicchia dorata poco più profonda di una cassa. Il corpo di Cristo e quello di Maria svenuta disegnano la stessa curva, due volte.",
    file: "weyden-deposizione.jpg",
    ricerca: "Rogier van der Weyden Descent from the Cross Prado"
  },
  {
    periodo: "Quattrocento",
    autore: "Beato Angelico",
    titolo: "Annunciazione",
    anno: "1440-1445",
    dove: "Convento di San Marco, Firenze",
    nota: "Dipinta in cima alle scale del dormitorio: ogni frate ci passava davanti al risveglio. Nessun oro, nessun lusso, una loggia spoglia come il convento stesso.",
    file: "angelico-annunciazione.jpg",
    ricerca: "Fra Angelico Annunciation San Marco Florence fresco"
  },
  {
    periodo: "Quattrocento",
    autore: "Beato Angelico",
    titolo: "Noli me tangere",
    anno: "1440-1442",
    dove: "Convento di San Marco, Firenze",
    nota: "Maddalena inginocchiata tende le mani, Cristo si scosta con la zappa in spalla: lo aveva scambiato per il giardiniere. Il prato è fiorito di gigli e margherite.",
    file: "angelico-noli-me-tangere.jpg",
    ricerca: "Fra Angelico Noli me tangere San Marco cell fresco"
  },
  {
    periodo: "Quattrocento",
    autore: "Piero della Francesca",
    titolo: "Battesimo di Cristo",
    anno: "1448-1450 circa",
    dove: "National Gallery, Londra",
    nota: "La colomba sta in alto come una nuvola allungata, e il fiume riflette il cielo senza increspature. Piero era anche matematico, e si vede in ogni distanza.",
    file: "piero-battesimo.jpg",
    ricerca: "Piero della Francesca Baptism of Christ National Gallery"
  },
  {
    periodo: "Quattrocento",
    autore: "Piero della Francesca",
    titolo: "Resurrezione",
    anno: "1460 circa",
    dove: "Museo Civico, Sansepolcro",
    nota: "Cristo esce dal sepolcro guardando dritto in avanti, mentre quattro soldati dormono. Nel 1944 un ufficiale britannico sospese il bombardamento della città ricordandosi di questo affresco.",
    file: "piero-resurrezione.jpg",
    ricerca: "Piero della Francesca Resurrection Sansepolcro fresco"
  },
  {
    periodo: "Quattrocento",
    autore: "Andrea Mantegna",
    titolo: "Cristo morto",
    anno: "1480 circa",
    dove: "Pinacoteca di Brera, Milano",
    nota: "Visto dai piedi, con uno scorcio così violento da sembrare una provocazione. I fori delle mani e dei piedi sono in primo piano, prima ancora del volto.",
    file: "mantegna-cristo-morto.jpg",
    ricerca: "Mantegna Lamentation of Dead Christ Brera"
  },
  {
    periodo: "Quattrocento",
    autore: "Giovanni Bellini",
    titolo: "Pietà",
    anno: "1460 circa",
    dove: "Pinacoteca di Brera, Milano",
    nota: "Maria e Giovanni sorreggono il corpo appoggiato al parapetto, i tre volti quasi a contatto. Sul parapetto una scritta latina dice che, se l'immagine piange, l'opera può piangere.",
    file: "bellini-pieta.jpg",
    ricerca: "Giovanni Bellini Pietà Brera Milan"
  },

  /* ============ CINQUECENTO ============ */
  {
    periodo: "Cinquecento",
    autore: "Leonardo da Vinci",
    titolo: "Ultima Cena",
    anno: "1495-1498",
    dove: "Santa Maria delle Grazie, Milano",
    nota: "Il momento scelto è l'annuncio del tradimento, e i dodici reagiscono in gruppi di tre. Leonardo dipinse a secco invece che ad affresco: cominciò a rovinarsi mentre era ancora vivo.",
    file: "leonardo-ultima-cena.jpg",
    ricerca: "Leonardo da Vinci Last Supper Santa Maria delle Grazie"
  },
  {
    periodo: "Cinquecento",
    autore: "Michelangelo",
    titolo: "Pietà",
    anno: "1498-1499",
    dove: "Basilica di San Pietro, Città del Vaticano",
    nota: "L'unica opera che Michelangelo abbia firmato, sulla fascia che attraversa il petto di Maria: aveva sentito attribuirla a un altro. Aveva ventiquattro anni.",
    file: "michelangelo-pieta.jpg",
    ricerca: "Michelangelo Pietà St Peter's Basilica"
  },
  {
    periodo: "Cinquecento",
    autore: "Michelangelo",
    titolo: "Creazione di Adamo",
    anno: "1511 circa",
    dove: "Cappella Sistina, Città del Vaticano",
    nota: "Le dita non si toccano, e in quel millimetro sta tutto il quadro. Il mantello che avvolge Dio ha da tempo fatto sospettare la forma di un cervello umano.",
    file: "michelangelo-creazione-adamo.jpg",
    ricerca: "Michelangelo Creation of Adam Sistine Chapel"
  },
  {
    periodo: "Cinquecento",
    autore: "Michelangelo",
    titolo: "Giudizio universale",
    anno: "1536-1541",
    dove: "Cappella Sistina, Città del Vaticano",
    nota: "San Bartolomeo regge la propria pelle scorticata, e su quella pelle c'è l'autoritratto di Michelangelo. Pochi anni dopo, un pittore fu incaricato di coprire le nudità.",
    file: "michelangelo-giudizio.jpg",
    ricerca: "Michelangelo Last Judgment Sistine Chapel"
  },
  {
    periodo: "Cinquecento",
    autore: "Matthias Grünewald",
    titolo: "Altare di Isenheim",
    anno: "1512-1516",
    dove: "Musée Unterlinden, Colmar",
    nota: "Dipinto per un ospedale che curava il fuoco di sant'Antonio: il corpo di Cristo ha le stesse piaghe dei ricoverati. Aprendo le ante, la crocifissione lascia posto alla resurrezione.",
    file: "grunewald-isenheim.jpg",
    ricerca: "Grünewald Isenheim Altarpiece Crucifixion Colmar"
  },
  {
    periodo: "Cinquecento",
    autore: "Raffaello",
    titolo: "Trasfigurazione",
    anno: "1516-1520",
    dove: "Pinacoteca Vaticana, Città del Vaticano",
    nota: "Due scene in una: sopra la luce del Tabor, sotto il ragazzo indemoniato che gli apostoli non riescono a guarire. Raffaello morì prima di finirla e la tavola fu portata al suo funerale.",
    file: "raffaello-trasfigurazione.jpg",
    ricerca: "Raphael Transfiguration Vatican Pinacoteca"
  },
  {
    periodo: "Cinquecento",
    autore: "Hieronymus Bosch",
    titolo: "Salita al Calvario",
    anno: "1510-1535 circa",
    dove: "Museum voor Schone Kunsten, Gand",
    nota: "Diciotto teste stipate nella tela, quasi tutte deformi dall'odio. Cristo e la Veronica tengono gli occhi chiusi: sono gli unici due volti in pace.",
    file: "bosch-salita-calvario.jpg",
    ricerca: "Bosch Christ Carrying the Cross Ghent"
  },
  {
    periodo: "Cinquecento",
    autore: "Tiziano",
    titolo: "Assunta",
    anno: "1516-1518",
    dove: "Basilica dei Frari, Venezia",
    nota: "Sette metri di altezza sull'altare maggiore, con gli apostoli in basso che alzano le braccia. I frati, all'inizio, la trovarono troppo grande e troppo audace.",
    file: "tiziano-assunta.jpg",
    ricerca: "Titian Assumption of the Virgin Frari Venice"
  },
  {
    periodo: "Cinquecento",
    autore: "Pieter Bruegel il Vecchio",
    titolo: "Salita al Calvario",
    anno: "1564",
    dove: "Kunsthistorisches Museum, Vienna",
    nota: "Cristo è una macchia minuscola persa in cinquecento figure che vanno a vedere l'esecuzione come a una fiera. Bisogna cercarlo, e questo è il punto.",
    file: "bruegel-calvario.jpg",
    ricerca: "Bruegel Procession to Calvary Vienna"
  },
  {
    periodo: "Cinquecento",
    autore: "El Greco",
    titolo: "Sepoltura del conte di Orgaz",
    anno: "1586-1588",
    dove: "Chiesa di Santo Tomé, Toledo",
    nota: "In basso la sepoltura terrena, con i notabili di Toledo ritratti dal vero; in alto il cielo, con corpi allungati e nuvole di piombo. Il confine fra i due mondi è una linea di teste.",
    file: "el-greco-orgaz.jpg",
    ricerca: "El Greco Burial of the Count of Orgaz Toledo"
  },

  /* ============ SEI-SETTECENTO ============ */
  {
    periodo: "Sei-Settecento",
    autore: "Caravaggio",
    titolo: "Vocazione di san Matteo",
    anno: "1599-1600",
    dove: "San Luigi dei Francesi, Roma",
    nota: "Un banco di gabellieri in una bettola, e un dito che indica dal buio. Si discute ancora quale dei personaggi sia Matteo: il barbuto che si indica, o il giovane chino sulle monete.",
    file: "caravaggio-vocazione-matteo.jpg",
    ricerca: "Caravaggio Calling of Saint Matthew San Luigi dei Francesi"
  },
  {
    periodo: "Sei-Settecento",
    autore: "Caravaggio",
    titolo: "Cena in Emmaus",
    anno: "1601",
    dove: "National Gallery, Londra",
    nota: "Il momento esatto del riconoscimento: uno spalanca le braccia, l'altro sta per alzarsi. Il cesto di frutta sporge oltre il bordo del tavolo, come per cadere addosso a chi guarda.",
    file: "caravaggio-emmaus.jpg",
    ricerca: "Caravaggio Supper at Emmaus National Gallery London"
  },
  {
    periodo: "Sei-Settecento",
    autore: "Caravaggio",
    titolo: "Incredulità di san Tommaso",
    anno: "1601-1602",
    dove: "Sanssouci, Potsdam",
    nota: "Cristo guida la mano dell'apostolo dentro la ferita, e il dito entra davvero. Le fronti corrugate dei tre uomini sono tutte alla stessa altezza.",
    file: "caravaggio-incredulita-tommaso.jpg",
    ricerca: "Caravaggio Incredulity of Saint Thomas Potsdam"
  },
  {
    periodo: "Sei-Settecento",
    autore: "Caravaggio",
    titolo: "Deposizione",
    anno: "1602-1604",
    dove: "Pinacoteca Vaticana, Città del Vaticano",
    nota: "L'angolo della pietra tombale punta verso lo spettatore, come se il corpo stesse per essere deposto ai suoi piedi. Fu una delle poche opere che nessuno contestò.",
    file: "caravaggio-deposizione.jpg",
    ricerca: "Caravaggio Entombment of Christ Vatican"
  },
  {
    periodo: "Sei-Settecento",
    autore: "Artemisia Gentileschi",
    titolo: "Giuditta che decapita Oloferne",
    anno: "1620 circa",
    dove: "Galleria degli Uffizi, Firenze",
    nota: "Due donne che lavorano di forza, senza teatralità: la serva tiene fermo, Giuditta taglia. Artemisia aveva subito un processo per stupro pochi anni prima.",
    file: "gentileschi-giuditta.jpg",
    ricerca: "Artemisia Gentileschi Judith Slaying Holofernes Uffizi"
  },
  {
    periodo: "Sei-Settecento",
    autore: "Georges de La Tour",
    titolo: "San Giuseppe falegname",
    anno: "1642 circa",
    dove: "Museo del Louvre, Parigi",
    nota: "Una sola candela, tenuta dal bambino, illumina il vecchio che fora una trave. La mano di Gesù è trasparente contro la fiamma.",
    file: "la-tour-san-giuseppe.jpg",
    ricerca: "Georges de La Tour Saint Joseph the Carpenter Louvre"
  },
  {
    periodo: "Sei-Settecento",
    autore: "Diego Velázquez",
    titolo: "Cristo crocifisso",
    anno: "1632 circa",
    dove: "Museo del Prado, Madrid",
    nota: "Fondo nero, nessun testimone, nessun paesaggio. I capelli coprono metà del volto: Velázquez toglie allo spettatore anche lo sguardo di Cristo.",
    file: "velazquez-cristo.jpg",
    ricerca: "Velázquez Christ Crucified Prado"
  },
  {
    periodo: "Sei-Settecento",
    autore: "Francisco de Zurbarán",
    titolo: "Agnus Dei",
    anno: "1635-1640",
    dove: "Museo del Prado, Madrid",
    nota: "Un agnello legato su un ripiano, dipinto come una natura morta. Nessun simbolo aggiunto, nessuna aureola: la teologia sta tutta nelle zampe legate.",
    file: "zurbaran-agnus-dei.jpg",
    ricerca: "Zurbarán Agnus Dei Prado lamb"
  },
  {
    periodo: "Sei-Settecento",
    autore: "Gian Lorenzo Bernini",
    titolo: "Estasi di santa Teresa",
    anno: "1647-1652",
    dove: "Santa Maria della Vittoria, Roma",
    nota: "Teresa aveva descritto la transverberazione nella propria autobiografia, e Bernini la scolpì alla lettera. La luce vera cade da una finestra nascosta sopra il gruppo.",
    file: "bernini-estasi-teresa.jpg",
    ricerca: "Bernini Ecstasy of Saint Teresa Santa Maria della Vittoria"
  },
  {
    periodo: "Sei-Settecento",
    autore: "Rembrandt",
    titolo: "Ritorno del figliol prodigo",
    anno: "1669 circa",
    dove: "Museo dell'Ermitage, San Pietroburgo",
    nota: "Le due mani del padre sulle spalle del figlio sono diverse: una maschile e nodosa, l'altra più piccola e liscia. Dipinta nell'ultimo anno di vita, dopo aver perso quasi tutti i suoi.",
    file: "rembrandt-figliol-prodigo.jpg",
    ricerca: "Rembrandt Return of the Prodigal Son Hermitage"
  },

  {
    periodo: "Otto-Novecento",
    autore: "Jean-François Millet",
    titolo: "L'Angelus",
    anno: "1857-1859",
    dove: "Musée d'Orsay, Parigi",
    nota: "Due contadini si fermano al suono della campana della sera. Millet disse che gli tornava in mente la nonna, che faceva interrompere il lavoro per pregare i defunti.",
    file: "millet-angelus.jpg",
    ricerca: "Jean-François Millet The Angelus painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "William Holman Hunt",
    titolo: "La luce del mondo",
    anno: "1851-1853",
    dove: "Keble College, Oxford",
    nota: "Cristo bussa a una porta senza maniglia esterna: si apre solo dall'interno. L'immagine viene dall'Apocalisse (3,20).",
    file: "hunt-luce-del-mondo.jpg",
    ricerca: "Holman Hunt The Light of the World painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Ivan Kramskoj",
    titolo: "Cristo nel deserto",
    anno: "1872",
    dove: "Galleria Tret'jakov, Mosca",
    nota: "Nessun'aureola, nessun angelo: solo un uomo seduto su una pietra all'alba, dopo una notte di decisione. Kramskoj disse di aver dipinto la propria crisi.",
    file: "kramskoj-cristo-deserto.jpg",
    ricerca: "Kramskoi Christ in the Desert painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Domenico Morelli",
    titolo: "Le tentazioni di sant'Antonio",
    anno: "1878",
    dove: "Galleria d'Arte Moderna, Roma",
    nota: "Morelli trattò i soggetti sacri come scene reali, con luce e ambienti da pittura di storia: fu una delle vie italiane al realismo religioso.",
    file: "morelli-tentazioni.jpg",
    ricerca: "Domenico Morelli Tentazioni di Sant'Antonio painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Fritz von Uhde",
    titolo: "Venite a me",
    anno: "1884",
    dove: "Museum der bildenden Künste, Lipsia",
    nota: "Cristo entra in una stanza di contadini tedeschi, vestito come loro. Fu accusato di dissacrazione: la santità messa nella cucina di casa disturbava.",
    file: "uhde-venite-a-me.jpg",
    ricerca: "Fritz von Uhde Lasset die Kindlein zu mir kommen painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Giovanni Segantini",
    titolo: "Ave Maria a trasbordo",
    anno: "1886",
    dove: "Collezione privata / Otto Fischbacher, San Gallo",
    nota: "Una famiglia su una barca al tramonto, ferma per l'Angelus. Segantini lavorava all'aperto in alta quota, e la luce lo dimostra.",
    file: "segantini-ave-maria.jpg",
    ricerca: "Segantini Ave Maria a trasbordo painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Paul Gauguin",
    titolo: "La visione dopo il sermone",
    anno: "1888",
    dove: "Scottish National Gallery, Edimburgo",
    nota: "Le contadine bretoni escono dalla messa e vedono Giacobbe lottare con l'angelo. Il prato è rosso: Gauguin dipinge ciò che si vede con la mente.",
    file: "gauguin-visione-dopo-il-sermone.jpg",
    ricerca: "Gauguin Vision after the Sermon painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Paul Gauguin",
    titolo: "Il Cristo giallo",
    anno: "1889",
    dove: "Albright-Knox Art Gallery, Buffalo",
    nota: "Un crocifisso ligneo bretone trasportato in un campo autunnale, con tre donne sedute intorno come se fosse un fatto quotidiano.",
    file: "gauguin-cristo-giallo.jpg",
    ricerca: "Gauguin Yellow Christ painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Maurice Denis",
    titolo: "Il mistero cattolico",
    anno: "1889",
    dove: "Musée Départemental Maurice Denis, Saint-Germain-en-Laye",
    nota: "L'annunciazione ambientata in un interno borghese, con un chierico al posto dell'angelo. Denis aveva vent'anni e già la sua teoria: prima la superficie dipinta, poi il soggetto.",
    file: "denis-mistero-cattolico.jpg",
    ricerca: "Maurice Denis Mystère catholique painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "James Ensor",
    titolo: "L'ingresso di Cristo a Bruxelles",
    anno: "1888-1889",
    dove: "J. Paul Getty Museum, Los Angeles",
    nota: "Una folla carnevalesca di maschere quasi nasconde Cristo. Il quadro fu rifiutato dal gruppo artistico dello stesso Ensor e restò nel suo studio per decenni.",
    file: "ensor-ingresso-cristo.jpg",
    ricerca: "Ensor Christ's Entry into Brussels painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Vincent van Gogh",
    titolo: "Pietà (da Delacroix)",
    anno: "1889",
    dove: "Musei Vaticani, Città del Vaticano",
    nota: "Dipinta a Saint-Rémy, copiando una litografia di Delacroix caduta nel colore. Il Cristo ha i capelli rossi del pittore.",
    file: "vangogh-pieta.jpg",
    ricerca: "Van Gogh Pietà after Delacroix painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Nikolaj Ge",
    titolo: "Che cos'è la verità?",
    anno: "1890",
    dove: "Galleria Tret'jakov, Mosca",
    nota: "Pilato in piena luce, sicuro di sé; Cristo nell'ombra, malridotto. Il quadro fu rimosso dall'esposizione per ordine della censura.",
    file: "ge-che-cose-la-verita.jpg",
    ricerca: "Nikolai Ge What is Truth painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Mikhail Nesterov",
    titolo: "La visione al giovane Bartolomeo",
    anno: "1890",
    dove: "Galleria Tret'jakov, Mosca",
    nota: "L'incontro che secondo la tradizione avviò Sergij di Radonež alla vita monastica. Il paesaggio russo conta quanto la scena.",
    file: "nesterov-bartolomeo.jpg",
    ricerca: "Nesterov Vision to the Youth Bartholomew painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Vincent van Gogh",
    titolo: "Il buon samaritano (da Delacroix)",
    anno: "1890",
    dove: "Kröller-Müller Museum, Otterlo",
    nota: "Dipinto pochi mesi prima della morte. Sullo sfondo, minuscoli, il sacerdote e il levita che se ne vanno.",
    file: "vangogh-buon-samaritano.jpg",
    ricerca: "Van Gogh Good Samaritan after Delacroix painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Odilon Redon",
    titolo: "Il Cristo del silenzio",
    anno: "1897 circa",
    dove: "Musée du Petit Palais, Parigi",
    nota: "Un volto che emerge dal buio con un dito sulle labbra. Redon lavorava per anni solo in bianco e nero, e chiamava quei fogli i suoi «neri».",
    file: "redon-cristo-del-silenzio.jpg",
    ricerca: "Odilon Redon Christ of the Sacred Heart silence"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Henry Ossawa Tanner",
    titolo: "L'annunciazione",
    anno: "1898",
    dove: "Philadelphia Museum of Art",
    nota: "L'angelo è una colonna di luce senza ali né volto; Maria è una ragazza seduta sul letto, scalza, ancora assonnata.",
    file: "tanner-annunciazione.jpg",
    ricerca: "Henry Ossawa Tanner The Annunciation painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Edvard Munch",
    titolo: "Golgota",
    anno: "1900",
    dove: "Munchmuseet, Oslo",
    nota: "Dipinto durante un ricovero in clinica. La folla ai piedi della croce ha i volti dei contemporanei di Munch, incluso il suo.",
    file: "munch-golgota.jpg",
    ricerca: "Edvard Munch Golgotha 1900 painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Gaetano Previati",
    titolo: "La Via Crucis",
    anno: "1901-1902",
    dove: "Collezioni varie",
    nota: "Previati dipingeva a filamenti di colore separati, per ottenere una luce che sembra vibrare: il divisionismo applicato al soggetto sacro.",
    file: "previati-via-crucis.jpg",
    ricerca: "Gaetano Previati Via Crucis painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Vasilij Kandinskij",
    titolo: "Ognissanti I",
    anno: "1911",
    dove: "Lenbachhaus, Monaco di Baviera",
    nota: "Santi, cavalieri e trombe del giudizio sciolti quasi nell'astrazione. Kandinskij arrivò all'arte astratta passando per l'iconografia russa, non allontanandosene.",
    file: "kandinskij-ognissanti.jpg",
    ricerca: "Kandinsky All Saints I Allerheiligen painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Max Beckmann",
    titolo: "Deposizione",
    anno: "1917",
    dove: "Museum of Modern Art, New York",
    nota: "Dipinta dopo il crollo nervoso seguito al servizio come barelliere sul fronte. Il corpo di Cristo è rigido e spigoloso come i feriti che aveva visto.",
    file: "beckmann-deposizione.jpg",
    ricerca: "Max Beckmann Deposition 1917 painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Paul Klee",
    titolo: "Angelus Novus",
    anno: "1920",
    dove: "Israel Museum, Gerusalemme",
    nota: "Il foglio comprato da Walter Benjamin, che vi lesse l'angelo della storia spinto all'indietro nel futuro dalla tempesta del progresso.",
    file: "klee-angelus-novus.jpg",
    ricerca: "Paul Klee Angelus Novus"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Lovis Corinth",
    titolo: "Ecce Homo",
    anno: "1925",
    dove: "Kunstmuseum, Basilea",
    nota: "Ultimo anno di vita, dopo un ictus che gli aveva reso incerta la mano. Il medico e l'aguzzino hanno volti moderni; Cristo guarda fuori dal quadro.",
    file: "corinth-ecce-homo.jpg",
    ricerca: "Lovis Corinth Ecce Homo 1925 painting"
  },
  {
    periodo: "Otto-Novecento",
    autore: "Käthe Kollwitz",
    titolo: "Pietà (Madre con figlio morto)",
    anno: "1937-1938",
    dove: "Neue Wache, Berlino (copia ingrandita)",
    nota: "Kollwitz perse il figlio Peter nel 1914, a diciotto anni, nelle prime settimane di guerra. Ci mise vent'anni a scolpire questa.",
    file: "kollwitz-pieta.jpg",
    ricerca: "Käthe Kollwitz Mother with Dead Son Pietà sculpture"
  }
];
