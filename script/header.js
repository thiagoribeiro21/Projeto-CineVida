(function () {
  const header = document.getElementById("header");
  const heroCarousel = document.getElementById("carouselExampleIndicators");

  if (!header || !heroCarousel) {
    console.warn(
      "Elemento do header ou do carrossel não encontrado. A animação do header não vai funcionar."
    );
  }

  let scrollThreshold;

  function updateScrollThreshold() {
    const activeCarouselItem = heroCarousel.querySelector(
      ".carousel-item.active"
    );

    if (activeCarouselItem) {
      scrollThreshold = activeCarouselItem.offsetHeight;
    }
  }

  function handleHeaderScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("header-com-fundo");
    } else {
      header.classList.remove("header-com-fundo");
    }
  }

  updateScrollThreshold();

  window.addEventListener("scroll", handleHeaderScroll);

  heroCarousel.addEventListener("slid.bs.carousel", updateScrollThreshold);
})();
