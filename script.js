

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
/*Quiz*/ 
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

/*Carousel*/
const images = [
  "assets/image 1 (1).png",
  "assets/image 2.png",
  "assets/image 3 (1).png",
];
const captions = [
  "Reduza o uso de Plástico",
  "Consciêntize e Eduque",
  "Consume com consciência",
];

let index = 0;
const imageElement = document.getElementById("image");
const captionElement = document.getElementById("caption");

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  imageElement.src = images[index];
  captionElement.textContent = captions[index]; // Atualiza a legenda
});

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % images.length;
  imageElement.src = images[index];
  captionElement.textContent = captions[index]; // Atualiza a legenda
});
