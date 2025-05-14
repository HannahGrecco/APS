/*JS do Quiz botao de iniciar*/
/*const click = document.getElementById("iniciar");
const quiz = document.getElementById("quiz1");
const next = document.getElementById("next");
const quizn2 = document.getElementById("quiz2");

click.addEventListener("click", function () {
  click.style.display = "none";
  next.style.display = "flex";
  quiz.style.display = "flex";
  quizn2.style.display = "none";
});

function answer(resposta) {
  const certo = document.getElementById("right");
  const errado1 = document.getElementById("wrong");
  const errado2 = document.getElementById("wrong2");
  const errado3 = document.getElementById("wrong3");

  if (resposta === "right") {
    certo.style.backgroundColor = "#4cff67";
  } else {
    errado1.style.backgroundColor = "#FB5B5B";
    errado2.style.backgroundColor = "#FB5B5B";
    errado3.style.backgroundColor = "#FB5B5B";
    certo.style.backgroundColor = "#4cff67";
  }
}

next.addEventListener("click", function () {
  next.style.display = "flex";
  quiz.style.display = "none";
  quizn2.style.display = "flex";
});

/*JS do Rodapé*/
function mostrarAgradecimento() {
  document.getElementById("formulario-inscricao").style.display = "none";
  document.getElementById("mensagem-agradecimento").style.display = "block";
}
function verificarEmail() {
  const email = document.getElementById("email").value.trim();
  const erro = document.getElementById("mensagem-erro");

  if (email === "") {
    erro.textContent = "Por favor, insira seu e-mail.";
  } else {
    erro.textContent = "";
    mostrarAgradecimento();
  }
}
const quiz = [
  {
    pergunta:
      "Qual é o tamanho máximo de uma partícula para ser considerada um microplástico?",
    respostas: [
      { texto: "5 mm", correta: true },
      { texto: "10 mm", correta: false },
      { texto: "2 mm", correta: false },
      { texto: "4 m", correta: false },
    ],
  },
  {
    pergunta: "Os microplásticos primários são fabricados intencionalmente?",
    respostas: [
      { texto: "Sim", correta: true },
      { texto: "Não", correta: false },
      { texto: "As vezes", correta: false },
      { texto: "Talvez", correta: false },
    ],
  },
  {
    pergunta: "Os microplásticos secundários se originam de:",
    respostas: [
      { texto: " Degradação de plásticos maiores", correta: true },
      { texto: "Degradação de plásticos menores", correta: false },
    ],
  },
  {
    pergunta: "Os microplásticos podem afetar a saúde humana?",
    respostas: [
      { texto: "Sim", correta: true },
      { texto: "Não", correta: false },
    ],
  },
  {
    pergunta: "Qual ambiente é mais afetado pelos microplásticos?",
    respostas: [
      { texto: "Parques", correta: false },
      { texto: "Fazendas", correta: false },
      { texto: "Rios", correta: false },
      { texto: "Oceanos", correta: true },
    ],
  },
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function showQuestion() {
  resetState();
  let q = quiz[currentQuestion];
  questionEl.textContent = q.pergunta;

  q.respostas.forEach((resposta) => {
    const btn = document.createElement("button");
    btn.textContent = resposta.texto;
    btn.onclick = () => selectAnswer(btn, resposta.correta);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(button, correta) {
  for (const btn of answersEl.children) {
    const isClicked = btn.textContent === button.textContent;

    const isCorrect = quiz[currentQuestion].respostas.find(
      (r) => r.texto === btn.textContent
    )?.correta;

    if (isClicked) {
      btn.classList.add(correta ? "correct" : "wrong");
    } else if (isCorrect) {
      btn.classList.add("correct");
    }
  }

  nextBtn.style.display = "block";
}

function resetState() {
  nextBtn.style.display = "none";
  answersEl.innerHTML = "";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    showQuestion();
  } else {
    showFinalMessage();
  }
});

function showFinalMessage() {
  questionEl.textContent = "Você completou o quiz!";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
}

showQuestion();
