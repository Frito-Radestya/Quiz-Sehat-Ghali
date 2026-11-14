// Soundtrack Permainan (Original Chiptune/EDM, 100% Offline)
// Nada gembira bergaya game lari-lari, dibuat sendiri dengan Web Audio API.
// Bukan lagu berhak cipta: aman dipakai untuk media pembelajaran.

const Music = (function() {
  const STORAGE_KEY = "sarapan_music_muted";
  const BPM = 128;
  const STEP = 60 / BPM / 4;        // durasi 1/16 nada
  const TOTAL_STEPS = 128;          // 8 bar x 16 langkah
  const MUSIC_VOLUME = 1.0;         // volume maksimal; turunkan bila terlalu keras

  let isMuted = false;
  try {
    isMuted = localStorage.getItem(STORAGE_KEY) === "true";
  } catch (e) {
    isMuted = false;
  }

  let ac = null;
  let master = null;
  let compressor = null;
  let leadDelay = null;
  let noiseBuffer = null;
  let isPlaying = false;
  let schedulerId = null;
  let nextNoteTime = 0;
  let stepIndex = 0;

  // Progresi akor ceria: C - G - Am - F (masing-masing 2 bar)
  const CHORDS = [
    { bass: 36, melody: [72, 76, 79, 84, 79, 76, 72, 76] }, // C mayor
    { bass: 43, melody: [67, 71, 74, 79, 74, 71, 67, 71] }, // G mayor
    { bass: 45, melody: [69, 72, 76, 81, 76, 72, 69, 72] }, // A minor
    { bass: 41, melody: [65, 69, 72, 77, 72, 69, 65, 69] }  // F mayor
  ];
  const PROGRESSION = [0, 0, 1, 1, 2, 2, 3, 3];

  function midiToFreq(note) {
    return 440 * Math.pow(2, (note - 69) / 12);
  }

  function init() {
    ac = Sound.getContext();
    if (!ac) return false;

    master = ac.createGain();
    master.gain.value = 0.0001;

    compressor = ac.createDynamicsCompressor();
    compressor.threshold.value = -8;
    compressor.knee.value = 10;
    compressor.ratio.value = 2.5;
    compressor.attack.value = 0.005;
    compressor.release.value = 0.25;

    master.connect(compressor);
    compressor.connect(ac.destination);

    // Delay lembut untuk melodi agar terasa lebar dan "game"
    leadDelay = ac.createDelay(1.5);
    leadDelay.delayTime.value = STEP * 3;
    const feedback = ac.createGain();
    feedback.gain.value = 0.18;
    leadDelay.connect(feedback);
    feedback.connect(leadDelay);
    leadDelay.connect(master);

    // Buffer noise untuk snare dan hi-hat
    const length = Math.floor(ac.sampleRate * 0.5);
    noiseBuffer = ac.createBuffer(1, length, ac.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return true;
  }

  function playTone(freq, time, duration, type, peak, destination) {
    const osc = ac.createOscillator();
    const gain = ac.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(destination || master);
    osc.start(time);
    osc.stop(time + duration + 0.02);
  }

  function playKick(time) {
    const osc = ac.createOscillator();
    const gain = ac.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(45, time + 0.12);

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.38, time + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.18);

    osc.connect(gain);
    gain.connect(master);
    osc.start(time);
    osc.stop(time + 0.2);
  }

  function playSnare(time) {
    const noise = ac.createBufferSource();
    const filter = ac.createBiquadFilter();
    const gain = ac.createGain();

    noise.buffer = noiseBuffer;
    filter.type = "highpass";
    filter.frequency.value = 1400;

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.15, time + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.13);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    noise.start(time);
    noise.stop(time + 0.15);

    playTone(180, time, 0.08, "triangle", 0.06, master);
  }

  function playHat(time, isOpen) {
    const noise = ac.createBufferSource();
    const filter = ac.createBiquadFilter();
    const gain = ac.createGain();
    const duration = isOpen ? 0.14 : 0.035;

    noise.buffer = noiseBuffer;
    filter.type = "highpass";
    filter.frequency.value = 7000;

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.045, time + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    noise.start(time);
    noise.stop(time + duration + 0.02);
  }

  function playBass(note, time, duration) {
    playTone(midiToFreq(note), time, duration, "triangle", 0.15, master);
  }

  function playLead(note, time) {
    const freq = midiToFreq(note);
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    const send = ac.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.12, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.14);

    osc.connect(gain);
    gain.connect(master);

    send.gain.value = 0.16;
    gain.connect(send);
    send.connect(leadDelay);

    osc.start(time);
    osc.stop(time + 0.16);
  }

  function playSparkle(time) {
    [84, 88, 91].forEach((note, index) => {
      playTone(midiToFreq(note), time + index * 0.035, 0.22, "sine", 0.04, master);
    });
  }

  function scheduleStep(time) {
    const bar = Math.floor(stepIndex / 16) % 8;
    const step = stepIndex % 16;
    const chord = CHORDS[PROGRESSION[bar]];

    // Drum: four-on-the-floor + hi-hat 1/8
    if (step % 4 === 0) playKick(time);
    if (step % 8 === 4) playSnare(time);
    if (step % 2 === 0) playHat(time, step % 8 === 6);

    // Bass: ketukan utama + pickup di akhir bar
    if (step % 4 === 0 || step === 14) {
      playBass(chord.bass, time, step === 14 ? 0.12 : 0.16);
    }

    // Melodi arpeggio 1/8, dengan variasi oktaf di bar kedua
    if (step % 2 === 0) {
      let note = chord.melody[step / 2];
      if (bar % 2 === 1 && (step === 12 || (bar === 7 && step === 14))) {
        note += 12;
      }
      playLead(note, time);
    }

    // Kilau kecil di awal bagian
    if (step === 0 && (bar === 0 || bar === 4)) {
      playSparkle(time);
    }
  }

  function scheduler() {
    if (!isPlaying || !ac) return;

    // Jika tab sempat tidur, jangan jadwalkan tumpukan nada di masa lalu
    if (nextNoteTime < ac.currentTime - 0.2) {
      nextNoteTime = ac.currentTime + 0.05;
    }

    while (nextNoteTime < ac.currentTime + 0.18) {
      scheduleStep(nextNoteTime);
      nextNoteTime += STEP;
      stepIndex = (stepIndex + 1) % TOTAL_STEPS;
    }
  }

  return {
    isMuted() {
      return isMuted;
    },

    isPlaying() {
      return isPlaying;
    },

    start() {
      if (isMuted || isPlaying) return;
      if (!ac && !init()) return;

      if (ac.state === "suspended") {
        ac.resume().catch(() => {});
      }

      isPlaying = true;
      stepIndex = 0;
      nextNoteTime = ac.currentTime + 0.1;

      const now = ac.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(0.0001, now);
      master.gain.linearRampToValueAtTime(MUSIC_VOLUME, now + 0.5);

      scheduler();
      schedulerId = setInterval(scheduler, 30);
    },

    stop() {
      if (!isPlaying) return;
      isPlaying = false;

      if (schedulerId) {
        clearInterval(schedulerId);
        schedulerId = null;
      }

      if (ac && master) {
        const now = ac.currentTime;
        master.gain.cancelScheduledValues(now);
        master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), now);
        master.gain.linearRampToValueAtTime(0.0001, now + 0.25);
      }
    },

    toggleMute() {
      isMuted = !isMuted;
      try {
        localStorage.setItem(STORAGE_KEY, isMuted ? "true" : "false");
      } catch (e) {
        // Abaikan jika penyimpanan tidak tersedia
      }
      if (isMuted) {
        this.stop();
      }
      return isMuted;
    }
  };
})();
