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
    const year = movie.release_date
      ? movie.release_date.substring(0, 4)
      : "N/A";
    const rating = movie.vote_average.toFixed(1);
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = `
            <img src="${imageUrl}" alt="Pôster do filme ${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <div class="movie-meta">
                    <span class="rating">
                        <i class="fas fa-star"></i> ${rating}
                    </span>
                    <span class="year">${year}</span>
                </div>
            </div>
        `;
    container.appendChild(movieCard);
  });
}
