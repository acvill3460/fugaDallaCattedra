/* ===========================================================
   AD DIEM — opera del giorno
   -----------------------------------------------------------
   Ventitré opere di tema religioso, tutte di pubblico dominio.
   Criterio: in Italia il diritto d'autore dura 70 anni dalla
   morte dell'autore, quindi nel 2026 sono liberi gli artisti
   morti entro il 1955. Il più recente qui è Kandinskij (1944).

   Restano fuori, per ora, i nomi che verrebbero in mente per
   primi: Rouault (libero dal 2029), Nolde (2027), Chagall
   (2056), Dalí (2060), Manzù (2062). Se aggiungi un'opera,
   controlla PRIMA l'anno di morte dell'autore.

   Il campo `file` è il nome del file dentro img/.
   Il campo `ricerca` serve allo script strumenti/scarica-immagini.sh,
   che interroga l'API di Wikimedia Commons e scarica il file.
   Il campo `commons` è la pagina da citare come fonte.
   =========================================================== */

const OPERE = [
  {
    autore: "Jean-François Millet",
    titolo: "L'Angelus",
    anno: "1857-1859",
    dove: "Musée d'Orsay, Parigi",
    nota: "Due contadini si fermano al suono della campana della sera. Millet disse che gli tornava in mente la nonna, che faceva interrompere il lavoro per pregare i defunti.",
    file: "millet-angelus.jpg",
    ricerca: "Jean-François Millet The Angelus painting",
    commons: "https://commons.wikimedia.org/wiki/Category:L%27Ang%C3%A9lus_by_Jean-Fran%C3%A7ois_Millet"
  },
  {
    autore: "William Holman Hunt",
    titolo: "La luce del mondo",
    anno: "1851-1853",
    dove: "Keble College, Oxford",
    nota: "Cristo bussa a una porta senza maniglia esterna: si apre solo dall'interno. L'immagine viene dall'Apocalisse (3,20).",
    file: "hunt-luce-del-mondo.jpg",
    ricerca: "Holman Hunt The Light of the World painting",
    commons: "https://commons.wikimedia.org/wiki/Category:The_Light_of_the_World_(painting)"
  },
  {
    autore: "Ivan Kramskoj",
    titolo: "Cristo nel deserto",
    anno: "1872",
    dove: "Galleria Tret'jakov, Mosca",
    nota: "Nessun'aureola, nessun angelo: solo un uomo seduto su una pietra all'alba, dopo una notte di decisione. Kramskoj disse di aver dipinto la propria crisi.",
    file: "kramskoj-cristo-deserto.jpg",
    ricerca: "Kramskoi Christ in the Desert painting",
    commons: "https://commons.wikimedia.org/wiki/Category:Christ_in_the_Desert_by_Ivan_Kramskoi"
  },
  {
    autore: "Domenico Morelli",
    titolo: "Le tentazioni di sant'Antonio",
    anno: "1878",
    dove: "Galleria d'Arte Moderna, Roma",
    nota: "Morelli trattò i soggetti sacri come scene reali, con luce e ambienti da pittura di storia: fu una delle vie italiane al realismo religioso.",
    file: "morelli-tentazioni.jpg",
    ricerca: "Domenico Morelli Tentazioni di Sant'Antonio painting",
    commons: "https://commons.wikimedia.org/wiki/Category:Domenico_Morelli"
  },
  {
    autore: "Fritz von Uhde",
    titolo: "Venite a me",
    anno: "1884",
    dove: "Museum der bildenden Künste, Lipsia",
    nota: "Cristo entra in una stanza di contadini tedeschi, vestito come loro. Fu accusato di dissacrazione: la santità messa nella cucina di casa disturbava.",
    file: "uhde-venite-a-me.jpg",
    ricerca: "Fritz von Uhde Lasset die Kindlein zu mir kommen painting",
    commons: "https://commons.wikimedia.org/wiki/Category:Fritz_von_Uhde"
  },
  {
    autore: "Giovanni Segantini",
    titolo: "Ave Maria a trasbordo",
    anno: "1886",
    dove: "Collezione privata / Otto Fischbacher, San Gallo",
    nota: "Una famiglia su una barca al tramonto, ferma per l'Angelus. Segantini lavorava all'aperto in alta quota, e la luce lo dimostra.",
    file: "segantini-ave-maria.jpg",
    ricerca: "Segantini Ave Maria a trasbordo painting",
    commons: "https://commons.wikimedia.org/wiki/Category:Giovanni_Segantini"
  },
  {
    autore: "Paul Gauguin",
    titolo: "La visione dopo il sermone",
    anno: "1888",
    dove: "Scottish National Gallery, Edimburgo",
    nota: "Le contadine bretoni escono dalla messa e vedono Giacobbe lottare con l'angelo. Il prato è rosso: Gauguin dipinge ciò che si vede con la mente.",
    file: "gauguin-visione-dopo-il-sermone.jpg",
    ricerca: "Gauguin Vision after the Sermon painting",
    commons: "https://commons.wikimedia.org/wiki/Category:Vision_after_the_Sermon"
  },
  {
    autore: "Paul Gauguin",
    titolo: "Il Cristo giallo",
    anno: "1889",
    dove: "Albright-Knox Art Gallery, Buffalo",
    nota: "Un crocifisso ligneo bretone trasportato in un campo autunnale, con tre donne sedute intorno come se fosse un fatto quotidiano.",
    file: "gauguin-cristo-giallo.jpg",
    ricerca: "Gauguin Yellow Christ painting",
    commons: "https://commons.wikimedia.org/wiki/Category:Le_Christ_jaune"
  },
  {
    autore: "Maurice Denis",
    titolo: "Il mistero cattolico",
    anno: "1889",
    dove: "Musée Départemental Maurice Denis, Saint-Germain-en-Laye",
    nota: "L'annunciazione ambientata in un interno borghese, con un chierico al posto dell'angelo. Denis aveva vent'anni e già la sua teoria: prima la superficie dipinta, poi il soggetto.",
    file: "denis-mistero-cattolico.jpg",
    ricerca: "Maurice Denis Mystère catholique painting",
    commons: "https://commons.wikimedia.org/wiki/Category:Maurice_Denis"
  },
  {
    autore: "James Ensor",
    titolo: "L'ingresso di Cristo a Bruxelles",
    anno: "1888-1889",
    dove: "J. Paul Getty Museum, Los Angeles",
    nota: "Una folla carnevalesca di maschere quasi nasconde Cristo. Il quadro fu rifiutato dal gruppo artistico dello stesso Ensor e restò nel suo studio per decenni.",
    file: "ensor-ingresso-cristo.jpg",
    ricerca: "Ensor Christ's Entry into Brussels painting",
    commons: "https://commons.wikimedia.org/wiki/Category:Christ%27s_Entry_into_Brussels_in_1889"
  },
  {
    autore: "Vincent van Gogh",
    titolo: "Pietà (da Delacroix)",
    anno: "1889",
    dove: "Musei Vaticani, Città del Vaticano",
    nota: "Dipinta a Saint-Rémy, copiando una litografia di Delacroix caduta nel colore. Il Cristo ha i capelli rossi del pittore.",
    file: "vangogh-pieta.jpg",
    ricerca: "Van Gogh Pietà after Delacroix painting",
    commons: "https://commons.wikimedia.org/wiki/Category:Piet%C3%A0_(after_Delacroix)_by_Vincent_van_Gogh"
  },
  {
    autore: "Nikolaj Ge",
    titolo: "Che cos'è la verità?",
    anno: "1890",
    dove: "Galleria Tret'jakov, Mosca",
    nota: "Pilato in piena luce, sicuro di sé; Cristo nell'ombra, malridotto. Il quadro fu rimosso dall'esposizione per ordine della censura.",
    file: "ge-che-cose-la-verita.jpg",
    ricerca: "Nikolai Ge What is Truth painting",
    commons: "https://commons.wikimedia.org/wiki/Category:What_is_Truth%3F_(Ge)"
  },
  {
    autore: "Mikhail Nesterov",
    titolo: "La visione al giovane Bartolomeo",
    anno: "1890",
    dove: "Galleria Tret'jakov, Mosca",
    nota: "L'incontro che secondo la tradizione avviò Sergij di Radonež alla vita monastica. Il paesaggio russo conta quanto la scena.",
    file: "nesterov-bartolomeo.jpg",
    ricerca: "Nesterov Vision to the Youth Bartholomew painting",
    commons: "https://commons.wikimedia.org/wiki/Category:Vision_of_the_Youth_Bartholomew"
  },
  {
    autore: "Vincent van Gogh",
    titolo: "Il buon samaritano (da Delacroix)",
    anno: "1890",
    dove: "Kröller-Müller Museum, Otterlo",
    nota: "Dipinto pochi mesi prima della morte. Sullo sfondo, minuscoli, il sacerdote e il levita che se ne vanno.",
    file: "vangogh-buon-samaritano.jpg",
    ricerca: "Van Gogh Good Samaritan after Delacroix painting",
    commons: "https://commons.wikimedia.org/wiki/Category:The_Good_Samaritan_(after_Delacroix)"
  },
  {
    autore: "Odilon Redon",
    titolo: "Il Cristo del silenzio",
    anno: "1897 circa",
    dove: "Musée du Petit Palais, Parigi",
    nota: "Un volto che emerge dal buio con un dito sulle labbra. Redon lavorava per anni solo in bianco e nero, e chiamava quei fogli i suoi «neri».",
    file: "redon-cristo-del-silenzio.jpg",
    ricerca: "Odilon Redon Christ of the Sacred Heart silence",
    commons: "https://commons.wikimedia.org/wiki/Category:Odilon_Redon"
  },
  {
    autore: "Henry Ossawa Tanner",
    titolo: "L'annunciazione",
    anno: "1898",
    dove: "Philadelphia Museum of Art",
    nota: "L'angelo è una colonna di luce senza ali né volto; Maria è una ragazza seduta sul letto, scalza, ancora assonnata.",
    file: "tanner-annunciazione.jpg",
    ricerca: "Henry Ossawa Tanner The Annunciation painting",
    commons: "https://commons.wikimedia.org/wiki/Category:The_Annunciation_(Tanner)"
  },
  {
    autore: "Edvard Munch",
    titolo: "Golgota",
    anno: "1900",
    dove: "Munchmuseet, Oslo",
    nota: "Dipinto durante un ricovero in clinica. La folla ai piedi della croce ha i volti dei contemporanei di Munch, incluso il suo.",
    file: "munch-golgota.jpg",
    ricerca: "Edvard Munch Golgotha 1900 painting",
    commons: "https://commons.wikimedia.org/wiki/Category:Paintings_by_Edvard_Munch"
  },
  {
    autore: "Gaetano Previati",
    titolo: "La Via Crucis",
    anno: "1901-1902",
    dove: "Collezioni varie",
    nota: "Previati dipingeva a filamenti di colore separati, per ottenere una luce che sembra vibrare: il divisionismo applicato al soggetto sacro.",
    file: "previati-via-crucis.jpg",
    ricerca: "Gaetano Previati Via Crucis painting",
    commons: "https://commons.wikimedia.org/wiki/Category:Gaetano_Previati"
  },
  {
    autore: "Vasilij Kandinskij",
    titolo: "Ognissanti I",
    anno: "1911",
    dove: "Lenbachhaus, Monaco di Baviera",
    nota: "Santi, cavalieri e trombe del giudizio sciolti quasi nell'astrazione. Kandinskij arrivò all'arte astratta passando per l'iconografia russa, non allontanandosene.",
    file: "kandinskij-ognissanti.jpg",
    ricerca: "Kandinsky All Saints I Allerheiligen painting",
    commons: "https://commons.wikimedia.org/wiki/Category:Paintings_by_Wassily_Kandinsky"
  },
  {
    autore: "Max Beckmann",
    titolo: "Deposizione",
    anno: "1917",
    dove: "Museum of Modern Art, New York",
    nota: "Dipinta dopo il crollo nervoso seguito al servizio come barelliere sul fronte. Il corpo di Cristo è rigido e spigoloso come i feriti che aveva visto.",
    file: "beckmann-deposizione.jpg",
    ricerca: "Max Beckmann Deposition 1917 painting",
    commons: "https://commons.wikimedia.org/wiki/Category:Max_Beckmann"
  },
  {
    autore: "Paul Klee",
    titolo: "Angelus Novus",
    anno: "1920",
    dove: "Israel Museum, Gerusalemme",
    nota: "Il foglio comprato da Walter Benjamin, che vi lesse l'angelo della storia spinto all'indietro nel futuro dalla tempesta del progresso.",
    file: "klee-angelus-novus.jpg",
    ricerca: "Paul Klee Angelus Novus",
    commons: "https://commons.wikimedia.org/wiki/Category:Angelus_Novus"
  },
  {
    autore: "Lovis Corinth",
    titolo: "Ecce Homo",
    anno: "1925",
    dove: "Kunstmuseum, Basilea",
    nota: "Ultimo anno di vita, dopo un ictus che gli aveva reso incerta la mano. Il medico e l'aguzzino hanno volti moderni; Cristo guarda fuori dal quadro.",
    file: "corinth-ecce-homo.jpg",
    ricerca: "Lovis Corinth Ecce Homo 1925 painting",
    commons: "https://commons.wikimedia.org/wiki/Category:Lovis_Corinth"
  },
  {
    autore: "Käthe Kollwitz",
    titolo: "Pietà (Madre con figlio morto)",
    anno: "1937-1938",
    dove: "Neue Wache, Berlino (copia ingrandita)",
    nota: "Kollwitz perse il figlio Peter nel 1914, a diciotto anni, nelle prime settimane di guerra. Ci mise vent'anni a scolpire questa.",
    file: "kollwitz-pieta.jpg",
    ricerca: "Käthe Kollwitz Mother with Dead Son Pietà sculpture",
    commons: "https://commons.wikimedia.org/wiki/Category:K%C3%A4the_Kollwitz"
  }
];
