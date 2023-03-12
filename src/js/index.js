/*
  OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

  // passo 1 - dar um jeito de pegar o elemento HTML dos botões
  // passo 2 - dar um jeito de identificar o clique do usuário no botão
  // passo 3 - desmarcar o botão selecionado anterior
  // passo 4 - marcar o botão clicado como se estivesse selecionada
  // passo 5 - esconder a imagem do fundo anterior
  // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

alert("Largura real visível: " + window.screen.availWidth);

const botoesCarrossel = document.querySelectorAll(".botao");
const imagensCarrossel = document.querySelectorAll(".imagem");

botoesCarrossel.forEach((botao, i) => {
  botao.addEventListener("click", () => {
    DesativarBotaoSelecionado();

    MarcarBotaoSelecionado(botao);

    EsconderImagemAtiva();

    MostrarImagemAtiva(i);
  });
});

function MostrarImagemAtiva(i) {
  imagensCarrossel[i].classList.add("ativa");
}

function MarcarBotaoSelecionado(botao) {
  botao.classList.add("selecionado");
}

function EsconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function DesativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
