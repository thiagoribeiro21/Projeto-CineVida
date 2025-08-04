(function () {
  const botoesGeneros = document.querySelectorAll(".btn-generos");
  const filmesGeneros = document.querySelectorAll(".generos__movies");

  botoesGeneros.forEach((botaoClicado) => {
    botaoClicado.addEventListener("click", () => {
      const filmeAlvo = botaoClicado
        .closest(".generos__card")
        .querySelector(".generos__movies");
      const estavaAberta = filmeAlvo.classList.contains("filme--ativo");
      filmesGeneros.forEach((filme) => {
        filme.classList.remove("filme--ativo");
        filme.style.maxHeight = "0";
      });

      if (!estavaAberta) {
        filmeAlvo.classList.add("filme--ativo");

        filmeAlvo.style.maxHeight = filmeAlvo.scrollHeight * 2 + "px";
      }
    });
  });
})();
