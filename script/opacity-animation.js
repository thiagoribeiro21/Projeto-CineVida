(function () {
  // Configuração do Intersection Observer
  // Animação de opacidade para elementos com a classe .opacity-animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visivel");

        observer.unobserve(entry.target);
      }
    });
  });

  const elementsToAnimate = document.querySelectorAll(".opacity-animation");

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
})();
