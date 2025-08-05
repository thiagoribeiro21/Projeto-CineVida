// Chave da API do The Movie Database (TMDb)
const API_KEY = "68af8ed29a6edba63c1d1eaf5dc071a4";

// URL base para imagens
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w1920";
//  Função para buscar e exibir filmes em uma seção específica
export async function fetchAndDisplayMovies(endpoint, containerId) {
  // Seleciona o container onde os filmes serão exibidos
  const container = document.getElementById(containerId);
  // Verifica se o container existe
  if (!container) {
    console.error(`Container com id '${containerId}' não encontrado.`);
    return;
  }
  // Verifica se o endpoint já contém parâmetros de consulta
  const separador = endpoint.includes("?") ? "&" : "?";
  // Constrói a URL completa para a requisição à API
  const url = `https://api.themoviedb.org/3${endpoint}${separador}api_key=${API_KEY}&language=pt-BR`;

  try {
    // Faz a requisição à API
    const response = await fetch(url);
    // Converte a resposta para JSON
    const data = await response.json();
    // Exibe os filmes no container
    displayMovies(data.results, container);
  } catch (error) {
    // Trata erros de requisição
    console.error(`Erro ao buscar dados para ${containerId}:`, error);
    container.innerHTML = "<p>Não foi possível carregar os filmes.</p>";
  }
}

// Função para exibir os filmes no container especificado
function displayMovies(movies, container) {
  // Limpa o conteúdo anterior do container
  container.innerHTML = "";
  // Verifica se há filmes para exibir
  if (movies.length === 0) {
    container.innerHTML = "<p>Nenhum filme encontrado.</p>";
    return;
  }
  // Itera sobre os filmes e cria os elementos HTML para cada um
  movies.forEach((movie) => {
    // Ignora filmes sem pôster
    if (!movie.poster_path) return;
    // Constrói a URL completa da imagem do pôster
    const imageUrl = IMAGE_BASE_URL + movie.poster_path;
    // Extrai o ano de lançamento e a avaliação do filme
    const year = movie.release_date
      ? movie.release_date.substring(0, 4)
      : "N/A";
    //  Formata a avaliação para uma casa decimal
    const rating = movie.vote_average.toFixed(1);
    // Cria o card do filme
    const movieCard = document.createElement("div");
    // Adiciona a classe CSS ao card
    movieCard.classList.add("movie-card");
    // Define o conteúdo HTML do card
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
    // Adiciona o card ao container
    container.appendChild(movieCard);
  });
}
