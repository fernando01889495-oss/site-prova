/* =========================
   MENU HAMBÚRGUER
   ========================= */

// Pegamos o botão e o menu pelo ID
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Quando o botão for clicado...
menuBtn.addEventListener("click", function () {

    // Adiciona ou remove a classe "aberto"
    nav.classList.toggle("aberto");

});


/* =========================
   MODO ESCURO
   ========================= */

// Pegamos o botão de tema
const temaBtn = document.getElementById("temaBtn");

// Quando o botão for clicado...
temaBtn.addEventListener("click", function () {

    // Adiciona ou remove a classe "escuro" no body
    document.body.classList.toggle("escuro");

    // Troca o símbolo do botão
    if (document.body.classList.contains("escuro")) {
        temaBtn.textContent = "☀️";
    } else {
        temaBtn.textContent = "🌙";
    }

});


/* =========================
   VALIDAÇÃO DO FORMULÁRIO
   ========================= */

// Pegamos o formulário
const formulario = document.getElementById("formContato");

// Pegamos o local onde mostraremos a mensagem
const mensagemForm = document.getElementById("mensagemForm");

// Detecta quando o formulário é enviado
formulario.addEventListener("submit", function (evento) {

    // Impede o formulário de recarregar a página
    evento.preventDefault();

    // Pegamos os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se algum campo está vazio
    if (nome === "" || email === "" || mensagem === "") {

        mensagemForm.textContent =
            "Preencha todos os campos.";

        return;
    }

    // Se tudo estiver preenchido
    mensagemForm.textContent =
        "Mensagem enviada com sucesso!";

    // Limpa os campos
    formulario.reset();

});
