// Sistem Peringkat (Leaderboard) Multi-Pemain Satu Laptop

const Leaderboard = (function() {
  const STORAGE_KEY = "sarapan_quiz_leaderboard";

  function getAll() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveAll(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      // Storage error
    }
  }

  return {
    getAll,

    addEntry({ name, avatar, score, maxScore, packetTitle }) {
      const list = getAll();
      const percent = Math.round((score / maxScore) * 100);
      const now = new Date();
      const timeStr = `${now.getDate()} ${["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"][now.getMonth()]} • ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      const entry = {
        id: "score_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
        name: name.trim() || "Jagoan Hebat",
        avatar: avatar || "🥑",
        score: score,
        maxScore: maxScore,
        percent: percent,
        packetTitle: packetTitle || "Kuis Sarapan Sehat",
        timestamp: Date.now(),
        timeStr: timeStr
      };

      list.push(entry);

      // Urutkan: Skor tertinggi di atas. Jika skor sama, yang lebih awal di atas.
      list.sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        return a.timestamp - b.timestamp;
      });

      saveAll(list);
      return entry;
    },

    getRank(entryId) {
      const list = getAll();
      const index = list.findIndex(item => item.id === entryId);
      return index !== -1 ? index + 1 : 1;
    },

    clear() {
      localStorage.removeItem(STORAGE_KEY);
    },

    renderTable(targetElement, highlightId) {
      const list = getAll();
      if (!targetElement) return;

      if (list.length === 0) {
        targetElement.innerHTML = `
          <div class="empty-leaderboard">
            <div class="empty-icon">🎒</div>
            <h3>Belum Ada Peringkat</h3>
            <p>Ayo jadi pemain pertama yang mencatatkan namamu di tangga juara!</p>
          </div>
        `;
        return;
      }

      let html = `
        <div class="leaderboard-table-wrap">
          <table class="leaderboard-table">
            <thead>
              <tr>
                <th class="col-rank">Peringkat</th>
                <th class="col-name">Nama Pemain</th>
                <th class="col-score">Skor</th>
                <th class="col-packet">Paket Soal</th>
                <th class="col-time">Waktu</th>
              </tr>
            </thead>
            <tbody>
      `;

      list.forEach((item, index) => {
        const rank = index + 1;
        let rankBadge = `<span class="rank-num">#${rank}</span>`;
        let rowClass = "";

        if (rank === 1) {
          rankBadge = `<span class="rank-badge gold" aria-label="Juara 1" title="Juara 1"><span class="rank-medal" aria-hidden="true">🥇</span><span class="rank-label">Juara 1</span></span>`;
          rowClass = "row-first";
        } else if (rank === 2) {
          rankBadge = `<span class="rank-badge silver" aria-label="Juara 2" title="Juara 2"><span class="rank-medal" aria-hidden="true">🥈</span><span class="rank-label">Juara 2</span></span>`;
          rowClass = "row-second";
        } else if (rank === 3) {
          rankBadge = `<span class="rank-badge bronze" aria-label="Juara 3" title="Juara 3"><span class="rank-medal" aria-hidden="true">🥉</span><span class="rank-label">Juara 3</span></span>`;
          rowClass = "row-third";
        }

        const isHighlight = item.id === highlightId;
        if (isHighlight) {
          rowClass += " row-highlight";
        }

        html += `
          <tr class="${rowClass}">
            <td class="col-rank">${rankBadge}</td>
            <td class="col-name">
              <div class="player-cell">
                <span class="player-avatar">${item.avatar}</span>
                <div class="player-info">
                  <span class="player-name">${escapeHtml(item.name)}</span>
                  <span class="player-meta">${escapeHtml(getShortPacket(item.packetTitle))} • ${item.timeStr}</span>
                  ${isHighlight ? '<span class="you-badge">Skor Kamu Baru Saja! ✨</span>' : ''}
                </div>
              </div>
            </td>
            <td class="col-score">
              <span class="score-pill-value">${item.score} <small>/ ${item.maxScore}</small></span>
            </td>
            <td class="col-packet"><span class="packet-tag" title="${escapeHtml(item.packetTitle)}">${escapeHtml(getShortPacket(item.packetTitle))}</span></td>
            <td class="col-time">${item.timeStr}</td>
          </tr>
        `;
      });

      html += `
            </tbody>
          </table>
        </div>
      `;

      targetElement.innerHTML = html;
    }
  };

  function getShortPacket(title) {
    const text = String(title || "");
    const packet = text.match(/Paket\s*\d/i);
    if (packet) return packet[0].replace(/\s+/g, " ");
    if (/maraton/i.test(text)) return "Maraton";
    if (/acak/i.test(text)) return "Acak";
    return text.replace(/^[^\w]+/, "").slice(0, 18) || "Kuis";
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
  }
})();
