(function () {
  // Seleciona o elemento do header e o carrossel
  const header = document.getElementById("header");
  const heroCarousel = document.getElementById("carouselExampleIndicators");

  // Verifica se os elementos existem
  if (!header || !heroCarousel) {
    console.warn(
      "Elemento do header ou do carrossel não encontrado. A animação do header não vai funcionar."
    );
  }
  // Variável para armazenar o limite de scroll
  let scrollThreshold;

  // Função para atualizar o limite de scroll com base na altura do item ativo do carrossel
  function updateScrollThreshold() {
    // Define um valor padrão para o limite de scroll
    const activeCarouselItem = heroCarousel.querySelector(
      ".carousel-item.active"
    );

    // Se o item ativo existe, atualiza o limite de scroll
    if (activeCarouselItem) {
      scrollThreshold = activeCarouselItem.offsetHeight;
    }
  }

  // Função para lidar com o evento de scroll
  function handleHeaderScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("header-com-fundo");
    } else {
      header.classList.remove("header-com-fundo");
    }
  }

  // Inicializa o limite de scroll e adiciona os ouvintes de eventos
  updateScrollThreshold();

  window.addEventListener("scroll", handleHeaderScroll);

  heroCarousel.addEventListener("slid.bs.carousel", updateScrollThreshold);
})();
