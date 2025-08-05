(function () {
  // Seleciona todos os botões de gênero e os containers de filmes
  const botoesGeneros = document.querySelectorAll(".btn-generos");
  const filmesGeneros = document.querySelectorAll(".generos__movies");

  // Adiciona um evento de clique a cada botão de gênero
  botoesGeneros.forEach((botaoClicado) => {
    botaoClicado.addEventListener("click", () => {
      // Seleciona o container de filmes correspondente ao botão clicado
      const filmeAlvo = botaoClicado
        .closest(".generos__card")
        .querySelector(".generos__movies");
      // Verifica se o container já está aberto
      const estavaAberta = filmeAlvo.classList.contains("filme--ativo");
      // Fecha todos os containers de filmes
      filmesGeneros.forEach((filme) => {
        filme.classList.remove("filme--ativo");
        filme.style.maxHeight = "0";
      });
      // Se o container clicado não estava aberto, abre-o

      if (!estavaAberta) {
        filmeAlvo.classList.add("filme--ativo");

        // Ajusta a altura máxima para permitir a transição suave
        filmeAlvo.style.maxHeight = filmeAlvo.scrollHeight * 2 + "px";
      }
    });
  });
})();
