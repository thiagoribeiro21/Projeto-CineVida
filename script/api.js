const API_KEY = "68af8ed29a6edba63c1d1eaf5dc071a4";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w1920";

export async function fetchAndDisplayMovies(endpoint, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container com id '${containerId}' não encontrado.`);
    return;
  }

  const separador = endpoint.includes("?") ? "&" : "?";
  const url = `https://api.themoviedb.org/3${endpoint}${separador}api_key=${API_KEY}&language=pt-BR`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMovies(data.results, container);
  } catch (error) {
    console.error(`Erro ao buscar dados para ${containerId}:`, error);
    container.innerHTML = "<p>Não foi possível carregar os filmes.</p>";
  }
}

function displayMovies(movies, container) {
  container.innerHTML = "";
  if (movies.length === 0) {
    container.innerHTML = "<p>Nenhum filme encontrado.</p>";
    return;
  }
  movies.forEach((movie) => {
    if (!movie.poster_path) return;
    const imageUrl = IMAGE_BASE_URL + movie.poster_path;
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = `<img src="${imageUrl}" alt="${movie.title}"><h3>${movie.title}</h3>`;
    container.appendChild(movieCard);
  });
  if (container.classList.contains("animation-container")) {
    const telaWidth = window.matchMedia("(min-width: 62.5em)");

    const setupAnimation = () => {
      const originalCards = container.querySelectorAll(".movie-card");
      if (originalCards.length > movies.length) {
      }
      if (telaWidth.matches) {
        const cards = container.querySelectorAll(".movie-card");

        cards.forEach((card) => {
          container.appendChild(card.cloneNode(true));
        });
      }
    };

    setupAnimation();
  }
}
