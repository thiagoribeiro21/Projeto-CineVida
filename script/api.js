// Criação da chave da API e da URL base para as imagens
const API_KEY = "68af8ed29a6edba63c1d1eaf5dc071a4";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w1920";

// Função para buscar e exibir filmes em uma seção específica
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

    // Cria o card do filme
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    // Define o conteúdo HTML do card
    movieCard.innerHTML = `<img src="${imageUrl}" alt="${movie.title}"><h3>${movie.title}</h3>`;
    container.appendChild(movieCard);
  });
  // Verifica se o container tem a classe para animação
  if (container.classList.contains("animation-container")) {
    // Configura a mídia query para telas maiores
    const telaWidth = window.matchMedia("(min-width: 62.5em)");

    // Função para configurar a animação
    const setupAnimation = () => {
      // Seleciona os cards originais
      const originalCards = container.querySelectorAll(".movie-card");
      // Se a tela for maior que 62.5em, duplica os cards para criar o efeito infinito
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
