// Chemistry Learning Mobile App Logic
document.addEventListener("DOMContentLoaded", () => {
  // Trạng thái ứng dụng
  let currentTab = "roadmap";
  let activeFilter = "all";
  let completedLessons = JSON.parse(localStorage.getItem("chem_completed_lessons") || "[]");
  let activeLesson = null;

  // DOM Elements
  const tabRoadmap = document.getElementById("tab-roadmap");
  const tabTools = document.getElementById("tab-tools");
  const tabLookups = document.getElementById("tab-lookups");
  const tabQuiz = document.getElementById("tab-quiz");

  const navBtns = document.querySelectorAll(".nav-item");
  const filterChips = document.querySelectorAll(".chip");
  const progressFill = document.getElementById("progress-fill");
  const progressText = document.getElementById("progress-text");

  const modalOverlay = document.getElementById("modal-overlay");
  const modalSheet = document.getElementById("modal-sheet");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");
  const modalClose = document.getElementById("modal-close");
  const modalToggleComplete = document.getElementById("modal-toggle-complete");

  const themeToggle = document.getElementById("theme-toggle");

  // Khởi tạo Theme
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

  // Cập nhật thanh tiến độ
  function updateProgress() {
    let totalLessons = 0;
    CHEMISTRY_DATA.stages.forEach(s => totalLessons += s.lessons.length);
    const completedCount = completedLessons.length;
    const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
    
    if (progressFill) progressFill.style.width = `${percent}%`;
    if (progressText) progressText.innerText = `${completedCount}/${totalLessons} bài (${percent}%)`;
  }

  // Render Lộ trình học tập
  function renderRoadmap() {
    const listContainer = document.getElementById("roadmap-list");
    if (!listContainer) return;
    listContainer.innerHTML = "";

    CHEMISTRY_DATA.stages.forEach(stage => {
      // Lọc theo tag/lớp
      if (activeFilter !== "all" && stage.id !== activeFilter) {
        return;
      }

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

      stage.lessons.forEach(lesson => {
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

    updateProgress();
  }

  // Mở bài học chi tiết
  function openLesson(lesson) {
    activeLesson = lesson;
    modalTitle.innerText = lesson.title;
    const isDone = completedLessons.includes(lesson.id);

    // Chuyển markdown cơ bản & hóa học thành HTML
    let formattedContent = formatLessonContent(lesson.content);

    // Takeaways box
    let takeawaysHtml = "";
    if (lesson.keyTakeaways && lesson.keyTakeaways.length > 0) {
      takeawaysHtml = `
        <div class="takeaway-box">
          <div class="takeaway-title">⚡ Điểm cốt lõi cần nhớ:</div>
          <ul>
            ${lesson.keyTakeaways.map(t => `<li>${t}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    // Mini Quiz box
    let quizHtml = "";
    if (lesson.quiz && lesson.quiz.length > 0) {
      quizHtml = `
        <div class="quiz-box">
          <h4 style="font-size:15px; margin-bottom:10px;">🧪 Trắc nghiệm củng cố bài học</h4>
          ${lesson.quiz.map((q, qIdx) => `
            <div style="margin-bottom:16px;">
              <p class="quiz-q">${qIdx + 1}. ${q.question}</p>
              <div class="quiz-options">
                ${q.options.map((opt, oIdx) => `
                  <button class="quiz-opt" data-q="${qIdx}" data-opt="${oIdx}">${opt}</button>
                `).join("")}
              </div>
              <div class="quiz-explain" id="explain-${qIdx}">
                <strong>Giải thích:</strong> ${q.explanation}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }

    modalContent.innerHTML = formattedContent + takeawaysHtml + quizHtml;

    // Quiz options click event
    const optBtns = modalContent.querySelectorAll(".quiz-opt");
    optBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
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
      modalToggleComplete.innerHTML = `✓ Đã hoàn thành (Bấm để hủy)`;
      modalToggleComplete.style.backgroundColor = "var(--secondary)";
    } else {
      modalToggleComplete.innerHTML = `Đánh dấu đã hiểu bài`;
      modalToggleComplete.style.backgroundColor = "var(--primary)";
    }
  }

  // Format nội dung hóa học (công thức, chỉ số dưới, mũi tên, v.v.)
  function formatLessonContent(text) {
    let html = text
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
      .replace(/\n\s*-\s*(.*)/gim, '<li>$1</li>')
      .replace(/\$\$([\s\S]*?)\$\$/g, '<div style="text-align:center; margin:10px 0; font-weight:bold; color:var(--primary);">$1</div>')
      .replace(/\$(.*?)\$/g, '<strong style="color:var(--primary);">$1</strong>')
      .replace(/\\rightarrow/g, ' → ')
      .replace(/\\xrightleftharpoons\[(.*?)\]\{(.*?)\}/g, ' ⇌ ')
      .replace(/\\xrightleftharpoons\{(.*?)\}/g, ' ⇌ ')
      .replace(/\\xrightarrow\{(.*?)\}/g, ' ⎯($1)→ ')
      .replace(/\\times/g, ' × ')
      .replace(/\\cdot/g, ' · ')
      .replace(/\\ge/g, ' ≥ ')
      .replace(/\\le/g, ' ≤ ')
      .replace(/\\alpha/g, 'α')
      .replace(/\\beta/g, 'β')
      .replace(/\\sum/g, '∑')
      .replace(/\\implies/g, ' ⇒ ')
      .replace(/\\iff/g, ' ⇔ ')
      .replace(/\\frac\{(.*?)\}\{(.*?)\}/g, '($1 / $2)');

    // Bọc các <li> liên tiếp trong <ul>
    html = html.replace(/(<li>[\s\S]*?<\/li>)/gm, '<ul>$1</ul>');
    html = html.replace(/<\/ul>\s*<ul>/g, '');
    return html;
  }

  // Đóng modal
  modalClose.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  });

  // Hoàn thành bài học
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

  // Filter chips click
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeFilter = chip.getAttribute("data-filter");
      renderRoadmap();
    });
  });

  // Tab Bottom Navigation
  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-tab");

      document.querySelectorAll(".tab-view").forEach(v => v.style.display = "none");
      const activeView = document.getElementById(`tab-${target}`);
      if (activeView) activeView.style.display = "block";

      if (target === "tools") renderPeriodicTable();
      if (target === "lookups") renderLookups();
      if (target === "quiz") renderGeneralQuiz();
    });
  });

  // ================= CÔNG CỤ TÍNH NHANH =================
  const calcBtnMol = document.getElementById("calc-btn-mol");
  if (calcBtnMol) {
    calcBtnMol.addEventListener("click", () => {
      const mass = parseFloat(document.getElementById("calc-mass")?.value);
      const molM = parseFloat(document.getElementById("calc-molarmass")?.value);
      const resultBox = document.getElementById("calc-result-mol");

      if (isNaN(mass) || isNaN(molM) || molM <= 0) {
        resultBox.innerText = "Vui lòng nhập đúng khối lượng m (g) và M (g/mol).";
        resultBox.style.display = "block";
        return;
      }

      const mol = mass / molM;
      const v_cu = mol * 22.4;
      const v_moi = mol * 24.79;

      resultBox.innerHTML = `
        Số mol: <strong>${mol.toFixed(4)} mol</strong><br>
        Thể tích khí (0°C, 1 atm): <strong>${v_cu.toFixed(3)} lít</strong><br>
        Thể tích khí chuẩn mới (25°C, 1 bar): <strong>${v_moi.toFixed(3)} lít</strong>
      `;
      resultBox.style.display = "block";
    });
  }

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

  // ================= BẢNG TÍNH TAN & DÃY KIM LOẠI =================
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

  // ================= TỔNG ÔN TRẮC NGHIỆM TỔNG HỢP =================
  function renderGeneralQuiz() {
    const quizWrap = document.getElementById("general-quiz-wrap");
    if (!quizWrap) return;
    quizWrap.innerHTML = "";

    // Gom tất cả câu hỏi từ các bài học
    let allQuestions = [];
    CHEMISTRY_DATA.stages.forEach(s => {
      s.lessons.forEach(l => {
        if (l.quiz) {
          l.quiz.forEach(q => allQuestions.push({ ...q, fromLesson: l.title }));
        }
      });
    });

    const scoreCard = document.createElement("div");
    scoreCard.className = "calc-card";
    scoreCard.style.marginBottom = "14px";
    scoreCard.innerHTML = `
      <div class="calc-title">📝 Tổng hợp câu hỏi ôn tập</div>
      <p class="calc-subtitle">Rèn luyện phản xạ với ${allQuestions.length} câu hỏi trọng tâm từ Lớp 8 đến Lớp 12.</p>
    `;
    quizWrap.appendChild(scoreCard);

    allQuestions.forEach((q, idx) => {
      const card = document.createElement("div");
      card.className = "quiz-box";
      card.style.marginBottom = "12px";
      card.innerHTML = `
        <div style="font-size:11px; color:var(--primary); font-weight:700; margin-bottom:4px;">${q.fromLesson}</div>
        <p class="quiz-q">${idx + 1}. ${q.question}</p>
        <div class="quiz-options">
          ${q.options.map((opt, oIdx) => `
            <button class="quiz-opt" data-q="${idx}" data-opt="${oIdx}">${opt}</button>
          `).join("")}
        </div>
        <div class="quiz-explain" id="gen-explain-${idx}">
          <strong>Giải thích:</strong> ${q.explanation}
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

  // Render trang chủ lộ trình lần đầu
  renderRoadmap();
});
