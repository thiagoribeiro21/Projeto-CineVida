(function () {
  // Elementos do menu e da pesquisa
  const abrirNav = document.getElementById("abrir-sidebar");
  const fecharNav = document.getElementById("fechar-sidebar");
  const nav = document.querySelector(".nav__ul");

  const abrirPesquisa = document.getElementById("abrir-pesquisa");
  const formPesquisa = document.querySelector(".hidden-form");
  const inputPesquisa = document.getElementById("input-pesquisar");

  // Eventos de clique para abrir/fechar o menu e a pesquisa
  abrirNav.addEventListener("click", function () {
    abrirNav.classList.add("show");
    nav.classList.add("show__nav");
  });

  // Evento de clique para fechar o menu
  fecharNav.addEventListener("click", function () {
    abrirNav.classList.remove("show");
    nav.classList.remove("show__nav");
  });

  // Evento de clique para abrir o formulário de pesquisa
  abrirPesquisa.addEventListener("click", function () {
    abrirPesquisa.classList.add("invisible");
    formPesquisa.classList.add("visible", "pesquisa-lg");
    formPesquisa.classList.remove("invisible");

    // Foca no input de pesquisa quando o formulário é exibido
    if (formPesquisa.classList.contains("visible")) {
      inputPesquisa.focus();
    }
  });

  // Evento de clique fora do formulário para fechá-lo
  document.addEventListener("click", function (evento) {
    // Verifica se o clique foi fora do formulário e do botão de abrir pesquisa
    const formTarget = formPesquisa.contains(evento.target);
    const abrirPesquisaTarget = abrirPesquisa.contains(evento.target);
    // Se o formulário estiver visível e o clique foi fora, fecha o formulário
    if (
      formPesquisa.classList.contains("visible") &&
      !formTarget &&
      !abrirPesquisaTarget
    ) {
      formPesquisa.classList.remove("visible");
      formPesquisa.classList.add("invisible");
      abrirPesquisa.classList.remove("invisible");
    }
  });
  // Impede que o clique dentro do formulário feche-o
  formPesquisa.addEventListener("click", function (event) {
    event.stopPropagation();
  });
})();
