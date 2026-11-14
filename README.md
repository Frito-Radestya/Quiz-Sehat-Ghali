# 🥑 Kuis Sarapan Sehat — Petualangan Jagoan SD

Satu aplikasi kuis untuk anak SD dengan **Bank 60 Soal (Mode Acak untuk 20+ anak bergantian)**, 3 paket tematik, mode maraton 20 soal, input nama pemain, efek suara ceria, musik latar, konfeti, dan **papan peringkat** untuk satu laptop yang dipakai bergantian.

> Folder `sarapan-sehat-quiz_v1`, `sarapan-sehat-quiz-v2`, dan `kuis-sarapan-sehat-v3` tetap disimpan sebagai arsip di komputer dan tidak diikutkan ke repo ini. Aplikasi baru yang dipakai adalah file di folder utama ini.

---

## ✨ Fitur

| Fitur | Keterangan |
|---|---|
| 🎲 **Mode Acak** | 5 soal dipilih acak otomatis dari total **60 bank soal**, sehingga 20+ anak yang bermain bergantian di satu laptop mendapat variasi soal berbeda dan tidak mudah berulang. |
| 🟢 **Paket 1 – Energi Pagi** | Sarapan, menu seimbang, tebak buah pisang, air putih, bekal sehat (5 soal tematik). |
| 🟡 **Paket 2 – Gizi & Kebersihan** | Waktu sarapan, protein telur, tebak pepaya, cuci tangan, sayur & buah (5 soal tematik). |
| 🔵 **Paket 3 – Pilihan Cerdas** | Karbohidrat, tebak jagung, tempe, cara makan aman, cek kedaluwarsa susu (5 soal tematik). |
| 🌟 **Mode Maraton Juara** | 20 soal tantangan pilihan sekaligus untuk menguji pemahaman menyeluruh. |
| 👤 **Input Nama + Avatar** | Setiap anak memasukkan nama dan memilih karakter sebelum bermain. |
| 🔊 **Efek Suara Ceria** | Nada benar/salah, lonceng, fanfare hasil akhir, dan suara klik. Tanpa suara orang berbicara. |
| 🎵 **Musik Latar** | Soundtrack game ceria (original) otomatis berjalan saat kuis dimulai dan berhenti di layar hasil. Bisa dimatikan sendiri. |
| 🎉 **Konfeti** | Ledakan konfeti saat jawaban benar dan saat kuis selesai. |
| 🏆 **Papan Juara** | Peringkat otomatis tersimpan di laptop (skor tertinggi di atas), lengkap dengan medali 🥇🥈🥉. |
| 👥 **Ganti Pemain** | Setelah selesai, tekan "Selesai & Ganti Teman Berikutnya" agar anak selanjutnya bisa langsung mulai. |
| 🖼️ **Tebak Gambar** | 3 ilustrasi SVG: pisang, pepaya, dan jagung. |
| 📱 **Responsif** | Nyaman dipakai di HP Android (mulai layar 280 px), tablet, dan laptop, baik posisi tegak maupun mendatar. |

---

## 🚀 Cara Menjalankan

### Cara paling mudah
1. Buka folder ini.
2. Klik dua kali **`index.html`** (akan terbuka di browser).

### Cara disarankan (Live Server)
1. Buka folder ini di Visual Studio Code.
2. Klik kanan `index.html` → **Open with Live Server**.

> Gunakan **satu browser yang sama** (misalnya Chrome) setiap kali mengajar. Papan peringkat disimpan di penyimpanan lokal browser tersebut.
> Jangan memakai mode Incognito/Private dan jangan hapus data browser, karena peringkat akan ikut terhapus.
> Jika papan juara tidak tersimpan saat `index.html` dibuka langsung, gunakan **Live Server** seperti langkah di atas.

### Publikasi online lewat GitHub Pages (opsional)
1. Buka repo **Quiz-Sehat-Ghali** di GitHub.
2. Masuk ke **Settings → Pages**.
3. Bagian **Build and deployment**, pilih **Deploy from a branch**.
4. Pilih branch **main** dan folder **/ (root)**, lalu klik **Save**.
5. Tunggu sebentar, situs akan tersedia di `https://frito-radestya.github.io/Quiz-Sehat-Ghali/`.

> Kalau memakai versi online, tetap gunakan alamat yang sama setiap mengajar agar papan peringkat di browser tidak terpisah.

---

## 👩‍🏫 Alur Pemakaian di Kelas

1. Anak membuka halaman utama.
2. Anak mengetik **namanya**.
3. Anak memilih **karakter/avatar**.
4. Pilih paket soal — **Mode Acak** paling disarankan agar soal setiap anak berbeda.
5. Tekan **Mulai Kuis Petualangan**.
6. Jawab 5 soal. Musik latar mulai berjalan, dan setiap jawaban langsung diberi efek suara, konfeti, dan penjelasan.
7. Di akhir, anak melihat skor, bintang, dan peringkatnya di laptop.
8. Tekan **🏆 Lihat Papan Juara** untuk melihat ranking, atau **👤 Selesai & Ganti Teman Berikutnya** agar anak selanjutnya bisa mulai.

### Mengosongkan peringkat (guru/pengawas)
Buka **Papan Juara** → tombol **🗑️ Hapus Riwayat (Guru/Pengawas)** → konfirmasi. Cocok dipakai saat ganti kelas atau mulai tahun ajaran baru.

---

## 📁 Struktur File

```
Quiz-Sehat-Ghali/
|-- index.html            ← Halaman utama aplikasi kuis
|-- README.md
|-- .gitignore
|-- css/
|   |-- style.css         ← Seluruh tampilan
|-- js/
|   |-- questions.js      ← Bank 15 soal + daftar paket
|   |-- app.js            ← Logika kuis, input nama, hasil, peringkat
|   |-- audio.js          ← Efek suara (Web Audio API, tanpa file eksternal)
|   |-- music.js          ← Soundtrack game original (Web Audio API)
|   |-- confetti.js       ← Efek konfeti
|   |-- leaderboard.js    ← Sistem peringkat (localStorage)
|-- assets/
|   |-- sarapan.svg
|   |-- breakfast-hero.svg
|   |-- buah-pisang.svg
|   |-- buah-papaya.svg
|   |-- tebak-jagung.svg
```

---

## ➕ Menambah atau Mengubah Soal

Buka `js/questions.js`. Setiap soal berbentuk:

```js
{
  id: "p1_q6",
  packet: "paket1",              // paket1 / paket2 / paket3
  question: "Teks pertanyaan?",
  image: "assets/gambar.svg",    // opsional, untuk soal tebak gambar
  imageAlt: "Deskripsi gambar",
  options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
  answer: 1,                     // 0=A, 1=B, 2=C, 3=D
  explanation: "Penjelasan seru untuk anak."
}
```

Lalu tambahkan soal itu ke dalam `ALL_QUESTIONS`.
- Mode **Acak** otomatis mengambil 5 soal dari seluruh bank.
- Mode **Maraton** otomatis memakai semua soal.
- Hitungan jumlah soal di `PACKET_INFO` boleh disesuaikan bila perlu.

---

## 💡 Catatan Teknis

- **Tanpa internet & tanpa instalasi**: semua efek suara dan musik dibuat dengan Web Audio API, gambar berupa SVG lokal, dan tidak ada library eksternal. Font memakai Google Fonts; jika offline, otomatis memakai font sistem.
- **Peringkat tersimpan di `localStorage`** browser pada laptop tersebut — bukan di server. Jadi peringkat hanya terlihat di laptop itu.
- **Efek suara dan musik punya tombol terpisah** di kanan atas. Tombol 🔊 mengatur efek suara, tombol 🎵 mengatur musik latar. Keduanya baru aktif setelah pengguna menekan tombol (aturan browser).
- **Musik latar adalah lagu original** bergaya game lari-lari yang dibuat dengan kode, bukan lagu *Subway Surfers* asli, sehingga aman dari masalah hak cipta.
- **Volume musik** bisa diatur di `js/music.js` pada bagian `MUSIC_VOLUME` (default `1.0`; turunkan ke `0.65` bila terlalu keras).
- **Tampilan responsif** sudah diuji pada lebar layar 280, 320, 360, 390, 412, 480, 568 (lanskap), 600, 681, 740, 768, 820, 844 (lanskap), 901, 1024, dan 1280 px. Di HP, papan juara memakai tampilan ringkas: paket soal dan waktu tampil di bawah nama pemain.
- **Urutan peringkat**: skor tertinggi di atas; jika skor sama, pemain yang lebih dulu menyelesaikan berada di atas.
