// ═══════════════════════════════════════════════════════
//  CODEPATH C++ — MAIN APP
//  SPA Router + Firebase Auth + State + Code Runner
// ═══════════════════════════════════════════════════════

// ─── FIREBASE CONFIG ────────────────────────────────
// To enable Firebase: replace with your project config
// Get free config at: https://console.firebase.google.com
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ─── JUDGE0 API (Code Runner) ───────────────────────
// Free tier at: https://rapidapi.com/judge0-official/api/judge0-ce
// Or self-host: https://github.com/judge0/judge0
const JUDGE0_URL = "https://judge0-ce.p.rapidapi.com";
const JUDGE0_KEY = "YOUR_RAPIDAPI_KEY"; // Get free at rapidapi.com
const CPP_LANGUAGE_ID = 54; // C++ (GCC 9.2.0)

// ─── STATE ─────────────────────────────────────────
const STATE = {
  user: null,
  useFirebase: false,
  completedLessons: [],
  quizAnswers: {},
  streakDays: [],
  currentPage: 'roadmap',
  openPhases: new Set([0]),
};

// ─── PERSISTENCE ───────────────────────────────────
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('codepath_state') || '{}');
    STATE.completedLessons = saved.completedLessons || [];
    STATE.quizAnswers = saved.quizAnswers || {};
    STATE.streakDays = saved.streakDays || [];
  } catch (e) { console.warn('State load error', e); }
}
function saveState() {
  try {
    localStorage.setItem('codepath_state', JSON.stringify({
      completedLessons: STATE.completedLessons,
      quizAnswers: STATE.quizAnswers,
      streakDays: STATE.streakDays,
    }));
  } catch (e) {}
}

// ─── ROUTER ────────────────────────────────────────
function navigate(page) {
  STATE.currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab, .nav-btn-tab').forEach(b => b.classList.remove('active'));

  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');

  document.querySelectorAll(`[data-page="${page}"]`).forEach(b => b.classList.add('active'));
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Lazy render
  if (page === 'roadmap') renderRoadmap();
  if (page === 'quiz') renderQuizPage();
  if (page === 'resources') renderResources();
}

// ─── PROGRESS ──────────────────────────────────────
function getTotalLessons() {
  return CPP_DATA.phases.reduce((a, p) => a + p.lessons.length, 0);
}
function getTotalDone() {
  return STATE.completedLessons.length;
}
function getPhaseDone(phase) {
  return phase.lessons.filter(l => STATE.completedLessons.includes(l.id)).length;
}
function getPhasePct(phase) {
  return Math.round((getPhaseDone(phase) / phase.lessons.length) * 100);
}
function getTotalPct() {
  return Math.round((getTotalDone() / getTotalLessons()) * 100);
}
function isPhaseUnlocked(idx) {
  if (idx === 0) return true;
  const prev = CPP_DATA.phases[idx - 1];
  return getPhaseDone(prev) >= Math.ceil(prev.lessons.length * 0.6);
}

function renderProgressCard() {
  const pct = getTotalPct();
  document.getElementById('total-pct').textContent = pct + '%';
  const bar = document.getElementById('total-bar');
  if (bar) setTimeout(() => bar.style.width = pct + '%', 50);

  // phase mini bars
  const phaseBarsEl = document.getElementById('phase-bars');
  if (phaseBarsEl) {
    phaseBarsEl.innerHTML = CPP_DATA.phases.map(phase => {
      const p = getPhasePct(phase);
      return `<div class="pb-item">
        <div class="pb-label">
          <span>${phase.icon} ${phase.name.split('—')[0]?.trim() || phase.name}</span>
          <span style="color:${phase.color}">${p}%</span>
        </div>
        <div class="pb-mini">
          <div class="pb-mini-fill" style="width:${p}%;background:${phase.color}"></div>
        </div>
      </div>`;
    }).join('');
  }

  // streak
  renderStreak();
}

function renderStreak() {
  const el = document.getElementById('streak-days');
  if (!el) return;
  const dayNames = ['أح','إث','ث','أر','خ','ج','س'];
  const today = new Date().getDay();
  el.innerHTML = dayNames.map((d, i) => {
    const done = STATE.streakDays.includes(i);
    const isToday = i === today;
    return `<div class="s-day ${done ? 'done' : ''} ${isToday ? 'today' : ''}" title="${d}">
      ${done ? '✓' : d}
    </div>`;
  }).join('');
}

function markStreakToday() {
  const today = new Date().getDay();
  if (!STATE.streakDays.includes(today)) {
    STATE.streakDays.push(today);
    saveState();
    renderStreak();
  }
}

// ─── ROADMAP RENDER ────────────────────────────────
function renderRoadmap() {
  const container = document.getElementById('phases-container');
  if (!container) return;
  container.innerHTML = '';

  CPP_DATA.phases.forEach((phase, pi) => {
    const done = getPhaseDone(phase);
    const total = phase.lessons.length;
    const pct = getPhasePct(phase);
    const unlocked = isPhaseUnlocked(pi);
    const allDone = done === total;

    const badgeClass = allDone ? 'badge-done' : unlocked ? 'badge-active' : 'badge-locked';
    const badgeText = allDone ? '✅ مكتمل' : unlocked ? '▶ نشط' : '🔒 مغلق';
    const isOpen = STATE.openPhases.has(pi);

    const card = document.createElement('div');
    card.className = `phase-card ${allDone ? 'done-phase' : ''}`;
    card.innerHTML = `
      <div class="phase-top" onclick="togglePhase(${pi})">
        <div class="phase-icon" style="background:${phase.colorBg};font-size:18px">${phase.icon}</div>
        <div class="phase-meta">
          <div class="phase-name">${phase.name}</div>
          <div class="phase-sub">
            <span>⏱ ${phase.duration}</span>
            <span>📖 ${total} درس</span>
            <span style="color:${phase.color}">${done}/${total} مكتمل • ${pct}%</span>
          </div>
        </div>
        <div class="phase-badge ${badgeClass}">${badgeText}</div>
        <div class="phase-chevron ${isOpen ? 'open' : ''}" id="chev-${pi}">▼</div>
      </div>
      <div class="phase-body ${isOpen ? 'open' : ''}" id="body-${pi}">
        <div class="lessons-list">
          ${phase.lessons.map(l => renderLessonItem(l, unlocked)).join('')}
        </div>
      </div>`;
    container.appendChild(card);
  });
}

function renderLessonItem(l, unlocked) {
  const done = STATE.completedLessons.includes(l.id);
  const tagMap = { theory:'tag-theory', code:'tag-code', quiz:'tag-quiz', project:'tag-project' };
  const tagLabel = { theory:'📚 نظري', code:'💻 كود', quiz:'🧠 اختبار', project:'🔨 مشروع' };
  const tags = (l.tags||[]).map(t => `<span class="tag ${tagMap[t]||''}">${tagLabel[t]||t}</span>`).join('');

  return `
    <div class="lesson-item ${done ? 'done' : ''}" id="li-${l.id}">
      <div class="lesson-check" onclick="toggleLesson('${l.id}',event)">${done ? '✓' : ''}</div>
      <div class="lesson-info">
        <div class="lesson-title">${l.title}</div>
        <div class="lesson-desc">${(l.exercise?.description || '').slice(0,80)}${(l.exercise?.description||'').length > 80 ? '...' : ''}</div>
        <div class="lesson-footer">
          ${tags}
          <span class="lesson-src">📎 ${l.src}</span>
          <span class="lesson-dur">⏱ ${l.duration}</span>
          ${unlocked ? `<button class="btn-open-lesson" onclick="openLesson('${l.id}',event)">فتح الدرس ↗</button>` : ''}
        </div>
      </div>
    </div>`;
}

function togglePhase(pi) {
  if (STATE.openPhases.has(pi)) STATE.openPhases.delete(pi);
  else STATE.openPhases.add(pi);

  const body = document.getElementById(`body-${pi}`);
  const chev = document.getElementById(`chev-${pi}`);
  if (body) body.classList.toggle('open');
  if (chev) chev.classList.toggle('open');
}

function toggleLesson(id, e) {
  e.stopPropagation();
  const idx = STATE.completedLessons.indexOf(id);
  if (idx > -1) STATE.completedLessons.splice(idx, 1);
  else {
    STATE.completedLessons.push(id);
    markStreakToday();
    showToast('✅ درس مكتمل! أحسنت 🎉', 'success');
  }
  saveState();
  renderProgressCard();
  // update item
  const item = document.getElementById(`li-${id}`);
  if (item) {
    const done = STATE.completedLessons.includes(id);
    item.classList.toggle('done', done);
    const chk = item.querySelector('.lesson-check');
    if (chk) chk.textContent = done ? '✓' : '';
  }
  renderRoadmap(); // re-render to update phase counters
}

// ─── LESSON MODAL ──────────────────────────────────
let currentLesson = null;
let currentStarterCode = '';

function openLesson(id, e) {
  if (e) e.stopPropagation();
  const lesson = CPP_DATA.phases.flatMap(p => p.lessons).find(l => l.id === id);
  if (!lesson) return;
  currentLesson = lesson;
  currentStarterCode = lesson.exercise?.starterCode || '';

  document.getElementById('modal-title').textContent = lesson.title;
  document.getElementById('modal-content').innerHTML = lesson.content || '<p>قريباً...</p>';
  document.getElementById('modal-exercise-title').textContent = lesson.exercise?.title || '';
  document.getElementById('modal-exercise-desc').textContent = lesson.exercise?.description || '';
  document.getElementById('code-editor').value = currentStarterCode;
  document.getElementById('output-box').textContent = '// انقر "تشغيل" لتنفيذ الكود...';
  document.getElementById('output-box').className = 'output-box';

  switchModalTab('content');
  document.getElementById('lesson-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLesson() {
  document.getElementById('lesson-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function switchModalTab(tab) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.modal-panel').forEach(p => p.classList.remove('active'));
  document.querySelector(`[data-modal-tab="${tab}"]`).classList.add('active');
  document.getElementById(`mpanel-${tab}`).classList.add('active');
}

// ─── CODE RUNNER ───────────────────────────────────
async function runCode() {
  const code = document.getElementById('code-editor').value.trim();
  if (!code) return;

  const btn = document.getElementById('run-btn');
  const output = document.getElementById('output-box');

  btn.disabled = true;
  btn.innerHTML = '<span class="spin">⟳</span> جاري التنفيذ...';
  output.className = 'output-box';
  output.textContent = '// جاري الإرسال للمُترجم...';

  try {
    // Try Judge0 API
    if (JUDGE0_KEY !== 'YOUR_RAPIDAPI_KEY') {
      await runWithJudge0(code, output);
    } else {
      // Fallback: Wandbox API (no key required!)
      await runWithWandbox(code, output);
    }
  } catch (err) {
    output.textContent = '// خطأ في الاتصال: ' + err.message + '\n// جرّب Wandbox.org أو Godbolt.org مباشرة';
    output.className = 'output-box error';
  }

  btn.disabled = false;
  btn.innerHTML = '▶ تشغيل';
}

async function runWithWandbox(code, output) {
  // Wandbox is free, no API key needed
  const resp = await fetch('https://wandbox.org/api/compile.json', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      compiler: 'gcc-13.2.0',
      code: code,
      options: 'warning,c++17',
      'compiler-option-raw': '-std=c++17 -O2',
    })
  });

  if (!resp.ok) throw new Error('HTTP ' + resp.status);
  const data = await resp.json();

  if (data.status === '0') {
    const out = data['program_output'] || data['program_error'] || '(لا مخرجات)';
    output.textContent = out;
    output.className = 'output-box';
  } else {
    const err = data['compiler_error'] || data['program_error'] || 'خطأ غير معروف';
    output.textContent = '// خطأ في الترجمة:\n' + err;
    output.className = 'output-box error';
  }
}

async function runWithJudge0(code, output) {
  // Submit
  const submitResp = await fetch(`${JUDGE0_URL}/submissions?base64_encoded=false&wait=true`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': JUDGE0_KEY,
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    },
    body: JSON.stringify({ language_id: CPP_LANGUAGE_ID, source_code: code, stdin: '' })
  });

  const data = await submitResp.json();

  if (data.stdout) {
    output.textContent = data.stdout;
    output.className = 'output-box';
  } else if (data.stderr || data.compile_output) {
    output.textContent = '// خطأ:\n' + (data.stderr || data.compile_output);
    output.className = 'output-box error';
  } else {
    output.textContent = data.message || '(لا مخرجات)';
  }
}

function resetCode() {
  document.getElementById('code-editor').value = currentStarterCode;
  document.getElementById('output-box').textContent = '// انقر "تشغيل" لتنفيذ الكود...';
  document.getElementById('output-box').className = 'output-box';
}

function markLessonDone() {
  if (!currentLesson) return;
  const id = currentLesson.id;
  if (!STATE.completedLessons.includes(id)) {
    STATE.completedLessons.push(id);
    markStreakToday();
    saveState();
    renderProgressCard();
    renderRoadmap();
    showToast('🎉 درس مكتمل! استمر هكذا!', 'success');
  }
  closeLesson();
}

// ─── QUIZ PAGE ─────────────────────────────────────
let quizFilter = 'all';

function renderQuizPage() {
  renderQuizScore();
  renderQuizCards();
}

function renderQuizScore() {
  const total = CPP_DATA.quizzes.length;
  const answered = Object.keys(STATE.quizAnswers).length;
  const correct = Object.values(STATE.quizAnswers).filter(a => a.correct).length;
  document.getElementById('quiz-score-num').textContent = `${correct} / ${total}`;
  document.getElementById('quiz-answered').textContent = `أجبت على ${answered} من ${total} سؤال`;
}

function setQuizFilter(f) {
  quizFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-filter="${f}"]`)?.classList.add('active');
  renderQuizCards();
}

function renderQuizCards() {
  const container = document.getElementById('quiz-grid');
  if (!container) return;

  let quizzes = CPP_DATA.quizzes;
  if (quizFilter !== 'all') {
    quizzes = quizzes.filter(q => {
      if (quizFilter === 'unanswered') return !STATE.quizAnswers[q.id];
      if (quizFilter === 'wrong') return STATE.quizAnswers[q.id] && !STATE.quizAnswers[q.id].correct;
      return true;
    });
  }

  container.innerHTML = quizzes.map(q => renderQuizCard(q)).join('');
}

function renderQuizCard(q) {
  const ans = STATE.quizAnswers[q.id];
  const levelClass = { 'مبتدئ':'level-beginner', 'متوسط':'level-mid', 'متقدم':'level-advanced' }[q.level] || 'level-beginner';
  const statusIcon = !ans ? '○' : ans.correct ? '✅' : '❌';
  const cardClass = !ans ? '' : ans.correct ? 'answered-correct' : 'answered-wrong';

  return `
    <div class="quiz-card ${cardClass}" id="qcard-${q.id}">
      <div class="qcard-top">
        <span class="qcard-level ${levelClass}">${q.level}</span>
        <span class="qcard-status">${statusIcon}</span>
      </div>
      <div class="qcard-q">${q.question}</div>
      ${q.code ? `<div class="qcard-code">${escapeHtml(q.code)}</div>` : ''}
      <div class="qcard-options" id="opts-${q.id}">
        ${q.options.map((o, i) => {
          let cls = '';
          if (ans) {
            cls = 'disabled ';
            if (i === q.correct) cls += 'correct';
            else if (i === ans.chosen && !ans.correct) cls += 'wrong';
          }
          return `<div class="qcard-opt ${cls}" onclick="answerQuiz('${q.id}',${i})">${o}</div>`;
        }).join('')}
      </div>
      <div class="qcard-explain ${ans ? 'show' : ''}" id="exp-${q.id}">
        💡 ${q.explanation}
      </div>
    </div>`;
}

function answerQuiz(qid, chosen) {
  if (STATE.quizAnswers[qid]) return; // already answered
  const q = CPP_DATA.quizzes.find(x => x.id === qid);
  if (!q) return;

  const correct = chosen === q.correct;
  STATE.quizAnswers[qid] = { chosen, correct };
  saveState();

  // update UI
  const opts = document.querySelectorAll(`#opts-${qid} .qcard-opt`);
  opts.forEach((el, i) => {
    el.classList.add('disabled');
    if (i === q.correct) el.classList.add('correct');
    else if (i === chosen && !correct) el.classList.add('wrong');
  });
  document.getElementById(`exp-${qid}`)?.classList.add('show');

  const card = document.getElementById(`qcard-${qid}`);
  if (card) card.classList.add(correct ? 'answered-correct' : 'answered-wrong');

  if (correct) showToast('✅ إجابة صحيحة! 🎉', 'success');
  else showToast('❌ إجابة خاطئة — اقرأ الشرح', 'error');

  renderQuizScore();
}

// ─── RESOURCES ─────────────────────────────────────
let resFilter = 'all';

function setResFilter(f) {
  resFilter = f;
  document.querySelectorAll('.res-filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-res-filter="${f}"]`)?.classList.add('active');
  renderResources();
}

function renderResources() {
  const grid = document.getElementById('res-grid');
  if (!grid) return;
  let resources = CPP_DATA.resources;
  if (resFilter !== 'all') resources = resources.filter(r => r.tag === resFilter);

  grid.innerHTML = resources.map(r => `
    <div class="res-card" onclick="window.open('${r.url}','_blank')">
      <div class="res-top">
        <div class="res-icon" style="background:${r.bg}">${r.icon}</div>
        <div class="res-info">
          <div class="res-name">${r.name}</div>
          <div class="res-type">${r.type}</div>
        </div>
      </div>
      <div class="res-desc">${r.desc}</div>
      <div class="res-foot">
        <span class="res-badge">${r.badge}</span>
        <span class="res-link">فتح ↗</span>
      </div>
    </div>`).join('');
}

// ─── AUTH ───────────────────────────────────────────
function openAuth() {
  document.getElementById('auth-modal').classList.add('open');
}
function closeAuth() {
  document.getElementById('auth-modal').classList.remove('open');
}
function loginGuest() {
  STATE.user = { name: 'زائر', guest: true };
  closeAuth();
  updateUserUI();
  showToast('👋 مرحباً! تقدمك يُحفظ محلياً', 'success');
}

// Firebase login handlers (stubs — activate by adding Firebase SDK)
function loginGoogle() {
  if (!STATE.useFirebase) { loginGuest(); return; }
  // firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
}
function loginGitHub() {
  if (!STATE.useFirebase) { loginGuest(); return; }
  // firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider());
}

function updateUserUI() {
  const loginBtn = document.getElementById('login-btn');
  const userAvatar = document.getElementById('user-avatar');
  if (STATE.user) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (userAvatar) {
      userAvatar.style.display = 'flex';
      userAvatar.textContent = (STATE.user.name || 'Z')[0].toUpperCase();
    }
  } else {
    if (loginBtn) loginBtn.style.display = 'flex';
    if (userAvatar) userAvatar.style.display = 'none';
  }
}

// ─── TOAST ─────────────────────────────────────────
let toastTimer = null;
function showToast(msg, type = '') {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.className = `toast ${type}`;
  el.style.display = 'flex';
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.classList.add('out');
    setTimeout(() => { el.style.display = 'none'; el.classList.remove('out'); }, 300);
  }, 3000);
}

// ─── UTILS ─────────────────────────────────────────
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ─── INIT ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderProgressCard();
  navigate('roadmap');
  updateUserUI();

  // Auto-open first incomplete phase
  const firstActive = CPP_DATA.phases.findIndex((p, i) =>
    isPhaseUnlocked(i) && getPhaseDone(p) < p.lessons.length
  );
  if (firstActive !== -1) {
    STATE.openPhases.clear();
    STATE.openPhases.add(firstActive);
  }

  // Close modal on overlay click
  document.getElementById('lesson-modal').addEventListener('click', function(e) {
    if (e.target === this) closeLesson();
  });
  document.getElementById('auth-modal').addEventListener('click', function(e) {
    if (e.target === this) closeAuth();
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeLesson(); closeAuth(); }
  });
});
