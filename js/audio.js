// Audio Engine Menggunakan Web Audio API (100% Offline & Tanpa File Eksternal)

const Sound = (function() {
  let ctx = null;
  let isMuted = false;

  try {
    isMuted = localStorage.getItem("sarapan_sound_muted") === "true";
  } catch (e) {
    isMuted = false;
  }

  function getCtx() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        ctx = new AudioCtx();
      }
    }
    if (ctx && ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  return {
    getContext() {
      return getCtx();
    },

    isMuted() {
      return isMuted;
    },

    toggleMute() {
      isMuted = !isMuted;
      try {
        localStorage.setItem("sarapan_sound_muted", isMuted ? "true" : "false");
      } catch (e) {
        // Abaikan jika penyimpanan tidak tersedia
      }
      return isMuted;
    },

    // Nada letupan saat klik tombol
    playClick() {
      if (isMuted) return;
      const ac = getCtx();
      if (!ac) return;
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      const now = ac.currentTime;

      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.08);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(ac.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    },

    // Nada lonceng ceria saat memilih avatar
    playSelect() {
      if (isMuted) return;
      const ac = getCtx();
      if (!ac) return;
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      const now = ac.currentTime;

      osc.type = "triangle";
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.12); // E5

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(ac.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    },

    // Suara Benar: Chime nada ceria bertingkat
    playCorrect() {
      if (isMuted) return;
      const ac = getCtx();
      if (!ac) return;
      const now = ac.currentTime;

      // Nada arpeggio C Mayor gembira: C5, E5, G5, C6
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = ac.createOscillator();
        const gain = ac.createGain();
        const noteStart = now + idx * 0.08;
        const noteDuration = 0.28;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, noteStart);

        gain.gain.setValueAtTime(0.001, noteStart);
        gain.gain.linearRampToValueAtTime(0.28, noteStart + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + noteDuration);

        osc.connect(gain);
        gain.connect(ac.destination);
        osc.start(noteStart);
        osc.stop(noteStart + noteDuration);
      });

      // Lonceng kemilau (sparkle chime)
      const sparkle = ac.createOscillator();
      const spGain = ac.createGain();
      sparkle.type = "triangle";
      sparkle.frequency.setValueAtTime(1318.51, now + 0.28); // E6
      spGain.gain.setValueAtTime(0.18, now + 0.28);
      spGain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
      sparkle.connect(spGain);
      spGain.connect(ac.destination);
      sparkle.start(now + 0.28);
      sparkle.stop(now + 0.65);
    },

    // Suara Salah: Kartun boing lembut bersahabat (tidak menakut-nakuti anak)
    playWrong() {
      if (isMuted) return;
      const ac = getCtx();
      if (!ac) return;
      const now = ac.currentTime;

      const osc = ac.createOscillator();
      const gain = ac.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(290, now);
      osc.frequency.exponentialRampToValueAtTime(170, now + 0.25);

      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(ac.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    },

    // Suara Fanfare Kemenangan saat kuis selesai
    playFanfare() {
      if (isMuted) return;
      const ac = getCtx();
      if (!ac) return;
      const now = ac.currentTime;

      // Melodi perayaan kemenangan: G4, C5, E5, G5, C6 (tahan panjang)
      const melody = [
        { f: 392.00, t: 0.00, d: 0.14 },
        { f: 523.25, t: 0.14, d: 0.14 },
        { f: 659.25, t: 0.28, d: 0.14 },
        { f: 783.99, t: 0.42, d: 0.20 },
        { f: 1046.50, t: 0.62, d: 0.65 }
      ];

      melody.forEach(item => {
        const osc = ac.createOscillator();
        const gain = ac.createGain();
        const noteStart = now + item.t;

        osc.type = "triangle";
        osc.frequency.setValueAtTime(item.f, noteStart);

        gain.gain.setValueAtTime(0.001, noteStart);
        gain.gain.linearRampToValueAtTime(0.3, noteStart + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + item.d);

        osc.connect(gain);
        gain.connect(ac.destination);
        osc.start(noteStart);
        osc.stop(noteStart + item.d);
      });
    }
  };
})();
