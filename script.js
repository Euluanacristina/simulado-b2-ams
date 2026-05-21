const state = {
  allQuestions: [...questions],
  visibleQuestions: [...questions],
  currentIndex: 0,
  answers: {},
};

const quizCard = document.getElementById('quizCard');
const resultCard = document.getElementById('resultCard');
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('scoreText');
const unitFilter = document.getElementById('unitFilter');
const shuffleBtn = document.getElementById('shuffleBtn');
const resetBtn = document.getElementById('resetBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');

function normalizeSpaces(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function parseQuestion(raw) {
  const clean = normalizeSpaces(raw).replace(/\*+/g, '').trim();
  const splitMarker = 'Escolha uma:';
  const altMarker = 'Escolha um a:';
  const marker = clean.includes(splitMarker) ? splitMarker : altMarker;
  if (!clean.includes(marker)) {
    return { stem: clean, options: [] };
  }

  const [stemPart, optionPart] = clean.split(marker);
  const optionRegex = /([a-e])\.\s*(.*?)(?=\s+[a-e]\.\s*|$)/gi;
  const options = [];
  let match;
  while ((match = optionRegex.exec(optionPart)) !== null) {
    options.push({ key: match[1].toLowerCase(), text: match[2].trim() });
  }
  return { stem: stemPart.trim(), options };
}

function renderQuestion() {
  const question = state.visibleQuestions[state.currentIndex];
  if (!question) {
    quizCard.innerHTML = '<p>Nenhuma questão encontrada para esse filtro.</p>';
    progressText.textContent = 'Sem questões';
    scoreText.textContent = 'Respondidas: 0';
    return;
  }

  const parsed = parseQuestion(question.raw);
  const selected = state.answers[question.id];
  const showFeedback = Boolean(selected);

  progressText.textContent = `Questão ${state.currentIndex + 1} de ${state.visibleQuestions.length}`;
  scoreText.textContent = `Respondidas: ${Object.keys(state.answers).filter(id => state.visibleQuestions.some(q => q.id === id)).length}`;

  const optionsHtml = parsed.options.length
    ? parsed.options.map(option => {
        let classes = 'option';
        if (showFeedback && question.answer) {
          if (option.key === question.answer) classes += ' correct';
          if (option.key === selected && option.key !== question.answer) classes += ' incorrect';
        }
        return `
          <label class="${classes}">
            <input type="radio" name="answer" value="${option.key}" ${selected === option.key ? 'checked' : ''}>
            <span><strong>${option.key.toUpperCase()}.</strong> ${option.text}</span>
          </label>
        `;
      }).join('')
    : '<p class="muted">Questão exibida em modo de estudo. O enunciado foi recuperado, mas as alternativas completas não estavam legíveis na extração original.</p>';

  let feedback = '';
  if (showFeedback) {
    if (question.answer) {
      feedback = selected === question.answer
        ? '<div class="feedback">Resposta correta.</div>'
        : `<div class="feedback">Resposta marcada: ${selected.toUpperCase()}. Gabarito detectado: ${question.answer.toUpperCase()}.</div>`;
    } else {
      feedback = '<div class="feedback">Questão disponível para estudo. O gabarito ou as alternativas completas não puderam ser recuperados com segurança da extração original.</div>';
    }
  }

  const figureHtml = question.figure
    ? `<div class="question-figure"><img src="${question.figure}" alt="Figura da questão ${question.id}"></div>`
    : '';

  quizCard.innerHTML = `
    <div class="question-meta">Unidade ${question.unit} • ID ${question.id}</div>
    <div class="question-text">${parsed.stem}</div>
    ${figureHtml}
    <div class="option-list">${optionsHtml}</div>
    ${feedback}
  `;

  quizCard.querySelectorAll('input[name="answer"]').forEach(input => {
    input.addEventListener('change', event => {
      state.answers[question.id] = event.target.value;
      renderQuestion();
    });
  });

  prevBtn.disabled = state.currentIndex === 0;
  nextBtn.disabled = state.currentIndex === state.visibleQuestions.length - 1;
}

function applyFilter() {
  const unit = unitFilter.value;
  state.visibleQuestions = unit === 'all'
    ? [...state.allQuestions]
    : state.allQuestions.filter(question => question.unit === unit);
  state.currentIndex = 0;
  resultCard.classList.add('hidden');
  renderQuestion();
}

function shuffleQuestions() {
  for (let i = state.visibleQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.visibleQuestions[i], state.visibleQuestions[j]] = [state.visibleQuestions[j], state.visibleQuestions[i]];
  }
  state.currentIndex = 0;
  renderQuestion();
}

function resetQuiz() {
  state.answers = {};
  state.currentIndex = 0;
  resultCard.classList.add('hidden');
  applyFilter();
}

function finishQuiz() {
  const inScope = state.visibleQuestions;
  const answered = inScope.filter(question => state.answers[question.id]);
  const gradable = inScope.filter(question => question.answer);
  const correct = gradable.filter(question => state.answers[question.id] === question.answer);
  resultCard.classList.remove('hidden');
  resultCard.innerHTML = `
    <h2>Resultado</h2>
    <div class="result-grid">
      <div class="result-item"><strong>Total de questões no filtro</strong>${inScope.length}</div>
      <div class="result-item"><strong>Respondidas</strong>${answered.length}</div>
      <div class="result-item"><strong>Questões com gabarito detectado</strong>${gradable.length}</div>
      <div class="result-item"><strong>Acertos nas corrigíveis</strong>${correct.length}</div>
      <div class="result-item"><strong>Observação</strong>Algumas questões continuam sem gabarito confirmado, mas permanecem disponíveis para revisão e estudo.</div>
    </div>
  `;
}

unitFilter.addEventListener('change', applyFilter);
shuffleBtn.addEventListener('click', shuffleQuestions);
resetBtn.addEventListener('click', resetQuiz);
prevBtn.addEventListener('click', () => {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
});
nextBtn.addEventListener('click', () => {
  if (state.currentIndex < state.visibleQuestions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
  }
});
finishBtn.addEventListener('click', finishQuiz);

applyFilter();
