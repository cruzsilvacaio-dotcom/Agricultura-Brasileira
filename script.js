/* =========================================
   AGRO BRASIL HOJE — script.js
   Quiz interativo e renderização de tópicos
   ========================================= */

'use strict';

/* ===================================================
   DADOS: 10 tópicos sobre agricultura brasileira
=================================================== */
const TOPICOS = [
  {
    icon: '🤖',
    tag: 'Tecnologia',
    title: 'Uso de Tecnologias Agrícolas Modernas',
    text: [
      'A incorporação de tecnologias como sensores IoT, inteligência artificial e big data tem revolucionado o campo brasileiro. Essas ferramentas permitem monitorar em tempo real variáveis como temperatura, umidade do solo e condições climáticas, tornando as decisões muito mais assertivas.',
      'Com o uso de máquinas autônomas e softwares de gestão agrícola, os produtores conseguem reduzir custos operacionais e aumentar a produtividade de forma expressiva, colocando o Brasil na vanguarda do agronegócio mundial.'
    ]
  },
  {
    icon: '📡',
    tag: 'Precisão',
    title: 'Agricultura de Precisão',
    text: [
      'A agricultura de precisão utiliza GPS, drones e sensores para mapear cada metro quadrado da lavoura. Com esses dados, é possível aplicar insumos — como fertilizantes e defensivos — exatamente onde e na quantidade necessária, eliminando desperdícios.',
      'Essa prática aumenta a eficiência do campo, reduz o impacto ambiental e eleva os rendimentos. Regiões como o Cerrado brasileiro já colhem resultados expressivos com a adoção em larga escala dessas metodologias.'
    ]
  },
  {
    icon: '💧',
    tag: 'Irrigação',
    title: 'Irrigação Eficiente',
    text: [
      'O Brasil possui uma das maiores reservas de água doce do mundo, mas seu uso racional no campo ainda é um desafio. Sistemas de irrigação por gotejamento e pivô central permitem entregar água diretamente à raiz das plantas, reduzindo o consumo em até 50% em relação a métodos tradicionais.',
      'Aliada a sensores de umidade do solo e dados meteorológicos, a irrigação inteligente garante que as plantas recebam exatamente o que precisam, na hora certa, favorecendo a produtividade e a conservação dos recursos hídricos.'
    ]
  },
  {
    icon: '🌍',
    tag: 'Solo',
    title: 'Conservação do Solo',
    text: [
      'O solo é o principal ativo do agricultor. Práticas como o plantio direto, a adubação verde e o controle da erosão são fundamentais para manter a fertilidade e a estrutura do solo ao longo dos anos, garantindo produções sustentáveis.',
      'A recuperação de solos degradados também é uma pauta crescente no Brasil. Por meio de técnicas de correção química e biológica, terras antes improdutivas voltam a produzir com alto rendimento, ampliando a fronteira agrícola sustentável do país.'
    ]
  },
  {
    icon: '🔄',
    tag: 'Culturas',
    title: 'Rotação de Culturas',
    text: [
      'Cultivar diferentes espécies na mesma área em ciclos alternados é uma das práticas mais eficientes para a saúde do solo. A rotação de culturas rompe o ciclo de pragas e doenças, melhora a estrutura física do solo e repõe nutrientes naturalmente.',
      'No Brasil, a integração lavoura-pecuária-floresta (iLPF) é um exemplo bem-sucedido dessa abordagem, combinando diferentes sistemas de produção em uma mesma propriedade e gerando benefícios econômicos e ambientais simultaneamente.'
    ]
  },
  {
    icon: '🎓',
    tag: 'Capacitação',
    title: 'Capacitação de Produtores Rurais',
    text: [
      'O acesso ao conhecimento técnico é um dos maiores gargalos da agricultura brasileira, especialmente entre pequenos produtores. Programas de extensão rural, cursos técnicos e plataformas digitais de educação têm papel crucial na difusão de boas práticas agrícolas.',
      'Produtores bem capacitados tomam decisões mais conscientes sobre manejo, insumos e gestão financeira, elevando a rentabilidade das propriedades e reduzindo os riscos associados à atividade rural. O conhecimento é o insumo que nunca acaba.'
    ]
  },
  {
    icon: '♻️',
    tag: 'Sustentabilidade',
    title: 'Sustentabilidade Ambiental',
    text: [
      'Produzir mais com menos impacto é o mantra da agricultura sustentável. Práticas como a preservação de matas ciliares, manutenção de reservas legais e uso de energia renovável nas propriedades rurais são cada vez mais exigidas pelo mercado consumidor global.',
      'O Brasil, por sua posição de destaque no agronegócio mundial, tem a oportunidade única de liderar a transição para uma agricultura de baixo carbono, gerando vantagem competitiva e preservando seus biomas para as gerações futuras.'
    ]
  },
  {
    icon: '🌿',
    tag: 'Fertilizantes',
    title: 'Uso Responsável de Fertilizantes',
    text: [
      'O uso excessivo de fertilizantes químicos causa lixiviação de nutrientes, contamina rios e degrada o solo. A nutrição de precisão, baseada em análises de solo e foliar, permite dosagens exatas que atendem à demanda das plantas sem gerar excedentes prejudiciais.',
      'A crescente adoção de fertilizantes biológicos — como inoculantes com bactérias fixadoras de nitrogênio — representa uma revolução silenciosa que reduz custos de produção e diminui a dependência de insumos importados, fortalecendo a soberania agrícola brasileira.'
    ]
  },
  {
    icon: '🚛',
    tag: 'Logística',
    title: 'Melhorias na Logística de Transporte',
    text: [
      'O escoamento da produção é um dos principais problemas da agricultura brasileira. Estradas precárias, portos congestionados e falta de armazéns adequados geram perdas expressivas e encarecem o produto final. Investimentos em infraestrutura são urgentes e prioritários.',
      'A modernização da logística — com mais ferrovias, hidrovias e armazéns estratégicos — pode reduzir o "custo Brasil" de forma significativa, tornando os produtos agrícolas mais competitivos no mercado internacional e aumentando a margem dos produtores.'
    ]
  },
  {
    icon: '🔬',
    tag: 'Inovação',
    title: 'Incentivo à Pesquisa e Inovação',
    text: [
      'A Embrapa e outras instituições de pesquisa brasileiras são responsáveis por grande parte das inovações que colocaram o Brasil entre os maiores produtores agrícolas do mundo. Continuar investindo em P&D é fundamental para manter essa liderança frente aos desafios climáticos e de mercado.',
      'Startups do agronegócio (agtechs) têm surgido com soluções inovadoras para problemas antigos do campo. O ecossistema de inovação agrícola brasileiro cresce rapidamente, atraindo investimentos nacionais e internacionais que fomentam novas tecnologias e modelos de negócio.'
    ]
  }
];

/* ===================================================
   DADOS: 10 questões do quiz
=================================================== */
const QUESTOES = [
  {
    pergunta: 'O que é agricultura de precisão?',
    opcoes: [
      'Plantio aleatório',
      'Uso de tecnologia para melhorar a produção',
      'Redução de áreas cultivadas',
      'Apenas irrigação'
    ],
    correta: 1
  },
  {
    pergunta: 'Qual prática ajuda a preservar o solo?',
    opcoes: [
      'Queimadas',
      'Desmatamento',
      'Rotação de culturas',
      'Uso excessivo de máquinas'
    ],
    correta: 2
  },
  {
    pergunta: 'Qual tecnologia auxilia no monitoramento das lavouras?',
    opcoes: [
      'Drones',
      'Televisão',
      'Rádio AM',
      'Impressora'
    ],
    correta: 0
  },
  {
    pergunta: 'O uso eficiente da água é importante porque:',
    opcoes: [
      'Aumenta o desperdício',
      'Diminui a produtividade',
      'Preserva recursos naturais',
      'Não gera benefícios'
    ],
    correta: 2
  },
  {
    pergunta: 'A capacitação dos produtores contribui para:',
    opcoes: [
      'Menor conhecimento',
      'Melhores práticas agrícolas',
      'Menos produtividade',
      'Mais desperdício'
    ],
    correta: 1
  },
  {
    pergunta: 'O que a sustentabilidade busca?',
    opcoes: [
      'Produzir sem pensar no futuro',
      'Equilibrar produção e preservação ambiental',
      'Acabar com a agricultura',
      'Reduzir toda a produção'
    ],
    correta: 1
  },
  {
    pergunta: 'Melhor logística agrícola resulta em:',
    opcoes: [
      'Mais perdas',
      'Transporte mais eficiente',
      'Menos acesso aos mercados',
      'Custos maiores obrigatoriamente'
    ],
    correta: 1
  },
  {
    pergunta: 'A pesquisa agrícola ajuda a:',
    opcoes: [
      'Desenvolver novas soluções',
      'Impedir inovação',
      'Reduzir conhecimento',
      'Eliminar tecnologia'
    ],
    correta: 0
  },
  {
    pergunta: 'Qual prática reduz a degradação do solo?',
    opcoes: [
      'Plantio sustentável',
      'Desmatamento',
      'Queimadas frequentes',
      'Erosão'
    ],
    correta: 0
  },
  {
    pergunta: 'O investimento em inovação permite:',
    opcoes: [
      'Menor produtividade',
      'Mais eficiência no campo',
      'Menos competitividade',
      'Mais desperdício'
    ],
    correta: 1
  }
];

/* ===================================================
   RENDERIZAÇÃO DOS TÓPICOS
=================================================== */

/**
 * Cria e injeta os cards de tópico no DOM.
 */
function renderizarTopicos() {
  const grid = document.getElementById('topicsGrid');
  if (!grid) return;

  TOPICOS.forEach((topico, index) => {
    // Constrói parágrafos do texto
    const paragrafos = topico.text.map(p => `<p>${p}</p>`).join('');

    // Delay escalonado para animação de entrada
    const delayMs = 100 + index * 80;

    const card = document.createElement('div');
    card.className = 'topic-card';
    card.style.animationDelay = `${delayMs}ms`;

    card.innerHTML = `
      <div class="topic-icon">${topico.icon}</div>
      <div class="topic-number">Tópico ${String(index + 1).padStart(2, '0')}</div>
      <h3 class="topic-title">${topico.title}</h3>
      <div class="topic-text">${paragrafos}</div>
      <span class="topic-tag">${topico.tag}</span>
    `;

    grid.appendChild(card);
  });
}

/* ===================================================
   LÓGICA DO QUIZ
=================================================== */

/* Estado do quiz */
const quiz = {
  indiceAtual: 0,  // questão corrente (0–9)
  pontos: 0,       // acertos acumulados
  respondido: false // se a questão atual já foi respondida
};

/* Referências DOM */
const elStart         = document.getElementById('quizStart');
const elQuestionArea  = document.getElementById('quizQuestionArea');
const elResult        = document.getElementById('quizResult');
const elCounter       = document.getElementById('quizCounter');
const elScoreLive     = document.getElementById('quizScoreLive');
const elProgressFill  = document.getElementById('quizProgressFill');
const elQuestionText  = document.getElementById('quizQuestionText');
const elOptions       = document.getElementById('quizOptions');
const elBtnNext       = document.getElementById('btnNext');

/**
 * Inicia o quiz: esconde tela de start, mostra questão.
 */
function iniciarQuiz() {
  quiz.indiceAtual = 0;
  quiz.pontos = 0;
  quiz.respondido = false;

  elStart.style.display        = 'none';
  elResult.style.display       = 'none';
  elQuestionArea.style.display = 'block';

  carregarQuestao();
}

/**
 * Carrega a questão atual no DOM.
 */
function carregarQuestao() {
  quiz.respondido = false;
  elBtnNext.style.display = 'none';

  // Remove feedback anterior se houver
  const feedbackAnterior = document.querySelector('.quiz-feedback');
  if (feedbackAnterior) feedbackAnterior.remove();

  const questao = QUESTOES[quiz.indiceAtual];
  const total   = QUESTOES.length;
  const num     = quiz.indiceAtual + 1;

  // Atualiza contador e pontuação ao vivo
  elCounter.textContent   = `Questão ${num} de ${total}`;
  elScoreLive.textContent = `Pontos: ${quiz.pontos}`;

  // Barra de progresso (progresso = questões já respondidas)
  const percentual = (quiz.indiceAtual / total) * 100;
  elProgressFill.style.width = `${percentual}%`;

  // Anima o card ao trocar questão
  const card = document.getElementById('quizCard');
  card.style.animation = 'none';
  // Força reflow para reiniciar animação
  void card.offsetWidth;
  card.style.animation = '';

  // Texto da questão
  elQuestionText.textContent = questao.pergunta;

  // Renderiza opções
  elOptions.innerHTML = '';
  const letras = ['A', 'B', 'C', 'D'];

  questao.opcoes.forEach((opcao, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.dataset.indice = i;
    btn.innerHTML = `
      <span class="opt-letter">${letras[i]}</span>
      ${opcao}
    `;
    btn.addEventListener('click', () => selecionarResposta(i));
    elOptions.appendChild(btn);
  });
}

/**
 * Processa a seleção de uma resposta.
 * @param {number} indice - Índice da opção clicada (0–3)
 */
function selecionarResposta(indice) {
  // Ignora cliques repetidos
  if (quiz.respondido) return;
  quiz.respondido = true;

  const questao  = QUESTOES[quiz.indiceAtual];
  const correta  = questao.correta;
  const acertou  = indice === correta;
  const botoes   = elOptions.querySelectorAll('.quiz-option');

  // Desabilita todos os botões
  botoes.forEach(btn => { btn.disabled = true; });

  // Marca visual: correta (verde) e errada (vermelho)
  botoes[correta].classList.add('correct');
  if (!acertou) {
    botoes[indice].classList.add('wrong');
  }

  // Pontua
  if (acertou) quiz.pontos++;

  // Atualiza pontuação ao vivo
  elScoreLive.textContent = `Pontos: ${quiz.pontos}`;

  // Exibe feedback textual
  const feedback = document.createElement('div');
  feedback.className = `quiz-feedback ${acertou ? 'ok' : 'err'}`;
  feedback.textContent = acertou
    ? '✅ Correto! Muito bem!'
    : `❌ Incorreto! A resposta certa era: ${questao.opcoes[correta]}`;
  elOptions.after(feedback);

  // Exibe botão de próxima / finalizar
  const ultima = quiz.indiceAtual === QUESTOES.length - 1;
  elBtnNext.textContent = ultima ? 'Ver Resultado 🏆' : 'Próxima →';
  elBtnNext.style.display = 'block';
}

/**
 * Avança para a próxima questão ou exibe resultado.
 */
function proximaQuestao() {
  quiz.indiceAtual++;

  if (quiz.indiceAtual >= QUESTOES.length) {
    exibirResultado();
  } else {
    carregarQuestao();
  }
}

/**
 * Exibe a tela de resultado final com pontuação e mensagem.
 */
function exibirResultado() {
  elQuestionArea.style.display = 'none';
  elResult.style.display       = 'block';

  const pts   = quiz.pontos;
  const total = QUESTOES.length;
  const pct   = Math.round((pts / total) * 100);

  // Badge e mensagem conforme pontuação
  let badge, titulo, mensagem;

  if (pts <= 3) {
    badge    = '📚';
    titulo   = 'Continue aprendendo!';
    mensagem = 'Continue estudando sobre agricultura. O conhecimento do campo é fundamental para o futuro do Brasil!';
  } else if (pts <= 7) {
    badge    = '🌱';
    titulo   = 'Bom progresso!';
    mensagem = 'Bom conhecimento sobre agricultura brasileira. Com mais estudo, você chegará ao topo!';
  } else {
    badge    = '🏆';
    titulo   = 'Parabéns, especialista!';
    mensagem = 'Excelente! Você domina o tema da agricultura brasileira. Continue espalhando esse conhecimento!';
  }

  document.getElementById('resultBadge').textContent   = badge;
  document.getElementById('resultTitle').textContent    = titulo;
  document.getElementById('resultScore').textContent    = `${pts} / ${total}`;
  document.getElementById('resultMessage').textContent  = mensagem;

  // Anima barra de resultado
  const barra = document.getElementById('resultBar');
  barra.style.width = '0%';
  // Pequeno delay para acionar a transição CSS
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      barra.style.width = `${pct}%`;
    });
  });
}

/* ===================================================
   EVENT LISTENERS
=================================================== */

/** Botão "Iniciar Quiz" */
document.getElementById('btnStart').addEventListener('click', iniciarQuiz);

/** Botão "Próxima / Ver Resultado" */
elBtnNext.addEventListener('click', proximaQuestao);

/** Botão "Tentar Novamente" */
document.getElementById('btnRetry').addEventListener('click', () => {
  elResult.style.display       = 'none';
  elStart.style.display        = 'block';
});

/** Botão "Ver Tópicos" — rola suavemente para a seção de tópicos */
document.getElementById('btnReview').addEventListener('click', () => {
  document.getElementById('topics').scrollIntoView({ behavior: 'smooth' });
});

/* ===================================================
   INICIALIZAÇÃO
=================================================== */

/**
 * Inicializa a aplicação quando o DOM estiver pronto.
 */
document.addEventListener('DOMContentLoaded', () => {
  renderizarTopicos();
});
