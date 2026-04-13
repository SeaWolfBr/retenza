/* ── Contact Modal ── */

function openContactModal() {
  document.getElementById('contact-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeContactModal(event) {
  if (event && event.target !== document.getElementById('contact-overlay')) return;
  document.getElementById('contact-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Reading Modal ── */

var readingModalDoneCallback = null;

function openReadingModal(title, text, onDone) {
  document.getElementById('reading-modal-title').textContent = title;
  document.getElementById('reading-modal-text').textContent = text;
  document.getElementById('reading-modal-timer').textContent = '00:00';
  readingModalDoneCallback = onDone;
  document.getElementById('reading-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeReadingModal() {
  document.getElementById('reading-modal').classList.remove('active');
  document.body.style.overflow = '';
}

function updateModalTimer(seconds) {
  var el = document.getElementById('reading-modal-timer');
  if (el) el.textContent = formatTime(seconds);
}

document.getElementById('reading-modal-done').addEventListener('click', function() {
  closeReadingModal();
  if (readingModalDoneCallback) { readingModalDoneCallback(); readingModalDoneCallback = null; }
});

/* ── Navigation ── */

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
  var target = document.getElementById(id);
  if (target) target.classList.add('active');
  window.scrollTo(0, 0);
}

/* ── Blog ── */

function initBlog() {
  var articles = window.APP_DATA.blog;
  var grid = document.getElementById('blog-grid');
  if (!grid || !articles) return;

  grid.innerHTML = articles.map(function(a) {
    return '<div class="blog-card" onclick="openArticle(\'' + a.id + '\')">' +
      '<div class="blog-card-meta">' +
        '<span class="article-tag">' + a.tag + '</span>' +
        '<span class="article-time">' + a.readTime + ' de leitura</span>' +
      '</div>' +
      '<h3 class="blog-card-title">' + a.title + '</h3>' +
      '<p class="blog-card-summary">' + a.summary + '</p>' +
      '<span class="blog-card-cta">Ler artigo &#8594;</span>' +
    '</div>';
  }).join('');
}

function openArticle(id) {
  var article = null;
  window.APP_DATA.blog.forEach(function(a) { if (a.id === id) article = a; });
  if (!article) return;

  document.getElementById('article-tag').textContent = article.tag;
  document.getElementById('article-time').textContent = article.readTime + ' de leitura';
  document.getElementById('article-title').textContent = article.title;

  // Render body — paragraphs split by \n\n
  document.getElementById('article-body').innerHTML = article.body
    .split('\n\n')
    .map(function(p) { return '<p>' + p + '</p>'; })
    .join('');

  showBlogArticle();
}

function showBlogList() {
  document.getElementById('blog-list').classList.add('active');
  document.getElementById('blog-article').classList.remove('active');
  window.scrollTo(0, 0);
}

function showBlogArticle() {
  document.getElementById('blog-list').classList.remove('active');
  document.getElementById('blog-article').classList.add('active');
  window.scrollTo(0, 0);
}

/* ── Utilities ── */

function splitWords(text) {
  return text.trim().split(/\s+/).filter(Boolean);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
}

function scrollToReadingArea(element) {
  if (window.innerWidth > 920 || !element) return;
  window.setTimeout(() => {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 120);
}

function stopTimerIfExists(mode) {
  if (mode.timer) {
    clearInterval(mode.timer);
    mode.timer = null;
  }
}

function resetCommonMode(mode, emptyMessage) {
  stopTimerIfExists(mode);
  mode.words = [];
  mode.index = 0;
  mode.running = false;
  mode.display.innerHTML = emptyMessage;
  mode.display.dataset.hasContent = "";
  mode.indexEl.textContent = "0";
  mode.totalEl.textContent = "0";
  mode.statusEl.textContent = "Parado";
}

/* ── Custom text validation ── */

var CUSTOM_MIN = 50;
var CUSTOM_MAX = 3000;

function validateCustomText(text, warningId) {
  var wc = splitWords(text).length;
  var el = document.getElementById(warningId);
  if (!el) return true;
  if (text.trim().length === 0) { el.style.display = 'none'; return false; }
  if (wc < CUSTOM_MIN) {
    el.textContent = 'Texto curto demais (' + wc + ' palavras). Mínimo: ' + CUSTOM_MIN + '.';
    el.style.display = 'block';
    return false;
  }
  if (wc > CUSTOM_MAX) {
    el.textContent = 'Texto longo demais (' + wc + ' palavras). Máximo: ' + CUSTOM_MAX + '. Considere recortar.';
    el.style.display = 'block';
    return true; // warn but allow
  }
  el.style.display = 'none';
  return true;
}

/* ── Onboarding ── */

var onboardingStep = 0;
var onboardingAnswers = {};

function startOnboarding() {
  onboardingStep = 0;
  onboardingAnswers = {};
  renderOnboardingStep();
  showScreen('screen-onboarding');
}

function renderOnboardingStep() {
  var steps = window.APP_DATA.onboarding;
  var step = steps[onboardingStep];
  var total = steps.length;

  // Dots
  document.getElementById('onboarding-dots').innerHTML = steps.map(function(_, i) {
    return '<span class="step-dot' + (i === onboardingStep ? ' active' : '') + '"></span>';
  }).join('');

  // Label + question
  document.getElementById('onboarding-step-label').textContent = 'Passo ' + (onboardingStep + 1) + ' de ' + total;
  document.getElementById('onboarding-question').textContent = step.question;

  // Options
  document.getElementById('onboarding-options').innerHTML = step.options.map(function(opt) {
    return '<button class="option-card" data-value="' + opt.value + '">' + opt.label + '</button>';
  }).join('');

  // Bind option clicks
  document.querySelectorAll('#onboarding-options .option-card').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#onboarding-options .option-card').forEach(function(b) {
        b.classList.remove('selected');
      });
      btn.classList.add('selected');
      document.getElementById('onboarding-next').disabled = false;
    });
  });

  // Next button
  var nextBtn = document.getElementById('onboarding-next');
  nextBtn.disabled = true;
  nextBtn.textContent = onboardingStep === total - 1 ? 'Comecar diagnostico' : 'Continuar';
  nextBtn.onclick = nextOnboardingStep;
}

function nextOnboardingStep() {
  var steps = window.APP_DATA.onboarding;
  var step = steps[onboardingStep];
  var selectedEl = document.querySelector('#onboarding-options .option-card.selected');
  if (!selectedEl) return;

  var val = selectedEl.dataset.value;
  onboardingAnswers[step.id] = (val === String(Number(val))) ? Number(val) : val;

  if (onboardingStep < steps.length - 1) {
    onboardingStep++;
    renderOnboardingStep();
  } else {
    submitOnboarding();
  }
}

function submitOnboarding() {
  var profile = {
    studyType:          onboardingAnswers.studyType || null,
    mainProblem:        onboardingAnswers.mainProblem || null,
    sessionDuration:    onboardingAnswers.sessionDuration || 10,
    createdAt:          new Date().toISOString(),
    diagnosticWPM:      null,
    diagnosticAccuracy: null
  };
  try { localStorage.setItem('retenza_profile', JSON.stringify(profile)); } catch(e) {}
  startDiagnostic();
}

/* ── Diagnostic ── */

var diagState = {
  text: null,
  seconds: 0,
  timer: null,
  running: false,
  wpm: 0,
  accuracy: 0,
  quizAnswers: {}
};

function startDiagnostic() {
  // Pick text based on profile studyType
  var profile = null;
  try { profile = JSON.parse(localStorage.getItem('retenza_profile')); } catch(e) {}
  var studyType = profile && profile.studyType;
  var texts = window.APP_DATA.texts;

  var preferred = texts.filter(function(t) {
    var tags = t.tags || [];
    if (studyType === 'concurso') return tags.indexOf('concurso') !== -1;
    if (studyType === 'oab') return tags.indexOf('oab') !== -1 || tags.indexOf('concurso') !== -1;
    if (studyType === 'vestibular') return tags.indexOf('vestibular') !== -1;
    return true;
  });
  if (!preferred.length) preferred = texts;
  diagState.text = preferred[Math.floor(Math.random() * preferred.length)];

  // Populate reading phase
  document.getElementById('diag-text-meta').textContent = diagState.text.title;
  document.getElementById('diag-text-body').textContent = diagState.text.body;

  // Reset timer state
  diagState.seconds = 0;
  diagState.running = false;
  document.getElementById('diag-timer').textContent = '00:00';
  document.getElementById('diag-stop').disabled = true;

  showDiagPhase('diag-phase-read');
  showScreen('screen-diagnostic');
}

function showDiagPhase(id) {
  document.querySelectorAll('.diag-phase').forEach(function(el) {
    el.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

document.getElementById('diag-start').addEventListener('click', function() {
  if (diagState.running) return;
  diagState.running = true;
  diagState.seconds = 0;
  document.getElementById('diag-stop').disabled = false;
  diagState.timer = setInterval(function() {
    diagState.seconds++;
    document.getElementById('diag-timer').textContent = formatTime(diagState.seconds);
    updateModalTimer(diagState.seconds);
  }, 1000);
  openReadingModal(diagState.text.title, diagState.text.body, function() {
    document.getElementById('diag-stop').click();
  });
});

document.getElementById('diag-stop').addEventListener('click', function() {
  if (!diagState.running) return;
  closeReadingModal();
  clearInterval(diagState.timer);
  diagState.running = false;
  var wordCount = splitWords(diagState.text.body).length;
  var minutes = diagState.seconds / 60;
  diagState.wpm = minutes > 0 ? Math.round(wordCount / minutes) : 0;
  renderDiagQuiz();
  showDiagPhase('diag-phase-quiz');
});

function renderDiagQuiz() {
  var questions = diagState.text.quiz;
  diagState.quizAnswers = {};
  var container = document.getElementById('diag-quiz-container');

  container.innerHTML = questions.map(function(q, qi) {
    return '<div class="quiz-question">' +
      '<p class="quiz-q-text"><strong>' + (qi + 1) + '.</strong> ' + q.question + '</p>' +
      '<div class="quiz-options">' +
      q.options.map(function(opt, oi) {
        return '<button class="option-card quiz-opt" data-qi="' + qi + '" data-oi="' + oi + '">' + opt + '</button>';
      }).join('') +
      '</div></div>';
  }).join('');

  container.querySelectorAll('.quiz-opt').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var qi = btn.dataset.qi;
      container.querySelectorAll('.quiz-opt[data-qi="' + qi + '"]').forEach(function(b) {
        b.classList.remove('selected');
      });
      btn.classList.add('selected');
      diagState.quizAnswers[qi] = Number(btn.dataset.oi);
      var allAnswered = questions.every(function(_, i) {
        return diagState.quizAnswers[i] !== undefined;
      });
      document.getElementById('diag-quiz-submit').disabled = !allAnswered;
    });
  });

  document.getElementById('diag-quiz-submit').disabled = true;
  document.getElementById('diag-quiz-submit').onclick = submitDiagQuiz;
}

function submitDiagQuiz() {
  var questions = diagState.text.quiz;
  var correct = 0;
  questions.forEach(function(q, i) {
    if (diagState.quizAnswers[i] === q.correct) correct++;
  });
  var accuracy = Math.round((correct / questions.length) * 100);
  diagState.accuracy = accuracy;

  // Save to localStorage profile
  try {
    var profile = JSON.parse(localStorage.getItem('retenza_profile') || '{}');
    profile.diagnosticWPM = diagState.wpm;
    profile.diagnosticAccuracy = accuracy;
    localStorage.setItem('retenza_profile', JSON.stringify(profile));
  } catch(e) {}

  // Stats grid
  document.getElementById('diag-stats-grid').innerHTML =
    '<div class="diag-stat"><span class="stat-label">Velocidade</span><strong>' + diagState.wpm + ' PPM</strong></div>' +
    '<div class="diag-stat"><span class="stat-label">Compreensão</span><strong>' + accuracy + '%</strong></div>' +
    '<div class="diag-stat"><span class="stat-label">Acertos</span><strong>' + correct + '/' + questions.length + '</strong></div>';

  // Suggestion logic
  var msg = '';
  if (diagState.wpm < 150) {
    msg = 'Sua velocidade está abaixo da média. Comece com Leitura de Arranque para ganhar ritmo.';
  } else if (accuracy < 67) {
    msg = 'Sua compreensão precisa de atenção. Recomendamos Retenção Ativa para treinar interpretação.';
  } else {
    msg = 'Bom resultado! Continue treinando os dois modos para evoluir ainda mais.';
  }
  document.getElementById('diag-suggestion').textContent = msg;

  showDiagPhase('diag-phase-result');
}

/* ── Tabs ── */

const tabs = document.querySelectorAll(".tab-button");
const panels = {
  rsvp:  document.getElementById("rsvp-panel"),
  chunk: document.getElementById("chunk-panel"),
  speed: document.getElementById("speed-panel")
};

function activateTab(tab) {
  tabs.forEach((item) => item.classList.toggle("active", item.dataset.tab === tab));
  Object.entries(panels).forEach(([key, panel]) => {
    panel.classList.toggle("active", key === tab);
  });
}

tabs.forEach((button) => {
  button.addEventListener("click", () => {
    activateTab(button.dataset.tab);
  });
});

document.querySelectorAll("[data-open-tab]").forEach((link) => {
  link.addEventListener("click", () => {
    activateTab(link.dataset.openTab);
  });
});

/* ── RSVP Mode ── */

const RSVP_EMPTY = "Cole um texto e clique em Iniciar";

const rsvpMode = {
  text: document.getElementById("rsvp-text"),
  speed: document.getElementById("rsvp-speed"),
  speedValue: document.getElementById("rsvp-speed-value"),
  display: document.getElementById("rsvp-display"),
  totalEl: document.getElementById("rsvp-total"),
  indexEl: document.getElementById("rsvp-index"),
  statusEl: document.getElementById("rsvp-status"),
  startBtn: document.getElementById("rsvp-start"),
  pauseBtn: document.getElementById("rsvp-pause"),
  resetBtn: document.getElementById("rsvp-reset"),
  words: [],
  index: 0,
  timer: null,
  running: false
};

function prepareRsvp() {
  // Load selected text into textarea
  var sel = document.getElementById('arranque-select');
  if (sel) {
    if (sel.value === 'custom') {
      var ci = document.getElementById('arranque-custom-input');
      rsvpMode.text.value = ci ? ci.value : '';
      if (!validateCustomText(rsvpMode.text.value, 'arranque-custom-warning')) return false;
    } else {
      var found = null;
      window.APP_DATA.texts.forEach(function(t) { if (t.id === sel.value) found = t; });
      if (found) rsvpMode.text.value = found.body;
    }
  }
  const words = splitWords(rsvpMode.text.value);
  if (!words.length) {
    resetCommonMode(rsvpMode, RSVP_EMPTY);
    rsvpMode.display.textContent = "Selecione um texto para começar.";
    return false;
  }
  rsvpMode.words = words;
  rsvpMode.totalEl.textContent = String(words.length);
  return true;
}

function runRsvp() {
  if (rsvpMode.index >= rsvpMode.words.length) {
    stopTimerIfExists(rsvpMode);
    rsvpMode.running = false;
    rsvpMode.statusEl.textContent = "Concluído";
    onArranqueComplete();
    return;
  }
  rsvpMode.display.textContent = rsvpMode.words[rsvpMode.index];
  rsvpMode.display.dataset.hasContent = "true";
  rsvpMode.index += 1;
  rsvpMode.indexEl.textContent = String(rsvpMode.index);
}

function startRsvp() {
  if (!rsvpMode.words.length && !prepareRsvp()) return;
  stopTimerIfExists(rsvpMode);
  rsvpMode.running = true;
  rsvpMode.statusEl.textContent = "Lendo";
  scrollToReadingArea(rsvpMode.display.closest(".display"));
  runRsvp();
  const interval = Math.max(60, Math.round(60000 / Number(rsvpMode.speed.value)));
  rsvpMode.timer = setInterval(runRsvp, interval);
}

rsvpMode.speed.addEventListener("input", () => {
  rsvpMode.speedValue.textContent = rsvpMode.speed.value;
  if (rsvpMode.running) startRsvp();
});

rsvpMode.startBtn.addEventListener("click", () => {
  if (!rsvpMode.words.length || rsvpMode.index === 0 || rsvpMode.index >= rsvpMode.words.length) {
    rsvpMode.index = 0;
    prepareRsvp();
  }
  startRsvp();
});

rsvpMode.pauseBtn.addEventListener("click", () => {
  stopTimerIfExists(rsvpMode);
  rsvpMode.running = false;
  rsvpMode.statusEl.textContent = "Pausado";
});

rsvpMode.resetBtn.addEventListener("click", () => {
  rsvpMode.index = 0;
  resetCommonMode(rsvpMode, RSVP_EMPTY);
  var ci = document.getElementById('arranque-custom-input');
  if (ci) ci.value = '';
  var warnEl = document.getElementById('arranque-custom-warning');
  if (warnEl) warnEl.style.display = 'none';
  document.getElementById('arranque-word-count').textContent = '';
});

/* ── Speed Test Mode ── */

const SPEED_EMPTY = "Cole um texto, clique em Iniciar e leia normalmente. Quando terminar, clique em Parar.";

const speedMode = {
  text: document.getElementById("speed-text"),
  display: document.getElementById("speed-display"),
  timerEl: document.getElementById("speed-timer"),
  wordsEl: document.getElementById("speed-word-count"),
  totalTimeEl: document.getElementById("speed-total-time"),
  wpmEl: document.getElementById("speed-wpm"),
  resultEl: document.getElementById("speed-result"),
  startBtn: document.getElementById("speed-start"),
  stopBtn: document.getElementById("speed-stop"),
  resetBtn: document.getElementById("speed-reset"),
  timer: null,
  seconds: 0,
  running: false
};

function renderSpeedText() {
  const text = speedMode.text.value.trim();
  speedMode.display.textContent = text || SPEED_EMPTY;
  speedMode.display.dataset.hasContent = text ? "true" : "";
  speedMode.wordsEl.textContent = String(splitWords(text).length);
}

function updateSpeedTimer() {
  speedMode.seconds += 1;
  speedMode.timerEl.textContent = formatTime(speedMode.seconds);
  speedMode.totalTimeEl.textContent = formatTime(speedMode.seconds);
  updateModalTimer(speedMode.seconds);
}

function startSpeedTest() {
  if (speedMode.running) return;
  var sel = document.getElementById('retencao-select');
  var isCustom = sel && sel.value === 'custom';
  if (isCustom) {
    var ci = document.getElementById('retencao-custom-input');
    speedMode.text.value = ci ? ci.value : '';
    if (!validateCustomText(speedMode.text.value, 'retencao-custom-warning')) return;
  }
  const words = splitWords(speedMode.text.value);
  if (!words.length) { renderSpeedText(); return; }
  renderSpeedText();
  speedMode.seconds = 0;
  speedMode.running = true;
  speedMode.timer = setInterval(updateSpeedTimer, 1000);
  var title = isCustom ? 'Texto próprio'
    : (sel && sel.options[sel.selectedIndex] ? sel.options[sel.selectedIndex].text : 'Leitura');
  openReadingModal(title, speedMode.text.value, function() {
    speedMode.stopBtn.click();
  });
}

function stopSpeedTest() {
  if (!speedMode.running) return;
  closeReadingModal();
  clearInterval(speedMode.timer);
  speedMode.timer = null;
  speedMode.running = false;
  const wordCount = splitWords(speedMode.text.value).length;
  const minutes = speedMode.seconds / 60;
  const wpm = minutes > 0 ? Math.round(wordCount / minutes) : 0;
  speedMode.wordsEl.textContent = String(wordCount);
  speedMode.totalTimeEl.textContent = formatTime(speedMode.seconds);
  speedMode.wpmEl.textContent = String(wpm);
  onRetencaoComplete(wpm, speedMode.seconds);
}

function resetSpeedTest() {
  if (speedMode.timer) clearInterval(speedMode.timer);
  speedMode.timer = null;
  speedMode.running = false;
  speedMode.seconds = 0;
  speedMode.timerEl.textContent = "00:00";
  speedMode.totalTimeEl.textContent = "00:00";
  speedMode.wpmEl.textContent = "0";
  speedMode.resultEl.dataset.completed = "";
  speedMode.resultEl.innerHTML = "<h3>Resultado</h3><p>Quando você finalizar a leitura e clicar em Parar, o resultado vai aparecer aqui.</p>";
  var ci = document.getElementById('retencao-custom-input');
  if (ci) ci.value = '';
  var warnEl = document.getElementById('retencao-custom-warning');
  if (warnEl) warnEl.style.display = 'none';
  document.getElementById('retencao-word-count').textContent = '';
  renderSpeedText();
}

speedMode.text.addEventListener("input", renderSpeedText);
speedMode.startBtn.addEventListener("click", startSpeedTest);
speedMode.stopBtn.addEventListener("click", stopSpeedTest);
speedMode.resetBtn.addEventListener("click", resetSpeedTest);

/* ── Chunking Mode ── */

const CHUNK_EMPTY = "Selecione um texto e clique em Iniciar";

const chunkMode = {
  text:       document.getElementById("chunk-text"),
  size:       document.getElementById("chunk-size"),
  sizeValue:  document.getElementById("chunk-size-value"),
  speed:      document.getElementById("chunk-speed"),
  speedValue: document.getElementById("chunk-speed-value"),
  display:    document.getElementById("chunk-display"),
  totalEl:    document.getElementById("chunk-total"),
  indexEl:    document.getElementById("chunk-index"),
  statusEl:   document.getElementById("chunk-status"),
  startBtn:   document.getElementById("chunk-start"),
  pauseBtn:   document.getElementById("chunk-pause"),
  resetBtn:   document.getElementById("chunk-reset"),
  chunks: [],
  index:  0,
  timer:  null,
  running: false
};

function buildChunks(text, size) {
  var words = splitWords(text);
  var chunks = [];
  for (var i = 0; i < words.length; i += size) {
    chunks.push(words.slice(i, i + size).join(' '));
  }
  return chunks;
}

function prepareChunk() {
  var sel = document.getElementById('chunk-select');
  if (sel) {
    if (sel.value === 'custom') {
      var ci = document.getElementById('chunk-custom-input');
      chunkMode.text.value = ci ? ci.value : '';
      if (!validateCustomText(chunkMode.text.value, 'chunk-custom-warning')) return false;
    } else {
      var found = null;
      window.APP_DATA.texts.forEach(function(t) { if (t.id === sel.value) found = t; });
      if (found) chunkMode.text.value = found.body;
    }
  }
  var size = Number(chunkMode.size.value);
  var chunks = buildChunks(chunkMode.text.value, size);
  if (!chunks.length) {
    chunkMode.display.textContent = CHUNK_EMPTY;
    chunkMode.display.dataset.hasContent = '';
    chunkMode.totalEl.textContent = '0';
    return false;
  }
  chunkMode.chunks = chunks;
  chunkMode.totalEl.textContent = String(chunks.length);
  return true;
}

function runChunk() {
  if (chunkMode.index >= chunkMode.chunks.length) {
    stopTimerIfExists(chunkMode);
    chunkMode.running = false;
    chunkMode.statusEl.textContent = 'Concluído';
    onChunkingComplete();
    return;
  }
  chunkMode.display.textContent = chunkMode.chunks[chunkMode.index];
  chunkMode.display.dataset.hasContent = 'true';
  chunkMode.index += 1;
  chunkMode.indexEl.textContent = String(chunkMode.index);
}

function startChunk() {
  if (!chunkMode.chunks.length && !prepareChunk()) return;
  stopTimerIfExists(chunkMode);
  chunkMode.running = true;
  chunkMode.statusEl.textContent = 'Lendo';
  scrollToReadingArea(chunkMode.display.closest('.display'));
  runChunk();
  var wordsPerChunk = Number(chunkMode.size.value);
  var wpm = Number(chunkMode.speed.value);
  var interval = Math.max(200, Math.round((wordsPerChunk / wpm) * 60000));
  chunkMode.timer = setInterval(runChunk, interval);
}

chunkMode.size.addEventListener('input', function() {
  chunkMode.sizeValue.textContent = chunkMode.size.value;
  if (chunkMode.chunks.length) prepareChunk();
});

chunkMode.speed.addEventListener('input', function() {
  chunkMode.speedValue.textContent = chunkMode.speed.value;
  if (chunkMode.running) startChunk();
});

chunkMode.startBtn.addEventListener('click', function() {
  if (!chunkMode.chunks.length || chunkMode.index === 0 || chunkMode.index >= chunkMode.chunks.length) {
    chunkMode.index = 0;
    if (!prepareChunk()) return;
  }
  startChunk();
});

chunkMode.pauseBtn.addEventListener('click', function() {
  stopTimerIfExists(chunkMode);
  chunkMode.running = false;
  chunkMode.statusEl.textContent = 'Pausado';
});

chunkMode.resetBtn.addEventListener('click', function() {
  stopTimerIfExists(chunkMode);
  chunkMode.chunks = [];
  chunkMode.index  = 0;
  chunkMode.running = false;
  chunkMode.display.textContent = CHUNK_EMPTY;
  chunkMode.display.dataset.hasContent = '';
  chunkMode.indexEl.textContent  = '0';
  chunkMode.totalEl.textContent  = '0';
  chunkMode.statusEl.textContent = 'Parado';
  var ci = document.getElementById('chunk-custom-input');
  if (ci) ci.value = '';
  var warnEl = document.getElementById('chunk-custom-warning');
  if (warnEl) warnEl.style.display = 'none';
  document.getElementById('chunk-word-count').textContent = '';
});

/* ── Training — Text Selects ── */

function initTrainingSelects() {
  var texts = window.APP_DATA.texts;
  var customOpt = '<option value="custom">✏ Meu próprio texto</option>';
  var separator  = '<option disabled>──────────────</option>';

  // Group texts by "área › subárea"
  var groups = {};
  var groupOrder = [];
  texts.forEach(function(t) {
    var cat = Array.isArray(t.category) ? t.category : [t.category];
    var key = cat[0] + (cat[1] ? ' › ' + cat[1] : '');
    if (!groups[key]) { groups[key] = []; groupOrder.push(key); }
    groups[key].push(t);
  });

  var groupedOpts = groupOrder.map(function(key) {
    var opts = groups[key].map(function(t) {
      return '<option value="' + t.id + '">' + t.title + '</option>';
    }).join('');
    return '<optgroup label="' + key + '">' + opts + '</optgroup>';
  }).join('');

  var allOpts = customOpt + separator + groupedOpts;

  var arranqueSel = document.getElementById('arranque-select');
  var retencaoSel = document.getElementById('retencao-select');
  var chunkSel    = document.getElementById('chunk-select');
  if (arranqueSel) arranqueSel.innerHTML = allOpts;
  if (retencaoSel) retencaoSel.innerHTML = allOpts;
  if (chunkSel)    chunkSel.innerHTML    = allOpts;

  // Default to first platform text
  if (arranqueSel) arranqueSel.value = texts[0].id;
  if (retencaoSel) retencaoSel.value = texts[0].id;
  if (chunkSel)    chunkSel.value    = texts[0].id;

  loadArranqueText();
  loadRetencaoText();
  loadChunkText();

  if (arranqueSel) arranqueSel.addEventListener('change', loadArranqueText);
  if (retencaoSel) retencaoSel.addEventListener('change', loadRetencaoText);
  if (chunkSel)    chunkSel.addEventListener('change', loadChunkText);

  // Live word count + validation for all three custom textareas
  function liveCount(inputId, countId, warningId) {
    var el = document.getElementById(inputId);
    if (!el) return;
    el.addEventListener('input', function() {
      var wc = splitWords(el.value).length;
      document.getElementById(countId).textContent = wc ? wc + ' palavras' : '';
      validateCustomText(el.value, warningId);
    });
  }
  liveCount('arranque-custom-input', 'arranque-word-count', 'arranque-custom-warning');
  liveCount('retencao-custom-input', 'retencao-word-count', 'retencao-custom-warning');
  liveCount('chunk-custom-input',    'chunk-word-count',    'chunk-custom-warning');
}

function getSelectedText(selectId) {
  var sel = document.getElementById(selectId);
  if (!sel || !sel.value) return null;
  var found = null;
  window.APP_DATA.texts.forEach(function(t) { if (t.id === sel.value) found = t; });
  return found;
}

function loadArranqueText() {
  var sel = document.getElementById('arranque-select');
  var customField = document.getElementById('arranque-custom-field');
  var isCustom = sel && sel.value === 'custom';
  if (customField) customField.style.display = isCustom ? 'block' : 'none';
  if (isCustom) {
    rsvpMode.text.value = '';
    document.getElementById('arranque-word-count').textContent = '';
    rsvpMode.index = 0;
    resetCommonMode(rsvpMode, 'Cole seu texto e clique em Iniciar');
    return;
  }
  var t = getSelectedText('arranque-select');
  if (!t) return;
  rsvpMode.text.value = t.body;
  document.getElementById('arranque-word-count').textContent = splitWords(t.body).length + ' palavras';
  rsvpMode.index = 0;
  resetCommonMode(rsvpMode, 'Selecione um texto e clique em Iniciar');
}

function loadRetencaoText() {
  var sel = document.getElementById('retencao-select');
  var customField = document.getElementById('retencao-custom-field');
  var isCustom = sel && sel.value === 'custom';
  if (customField) customField.style.display = isCustom ? 'block' : 'none';
  if (isCustom) {
    speedMode.text.value = '';
    document.getElementById('retencao-word-count').textContent = '';
    return;
  }
  var t = getSelectedText('retencao-select');
  if (!t) return;
  speedMode.text.value = t.body;
  document.getElementById('retencao-word-count').textContent = splitWords(t.body).length + ' palavras';
  renderSpeedText();
}

function loadChunkText() {
  var sel = document.getElementById('chunk-select');
  var customField = document.getElementById('chunk-custom-field');
  var isCustom = sel && sel.value === 'custom';
  if (customField) customField.style.display = isCustom ? 'block' : 'none';
  if (isCustom) {
    chunkMode.text.value = '';
    document.getElementById('chunk-word-count').textContent = '';
    chunkMode.chunks = [];
    chunkMode.index = 0;
    chunkMode.display.textContent = 'Cole seu texto e clique em Iniciar';
    chunkMode.display.dataset.hasContent = '';
    chunkMode.totalEl.textContent = '0';
    chunkMode.statusEl.textContent = 'Parado';
    return;
  }
  var t = null;
  window.APP_DATA.texts.forEach(function(tx) { if (tx.id === sel.value) t = tx; });
  if (!t) return;
  chunkMode.text.value = t.body;
  document.getElementById('chunk-word-count').textContent = splitWords(t.body).length + ' palavras';
  chunkMode.chunks = [];
  chunkMode.index = 0;
  chunkMode.display.textContent = 'Selecione um texto e clique em Iniciar';
  chunkMode.display.dataset.hasContent = '';
  chunkMode.totalEl.textContent = '0';
  chunkMode.statusEl.textContent = 'Parado';
}

/* ── Training — Completion Hooks ── */

var trainingSession = {
  mode: null, textId: null, textTitle: null,
  wpm: 0, seconds: 0, quizText: null, quizAnswers: {}
};

function onArranqueComplete() {
  var sel = document.getElementById('arranque-select');
  var isCustom = sel && sel.value === 'custom';
  var wpm = Number(rsvpMode.speed.value);
  var seconds = Math.round(rsvpMode.words.length / (wpm / 60));
  trainingSession.mode = 'arranque';
  trainingSession.seconds = seconds;
  trainingSession.wpm = wpm;
  if (isCustom) {
    trainingSession.textId = 'custom';
    trainingSession.textTitle = 'Texto próprio';
    trainingSession.quizText = null;
    saveSession({ id: Date.now(), date: new Date().toISOString(), mode: 'arranque',
      textId: 'custom', textTitle: 'Texto próprio', wpm: wpm, accuracy: null,
      quizCorrect: null, quizTotal: null, durationSeconds: seconds });
    showResultsScreen({ mode: 'arranque', textTitle: 'Texto próprio', wpm: wpm,
      accuracy: null, quizCorrect: null, quizTotal: null, durationSeconds: seconds });
    return;
  }
  var t = getSelectedText('arranque-select');
  if (!t) return;
  trainingSession.textId = t.id;
  trainingSession.textTitle = t.title;
  trainingSession.quizText = t;
  showTrainingQuiz();
}

function onRetencaoComplete(wpm, seconds) {
  var sel = document.getElementById('retencao-select');
  var isCustom = sel && sel.value === 'custom';
  trainingSession.mode = 'retencao';
  trainingSession.wpm = wpm;
  trainingSession.seconds = seconds;
  if (isCustom) {
    trainingSession.textId = 'custom';
    trainingSession.textTitle = 'Texto próprio';
    trainingSession.quizText = null;
    saveSession({ id: Date.now(), date: new Date().toISOString(), mode: 'retencao',
      textId: 'custom', textTitle: 'Texto próprio', wpm: wpm, accuracy: null,
      quizCorrect: null, quizTotal: null, durationSeconds: seconds });
    showResultsScreen({ mode: 'retencao', textTitle: 'Texto próprio', wpm: wpm,
      accuracy: null, quizCorrect: null, quizTotal: null, durationSeconds: seconds });
    return;
  }
  var t = getSelectedText('retencao-select');
  if (!t) return;
  trainingSession.textId = t.id;
  trainingSession.textTitle = t.title;
  trainingSession.quizText = t;
  showTrainingQuiz();
}

function onChunkingComplete() {
  var sel = document.getElementById('chunk-select');
  var isCustom = sel && sel.value === 'custom';
  var wpm = Number(chunkMode.speed.value);
  var totalWords = chunkMode.chunks.reduce(function(sum, c) {
    return sum + splitWords(c).length;
  }, 0);
  var seconds = Math.round(totalWords / (wpm / 60));
  trainingSession.mode    = 'chunking';
  trainingSession.wpm     = wpm;
  trainingSession.seconds = seconds;
  if (isCustom) {
    trainingSession.textId    = 'custom';
    trainingSession.textTitle = 'Texto próprio';
    trainingSession.quizText  = null;
    saveSession({ id: Date.now(), date: new Date().toISOString(), mode: 'chunking',
      textId: 'custom', textTitle: 'Texto próprio', wpm: wpm, accuracy: null,
      quizCorrect: null, quizTotal: null, durationSeconds: seconds });
    showResultsScreen({ mode: 'chunking', textTitle: 'Texto próprio', wpm: wpm,
      accuracy: null, quizCorrect: null, quizTotal: null, durationSeconds: seconds });
    return;
  }
  var t = null;
  window.APP_DATA.texts.forEach(function(tx) { if (tx.id === sel.value) t = tx; });
  if (!t) return;
  trainingSession.textId    = t.id;
  trainingSession.textTitle = t.title;
  trainingSession.quizText  = t;
  showTrainingQuiz();
}

/* ── Training — Quiz Overlay ── */

function showTrainingQuiz() {
  document.getElementById('screen-training').classList.add('quiz-active');
  document.getElementById('tquiz-title').textContent = trainingSession.quizText.title;
  renderTrainingQuiz(trainingSession.quizText.quiz);
}

function hideTrainingQuiz() {
  document.getElementById('screen-training').classList.remove('quiz-active');
}

function renderTrainingQuiz(questions) {
  trainingSession.quizAnswers = {};
  var container = document.getElementById('tquiz-container');

  container.innerHTML = questions.map(function(q, qi) {
    return '<div class="quiz-question">' +
      '<p class="quiz-q-text"><strong>' + (qi + 1) + '.</strong> ' + q.question + '</p>' +
      '<div class="quiz-options">' +
      q.options.map(function(opt, oi) {
        return '<button class="option-card quiz-opt" data-qi="' + qi + '" data-oi="' + oi + '">' + opt + '</button>';
      }).join('') +
      '</div></div>';
  }).join('');

  container.querySelectorAll('.quiz-opt').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var qi = btn.dataset.qi;
      container.querySelectorAll('.quiz-opt[data-qi="' + qi + '"]').forEach(function(b) {
        b.classList.remove('selected');
      });
      btn.classList.add('selected');
      trainingSession.quizAnswers[qi] = Number(btn.dataset.oi);
      var allAnswered = questions.every(function(_, i) {
        return trainingSession.quizAnswers[i] !== undefined;
      });
      document.getElementById('tquiz-submit').disabled = !allAnswered;
    });
  });

  document.getElementById('tquiz-submit').disabled = true;
  document.getElementById('tquiz-submit').onclick = submitTrainingQuiz;
}

document.getElementById('tquiz-back').addEventListener('click', function() {
  hideTrainingQuiz();
});

function submitTrainingQuiz() {
  var questions = trainingSession.quizText.quiz;
  var correct = 0;
  questions.forEach(function(q, i) {
    if (trainingSession.quizAnswers[i] === q.correct) correct++;
  });
  var accuracy = Math.round((correct / questions.length) * 100);

  var session = {
    id: Date.now(),
    date: new Date().toISOString(),
    mode: trainingSession.mode,
    textId: trainingSession.textId,
    textTitle: trainingSession.textTitle,
    wpm: trainingSession.wpm,
    accuracy: accuracy,
    quizCorrect: correct,
    quizTotal: questions.length,
    durationSeconds: trainingSession.seconds
  };

  saveSession(session);
  hideTrainingQuiz();
  showResultsScreen(session);
}

/* ── Storage ── */

function saveSession(session) {
  try {
    var sessions = JSON.parse(localStorage.getItem('retenza_sessions') || '[]');
    sessions.unshift(session);
    if (sessions.length > 50) sessions = sessions.slice(0, 50);
    localStorage.setItem('retenza_sessions', JSON.stringify(sessions));

    var stats = JSON.parse(localStorage.getItem('retenza_stats') || '{}');
    stats.totalSessions = (stats.totalSessions || 0) + 1;
    stats.bestWPM = Math.max(stats.bestWPM || 0, session.wpm);
    stats.bestAccuracy = Math.max(stats.bestAccuracy || 0, session.accuracy);
    var today = new Date().toDateString();
    var last = stats.lastSessionDate;
    if (last === today) {
      // same day — streak unchanged
    } else if (last === new Date(Date.now() - 86400000).toDateString()) {
      stats.currentStreak = (stats.currentStreak || 1) + 1;
    } else {
      stats.currentStreak = 1;
    }
    stats.lastSessionDate = today;
    localStorage.setItem('retenza_stats', JSON.stringify(stats));
  } catch(e) {}
}

/* ── Results ── */

function showResultsScreen(session) {
  var modeLabel = session.mode === 'arranque' ? 'Leitura de Arranque'
    : session.mode === 'chunking' ? 'Leitura em Blocos'
    : 'Retenção Ativa';
  document.getElementById('res-mode-badge').textContent = modeLabel;
  document.getElementById('res-title').textContent = session.textTitle;

  var accCell = session.accuracy !== null
    ? '<div class="res-stat"><span class="stat-label">Compreensão</span><strong>' + session.accuracy + '%</strong></div>' +
      '<div class="res-stat"><span class="stat-label">Acertos</span><strong>' + session.quizCorrect + '/' + session.quizTotal + '</strong></div>'
    : '';
  document.getElementById('res-stats-grid').innerHTML =
    '<div class="res-stat"><span class="stat-label">Velocidade</span><strong>' + session.wpm + ' PPM</strong></div>' +
    accCell +
    '<div class="res-stat"><span class="stat-label">Duração</span><strong>' + formatTime(session.durationSeconds) + '</strong></div>';

  var msg = '';
  if (session.wpm < 150) {
    msg = 'Velocidade abaixo da média. Continue com Leitura de Arranque para ganhar ritmo.';
  } else if (session.accuracy < 67) {
    msg = 'Foque na compreensão. Retenção Ativa vai te ajudar a reter mais do que lê.';
  } else {
    msg = 'Ótimo desempenho! Continue treinando para manter e superar esses números.';
  }
  document.getElementById('res-suggestion').textContent = msg;

  showScreen('screen-results');
}

/* ── Progress ── */

function showProgressScreen() {
  var stats = {};
  var sessions = [];
  try {
    stats = JSON.parse(localStorage.getItem('retenza_stats') || '{}');
    sessions = JSON.parse(localStorage.getItem('retenza_sessions') || '[]');
  } catch(e) {}

  renderProgStats(stats, sessions);
  renderProgHistory(sessions);
  showScreen('screen-progress');
}

function renderProgStats(stats, sessions) {
  var total = stats.totalSessions || 0;
  var bestWPM = stats.bestWPM || 0;
  var bestAcc = stats.bestAccuracy || 0;
  var streak = stats.currentStreak || 0;
  var lastDate = stats.lastSessionDate
    ? new Date(stats.lastSessionDate).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
    : '--';

  var el = document.getElementById('prog-stats-grid');
  if (!el) return;

  if (total === 0) {
    el.innerHTML = '<div class="prog-empty"><p>Nenhuma sessão registrada ainda.</p><p>Complete seu primeiro treino para ver o progresso aqui.</p></div>';
    return;
  }

  el.innerHTML =
    progStat('Total de sessões', total, '') +
    progStat('Melhor PPM', bestWPM, '') +
    progStat('Melhor compreensão', bestAcc, '%') +
    progStat('Sequência atual', streak, streak === 1 ? ' dia' : ' dias') +
    progStat('Última sessão', lastDate, '');
}

function progStat(label, value, suffix) {
  return '<div class="prog-stat">' +
    '<span class="stat-label">' + label + '</span>' +
    '<strong>' + value + suffix + '</strong>' +
    '</div>';
}

function renderProgHistory(sessions) {
  var el = document.getElementById('prog-history');
  if (!el) return;

  var last10 = sessions.slice(0, 10);
  if (!last10.length) {
    el.innerHTML = '<p class="prog-empty-list">Nenhuma sessão ainda. Faça seu primeiro treino!</p>';
    return;
  }

  el.innerHTML = last10.map(function(s) {
    var modeLabel = s.mode === 'arranque' ? 'Arranque' : s.mode === 'chunking' ? 'Blocos' : 'Retenção';
    var modeClass = s.mode === 'arranque' ? 'badge-arranque' : s.mode === 'chunking' ? 'badge-chunk' : 'badge-retencao';
    var date = new Date(s.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' });
    return '<div class="prog-session-item">' +
      '<span class="session-badge ' + modeClass + '">' + modeLabel + '</span>' +
      '<span class="session-title">' + s.textTitle + '</span>' +
      '<span class="session-stats">' + s.wpm + ' PPM' + (s.accuracy !== null ? ' &middot; ' + s.accuracy + '%' : '') + '</span>' +
      '<span class="session-date">' + date + '</span>' +
      '</div>';
  }).join('');
}

/* ── Init ── */

rsvpMode.speedValue.textContent  = rsvpMode.speed.value;
chunkMode.sizeValue.textContent  = chunkMode.size.value;
chunkMode.speedValue.textContent = chunkMode.speed.value;
initTrainingSelects();
initBlog();

// Show "Continuar treinando" in navbar for returning users
try {
  if (localStorage.getItem('retenza_profile')) {
    var navContinue = document.getElementById('nav-continue');
    if (navContinue) navContinue.style.display = 'inline-flex';
  }
} catch(e) {}
