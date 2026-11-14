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
  }
];

const PACKET_INFO = {
  acak: {
    title: "🎲 Soal Acak (5 Soal Baru)",
    desc: "Setiap main soalnya beda-beda! Diacak otomatis dari seluruh 15 bank soal.",
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
    title: "🌟 Mode Maraton (15 Soal Penuh)",
    desc: "Tantangan juara hebat! Jawab seluruh 15 pertanyaan sarapan sehat.",
    count: 15
  }
};

// Fungsi pengambil soal berdasarkan paket yang dipilih
function getQuestions(packetKey) {
  let list = [];
  if (packetKey === "paket1" || packetKey === "paket2" || packetKey === "paket3") {
    list = ALL_QUESTIONS.filter(q => q.packet === packetKey);
  } else if (packetKey === "maraton") {
    list = [...ALL_QUESTIONS];
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
