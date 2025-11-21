
function saudacao(nome) {
    alert("Olá, " + nome + "!");
}

document.getElementById("botao").addEventListener("click", () => saudacao("bruno"));
