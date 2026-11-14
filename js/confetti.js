// Engine Konfeti Ringan & Ceria untuk Anak SD (Zero-Dependency)

const Confetti = (function() {
  let canvas = null;
  let ctx = null;
  let particles = [];
  let animId = null;

  const COLORS = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93", "#ff924c", "#4cc9f0"];

  function init() {
    canvas = document.getElementById("confetti-canvas");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = "confetti-canvas";
      document.body.appendChild(canvas);
    }
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    ctx = canvas.getContext("2d");
    resize();
    window.addEventListener("resize", resize);
  }

  function resize() {
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }

  function createParticle(x, y, isBig) {
    const angle = Math.random() * Math.PI * 2;
    const speed = isBig ? (Math.random() * 8 + 4) : (Math.random() * 5 + 3);
    return {
      x: x !== undefined ? x : Math.random() * canvas.width,
      y: y !== undefined ? y : -10,
      vx: Math.cos(angle) * speed,
      vy: (Math.sin(angle) * speed) - (isBig ? 4 : 2),
      size: Math.random() * 8 + 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      gravity: 0.22,
      drag: 0.98,
      life: 1.0,
      decay: Math.random() * 0.015 + 0.012,
      isStar: Math.random() > 0.6
    };
  }

  function update() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.rotation += p.vRot;
      p.life -= p.decay;

      if (p.life <= 0 || p.y > canvas.height + 20) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;

      if (p.isStar) {
        ctx.beginPath();
        for (let s = 0; s < 5; s++) {
          ctx.lineTo(Math.cos((18 + s * 72) * 0.01745) * p.size, -Math.sin((18 + s * 72) * 0.01745) * p.size);
          ctx.lineTo(Math.cos((54 + s * 72) * 0.01745) * (p.size / 2), -Math.sin((54 + s * 72) * 0.01745) * (p.size / 2));
        }
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      }
      ctx.restore();
    }

    if (particles.length > 0) {
      animId = requestAnimationFrame(update);
    } else {
      animId = null;
    }
  }

  return {
    burst(x, y) {
      if (!canvas) init();
      const originX = x || window.innerWidth / 2;
      const originY = y || window.innerHeight / 2;
      for (let i = 0; i < 40; i++) {
        particles.push(createParticle(originX, originY, false));
      }
      if (!animId) update();
    },

    celebrate() {
      if (!canvas) init();
      // Selebrasi penuh saat menyelesaikan kuis
      let count = 0;
      const interval = setInterval(() => {
        for (let i = 0; i < 25; i++) {
          particles.push(createParticle(Math.random() * canvas.width, -10, true));
        }
        if (!animId) update();
        count++;
        if (count >= 5) clearInterval(interval);
      }, 200);
    }
  };
})();
