// Chemistry Learning Mobile App - Core Logic
document.addEventListener("DOMContentLoaded", () => {
  // State
  let currentTab = "roadmap";
  let activeFilter = "all";
  let searchQuery = "";
  let completedLessons = JSON.parse(localStorage.getItem("chem_completed_lessons") || "[]");
  let activeLesson = null;
  let currentFlashcardIdx = 0;
  let flashcardFlipped = false;

  // DOM Elements
  const navBtns = document.querySelectorAll(".nav-item");
  const filterChips = document.querySelectorAll(".chip");
  const progressFill = document.getElementById("progress-fill");
  const progressText = document.getElementById("progress-text");
  const searchInput = document.getElementById("search-input");
  const roadmapSection = document.getElementById("roadmap-section-header");

  const modalOverlay = document.getElementById("modal-overlay");
  const modalSheet = document.getElementById("modal-sheet");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");
  const modalClose = document.getElementById("modal-close");
  const modalToggleComplete = document.getElementById("modal-toggle-complete");

  const themeToggle = document.getElementById("theme-toggle");

  // Theme Init
  const savedTheme = localStorage.getItem("chem_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("chem_theme", next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(theme) {
    themeToggle.innerHTML = theme === "dark" ? "☀️" : "🌙";
  }

  // Update Progress Bar
  function updateProgress() {
    let totalLessons = 0;
    CHEMISTRY_DATA.stages.forEach(s => totalLessons += s.lessons.length);
    const completedCount = completedLessons.length;
    const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
    
    if (progressFill) progressFill.style.width = `${percent}%`;
    if (progressText) progressText.innerText = `${completedCount}/${totalLessons} bài (${percent}%)`;
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderRoadmap();
    });
  }

  // Render Roadmap List
  function renderRoadmap() {
    const listContainer = document.getElementById("roadmap-list");
    if (!listContainer) return;
    listContainer.innerHTML = "";

    let totalMatches = 0;

    CHEMISTRY_DATA.stages.forEach(stage => {
      // Filter by stage
      if (activeFilter !== "all" && stage.id !== activeFilter) {
        return;
      }

      // Filter lessons by search query
      const matchingLessons = stage.lessons.filter(lesson => {
        if (!searchQuery) return true;
        const textToSearch = (lesson.title + " " + lesson.summary + " " + (lesson.keyTakeaways ? lesson.keyTakeaways.join(" ") : "")).toLowerCase();
        return textToSearch.includes(searchQuery);
      });

      if (matchingLessons.length === 0) return;
      totalMatches += matchingLessons.length;

      const stageBlock = document.createElement("div");
      stageBlock.className = "stage-block";

      const badge = document.createElement("div");
      badge.className = "stage-badge";
      badge.style.backgroundColor = stage.color;
      badge.innerHTML = `<span>📚 ${stage.grade}</span> • <span>${stage.tag}</span>`;

      const title = document.createElement("h3");
      title.className = "stage-title";
      title.innerText = stage.title;

      const desc = document.createElement("p");
      desc.className = "stage-desc";
      desc.innerText = stage.desc;

      const lessonsWrap = document.createElement("div");
      lessonsWrap.className = "lessons-list";

      matchingLessons.forEach(lesson => {
        const isDone = completedLessons.includes(lesson.id);
        const card = document.createElement("div");
        card.className = "lesson-card";
        card.innerHTML = `
          <div class="lesson-info">
            <div class="lesson-meta">
              <span class="tag-level">${lesson.level}</span>
              <span class="tag-time">⏱️ ${lesson.readTime}</span>
            </div>
            <h4 class="lesson-card-title">${lesson.title}</h4>
            <p class="lesson-card-desc">${lesson.summary}</p>
          </div>
          <div class="lesson-status ${isDone ? 'completed' : ''}">
            ${isDone ? '✓' : ''}
          </div>
        `;

        card.addEventListener("click", () => openLesson(lesson));
        lessonsWrap.appendChild(card);
      });

      stageBlock.appendChild(badge);
      stageBlock.appendChild(title);
      stageBlock.appendChild(desc);
      stageBlock.appendChild(lessonsWrap);
      listContainer.appendChild(stageBlock);
    });

    if (totalMatches === 0) {
      listContainer.innerHTML = `
        <div style="text-align:center; padding: 40px 10px; color: var(--text-muted);">
          <div style="font-size:36px; margin-bottom:8px;">🔍</div>
          <p>Không tìm thấy bài học nào phù hợp với từ khóa "<strong>${searchQuery}</strong>".</p>
        </div>
      `;
    }

    updateProgress();
  }

  // Open Lesson Detail Modal
  function openLesson(lesson) {
    activeLesson = lesson;
    modalTitle.innerText = lesson.title;
    const isDone = completedLessons.includes(lesson.id);

    // Format Markdown & Chemistry Notation
    let formattedContent = formatLessonContent(lesson.content);

    // Takeaways box
    let takeawaysHtml = "";
    if (lesson.keyTakeaways && lesson.keyTakeaways.length > 0) {
      takeawaysHtml = `
        <div class="takeaway-box">
          <div class="takeaway-title">⚡ Điểm cốt lõi cần nhớ:</div>
          <ul>
            ${lesson.keyTakeaways.map(t => `<li>${formatLessonContent(t)}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    // Mini Quiz box
    let quizHtml = "";
    if (lesson.quiz && lesson.quiz.length > 0) {
      quizHtml = `
        <div class="quiz-box">
          <h4 style="font-size:15px; margin-bottom:12px; color:var(--primary); font-weight:700;">🧪 Trắc nghiệm củng cố bài học</h4>
          ${lesson.quiz.map((q, qIdx) => `
            <div style="margin-bottom:18px;">
              <p class="quiz-q">${qIdx + 1}. ${formatLessonContent(q.question)}</p>
              <div class="quiz-options">
                ${q.options.map((opt, oIdx) => `
                  <button class="quiz-opt" data-q="${qIdx}" data-opt="${oIdx}">${formatLessonContent(opt)}</button>
                `).join("")}
              </div>
              <div class="quiz-explain" id="explain-${qIdx}">
                <strong>Giải thích:</strong> ${formatLessonContent(q.explanation)}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }

    modalContent.innerHTML = formattedContent + takeawaysHtml + quizHtml;

    // Trigger KaTeX render if library is loaded
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(modalContent, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      } catch (err) {
        console.warn("KaTeX render error:", err);
      }
    }

    // Quiz options click event
    const optBtns = modalContent.querySelectorAll(".quiz-opt");
    optBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const qIdx = parseInt(btn.getAttribute("data-q"));
        const oIdx = parseInt(btn.getAttribute("data-opt"));
        const qData = lesson.quiz[qIdx];
        const parent = btn.parentElement;
        const allOpts = parent.querySelectorAll(".quiz-opt");
        const expBox = modalContent.querySelector(`#explain-${qIdx}`);

        allOpts.forEach(b => b.disabled = true);

        if (oIdx === qData.correctIndex) {
          btn.classList.add("correct");
        } else {
          btn.classList.add("wrong");
          allOpts[qData.correctIndex].classList.add("correct");
        }
        if (expBox) expBox.style.display = "block";
      });
    });

    updateCompleteButton(isDone);
    modalOverlay.classList.add("active");
  }

  function updateCompleteButton(isDone) {
    if (isDone) {
      modalToggleComplete.innerHTML = `✓ Đã hiểu & Hoàn thành (Bấm để hủy)`;
      modalToggleComplete.style.backgroundColor = "var(--secondary)";
    } else {
      modalToggleComplete.innerHTML = `Đánh dấu đã hiểu bài này`;
      modalToggleComplete.style.backgroundColor = "var(--primary)";
    }
  }

  // Format chemical notation & markdown (with offline KaTeX/HTML fallback)
  function formatLessonContent(text) {
    if (!text) return "";

    // 1. If KaTeX is available in window, let KaTeX handle $ and $$, otherwise convert cleanly
    const hasKaTeX = typeof window.katex !== "undefined";

    let html = text
      // Headings
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
      .replace(/\n\s*-\s*(.*)/gim, '<li>$1</li>');

    if (!hasKaTeX) {
      // Offline fallback: transform LaTeX to clean HTML
      html = html
        .replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
          return `<div class="chem-equation-box">${cleanLatexToHtml(formula)}</div>`;
        })
        .replace(/\$(.*?)\$/g, (match, formula) => {
          return `<strong>${cleanLatexToHtml(formula)}</strong>`;
        });
    }

    // Format list tags
    html = html.replace(/(<li>[\s\S]*?<\/li>)/gm, '<ul>$1</ul>');
    html = html.replace(/<\/ul>\s*<ul>/g, '');

    // Convert newlines in paragraphs
    html = html.replace(/\n\n/g, '<br><br>');

    return html;
  }

  // Fallback LaTeX to HTML converter
  function cleanLatexToHtml(str) {
    return str
      .replace(/\\text\{([^}]*)\}/g, '$1')
      .replace(/\\mathbf\{([^}]*)\}/g, '<strong>$1</strong>')
      .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '($1 / $2)')
      .replace(/\\Delta_r H\^\\circ_\{298\}/g, 'ΔᵣH°₂₉₈')
      .replace(/\\Delta H/g, 'ΔH')
      .replace(/\\rightarrow/g, ' → ')
      .replace(/\\xrightleftharpoons\[(.*?)\]\{(.*?)\}/g, ' ⇌ ')
      .replace(/\\xrightleftharpoons\{(.*?)\}/g, ' ⇌ ')
      .replace(/\\rightleftharpoons/g, ' ⇌ ')
      .replace(/\\xrightarrow\{([^}]*)\}/g, ' ⎯($1)→ ')
      .replace(/\\downarrow/g, ' ↓')
      .replace(/\\uparrow/g, ' ↑')
      .replace(/\\approx/g, ' ≈ ')
      .replace(/\\times/g, ' × ')
      .replace(/\\cdot/g, ' · ')
      .replace(/\\ge/g, ' ≥ ')
      .replace(/\\le/g, ' ≤ ')
      .replace(/\\alpha/g, 'α')
      .replace(/\\beta/g, 'β')
      .replace(/\\pi/g, 'π')
      .replace(/\\sigma/g, 'σ')
      .replace(/\\sum/g, '∑')
      .replace(/\\implies/g, ' ⇒ ')
      .replace(/\\iff/g, ' ⇔ ')
      .replace(/\\Large/g, '')
      .replace(/\\quad/g, ' ')
      .replace(/\\,/g, ' ')
      // Superscripts & Subscripts
      .replace(/\^\{([^}]*)\}/g, '<sup>$1</sup>')
      .replace(/\^([0-9\+\-]+)/g, '<sup>$1</sup>')
      .replace(/_\{([^}]*)\}/g, '<sub>$1</sub>')
      .replace(/_([0-9a-zA-Z]+)/g, '<sub>$1</sub>');
  }

  // Close Modal
  modalClose.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  });

  // Mark Completed Button Click
  modalToggleComplete.addEventListener("click", () => {
    if (!activeLesson) return;
    const idx = completedLessons.indexOf(activeLesson.id);
    if (idx > -1) {
      completedLessons.splice(idx, 1);
      updateCompleteButton(false);
    } else {
      completedLessons.push(activeLesson.id);
      updateCompleteButton(true);
    }
    localStorage.setItem("chem_completed_lessons", JSON.stringify(completedLessons));
    renderRoadmap();
  });

  // Filter Chips Click
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeFilter = chip.getAttribute("data-filter");
      renderRoadmap();
    });
  });

  // Bottom Navigation Switching
  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-tab");
      currentTab = target;

      // Show/hide views
      document.querySelectorAll(".tab-view").forEach(v => v.style.display = "none");
      const activeView = document.getElementById(`tab-${target}`);
      if (activeView) activeView.style.display = "block";

      // Show/hide filter and search based on tab
      const filterBar = document.getElementById("filter-bar");
      const searchBox = document.getElementById("search-box-wrap");
      const progressBox = document.getElementById("progress-card-wrap");

      if (target === "roadmap") {
        if (filterBar) filterBar.style.display = "flex";
        if (searchBox) searchBox.style.display = "block";
        if (progressBox) progressBox.style.display = "block";
      } else {
        if (filterBar) filterBar.style.display = "none";
        if (searchBox) searchBox.style.display = "none";
        if (progressBox) progressBox.style.display = "none";
      }

      if (target === "tools") renderPeriodicTable();
      if (target === "lookups") renderLookups();
      if (target === "flashcards") renderFlashcards();
      if (target === "quiz") renderGeneralQuiz();
    });
  });

  // ================= CÔNG CỤ TÍNH NHANH =================
  // 1. Tính Mol & Thể tích khí
  const calcBtnMol = document.getElementById("calc-btn-mol");
  if (calcBtnMol) {
    calcBtnMol.addEventListener("click", () => {
      const mass = parseFloat(document.getElementById("calc-mass")?.value);
      const molM = parseFloat(document.getElementById("calc-molarmass")?.value);
      const resultBox = document.getElementById("calc-result-mol");

      if (isNaN(mass) || isNaN(molM) || molM <= 0) {
        resultBox.innerText = "Vui lòng nhập đúng khối lượng m (gam) và M (g/mol).";
        resultBox.style.display = "block";
        return;
      }

      const mol = mass / molM;
      const v_cu = mol * 22.4;
      const v_moi = mol * 24.79;

      resultBox.innerHTML = `
        • Số mol: <strong>${mol.toFixed(4)} mol</strong><br>
        • Thể tích khí (Chuẩn cũ 0°C, 1 atm): <strong>${v_cu.toFixed(3)} lít</strong><br>
        • Thể tích khí (Chuẩn mới 25°C, 1 bar): <strong>${v_moi.toFixed(3)} lít</strong>
      `;
      resultBox.style.display = "block";
    });
  }

  // 2. Tính Nồng độ Mol (CM)
  const calcBtnCm = document.getElementById("calc-btn-cm");
  if (calcBtnCm) {
    calcBtnCm.addEventListener("click", () => {
      const n = parseFloat(document.getElementById("calc-cm-n")?.value);
      const v_ml = parseFloat(document.getElementById("calc-cm-v")?.value);
      const resultBox = document.getElementById("calc-result-cm");

      if (isNaN(n) || isNaN(v_ml) || v_ml <= 0) {
        resultBox.innerText = "Vui lòng nhập đúng số mol và thể tích ml.";
        resultBox.style.display = "block";
        return;
      }

      const v_lit = v_ml / 1000;
      const cm = n / v_lit;

      resultBox.innerHTML = `Nồng độ mol (CM): <strong>${cm.toFixed(3)} M (mol/lít)</strong>`;
      resultBox.style.display = "block";
    });
  }

  // 3. Tính Nồng độ Phần trăm (C%)
  const calcBtnCp = document.getElementById("calc-btn-cp");
  if (calcBtnCp) {
    calcBtnCp.addEventListener("click", () => {
      const m_ct = parseFloat(document.getElementById("calc-cp-mct")?.value);
      const m_dd = parseFloat(document.getElementById("calc-cp-mdd")?.value);
      const resultBox = document.getElementById("calc-result-cp");

      if (isNaN(m_ct) || isNaN(m_dd) || m_dd <= 0) {
        resultBox.innerText = "Vui lòng nhập đúng khối lượng chất tan và khối lượng dung dịch.";
        resultBox.style.display = "block";
        return;
      }

      const cp = (m_ct / m_dd) * 100;
      resultBox.innerHTML = `Nồng độ phần trăm (C%): <strong>${cp.toFixed(2)} %</strong>`;
      resultBox.style.display = "block";
    });
  }

  // 4. Máy tính pH
  const calcBtnPh = document.getElementById("calc-btn-ph");
  if (calcBtnPh) {
    calcBtnPh.addEventListener("click", () => {
      const hConc = parseFloat(document.getElementById("calc-h-conc")?.value);
      const resultBox = document.getElementById("calc-result-ph");

      if (isNaN(hConc) || hConc <= 0) {
        resultBox.innerText = "Vui lòng nhập nồng độ [H+] hợp lệ (ví dụ: 0.001 hoặc 1e-3).";
        resultBox.style.display = "block";
        return;
      }

      const ph = -Math.log10(hConc);
      const poh = 14 - ph;
      let env = "Trung tính";
      if (ph < 6.99) env = "Axit (làm quỳ tím hóa đỏ)";
      else if (ph > 7.01) env = "Bazơ / Kiềm (làm quỳ tím hóa xanh)";

      resultBox.innerHTML = `
        • pH = <strong>${ph.toFixed(2)}</strong><br>
        • pOH = <strong>${poh.toFixed(2)}</strong><br>
        • Môi trường: <strong>${env}</strong>
      `;
      resultBox.style.display = "block";
    });
  }

  // ================= BẢNG TUẦN HOÀN =================
  function renderPeriodicTable() {
    const grid = document.getElementById("element-grid");
    if (!grid) return;
    grid.innerHTML = "";

    CHEMISTRY_DATA.elements.forEach(el => {
      const item = document.createElement("div");
      item.className = "element-item";
      item.innerHTML = `
        <span class="element-z">${el.z}</span>
        <div class="element-sym" style="color:${el.color}">${el.sym}</div>
        <div class="element-name">${el.name}</div>
        <div class="element-mass">${el.m}</div>
      `;

      item.addEventListener("click", () => {
        alert(`🔬 Nguyên tố: ${el.name} (${el.sym})\n• Số hiệu Z: ${el.z}\n• Nguyên tử khối: ${el.m}\n• Hóa trị thường gặp: ${el.val}\n• Phân loại: ${el.cat}`);
      });

      grid.appendChild(item);
    });
  }

  // ================= TRA CỨU: TÍNH TAN =================
  function renderLookups() {
    const list = document.getElementById("solubility-list");
    if (!list) return;
    list.innerHTML = "";

    CHEMISTRY_DATA.solubility.forEach(item => {
      const card = document.createElement("div");
      card.className = "lesson-card";
      card.style.marginBottom = "8px";
      card.innerHTML = `
        <div style="flex:1;">
          <h4 style="font-size:14px; color:var(--primary); font-weight:700;">${item.ion}</h4>
          <p style="font-size:12.5px; margin-top:2px; color:var(--text-main);">${item.note}</p>
        </div>
      `;
      list.appendChild(card);
    });
  }

  // ================= FLASHCARD LẬT THẺ =================
  function renderFlashcards() {
    const cardEl = document.getElementById("flashcard-el");
    const countEl = document.getElementById("flashcard-counter");
    const textEl = document.getElementById("flashcard-text");
    const hintEl = document.getElementById("flashcard-hint");
    const badgeEl = document.getElementById("flashcard-badge");

    if (!cardEl || !CHEMISTRY_DATA.flashcards) return;

    const cards = CHEMISTRY_DATA.flashcards;
    const cur = cards[currentFlashcardIdx];

    flashcardFlipped = false;
    countEl.innerText = `${currentFlashcardIdx + 1} / ${cards.length}`;
    badgeEl.innerText = "Câu hỏi";
    badgeEl.style.backgroundColor = "var(--primary-light)";
    badgeEl.style.color = "var(--primary)";
    textEl.innerText = cur.q;
    hintEl.innerText = "👆 Chạm vào thẻ để xem đáp án";

    cardEl.onclick = () => {
      flashcardFlipped = !flashcardFlipped;
      if (flashcardFlipped) {
        badgeEl.innerText = "Đáp án";
        badgeEl.style.backgroundColor = "rgba(16, 185, 129, 0.15)";
        badgeEl.style.color = "var(--secondary)";
        textEl.innerText = cur.a;
        hintEl.innerText = "👆 Chạm lại để xem câu hỏi";
      } else {
        badgeEl.innerText = "Câu hỏi";
        badgeEl.style.backgroundColor = "var(--primary-light)";
        badgeEl.style.color = "var(--primary)";
        textEl.innerText = cur.q;
        hintEl.innerText = "👆 Chạm vào thẻ để xem đáp án";
      }
    };

    const prevBtn = document.getElementById("flashcard-prev");
    const nextBtn = document.getElementById("flashcard-next");

    if (prevBtn) {
      prevBtn.onclick = () => {
        if (currentFlashcardIdx > 0) {
          currentFlashcardIdx--;
          renderFlashcards();
        }
      };
    }

    if (nextBtn) {
      nextBtn.onclick = () => {
        if (currentFlashcardIdx < cards.length - 1) {
          currentFlashcardIdx++;
          renderFlashcards();
        }
      };
    }
  }

  // ================= TỔNG ÔN TRẮC NGHIỆM =================
  function renderGeneralQuiz() {
    const quizWrap = document.getElementById("general-quiz-wrap");
    if (!quizWrap) return;
    quizWrap.innerHTML = "";

    let allQuestions = [];
    CHEMISTRY_DATA.stages.forEach(s => {
      s.lessons.forEach(l => {
        if (l.quiz) {
          l.quiz.forEach(q => allQuestions.push({ ...q, fromLesson: l.title, stage: s.grade }));
        }
      });
    });

    const scoreCard = document.createElement("div");
    scoreCard.className = "calc-card";
    scoreCard.style.marginBottom = "14px";
    scoreCard.innerHTML = `
      <div class="calc-title">📝 Tổng Hợp Bộ Đề Trắc Nghiệm</div>
      <p class="calc-subtitle">Gồm <strong>${allQuestions.length} câu hỏi</strong> tuyển chọn bao quát từ Lớp 8 đến Lớp 12 & Thi THPT.</p>
    `;
    quizWrap.appendChild(scoreCard);

    allQuestions.forEach((q, idx) => {
      const card = document.createElement("div");
      card.className = "quiz-box";
      card.style.marginBottom = "12px";
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; font-size:11px; font-weight:700; color:var(--primary); margin-bottom:4px;">
          <span>${q.stage}</span>
          <span style="color:var(--text-muted);">${q.fromLesson}</span>
        </div>
        <p class="quiz-q">${idx + 1}. ${cleanLatexToHtml(q.question)}</p>
        <div class="quiz-options">
          ${q.options.map((opt, oIdx) => `
            <button class="quiz-opt" data-q="${idx}" data-opt="${oIdx}">${cleanLatexToHtml(opt)}</button>
          `).join("")}
        </div>
        <div class="quiz-explain" id="gen-explain-${idx}">
          <strong>Giải thích:</strong> ${cleanLatexToHtml(q.explanation)}
        </div>
      `;

      const btns = card.querySelectorAll(".quiz-opt");
      btns.forEach(btn => {
        btn.addEventListener("click", () => {
          const oIdx = parseInt(btn.getAttribute("data-opt"));
          const exp = card.querySelector(`#gen-explain-${idx}`);
          btns.forEach(b => b.disabled = true);

          if (oIdx === q.correctIndex) {
            btn.classList.add("correct");
          } else {
            btn.classList.add("wrong");
            btns[q.correctIndex].classList.add("correct");
          }
          if (exp) exp.style.display = "block";
        });
      });

      quizWrap.appendChild(card);
    });
  }

  // Khởi động
  renderRoadmap();
});
