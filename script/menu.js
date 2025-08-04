(function () {
  const abrirNav = document.getElementById("abrir-sidebar");
  const fecharNav = document.getElementById("fechar-sidebar");
  const nav = document.querySelector(".nav__ul");

  const abrirPesquisa = document.getElementById("abrir-pesquisa");
  const formPesquisa = document.querySelector(".hidden-form");
  const inputPesquisa = document.getElementById("input-pesquisar");

  abrirNav.addEventListener("click", function () {
    abrirNav.classList.add("show");
    nav.classList.add("show__nav");
  });

  fecharNav.addEventListener("click", function () {
    abrirNav.classList.remove("show");
    nav.classList.remove("show__nav");
  });

  abrirPesquisa.addEventListener("click", function () {
    abrirPesquisa.classList.add("invisible");
    formPesquisa.classList.add("visible", "pesquisa-lg");
    formPesquisa.classList.remove("invisible");

    if (formPesquisa.classList.contains("visible")) {
      inputPesquisa.focus();
    }
  });

  document.addEventListener("click", function (evento) {
    const formTarget = formPesquisa.contains(evento.target);
    const abrirPesquisaTarget = abrirPesquisa.contains(evento.target);
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
  formPesquisa.addEventListener("click", function (event) {
    event.stopPropagation();
  });
})();
