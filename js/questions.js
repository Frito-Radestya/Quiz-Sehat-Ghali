// Bank Soal Terpadu Kuis Sarapan Sehat Anak SD
// answer: 0=A, 1=B, 2=C, 3=D

const ALL_QUESTIONS = [
  // --- PAKET 1 (Energi Pagi) ---
  {
    id: "p1_q1",
    packet: "paket1",
    question: "Mengapa kita perlu sarapan sebelum berangkat sekolah?",
    options: ["Agar tubuh mendapat energi", "Agar cepat mengantuk", "Agar tidak perlu makan siang", "Agar tidak haus"],
    answer: 0,
    explanation: "Sarapan memberi energi untuk otak dan tubuh agar kita siap belajar dan bermain!"
  },
  {
    id: "p1_q2",
    packet: "paket1",
    question: "Manakah contoh menu sarapan yang sehat dan bergizi seimbang?",
    options: ["Permen dan es soda", "Nasi, telur, sayur, dan buah", "Keripik asin dan es sirup", "Cokelat saja"],
    answer: 1,
    explanation: "Nasi, telur, sayur, dan buah memberi zat gizi lengkap: karbohidrat, protein, vitamin, dan serat."
  },
  {
    id: "p1_q3",
    packet: "paket1",
    question: "Tebak gambar! Buah berwarna kuning manis apakah yang tampak pada gambar?",
    image: "assets/buah-pisang.svg",
    imageAlt: "Gambar buah pisang kuning manis",
    options: ["Apel", "Pisang", "Wortel", "Semangka"],
    answer: 1,
    explanation: "Pisang adalah buah praktis kaya kalium dan energi yang sangat cocok untuk sarapan."
  },
  {
    id: "p1_q4",
    packet: "paket1",
    question: "Apa minuman terbaik yang wajib diminum saat sarapan setiap hari?",
    options: ["Minuman bersoda", "Air putih", "Minuman berenergi", "Sirup sangat manis"],
    answer: 1,
    explanation: "Air putih menjaga tubuh tetap terhidrasi dan membantu pencernaan bekerja dengan baik."
  },
  {
    id: "p1_q5",
    packet: "paket1",
    question: "Apa yang sebaiknya dilakukan jika buru-buru dan tidak sempat sarapan di rumah?",
    options: ["Tidak makan sampai malam hari", "Jajan permen manis saja", "Membawa bekal sehat untuk dimakan saat jam istirahat", "Hanya minum minuman manis"],
    answer: 2,
    explanation: "Membawa bekal sehat dari rumah memastikan tubuh tetap mendapat asupan bergizi tepat waktu."
  },

  // --- PAKET 2 (Gizi & Kebiasaan Sehat) ---
  {
    id: "p2_q1",
    packet: "paket2",
    question: "Kapan waktu yang paling baik untuk kita sarapan?",
    options: ["Setelah pulang sekolah", "Pada pagi hari sebelum memulai kegiatan", "Tengah malam saat bangun", "Hanya saat perut sudah terasa sakit"],
    answer: 1,
    explanation: "Sarapan di pagi hari sebelum beraktivitas mengisi kembali tenaga setelah tidur semalaman."
  },
  {
    id: "p2_q2",
    packet: "paket2",
    question: "Makanan manakah yang kaya protein hewani untuk membantu pertumbuhan tubuh?",
    options: ["Telur rebus", "Permen kapas", "Es sirup warna-warni", "Kerupuk renyah saja"],
    answer: 0,
    explanation: "Telur mengandung protein hewani bermutu tinggi untuk membangun otot dan sel-sel tubuh."
  },
  {
    id: "p2_q3",
    packet: "paket2",
    question: "Tebak gambar! Buah oranye manis dengan biji kecil apakah yang ada di gambar?",
    image: "assets/buah-papaya.svg",
    imageAlt: "Gambar buah pepaya segar",
    options: ["Mangga", "Pepaya", "Anggur", "Jeruk"],
    answer: 1,
    explanation: "Pepaya kaya akan vitamin C, vitamin A, dan enzim papain yang melancarkan pencernaan."
  },
  {
    id: "p2_q4",
    packet: "paket2",
    question: "Apa kebiasaan baik yang harus dilakukan sebelum memegang makanan sarapan?",
    options: ["Bermain pasir dahulu", "Mengelap tangan ke baju kotor", "Mencuci tangan dengan sabun dan air mengalir", "Memegang uang jajan"],
    answer: 2,
    explanation: "Mencuci tangan dengan sabun selama 20 detik membunuh kuman penyebab sakit perut."
  },
  {
    id: "p2_q5",
    packet: "paket2",
    question: "Mengapa kita dianjurkan makan sayur dan buah segar setiap hari?",
    options: ["Agar cepat merasa haus", "Agar tidak perlu minum air", "Supaya boleh melewatkan sarapan", "Karena mengandung vitamin, mineral, dan serat alami"],
    answer: 3,
    explanation: "Sayur dan buah melindungi daya tahan tubuh agar tidak mudah terserang penyakit!"
  },

  // --- PAKET 3 (Menu & Pilihan Cerdas) ---
  {
    id: "p3_q1",
    packet: "paket3",
    question: "Makanan pokok seperti nasi, roti, kentang, dan oatmeal berfungsi untuk ...",
    options: ["Membuat tubuh lemas dan mengantuk", "Memberi energi dan tenaga untuk beraktivitas", "Menggantikan kebutuhan air putih", "Membuat kita tidak perlu tidur lagi"],
    answer: 1,
    explanation: "Nasi, roti, dan kentang mengandung karbohidrat yang dibakar tubuh menjadi tenaga beraktivitas."
  },
  {
    id: "p3_q2",
    packet: "paket3",
    question: "Tebak gambar! Makanan kuning kaya karbohidrat apakah yang terlihat di gambar?",
    image: "assets/tebak-jagung.svg",
    imageAlt: "Gambar tongkol jagung manis",
    options: ["Jagung", "Mentimun", "Wortel", "Terong"],
    answer: 0,
    explanation: "Jagung rebus manis adalah sumber karbohidrat dan serat sehat pengganti nasi."
  },
  {
    id: "p3_q3",
    packet: "paket3",
    question: "Lauk asli Indonesia yang terbuat dari kedelai dan kaya protein nabati adalah ...",
    options: ["Tempe atau tahu", "Permen jeli", "Kerupuk rasa keju", "Es lilin"],
    answer: 0,
    explanation: "Tempe dan tahu merupakan sumber protein nabati yang sangat baik dan lezat untuk sarapan."
  },
  {
    id: "p3_q4",
    packet: "paket3",
    question: "Bagaimanakah sikap makan yang baik, aman, dan sopan saat sarapan?",
    options: ["Berlari-lari sambil mengunyah", "Bercanda dan tertawa dengan mulut penuh makanan", "Duduk tegak, tenang, dan mengunyah perlahan", "Menelan makanan terburu-buru tanpa dikunyah"],
    answer: 2,
    explanation: "Makan sambil duduk dan mengunyah perlahan mencegah tersedak serta membuat lambung bekerja nyaman."
  },
  {
    id: "p3_q5",
    packet: "paket3",
    question: "Sebelum meminum susu kemasan untuk sarapan, hal penting apa yang harus diperiksa?",
    options: ["Warna gambar luar kemasan", "Tanggal kedaluwarsa dan kondisi kemasan", "Bentuk warna sedotan", "Banyaknya tulisan hiasan di kotak"],
    answer: 1,
    explanation: "Selalu cek tanggal kedaluwarsa (Expired Date) agar susu yang diminum tetap segar dan aman."
  },

  // --- BANK SOAL TAMBAHAN (q16 s.d. q60 untuk 20+ Anak Bergantian) ---
  // Manfaat & Fungsi Sarapan
  {
    id: "q16",
    packet: "acak",
    question: "Apa yang biasanya terjadi pada tubuh kita di sekolah jika kita tidak sarapan?",
    options: ["Tubuh terasa lemas dan sulit konsentrasi", "Badan menjadi lebih bertenaga", "Mata menjadi sangat segar", "Dapat berlari lebih kencang"],
    answer: 0,
    explanation: "Perut kosong membuat kadar gula darah turun, akibatnya tubuh lemas dan otak sulit fokus belajar."
  },
  {
    id: "q17",
    packet: "acak",
    question: "Saat guru sedang menerangkan pelajaran di kelas, anak yang sudah sarapan akan lebih mudah ...",
    options: ["Mengantuk dan tertidur", "Bermain sendiri di laci meja", "Fokus dan memahami pelajaran", "Merasa lapar dan gelisah"],
    answer: 2,
    explanation: "Sarapan menyuplai energi ke sel-sel otak sehingga daya ingat dan konsentrasi belajar meningkat."
  },
  {
    id: "q18",
    packet: "acak",
    question: "Mengapa sarapan bisa membantu menjaga daya tahan tubuh kita dari serangan penyakit?",
    options: ["Karena membuat kita tidak perlu mandi", "Karena sarapan bergizi memberi vitamin dan mineral untuk sistem kekebalan tubuh", "Supaya kita boleh kehujanan seharian", "Karena makanan sarapan bisa menggantikan obat dokter"],
    answer: 1,
    explanation: "Gizi dari makanan sehat memperkuat sel darah putih dan antibodi tubuh untuk melawan kuman dan virus."
  },
  {
    id: "q19",
    packet: "acak",
    question: "Kapan batas waktu sarapan pagi yang paling baik sebelum kita beraktivitas?",
    options: ["Jam 12 siang saat matahari terik", "Jam 3 sore saat pulang bermain", "Tengah malam sebelum tidur", "Antara bangun tidur sampai sebelum jam 9 pagi"],
    answer: 3,
    explanation: "Waktu ideal sarapan adalah 1–2 jam setelah bangun tidur dan sebelum jam 9 pagi agar metabolisme tubuh bekerja optimal."
  },
  {
    id: "q20",
    packet: "acak",
    question: "Apa akibatnya jika kita sering menunda sarapan sampai siang hari?",
    options: ["Lambung bisa perih atau terkena sakit maag", "Gigi menjadi lebih putih berkilau", "Tinggi badan bertambah dua kali lipat", "Tidak akan pernah merasa haus"],
    answer: 0,
    explanation: "Asam lambung terus diproduksi di pagi hari. Jika tidak ada makanan yang dicerna, dinding lambung bisa teriritasi dan perih."
  },
  {
    id: "q21",
    packet: "acak",
    question: "Sebelum mengikuti pelajaran olahraga (senam atau lari) di pagi hari, mengapa kita butuh sarapan sehat?",
    options: ["Supaya baju olahraga tidak kotor", "Supaya tidak perlu memakai sepatu", "Agar otot memiliki cadangan tenaga dan tidak mudah kram", "Agar bisa tidur di lapangan"],
    answer: 2,
    explanation: "Otot membutuhkan glukosa dari makanan sarapan untuk bergerak aktif dan berolahraga dengan bertenaga."
  },
  {
    id: "q22",
    packet: "acak",
    question: "Selain membuat tubuh kuat, sarapan sehat di pagi hari bersama keluarga juga bisa membuat suasana hati (mood) kita menjadi ...",
    options: ["Cemberut dan mudah marah", "Ceria, gembira, dan bersemangat", "Sangat sedih dan ingin menangis", "Takut berangkat ke sekolah"],
    answer: 1,
    explanation: "Perut yang kenyang dengan gizi cukup membuat hormon perasaan senang aktif sehingga kita ceria seharian."
  },

  // Kelompok Makanan & Gizi Seimbang
  {
    id: "q23",
    packet: "acak",
    question: "Manakah di bawah ini makanan pengganti nasi yang juga kaya karbohidrat sehat?",
    options: ["Permen karet", "Keripik micin", "Es lilin", "Kentang rebus atau ubi kukus"],
    answer: 3,
    explanation: "Kentang, ubi jalar, singkong, dan jagung adalah sumber karbohidrat alami yang kaya serat dan mengenyangkan."
  },
  {
    id: "q24",
    packet: "acak",
    question: "Ikan laut seperti tongkol, salmon, atau kembung sangat bagus untuk sarapan karena mengandung ...",
    options: ["Omega-3 dan protein untuk kecerdasan otak", "Banyak pewarna buatan", "Gas yang membuat perut kembung", "Minyak goreng yang pekat"],
    answer: 0,
    explanation: "Ikan kaya asam lemak Omega-3 dan protein berkualitas tinggi yang sangat bagus untuk perkembangan otak anak."
  },
  {
    id: "q25",
    packet: "acak",
    question: "Zat gizi apakah yang terkandung dalam sayuran bayam dan sangat berguna untuk mencegah rasa lemas (anemia)?",
    options: ["Minyak goreng", "Pemanis buatan", "Zat besi", "Garam berlebih"],
    answer: 2,
    explanation: "Zat besi dalam bayam membantu pembentukan sel darah merah yang mengangkut oksigen ke seluruh tubuh."
  },
  {
    id: "q26",
    packet: "acak",
    question: "Mengapa kita dianjurkan makan sayur seperti wortel untuk sarapan?",
    options: ["Supaya mata kita bisa melihat dalam gelap", "Karena kaya Vitamin A yang menjaga kesehatan mata", "Karena wortel manis seperti permen", "Agar kuku berubah warna"],
    answer: 1,
    explanation: "Wortel kaya beta-karoten (Vitamin A) yang menjaga kornea mata tetap sehat dan penglihatan tetap tajam."
  },
  {
    id: "q27",
    packet: "acak",
    question: "Susu sapi murni atau olahan keju kaya akan zat mineral Kalsium yang berguna untuk ...",
    options: ["Memperpanjang rambut saja", "Membuat kulit menjadi biru", "Menggantikan waktu tidur malam", "Memperkuat tulang dan pertumbuhan gigi"],
    answer: 3,
    explanation: "Kalsium dan Vitamin D dalam susu membantu pembentukan tulang yang padat dan gigi yang kuat pada masa pertumbuhan."
  },
  {
    id: "q28",
    packet: "acak",
    question: "Buah jeruk, jambu biji, dan stroberi sangat terkenal karena kaya akan ...",
    options: ["Vitamin C untuk daya tahan tubuh dan cegah sariawan", "Zat pengawet kimia", "Lemak jenuh jahat", "Garam asin"],
    answer: 0,
    explanation: "Vitamin C adalah antioksidan penting yang mencegah sariawan, mempercepat penyembuhan luka, dan melawan infeksi."
  },
  {
    id: "q29",
    packet: "acak",
    question: "Jika di piring sarapanmu ada sayur buncis dan brokoli, zat serat di dalamnya bermanfaat untuk ...",
    options: ["Membuat perut kembung", "Membuat kita tidak perlu minum", "Melancarkan pencernaan dan mencegah sembelit/susah BAB", "Mengikis gigi kita"],
    answer: 2,
    explanation: "Serat sayuran bekerja seperti sapu alami di usus yang melancarkan buang air besar dan menjaga kesehatan pencernaan."
  },
  {
    id: "q30",
    packet: "acak",
    question: "Pada panduan gizi nasional 'Isi Piringku', separuh (setengah) bagian piring makan sebaiknya diisi oleh ...",
    options: ["Gorengan dan saus cabai", "Sayuran segar dan buah-buahan", "Nasi putih bertumpuk penuh", "Kerupuk aneka warna"],
    answer: 1,
    explanation: "Pedoman Isi Piringku menganjurkan 50% piring terdiri dari sayuran dan buah sebagai sumber vitamin, mineral, dan serat."
  },
  {
    id: "q31",
    packet: "acak",
    question: "Daging ayam rebus, tahu, tempe, dan telur di piring sarapan termasuk dalam kelompok makanan ...",
    options: ["Makanan manis pencuci mulut", "Bahan pewarna makanan", "Bumbu penyedap rasa", "Lauk-pauk sumber protein pembangun tubuh"],
    answer: 3,
    explanation: "Protein berfungsi sebagai zat pembangun untuk membentuk jaringan tubuh baru, otot, dan memperbaiki sel yang rusak."
  },
  {
    id: "q32",
    packet: "acak",
    question: "Mengapa roti gandum utuh lebih disarankan untuk sarapan dibanding roti putih manis?",
    options: ["Karena kaya serat alami dan rasa kenyangnya bertahan lebih lama", "Karena roti gandum warnanya cokelat", "Karena roti gandum tidak perlu dikunyah", "Supaya kita cepat merasa lapar lagi"],
    answer: 0,
    explanation: "Gandum utuh mengandung serat dan karbohidrat kompleks yang dicerna perlahan, sehingga energi bertahan sampai siang."
  },

  // Minuman Sehat & Hidrasi
  {
    id: "q33",
    packet: "acak",
    question: "Berapa banyak air putih yang sebaiknya diminum oleh anak-anak setiap hari untuk menjaga cairan tubuh?",
    options: ["Hanya 1 sendok teh", "20 liter sekaligus", "Sekitar 6 sampai 8 gelas air", "Tidak perlu minum sama sekali"],
    answer: 2,
    explanation: "Minum 6–8 gelas air putih per hari mencukupi kebutuhan cairan tubuh anak agar tidak lelah dan dehidrasi."
  },
  {
    id: "q34",
    packet: "acak",
    question: "Apa manfaat langsung minum satu gelas air putih hangat saat baru bangun tidur di pagi hari?",
    options: ["Membangunkan organ pencernaan dan mengganti cairan yang hilang saat tidur", "Membuat tubuh kedinginan", "Membuat kita langsung ingin tidur kembali", "Mengenyangkan perut selama 24 jam"],
    answer: 0,
    explanation: "Air putih hangat di pagi hari merehidrasi tubuh setelah tidur malam dan melancarkan metabolisme pencernaan."
  },
  {
    id: "q35",
    packet: "acak",
    question: "Mengapa minuman bersoda sangat TIDAK dianjurkan diminum saat sarapan pagi?",
    options: ["Karena air soda warnanya terlalu gelap", "Karena air soda banyak vitamin C", "Supaya botol soda tidak cepat habis", "Karena mengandung kadar gula sangat tinggi dan gas yang membuat lambung perih"],
    answer: 3,
    explanation: "Minuman bersoda sarat gula buatan dan asam karbonat yang merusak enamel gigi dan mengiritasi lambung kosong."
  },
  {
    id: "q36",
    packet: "acak",
    question: "Jika kamu ingin minum jus buah saat sarapan, jus buah yang paling sehat adalah ...",
    options: ["Air sirup berwarna cerah buatan", "Jus buah asli murni tanpa gula tambahan berlebih", "Minuman kaleng manis berpengawet", "Air es dicampur permen buah"],
    answer: 1,
    explanation: "Jus buah murni memberikan vitamin dan mineral alami tanpa bahaya kelebihan kalori dari gula pasir tambahan."
  },
  {
    id: "q37",
    packet: "acak",
    question: "Susu kedelai adalah pilihan minuman sarapan yang sangat baik, terutama untuk anak yang ...",
    options: ["Alergi atau tidak cocok meminum susu sapi (intoleransi laktosa)", "Hanya suka makan permen", "Tidak mau makan sayur", "Suka minum air mentah"],
    answer: 0,
    explanation: "Susu kedelai mengandung protein nabati berkualitas tinggi dan bebas laktosa, aman bagi anak yang alergi susu sapi."
  },
  {
    id: "q38",
    packet: "acak",
    question: "Bagaimanakah tanda sederhana pada tubuh yang menunjukkan bahwa kita kurang minum air putih?",
    options: ["Rambut berubah menjadi hijau", "Kuku tangan bertambah panjang", "Warna air kencing (urin) kuning pekat dan bibir kering", "Gigi terasa bertambah banyak"],
    answer: 2,
    explanation: "Warna urin yang kuning tua atau pekat serta tenggorokan kering adalah sinyal tubuh sedang kekurangan cairan."
  },
  {
    id: "q39",
    packet: "acak",
    question: "Mengapa sebaiknya kita tidak minum teh manis kental dalam jumlah banyak bersamaan dengan makanan sarapan tinggi zat besi?",
    options: ["Teh membuat makanan menjadi tawar", "Zat tanin dalam teh bisa menghambat penyerapan zat besi", "Teh membuat piring makan menjadi kotor", "Karena teh membuat nasi tidak bisa ditelan"],
    answer: 1,
    explanation: "Kandungan tanin dalam teh kental dapat mengikat zat besi dari makanan sehingga tubuh sulit menyerapnya secara optimal."
  },

  // Kebersihan & Keamanan Makanan
  {
    id: "q40",
    packet: "acak",
    question: "Berapa lama waktu yang dianjurkan saat mencuci tangan memakai sabun agar kuman mati secara tuntas?",
    options: ["Hanya 1 detik", "1 jam penuh", "Tidak perlu memakai sabun", "Minimal 20 detik dengan menggosok seluruh sela jari dan punggung tangan"],
    answer: 3,
    explanation: "Mencuci tangan 20 detik (setara menyanyikan lagu 'Happy Birthday' dua kali) memastikan seluruh kuman terangkat dan mati."
  },
  {
    id: "q41",
    packet: "acak",
    question: "Mengapa makanan sarapan di atas meja makan sebaiknya selalu ditutup menggunakan tudung saji?",
    options: ["Supaya tidak dihinggapi lalat, debu, atau kotoran", "Agar tidak terlihat oleh tetangga", "Agar makanannya tidak kedinginan", "Supaya piringnya tidak kabur"],
    answer: 0,
    explanation: "Lalat sering hinggap di tempat kotor dan membawa jutaan bakteri berbahaya yang bisa mencemari makanan kita."
  },
  {
    id: "q42",
    packet: "acak",
    question: "Jika makanan sarapan sudah berbau asam menyengat, berlendir, atau berjamur, tindakan yang benar adalah ...",
    options: ["Tetap dimakan sampai habis", "Diberi saus banyak agar baunya hilang", "Segera dibuang dan tidak boleh dimakan karena sudah basi", "Ditiup saja lalu dimakan"],
    answer: 2,
    explanation: "Makanan basi mengandung racun bakteri yang dapat menyebabkan keracunan makanan, diare parah, dan muntah."
  },
  {
    id: "q43",
    packet: "acak",
    question: "Sebelum memakan buah apel atau anggur yang baru dibeli dari pasar, apa yang wajib dilakukan lebih dahulu?",
    options: ["Langsung memakannya dengan kulit kotornya", "Mencucinya dengan air bersih mengalir", "Menyimpannya di bawah bantal", "Mengecatnya agar lebih merah"],
    answer: 1,
    explanation: "Mencuci buah dengan air mengalir membersihkan sisa debu, tanah, pestisida, dan kotoran yang menempel pada kulit buah."
  },
  {
    id: "q44",
    packet: "acak",
    question: "Sendok dan garpu yang akan digunakan untuk sarapan harus dalam kondisi ...",
    options: ["Bersih, sudah dicuci sabun, dan kering", "Penuh bekas makanan kemarin", "Berkarat dan berminyak", "Pernah jatuh ke tanah dan belum dicuci"],
    answer: 0,
    explanation: "Alat makan yang higienis mencegah kuman masuk ke dalam mulut dan saluran pencernaan kita."
  },
  {
    id: "q45",
    packet: "acak",
    question: "Mengapa kita harus rajin memotong kuku tangan yang panjang dan membersihkan kotoran hitam di sela-selanya?",
    options: ["Supaya kita tidak bisa memegang sendok", "Agar jari kita terlihat lebih pendek", "Karena kuku tidak ada gunanya", "Karena kuku panjang bisa menjadi sarang kuman dan telur cacing"],
    answer: 3,
    explanation: "Kotoran hitam di bawah kuku mengandung bakteri dan telur cacing parasit yang bisa ikut tertelan saat kita makan."
  },
  {
    id: "q46",
    packet: "acak",
    question: "Saat membeli susu kotak di kantin atau minimarket, kaleng atau kotak susu yang penyok atau kembung sebaiknya ...",
    options: ["Dipilih karena paling menarik", "Dihindari dan jangan dibeli karena mungkin sudah rusak atau bocor", "Langsung diminum sampai habis", "Dihangatkan di bawah sinar matahari"],
    answer: 1,
    explanation: "Kemasan yang kembung atau rusak menandakan adanya pertumbuhan bakteri pembusuk yang menghasilkan gas di dalam susu."
  },
  {
    id: "q47",
    packet: "acak",
    question: "Manakah jajanan sarapan pagi di sekitar sekolah yang paling aman dan bersih untuk dipilih?",
    options: ["Gorengan terbuka yang dihinggapi banyak lalat di pinggir jalan berdebu", "Es sirup yang menggunakan air mentah dari selokan", "Makanan yang tertutup rapat, bersih, dan dibuat higienis oleh penjual yang rapi", "Camilan yang warnanya sangat mencolok mencurigakan"],
    answer: 2,
    explanation: "Makanan yang tertutup rapi terbebas dari debu knalpot jalanan dan lalat penyebar penyakit perut."
  },

  // Adab & Kebiasaan Makan yang Baik
  {
    id: "q48",
    packet: "acak",
    question: "Sebelum mulai menyantap sarapan pagi yang lezat, hal pertama yang harus kita lakukan adalah ...",
    options: ["Berdoa kepada Tuhan Yang Maha Esa sebagai rasa syukur", "Langsung merebut makanan teman", "Bermain game di ponsel", "Berteriak memanggil tetangga"],
    answer: 0,
    explanation: "Berdoa sebelum makan adalah wujud rasa syukur atas rezeki makanan sehat dan memohon berkah kebaikan."
  },
  {
    id: "q49",
    packet: "acak",
    question: "Berapa kali sebaiknya kita mengunyah makanan sebelum menelannya ke dalam lambung?",
    options: ["Langsung ditelan bulat-bulat tanpa dikunyah", "Cukup 1 kali kunyah lalu minum air banyak", "Dikunyah sambil melompat-lompat", "Dikunyah perlahan sampai halus (sekitar 20–30 kali kunyahan)"],
    answer: 3,
    explanation: "Mengunyah makanan hingga lembut membantu enzim ludah mencerna karbohidrat dan meringankan kerja lambung."
  },
  {
    id: "q50",
    packet: "acak",
    question: "Bagaimanakah posisi tubuh yang paling aman dan sehat saat kita sedang sarapan?",
    options: ["Tidur tengkurap di kasur", "Duduk tegak dan tenang di kursi", "Berlari-lari keliling rumah", "Bergelantungan di pintu"],
    answer: 1,
    explanation: "Duduk tegak membuat jalur kerongkongan lurus sehingga makanan masuk lancar ke lambung tanpa risiko tersedak."
  },
  {
    id: "q51",
    packet: "acak",
    question: "Apa bahayanya jika kita berbicara atau tertawa terbahak-bahak saat mulut masih penuh makanan?",
    options: ["Makanan bisa masuk ke saluran pernapasan dan menyebabkan tersedak berbahaya", "Rasa makanan akan menjadi semakin enak", "Gigi kita akan menjadi semakin rapi", "Makanan akan langsung habis sendiri"],
    answer: 0,
    explanation: "Saat berbicara, pita suara terbuka. Makanan yang belum tertelan bisa masuk ke tenggorokan napas dan menyumbat udara."
  },
  {
    id: "q52",
    packet: "acak",
    question: "Saat mengambil makanan sarapan di piring, sikap yang bijaksana dan terpuji adalah ...",
    options: ["Mengambil makanan setinggi gunung lalu membuangnya", "Menumpahkan makanan ke lantai", "Mengambil porsi secukupnya yang mampu dihabiskan agar tidak mubazir", "Menyembunyikan makanan di kantong baju"],
    answer: 2,
    explanation: "Menghargai makanan dengan mengambil porsi secukupnya melatih rasa bersyukur dan mencegah sisa makanan terbuang sia-sia."
  },
  {
    id: "q53",
    packet: "acak",
    question: "Setelah selesai makan sarapan di rumah, sikap anak mandiri yang baik adalah ...",
    options: ["Meninggalkan piring kotor begitu saja di meja", "Membawa piring dan gelas kotor ke tempat cuci piring", "Melempar sendok ke luar jendela", "Meminta adik membersihkan sisa makananmu"],
    answer: 1,
    explanation: "Merapikan piring kotor sendiri menunjukkan sikap tanggung jawab, mandiri, dan berbakti membantu orang tua di rumah."
  },
  {
    id: "q54",
    packet: "acak",
    question: "Saat makan bersama keluarga di meja sarapan, tangan manakah yang sopan dan baik digunakan untuk memegang sendok atau makanan?",
    options: ["Tangan kanan", "Kedua kaki", "Menggunakan siku", "Tangan kiri sambil bersin"],
    answer: 0,
    explanation: "Makan menggunakan tangan kanan adalah bagian dari norma kesopanan dan adab budaya luhur masyarakat Indonesia."
  },

  // Bekal Sehat & Kebiasaan Pagi Cerdas
  {
    id: "q55",
    packet: "acak",
    question: "Agar di pagi hari kita tidak terburu-buru dan punya waktu tenang untuk sarapan, kebiasaan baik apa yang harus dilakukan?",
    options: ["Tidur larut malam jam 1 pagi", "Tidak usah mandi pagi", "Langsung lari ke sekolah tanpa persiapan", "Bangun pagi tepat waktu dan tidur lebih awal di malam hari"],
    answer: 3,
    explanation: "Tidur cukup 8–9 jam dan bangun pagi membuat kita punya waktu luang untuk mandi, sarapan tenang, dan berangkat sekolah tepat waktu."
  },
  {
    id: "q56",
    packet: "acak",
    question: "Membawa bekal makanan dan botol minum (tumbler) sendiri dari rumah ke sekolah memiliki manfaat yaitu ...",
    options: ["Lebih higienis, bergizi seimbang, dan menghemat uang jajan", "Membuat tas sekolah terlalu berat sehingga tidak bisa jalan", "Supaya bisa pamer kepada teman", "Agar tidak perlu belajar di kelas"],
    answer: 0,
    explanation: "Bekal buatan rumah terjamin kebersihannya, tidak mengandung zat berbahaya, serta mengurangi sampah plastik kemasan."
  },
  {
    id: "q57",
    packet: "acak",
    question: "Manakah contoh camilan sehat yang sangat cocok dibawa sebagai bekal istirahat pertama di sekolah?",
    options: ["Permen lolipop manis berperwarna pekat", "Potongan buah melon segar atau pisang rebus", "Keripik asin dengan banyak penyedap rasa", "Minuman sirup bersoda"],
    answer: 1,
    explanation: "Buah segar memberikan energi alami dan vitamin yang menyegarkan tubuh saat istirahat sekolah."
  },
  {
    id: "q58",
    packet: "acak",
    question: "Mengapa kita sebaiknya menghindari makan makanan yang terlalu pedas atau asam saat sarapan pagi?",
    options: ["Karena cabai membuat kita terlalu pandai berhitung", "Supaya bibir kita tidak bertambah merah", "Karena lambung yang masih kosong sensitif dan bisa memicu sakit perut atau mulas", "Karena rasa pedas membuat kita tertidur"],
    answer: 2,
    explanation: "Zat capsaicin pada cabai dan rasa asam yang tajam dapat melukai dinding lambung yang masih kosong di pagi hari."
  },
  {
    id: "q59",
    packet: "acak",
    question: "Sarapan dengan makanan yang terlalu berminyak (seperti gorengan berulang kali) bisa menyebabkan ...",
    options: ["Tenggorokan gatal, batuk, dan tubuh terasa cepat mengantuk", "Tubuh menjadi sangat ringan seperti kapas", "Suara menjadi merdu seketika", "Napas menjadi sangat harum"],
    answer: 0,
    explanation: "Minyak jenuh berlebih sulit dicerna tubuh, membuat aliran darah banyak dialirkan ke lambung sehingga otak kekurangan oksigen dan mengantuk."
  },
  {
    id: "q60",
    packet: "acak",
    question: "Siapakah yang bertanggung jawab menjaga kebiasaan sarapan sehat setiap hari agar tubuh kita selalu kuat dan pintar?",
    options: ["Hanya tetangga sebelah rumah", "Penjual mainan di pasar", "Kucing peliharaan di rumah", "Diri kita sendiri dengan memilih makanan bergizi dan bersyukur"],
    answer: 3,
    explanation: "Menjaga kesehatan tubuh adalah tanggung jawab diri kita sendiri agar kita tumbuh menjadi anak yang sehat, kuat, dan berprestasi!"
  }
];

const PACKET_INFO = {
  acak: {
    title: "🎲 Soal Acak (5 Soal Baru)",
    desc: "Setiap anak dapat 5 soal berbeda! Diacak otomatis dari 60 bank soal sarapan sehat.",
    count: 5
  },
  paket1: {
    title: "🟢 Paket 1: Energi Pagi",
    desc: "Belajar mengapa sarapan penting, menu seimbang, dan buah pisang.",
    count: 5
  },
  paket2: {
    title: "🟡 Paket 2: Gizi & Kebersihan",
    desc: "Mengenal waktu sarapan, protein telur, cuci tangan, dan buah pepaya.",
    count: 5
  },
  paket3: {
    title: "🔵 Paket 3: Pilihan Cerdas",
    desc: "Mengenal karbohidrat, jagung, tempe nabati, dan cek tanggal kedaluwarsa.",
    count: 5
  },
  maraton: {
    title: "🌟 Mode Maraton Juara (20 Soal)",
    desc: "Tantangan juara terhebat! Jawab 20 pertanyaan seputar sarapan sehat.",
    count: 20
  }
};

// Fungsi pengambil soal berdasarkan paket yang dipilih
function getQuestions(packetKey) {
  let list = [];
  if (packetKey === "paket1" || packetKey === "paket2" || packetKey === "paket3") {
    list = ALL_QUESTIONS.filter(q => q.packet === packetKey);
  } else if (packetKey === "maraton") {
    // Ambil 20 soal tantangan maraton
    list = ALL_QUESTIONS.slice(0, 20);
  } else {
    // Default: 'acak' - Shuffle and pick 5
    list = [...ALL_QUESTIONS];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    list = list.slice(0, 5);
  }
  return list;
}
