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
