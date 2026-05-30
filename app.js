let questions = [
  {
    topic: "Engenharia de Requisitos",
    question: "O que é Engenharia de Requisitos?",
    options: [
      "Área responsável por descobrir, analisar, documentar, validar e gerenciar o que o sistema deve fazer.",
      "Técnica usada apenas para desenhar telas do sistema.",
      "Processo exclusivo de programação em Java.",
      "Área que cuida somente da compra de equipamentos."
    ],
    answer: 0,
    explanation: "A Engenharia de Requisitos garante que o software seja desenvolvido conforme a necessidade do cliente."
  },
  {
    topic: "Engenharia de Requisitos",
    question: "Qual é o objetivo principal da Engenharia de Requisitos?",
    options: [
      "Garantir que o software seja desenvolvido exatamente como o cliente precisa.",
      "Eliminar toda documentação do projeto.",
      "Definir apenas a linguagem de programação.",
      "Criar somente o banco de dados."
    ],
    answer: 0,
    explanation: "O foco é entender, validar e controlar aquilo que o sistema deve entregar."
  },
  {
    topic: "Requisitos",
    question: "Um requisito pode ser entendido como:",
    options: [
      "Uma necessidade do sistema, função, restrição, qualidade ou serviço oferecido.",
      "Um erro encontrado no código-fonte.",
      "Uma cor escolhida para o layout.",
      "Um tipo de cabo de rede."
    ],
    answer: 0,
    explanation: "Requisito é aquilo que o sistema precisa fazer ou respeitar."
  },
  {
    topic: "RF x RNF",
    question: "Requisitos Funcionais mostram:",
    options: [
      "O que o sistema faz.",
      "Apenas a velocidade do servidor.",
      "Somente a linguagem usada.",
      "Como será o orçamento."
    ],
    answer: 0,
    explanation: "RF descreve funções e ações executadas pelo sistema."
  },
  {
    topic: "RF x RNF",
    question: "Qual alternativa é exemplo de requisito funcional?",
    options: [
      "O sistema deve cadastrar alunos.",
      "O sistema deve responder em até 7 segundos.",
      "O sistema deverá ser implementado em Java.",
      "Apenas administradores podem acessar relatórios."
    ],
    answer: 0,
    explanation: "Cadastrar alunos é uma função do sistema, portanto é RF."
  },
  {
    topic: "RF x RNF",
    question: "Requisitos Não Funcionais mostram:",
    options: [
      "Como o sistema deve funcionar.",
      "Somente quais telas existem.",
      "Apenas cadastros do sistema.",
      "A lista de clientes."
    ],
    answer: 0,
    explanation: "RNF está ligado a qualidade, restrição, desempenho, segurança, usabilidade e tecnologia."
  },
  {
    topic: "RF x RNF",
    question: "Qual alternativa é exemplo de requisito não funcional?",
    options: [
      "O sistema deve responder em até 7 segundos.",
      "O sistema deve cadastrar usuários.",
      "O sistema deve emitir boletos.",
      "O sistema deve consultar notas."
    ],
    answer: 0,
    explanation: "Tempo de resposta é uma métrica de desempenho, logo é RNF."
  },
  {
    topic: "RF x RNF",
    question: "Dica de prova: se um requisito pode ser medido, geralmente ele é:",
    options: [
      "Não funcional.",
      "Funcional.",
      "Classe.",
      "Objeto."
    ],
    answer: 0,
    explanation: "Tempo, velocidade, confiabilidade e desempenho costumam ser RNF."
  },
  {
    topic: "Requisitos de Domínio",
    question: "Requisitos de domínio são:",
    options: [
      "Regras específicas do negócio.",
      "Somente botões da interface.",
      "Métodos de uma classe.",
      "Diagramas UML obrigatórios."
    ],
    answer: 0,
    explanation: "Exemplo do material: aluno só será aprovado se atingir 3000 pontos."
  },
  {
    topic: "Qualidade dos Requisitos",
    question: "Um bom requisito deve ser:",
    options: [
      "Exato, preciso, completo, consistente, prioritário, verificável, modificável e rastreável.",
      "Vago, incompleto e impossível de testar.",
      "Sempre escrito sem prioridade.",
      "Apenas visual e sem validação."
    ],
    answer: 0,
    explanation: "Essas qualidades ajudam a evitar ambiguidade, erro e retrabalho."
  },
  {
    topic: "Prioridade",
    question: "Prioridade essencial significa que:",
    options: [
      "Sem o requisito, o sistema não funciona.",
      "O requisito é opcional.",
      "O requisito é bonito, mas desnecessário.",
      "O requisito nunca deve ser implementado."
    ],
    answer: 0,
    explanation: "Essencial é aquilo que o sistema precisa ter para funcionar."
  },
  {
    topic: "Prioridade",
    question: "Prioridade desejável significa:",
    options: [
      "Opcional.",
      "Obrigatória para o sistema funcionar.",
      "Erro de requisito.",
      "Regra de encapsulamento."
    ],
    answer: 0,
    explanation: "Desejável é algo que pode agregar valor, mas não é obrigatório."
  },
  {
    topic: "Requisito x Regra de Negócio",
    question: "A diferença correta entre requisito e regra de negócio é:",
    options: [
      "Requisito diz o que o sistema faz; regra de negócio diz como isso acontece no negócio.",
      "Requisito e regra de negócio são sempre a mesma coisa.",
      "Regra de negócio é sempre um código Java.",
      "Requisito só existe em UML."
    ],
    answer: 0,
    explanation: "Exemplo: emitir boleto é requisito; boleto só após pagamento aprovado é regra de negócio."
  },
  {
    topic: "Etapas de Requisitos",
    question: "Qual etapa define escopo e envolvidos?",
    options: [
      "Concepção.",
      "Validação.",
      "Polimorfismo.",
      "Portabilidade."
    ],
    answer: 0,
    explanation: "Concepção define escopo e participantes do projeto."
  },
  {
    topic: "Etapas de Requisitos",
    question: "Elicitação é a etapa de:",
    options: [
      "Levantamento de requisitos.",
      "Exclusão de classes.",
      "Programação final.",
      "Criação de herança."
    ],
    answer: 0,
    explanation: "Elicitação usa técnicas como entrevista, observação e questionário."
  },
  {
    topic: "Etapas de Requisitos",
    question: "Qual alternativa traz técnicas de elicitação?",
    options: [
      "Entrevista, observação e questionário.",
      "Herança, classe e objeto.",
      "XML, JSON e UML.",
      "Java, Python e C#."
    ],
    answer: 0,
    explanation: "Essas técnicas ajudam a levantar necessidades com usuários e stakeholders."
  },
  {
    topic: "Etapas de Requisitos",
    question: "A etapa de negociação serve para:",
    options: [
      "Resolver conflitos entre requisitos.",
      "Criar apenas o layout.",
      "Apagar documentação.",
      "Substituir o cliente."
    ],
    answer: 0,
    explanation: "Negociação resolve conflitos e alinha prioridades."
  },
  {
    topic: "Etapas de Requisitos",
    question: "Na validação, quem confirma se os requisitos estão corretos?",
    options: [
      "O cliente.",
      "A linguagem Java.",
      "O compilador.",
      "O diagrama de classe sozinho."
    ],
    answer: 0,
    explanation: "O cliente participa da validação para confirmar se o entendimento está correto."
  },
  {
    topic: "Escopo",
    question: "Escopo define:",
    options: [
      "Limites do projeto, o que será feito e recursos usados.",
      "Apenas a cor do sistema.",
      "Somente o método mover().",
      "O tipo de mouse usado."
    ],
    answer: 0,
    explanation: "Escopo é importante para orçamento, cronograma e controle do projeto."
  },
  {
    topic: "Métricas RNF",
    question: "Velocidade, em requisitos não funcionais, está ligada a:",
    options: [
      "Tempo de resposta.",
      "Classe pai.",
      "Método privado.",
      "Cadastro de usuários."
    ],
    answer: 0,
    explanation: "Velocidade mede tempo de resposta do sistema."
  },
  {
    topic: "Métricas RNF",
    question: "Portabilidade significa:",
    options: [
      "Funcionar em diferentes sistemas.",
      "Proteger o saldo bancário.",
      "Criar uma subclasse.",
      "Cadastrar relatórios."
    ],
    answer: 0,
    explanation: "Portabilidade é a capacidade de funcionar em ambientes diferentes."
  },
  {
    topic: "Métricas RNF",
    question: "Confiabilidade está relacionada a:",
    options: [
      "Estabilidade do sistema.",
      "Apenas herança.",
      "Somente cadastro.",
      "Cor de tela."
    ],
    answer: 0,
    explanation: "Confiabilidade trata da estabilidade e confiança no funcionamento."
  },
  {
    topic: "Orientação a Objetos",
    question: "Paradigma significa:",
    options: [
      "Modelo ou padrão para resolver problemas.",
      "Um erro no banco de dados.",
      "Um tipo de requisito funcional.",
      "Uma regra de negócio fixa."
    ],
    answer: 0,
    explanation: "O material cita paradigmas estruturado, funcional e orientado a objetos."
  },
  {
    topic: "Orientação a Objetos",
    question: "Orientação a Objetos é um modelo baseado em:",
    options: [
      "Objetos do mundo real.",
      "Apenas tabelas de banco.",
      "Somente textos de requisitos.",
      "Arquivos PDF."
    ],
    answer: 0,
    explanation: "OO organiza sistemas com objetos, classes, atributos e métodos."
  },
  {
    topic: "Classe x Objeto",
    question: "Classe é:",
    options: [
      "Molde do objeto.",
      "Instância já criada.",
      "Tempo de resposta.",
      "Restrição de segurança."
    ],
    answer: 0,
    explanation: "Classe define atributos e métodos; objeto é criado a partir dela."
  },
  {
    topic: "Classe x Objeto",
    question: "Objeto é:",
    options: [
      "Instância da classe.",
      "Molde abstrato apenas.",
      "Uma técnica de elicitação.",
      "Uma prioridade desejável."
    ],
    answer: 0,
    explanation: "Macete: classe = molde; objeto = produto criado a partir do molde."
  },
  {
    topic: "Classe x Objeto",
    question: "Em uma classe Carro, cor, modelo e velocidade são exemplos de:",
    options: [
      "Atributos.",
      "Métodos.",
      "Requisitos de domínio.",
      "Etapas de validação."
    ],
    answer: 0,
    explanation: "Atributos são características do objeto."
  },
  {
    topic: "Classe x Objeto",
    question: "Em uma classe Carro, acelerar() e frear() são exemplos de:",
    options: [
      "Métodos.",
      "Atributos.",
      "Escopo.",
      "RNF."
    ],
    answer: 0,
    explanation: "Métodos são ações do objeto."
  },
  {
    topic: "Pilares OO",
    question: "Abstração significa:",
    options: [
      "Representar um objeto do mundo real sem detalhes desnecessários.",
      "Expor todos os dados internos.",
      "Apagar todos os métodos.",
      "Criar apenas requisitos não funcionais."
    ],
    answer: 0,
    explanation: "Abstração foca no que importa para o problema."
  },
  {
    topic: "Pilares OO",
    question: "Herança permite que:",
    options: [
      "Uma classe herde características de outra.",
      "Um requisito seja sempre opcional.",
      "O sistema ignore regras de negócio.",
      "O cliente valide sozinho o código."
    ],
    answer: 0,
    explanation: "Exemplo: Carro herda características de Veículo."
  },
  {
    topic: "Pilares OO",
    question: "Classe pai e classe filha também podem ser chamadas de:",
    options: [
      "Superclasse e subclasse.",
      "RF e RNF.",
      "Escopo e orçamento.",
      "XML e JSON."
    ],
    answer: 0,
    explanation: "Na herança, classe pai = superclasse; classe filha = subclasse."
  },
  {
    topic: "Pilares OO",
    question: "Encapsulamento tem como objetivo:",
    options: [
      "Proteger dados e esconder detalhes internos do objeto.",
      "Criar relatórios automaticamente.",
      "Fazer o sistema responder em 7 segundos.",
      "Transformar requisito em regra de negócio."
    ],
    answer: 0,
    explanation: "Encapsulamento impede acesso indevido, como proteger saldo bancário."
  },
  {
    topic: "Pilares OO",
    question: "Nos símbolos UML, '+' indica:",
    options: [
      "Público.",
      "Privado.",
      "Desejável.",
      "Não funcional."
    ],
    answer: 0,
    explanation: "No material: '+' = público e '-' = privado."
  },
  {
    topic: "Pilares OO",
    question: "Nos símbolos UML, '-' indica:",
    options: [
      "Privado.",
      "Público.",
      "Essencial.",
      "Funcional."
    ],
    answer: 0,
    explanation: "O sinal '-' representa visibilidade privada."
  },
  {
    topic: "Pilares OO",
    question: "Polimorfismo significa:",
    options: [
      "Mesmo método com comportamentos diferentes.",
      "Classe sem atributos.",
      "Requisito impossível de medir.",
      "Somente uma regra de orçamento."
    ],
    answer: 0,
    explanation: "Exemplo: mover() pode significar nadar para peixe, voar para pássaro e pular para anfíbio."
  },
  {
    topic: "UML",
    question: "UML significa:",
    options: [
      "Linguagem de Modelagem Unificada.",
      "Lista de Métodos Locais.",
      "Unidade de Métrica Lógica.",
      "Usuário Mestre Local."
    ],
    answer: 0,
    explanation: "UML serve para modelar sistemas, diagramas, classes e relacionamentos."
  },
  {
    topic: "UML",
    question: "A UML serve para:",
    options: [
      "Modelar sistemas, criar diagramas e representar classes e relacionamentos.",
      "Enviar e-mails automaticamente.",
      "Definir apenas cronograma.",
      "Medir tempo de resposta."
    ],
    answer: 0,
    explanation: "UML ajuda a representar visualmente a estrutura e comportamento do sistema."
  },
  {
    topic: "Processo Unificado",
    question: "O Processo Unificado é um modelo de desenvolvimento:",
    options: [
      "Iterativo e incremental.",
      "Sem documentação e sem etapas.",
      "Apenas visual.",
      "Exclusivo para banco de dados."
    ],
    answer: 0,
    explanation: "Ele divide sistemas grandes em pequenas partes, reduzindo riscos."
  },
  {
    topic: "Processo Unificado",
    question: "Uma vantagem do Processo Unificado é:",
    options: [
      "Menos risco e mais organização.",
      "Mais conflito entre requisitos.",
      "Eliminar validação com cliente.",
      "Impedir reutilização de código."
    ],
    answer: 0,
    explanation: "Por ser iterativo e incremental, o PU ajuda a organizar entregas."
  },
  {
    topic: "Orientação a Objetos",
    question: "Qual é uma vantagem da Orientação a Objetos?",
    options: [
      "Reutilização de código e facilidade de manutenção.",
      "Obrigar ausência de documentação.",
      "Impedir organização.",
      "Eliminar classes."
    ],
    answer: 0,
    explanation: "OO favorece reutilização, organização, manutenção, flexibilidade e desenvolvimento mais rápido."
  },
  {
    topic: "Orientação a Objetos",
    question: "Qual é uma desvantagem da Orientação a Objetos citada no material?",
    options: [
      "Requer conhecimento técnico e modelagem mais detalhada.",
      "Nunca permite documentação.",
      "Não usa classes.",
      "Impede manutenção."
    ],
    answer: 0,
    explanation: "OO pode exigir mais conhecimento técnico, modelagem e documentação."
  }
];

questions = questions.map((question) => {
  const correctOption = question.options[question.answer];
  const shuffledOptions = [...question.options];

  for (let i = shuffledOptions.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
  }

  return {
    ...question,
    options: shuffledOptions,
    answer: shuffledOptions.indexOf(correctOption)
  };
});

const summaries = [
  {
    title: "Engenharia de Requisitos",
    points: [
      "É a área que descobre, analisa, documenta, valida e gerencia o que o sistema deve fazer.",
      "O objetivo é garantir que o software atenda ao que o cliente realmente precisa.",
      "Autores citados no material: Sommerville e Pressman.",
      "Requisitos podem mudar durante o projeto, por isso precisam ser gerenciados."
    ]
  },
  {
    title: "Tipos de Requisitos",
    points: [
      "Requisito funcional (RF): mostra o que o sistema faz. Exemplo: cadastrar usuários.",
      "Requisito não funcional (RNF): mostra como o sistema deve funcionar. Exemplo: responder em até 7 segundos.",
      "Requisito de domínio: regra específica do negócio. Exemplo: aluno aprovado só com 3000 pontos.",
      "Dica: se pode ser medido, geralmente é RNF."
    ]
  },
  {
    title: "Qualidade e Prioridade",
    points: [
      "Um bom requisito deve ser exato, preciso, completo, consistente, verificável, modificável e rastreável.",
      "Essencial: sem ele o sistema não funciona.",
      "Importante: agrega valor, mas o sistema funciona sem.",
      "Desejável: opcional."
    ]
  },
  {
    title: "Requisito x Regra de Negócio",
    points: [
      "Requisito diz o que o sistema faz.",
      "Regra de negócio diz como uma regra da empresa deve acontecer.",
      "Exemplo de requisito: emitir boletos.",
      "Exemplo de regra: boleto só pode ser gerado após pagamento aprovado."
    ]
  },
  {
    title: "Etapas da Engenharia de Requisitos",
    points: [
      "Concepção: define escopo e envolvidos.",
      "Elicitação: levantamento de requisitos por entrevista, observação e questionário.",
      "Elaboração: detalha requisitos.",
      "Negociação: resolve conflitos.",
      "Especificação: documenta tecnicamente.",
      "Validação: cliente confirma.",
      "Gerenciamento: controla mudanças."
    ]
  },
  {
    title: "Escopo e Métricas RNF",
    points: [
      "Escopo define limites do projeto, o que será feito e recursos usados.",
      "Escopo ajuda no orçamento e cronograma.",
      "Velocidade: tempo de resposta.",
      "Usabilidade: facilidade de uso.",
      "Robustez: capacidade de evitar falhas.",
      "Portabilidade: funcionar em diferentes sistemas.",
      "Confiabilidade: estabilidade do sistema."
    ]
  },
  {
    title: "Orientação a Objetos",
    points: [
      "Paradigma é um modelo ou padrão para resolver problemas.",
      "OO é baseada em objetos do mundo real.",
      "Classe é o molde; objeto é a instância criada a partir desse molde.",
      "Atributos são características; métodos são ações."
    ]
  },
  {
    title: "Pilares de OO",
    points: [
      "Abstração: representa o essencial, sem detalhes desnecessários.",
      "Herança: uma classe herda características de outra.",
      "Encapsulamento: protege dados e esconde detalhes internos.",
      "Polimorfismo: mesmo método com comportamentos diferentes."
    ]
  },
  {
    title: "UML e Processo Unificado",
    points: [
      "UML é a Linguagem de Modelagem Unificada.",
      "Serve para modelar sistemas, criar diagramas e representar classes e relacionamentos.",
      "Processo Unificado é iterativo e incremental.",
      "O PU divide sistemas grandes em pequenas partes, reduzindo risco e aumentando organização."
    ]
  }
];

const APP_VERSION = "ams-random-options-v2";
if (localStorage.getItem("amsVersion") !== APP_VERSION) {
  localStorage.removeItem("amsAnswers");
  localStorage.setItem("amsVersion", APP_VERSION);
}

const state = {
  currentIndex: 0,
  activeQuestions: [...questions],
  answers: JSON.parse(localStorage.getItem("amsAnswers") || "{}")
};

const $ = (id) => document.getElementById(id);
const els = {
  answered: $("answeredCount"),
  correct: $("correctCount"),
  wrong: $("wrongCount"),
  percent: $("scorePercent"),
  topicFilter: $("topicFilter"),
  questionTopic: $("questionTopic"),
  questionNumber: $("questionNumber"),
  questionText: $("questionText"),
  optionsList: $("optionsList"),
  feedback: $("feedbackBox"),
  prev: $("prevButton"),
  next: $("nextButton"),
  shuffle: $("shuffleButton"),
  reset: $("resetButton"),
  progressBar: $("progressBar"),
  progressText: $("progressText"),
  summaryList: $("summaryList"),
  reviewList: $("reviewList"),
  themeToggle: $("themeToggle")
};

function questionId(question) {
  return String(questions.indexOf(question));
}

function save() {
  localStorage.setItem("amsAnswers", JSON.stringify(state.answers));
}

function activeAnswered() {
  return state.activeQuestions.filter((q) => state.answers[questionId(q)]).length;
}

function renderStats() {
  const records = Object.values(state.answers);
  const answered = records.length;
  const correct = records.filter((record) => record.correct).length;
  const wrong = answered - correct;
  const percent = answered ? Math.round((correct / answered) * 100) : 0;

  els.answered.textContent = answered;
  els.correct.textContent = correct;
  els.wrong.textContent = wrong;
  els.percent.textContent = `${percent}%`;

  const progress = state.activeQuestions.length
    ? Math.round((activeAnswered() / state.activeQuestions.length) * 100)
    : 0;
  els.progressBar.style.width = `${progress}%`;
  els.progressText.textContent = `${activeAnswered()} de ${state.activeQuestions.length}`;
}

function renderQuestion() {
  const question = state.activeQuestions[state.currentIndex];
  if (!question) {
    els.questionTopic.textContent = "";
    els.questionNumber.textContent = "";
    els.questionText.textContent = "Nenhuma questão encontrada para este tema.";
    els.optionsList.innerHTML = "";
    els.feedback.hidden = true;
    renderStats();
    return;
  }

  const id = questionId(question);
  const record = state.answers[id];

  els.questionTopic.textContent = question.topic;
  els.questionNumber.textContent = `Questão ${state.currentIndex + 1} de ${state.activeQuestions.length}`;
  els.questionText.textContent = question.question;
  els.optionsList.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

    if (record) {
      button.disabled = true;
      if (index === question.answer) button.classList.add("correct");
      if (index === record.selected && !record.correct) button.classList.add("wrong");
    }

    button.addEventListener("click", () => answer(index));
    els.optionsList.appendChild(button);
  });

  if (record) {
    els.feedback.hidden = false;
    els.feedback.textContent = `${record.correct ? "Resposta correta." : "Resposta incorreta."} ${question.explanation}`;
  } else {
    els.feedback.hidden = true;
    els.feedback.textContent = "";
  }

  els.prev.disabled = state.currentIndex === 0;
  els.next.disabled = state.currentIndex === state.activeQuestions.length - 1;
  renderStats();
}

function answer(selected) {
  const question = state.activeQuestions[state.currentIndex];
  const id = questionId(question);
  state.answers[id] = {
    selected,
    correct: selected === question.answer
  };
  save();
  renderQuestion();
  renderReview();
}

function renderTopics() {
  const topics = ["Todos os temas", ...new Set(questions.map((q) => q.topic))];
  els.topicFilter.innerHTML = topics.map((topic) => `<option value="${topic}">${topic}</option>`).join("");
}

function applyFilter() {
  const topic = els.topicFilter.value;
  state.activeQuestions = topic === "Todos os temas" ? [...questions] : questions.filter((q) => q.topic === topic);
  state.currentIndex = 0;
  renderQuestion();
}

function shuffle() {
  state.activeQuestions = [...state.activeQuestions].sort(() => Math.random() - 0.5);
  state.currentIndex = 0;
  renderQuestion();
}

function reset() {
  state.answers = {};
  save();
  renderQuestion();
  renderReview();
}

function renderSummaries() {
  els.summaryList.innerHTML = summaries
    .map(
      (summary) => `
        <article class="summary-card">
          <h3>${summary.title}</h3>
          <ul>${summary.points.map((point) => `<li>${point}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
}

function renderReview() {
  const wrongIds = Object.entries(state.answers)
    .filter(([, record]) => !record.correct)
    .map(([id]) => Number(id));

  if (!wrongIds.length) {
    els.reviewList.innerHTML =
      '<article class="review-card"><h3>Nenhum erro registrado</h3><p>Quando você errar uma questão, ela aparecerá aqui com a resposta correta e explicação.</p></article>';
    return;
  }

  els.reviewList.innerHTML = wrongIds
    .map((id) => {
      const q = questions[id];
      const record = state.answers[id];
      return `
        <article class="review-card">
          <h3>${q.topic}</h3>
          <p><strong>Pergunta:</strong> ${q.question}</p>
          <p><strong>Sua resposta:</strong> ${q.options[record.selected]}</p>
          <p><strong>Correta:</strong> ${q.options[q.answer]}</p>
          <p>${q.explanation}</p>
        </article>
      `;
    })
    .join("");
}

function setupTabs() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
      document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active"));
      button.classList.add("active");
      $(`${button.dataset.panel}Panel`).classList.add("active");
    });
  });
}

function setupTheme() {
  const saved = localStorage.getItem("amsTheme") || "light";
  document.documentElement.dataset.theme = saved;
  els.themeToggle.textContent = saved === "dark" ? "Modo claro" : "Modo escuro";

  els.themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("amsTheme", next);
    els.themeToggle.textContent = next === "dark" ? "Modo claro" : "Modo escuro";
  });
}

els.prev.addEventListener("click", () => {
  state.currentIndex = Math.max(0, state.currentIndex - 1);
  renderQuestion();
});

els.next.addEventListener("click", () => {
  state.currentIndex = Math.min(state.activeQuestions.length - 1, state.currentIndex + 1);
  renderQuestion();
});

els.topicFilter.addEventListener("change", applyFilter);
els.shuffle.addEventListener("click", shuffle);
els.reset.addEventListener("click", reset);

renderTopics();
renderSummaries();
renderReview();
setupTabs();
setupTheme();
renderQuestion();
