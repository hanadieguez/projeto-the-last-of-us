// agrupar todos os botões e imagens de fundo
// identificar o botão clicado
// desmarcar o botão anterior
// marcar o botão clicado
// desativar a imagem atual
// ativar a imagem correspondente ao botão clicado

const btnArray = document.querySelectorAll(".button");
const imgArray = document.querySelectorAll(".image");

btnArray.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    document.querySelector(".actived").classList.remove("actived");

    btn.classList.add("actived");

    document.querySelector(".show").classList.remove("show");

    imgArray[i].classList.add("show");
  });
});
