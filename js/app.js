// Logika Utama Aplikasi Kuis Sarapan Sehat

(function() {
  // Elemen DOM
  const homeScreen = document.getElementById("home-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");
  const leaderboardModal = document.getElementById("leaderboard-modal");

  const nameInput = document.getElementById("player-name-input");
  const avatarListContainer = document.getElementById("avatar-list");
  const packetSelect = document.getElementById("packet-select");
  const startQuizBtn = document.getElementById("start-quiz-btn");

  const headerSoundBtn = document.getElementById("sound-toggle-btn");
  const headerMusicBtn = document.getElementById("music-toggle-btn");
  const headerLeaderboardBtn = document.getElementById("header-leaderboard-btn");
  const closeLeaderboardBtn = document.getElementById("close-leaderboard-btn");
  const clearLeaderboardBtn = document.getElementById("clear-leaderboard-btn");
  const modalLeaderboardTable = document.getElementById("modal-leaderboard-content");

  // Quiz DOM
  const quizPlayerBadge = document.getElementById("quiz-player-badge");
  const quizPacketBadge = document.getElementById("quiz-packet-badge");
  const quizLiveScore = document.getElementById("quiz-live-score");
  const questionCountEl = document.getElementById("question-count");
  const progressPercentEl = document.getElementById("progress-percent");
  const progressBarEl = document.getElementById("progress-bar");
  const questionTagEl = document.getElementById("question-tag");
  const questionMascotEl = document.getElementById("question-mascot");
  const questionTextEl = document.getElementById("question-text");
  const questionImageArea = document.getElementById("question-image-area");
  const answersContainer = document.getElementById("answers-container");
  const feedbackEl = document.getElementById("feedback-box");
  const nextQuestionBtn = document.getElementById("next-question-btn");
  const hintTextEl = document.getElementById("hint-text");

  // Result DOM
  const resultAvatarEl = document.getElementById("result-avatar");
  const resultPlayerNameEl = document.getElementById("result-player-name");
  const resultTitleEl = document.getElementById("result-title");
  const resultMessageEl = document.getElementById("result-message");
  const finalScoreEl = document.getElementById("final-score");
  const finalMaxScoreEl = document.getElementById("final-max-score");
  const resultStarsEl = document.getElementById("result-stars");
  const resultRankNoticeEl = document.getElementById("result-rank-notice");
  const viewLeaderboardBtn = document.getElementById("view-leaderboard-btn");
  const playAgainBtn = document.getElementById("play-again-btn");
  const nextPlayerBtn = document.getElementById("next-player-btn");

  // State
  const AVATARS = ["🦊", "🦁", "🐼", "🐰", "🐻", "🐱", "🥑", "🍎", "🍓", "🥛", "🥕", "🍌"];
  const MASCOTS = ["🦊", "🦁", "🐼", "🐰", "🐻", "🐱"];

  let selectedAvatar = "🦊";
  let currentPlayerName = "";
  let selectedPacketKey = "acak";
  let activeQuestions = [];
  let currentIndex = 0;
  let currentScore = 0;
  let questionPoints = [];
  let isAnswered = false;
  let lastSavedEntryId = null;

  // Inisialisasi Avatar Picker
  function initAvatars() {
    avatarListContainer.innerHTML = "";
    AVATARS.forEach(avatar => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "avatar-choice" + (avatar === selectedAvatar ? " active" : "");
      btn.textContent = avatar;
      btn.setAttribute("aria-label", "Pilih avatar " + avatar);
      btn.addEventListener("click", () => {
        selectedAvatar = avatar;
        avatarListContainer.querySelectorAll(".avatar-choice").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        Sound.playSelect();
      });
      avatarListContainer.appendChild(btn);
    });
  }

  // Periksa tombol mulai kuis
  function updateStartButtonState() {
    const val = nameInput.value.trim();
    if (val.length >= 2) {
      startQuizBtn.disabled = false;
      startQuizBtn.classList.remove("disabled");
      startQuizBtn.innerHTML = "<span>Mulai Kuis Petualangan</span> ➜";
    } else {
      startQuizBtn.disabled = true;
      startQuizBtn.classList.add("disabled");
      startQuizBtn.innerHTML = "<span>Ketik Namamu Dulu, Ya!</span> ✍️";
    }
  }

  // Update Tampilan Tombol Efek Suara
  function updateSoundButton() {
    const muted = Sound.isMuted();
    headerSoundBtn.innerHTML = muted ? `<span>🔇</span> Efek: MATI` : `<span>🔊</span> Efek: AKTIF`;
    headerSoundBtn.classList.toggle("muted", muted);
  }

  // Update Tampilan Tombol Musik Latar
  function updateMusicButton() {
    const muted = Music.isMuted();
    headerMusicBtn.innerHTML = `<span>🎵</span> Musik: ${muted ? "MATI" : "AKTIF"}`;
    headerMusicBtn.classList.toggle("muted", muted);
  }

  // Ganti Layar
  function showScreen(screen) {
    [homeScreen, quizScreen, resultScreen].forEach(s => s.classList.add("hidden"));
    screen.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Bangun nilai poin agar total selalu tepat 100
  function buildPointValues(totalQuestions) {
    const base = Math.floor(100 / totalQuestions);
    const extra = 100 % totalQuestions;
    return Array.from({ length: totalQuestions }, (_, i) => base + (i < extra ? 1 : 0));
  }

  // Mulai Kuis
  function startQuiz(keepSamePlayer = false) {
    Sound.playClick();
    if (!keepSamePlayer) {
      currentPlayerName = nameInput.value.trim() || "Jagoan Hebat";
    }
    selectedPacketKey = packetSelect.value || "acak";
    activeQuestions = getQuestions(selectedPacketKey);

    currentIndex = 0;
    currentScore = 0;
    isAnswered = false;
    lastSavedEntryId = null;
    questionPoints = buildPointValues(activeQuestions.length);

    // Update Header Kuis
    quizPlayerBadge.innerHTML = `<span class="badge-icon">${selectedAvatar}</span> <strong>${escapeHtml(currentPlayerName)}</strong>`;
    const packInfo = PACKET_INFO[selectedPacketKey] || PACKET_INFO.acak;
    quizPacketBadge.textContent = packInfo.title;
    quizLiveScore.textContent = "0";

    showScreen(quizScreen);
    renderQuestion();
    Music.start();
  }

  // Render Soal Aktif
  function renderQuestion() {
    const q = activeQuestions[currentIndex];
    isAnswered = false;

    // Reset dan atur teks
    questionTagEl.textContent = `SOAL ${currentIndex + 1}`;
    questionMascotEl.textContent = MASCOTS[currentIndex % MASCOTS.length];
    questionTextEl.textContent = q.question;
    questionCountEl.textContent = `Soal ${currentIndex + 1} dari ${activeQuestions.length}`;

    const pct = Math.round(((currentIndex + 1) / activeQuestions.length) * 100);
    progressPercentEl.textContent = `${pct}%`;
    progressBarEl.style.width = `${pct}%`;

    feedbackEl.className = "feedback-box hidden";
    feedbackEl.innerHTML = "";
    hintTextEl.textContent = "Klik salah satu pilihan jawaban di bawah ya!";
    nextQuestionBtn.disabled = true;
    nextQuestionBtn.textContent = (currentIndex === activeQuestions.length - 1) ? "Lihat Hasil Akhir 🏆" : "Soal Berikutnya ➜";

    // Area Gambar (jika soal tebak gambar)
    if (q.image) {
      questionImageArea.innerHTML = `
        <div class="question-img-card">
          <img src="${q.image}" alt="${escapeHtml(q.imageAlt || 'Tebak gambar')}" class="question-svg-img">
          <p class="img-caption">🔍 Amati gambar rahasia di atas!</p>
        </div>
      `;
      questionImageArea.classList.remove("hidden");
    } else {
      questionImageArea.classList.add("hidden");
      questionImageArea.innerHTML = "";
    }

    // Render Pilihan Jawaban
    answersContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];
    q.options.forEach((optText, optIndex) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer-button";
      btn.innerHTML = `
        <span class="answer-letter">${letters[optIndex]}</span>
        <span class="answer-text">${escapeHtml(optText)}</span>
      `;
      btn.addEventListener("click", (e) => handleAnswerSelection(optIndex, btn, e));
      answersContainer.appendChild(btn);
    });
  }

  // Menangani Pilihan Jawaban
  function handleAnswerSelection(chosenIndex, clickedBtn, mouseEvent) {
    if (isAnswered) return;
    isAnswered = true;

    const q = activeQuestions[currentIndex];
    const isCorrect = chosenIndex === q.answer;
    const allButtons = answersContainer.querySelectorAll(".answer-button");

    allButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.answer) {
        btn.classList.add("correct");
      }
      if (idx === chosenIndex && !isCorrect) {
        btn.classList.add("wrong");
      }
    });

    if (isCorrect) {
      currentScore += questionPoints[currentIndex];
      quizLiveScore.textContent = currentScore;
      Sound.playCorrect();

      // Efek konfeti di posisi klik
      const rect = clickedBtn.getBoundingClientRect();
      const clickX = rect.left + rect.width / 2;
      const clickY = rect.top + rect.height / 2;
      Confetti.burst(clickX, clickY);

      feedbackEl.className = "feedback-box correct";
      feedbackEl.innerHTML = `
        <div class="feedback-header">
          <span class="feedback-icon">🎉</span>
          <strong>HOREE! JAWABANMU BENAR SEKALI!</strong>
        </div>
        <p class="feedback-desc">${escapeHtml(q.explanation)}</p>
      `;
    } else {
      Sound.playWrong();
      feedbackEl.className = "feedback-box wrong";
      feedbackEl.innerHTML = `
        <div class="feedback-header">
          <span class="feedback-icon">💡</span>
          <strong>HAMPIR TEPAT, TETAP SEMANGAT!</strong>
        </div>
        <p class="feedback-desc">${escapeHtml(q.explanation)}</p>
      `;
    }

    hintTextEl.textContent = "Jawaban terkunci! Tekan tombol di samping untuk lanjut.";
    nextQuestionBtn.disabled = false;
  }

  // Selesaikan Kuis & Buka Layar Hasil
  function finishQuiz() {
    Music.stop();
    Sound.playFanfare();
    Confetti.celebrate();

    const maxScore = 100;
    const percentage = Math.round((currentScore / maxScore) * 100);
    const packetInfo = PACKET_INFO[selectedPacketKey] || PACKET_INFO.acak;

    // Simpan ke Leaderboard
    const entry = Leaderboard.addEntry({
      name: currentPlayerName,
      avatar: selectedAvatar,
      score: currentScore,
      maxScore: maxScore,
      packetTitle: packetInfo.title
    });
    lastSavedEntryId = entry.id;

    // Dapatkan Peringkat Saat Ini
    const rank = Leaderboard.getRank(entry.id);

    // Update Tampilan Hasil
    resultAvatarEl.textContent = selectedAvatar;
    resultPlayerNameEl.textContent = currentPlayerName;
    finalScoreEl.textContent = currentScore;
    finalMaxScoreEl.textContent = maxScore;

    if (percentage === 100) {
      resultTitleEl.textContent = "Luar Biasa Sempurna! 🏆";
      resultMessageEl.textContent = `Hebat sekali ${currentPlayerName}! Semua jawabanmu benar. Kamu pantas menjadi Duta Jagoan Sarapan Sehat!`;
      resultStarsEl.textContent = "⭐⭐⭐⭐⭐";
    } else if (percentage >= 80) {
      resultTitleEl.textContent = "Keren Sekali, Jagoan! 🌟";
      resultMessageEl.textContent = `Skormu sangat tinggi! Kamu sudah memahami banyak hal penting tentang kebiasaan sarapan sehat.`;
      resultStarsEl.textContent = "⭐⭐⭐⭐";
    } else if (percentage >= 60) {
      resultTitleEl.textContent = "Bagus Sekali! 👍";
      resultMessageEl.textContent = `Kamu berhasil menjawab sebagian besar soal dengan baik. Terus pertahankan semangat belajarmu!`;
      resultStarsEl.textContent = "⭐⭐⭐";
    } else {
      resultTitleEl.textContent = "Tetap Semangat! 🌱";
      resultMessageEl.textContent = `Tidak apa-apa! Setiap mencoba membuatmu semakin pintar. Yuk, main lagi dan kalahkan skormu!`;
      resultStarsEl.textContent = "⭐⭐";
    }

    let medalEmoji = "🏅";
    if (rank === 1) medalEmoji = "🥇";
    else if (rank === 2) medalEmoji = "🥈";
    else if (rank === 3) medalEmoji = "🥉";

    resultRankNoticeEl.innerHTML = `
      <div class="rank-callout">
        <span class="callout-medal">${medalEmoji}</span>
        <div>
          <strong>Kamu Peringkat #${rank} di laptop ini!</strong>
          <p>Keren! Namamu sudah masuk ke papan juara.</p>
        </div>
      </div>
    `;

    playAgainBtn.textContent = selectedPacketKey === "acak"
      ? "🔄 Main Lagi (Soal Acak Baru)"
      : "🔄 Ulangi Kuis";

    showScreen(resultScreen);
  }

  // Buka Modal Papan Peringkat
  function openLeaderboardModal(highlightId) {
    Sound.playClick();
    Leaderboard.renderTable(modalLeaderboardTable, highlightId || lastSavedEntryId);
    leaderboardModal.classList.remove("hidden");
  }

  function closeLeaderboardModal() {
    Sound.playClick();
    leaderboardModal.classList.add("hidden");
  }

  // Event Listeners
  nameInput.addEventListener("input", updateStartButtonState);
  nameInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && !startQuizBtn.disabled) {
      startQuiz();
    }
  });

  startQuizBtn.addEventListener("click", () => startQuiz(false));

  headerSoundBtn.addEventListener("click", () => {
    Sound.toggleMute();
    updateSoundButton();
  });

  headerMusicBtn.addEventListener("click", () => {
    const muted = Music.toggleMute();
    updateMusicButton();
    if (!muted && !quizScreen.classList.contains("hidden")) {
      Music.start();
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      Music.stop();
    } else if (!quizScreen.classList.contains("hidden") && !Music.isMuted()) {
      Music.start();
    }
  });

  headerLeaderboardBtn.addEventListener("click", () => openLeaderboardModal());
  viewLeaderboardBtn.addEventListener("click", () => openLeaderboardModal(lastSavedEntryId));
  closeLeaderboardBtn.addEventListener("click", closeLeaderboardModal);

  // Tutup modal jika klik di latar belakang
  leaderboardModal.addEventListener("click", (e) => {
    if (e.target === leaderboardModal) {
      closeLeaderboardModal();
    }
  });

  // Hapus Leaderboard (Fitur Guru/Pengawas)
  clearLeaderboardBtn.addEventListener("click", () => {
    const conf = window.confirm("Bapak/Ibu Guru, apakah yakin ingin menghapus semua daftar riwayat peringkat di laptop ini?");
    if (conf) {
      Leaderboard.clear();
      Leaderboard.renderTable(modalLeaderboardTable, null);
      alert("Riwayat peringkat berhasil dikosongkan.");
    }
  });

  // Tombol Soal Berikutnya
  nextQuestionBtn.addEventListener("click", () => {
    Sound.playClick();
    if (currentIndex < activeQuestions.length - 1) {
      currentIndex++;
      renderQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      finishQuiz();
    }
  });

  // Main Lagi (Pemain Sama, Soal Baru)
  playAgainBtn.addEventListener("click", () => {
    startQuiz(true);
  });

  // Ganti Pemain Baru
  nextPlayerBtn.addEventListener("click", () => {
    Sound.playClick();
    Music.stop();
    lastSavedEntryId = null;
    nameInput.value = "";
    updateStartButtonState();
    showScreen(homeScreen);
    setTimeout(() => {
      nameInput.focus();
    }, 300);
  });

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
  }

  // Inisialisasi Saat Buka Halaman
  initAvatars();
  updateStartButtonState();
  updateSoundButton();
  updateMusicButton();
})();
