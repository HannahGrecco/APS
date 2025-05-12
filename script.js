/*JS do Quiz botao de iniciar*/
const click = document.getElementById("iniciar");
const quiz = document.getElementById("quiz1");
const next = document.getElementById("next");
const quizn2 = document.getElementById("quiz2");

click.addEventListener("click", function () {
  click.style.display = "none";
  next.style.display = "flex";
  quiz.style.display = "flex";
  quizn2.style.display = "none";
});

/*function answer(resposta) {
  const certo = document.getElementById("right");
  const errado1 = document.getElementById("wrong", "wrongQ2");
  const errado2 = document.getElementById("wrong2");
  const errado3 = document.getElementById("wrong3");

  if (resposta === "right") {
    certo.style.backgroundColor = "green";
  } else {
    errado1.style.backgroundColor = "red";
    errado2.style.backgroundColor = "red";
    errado3.style.backgroundColor = "red";
    certo.style.backgroundColor = "green";
  }
}*/

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
