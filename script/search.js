import { fetchAndDisplayMovies } from "./api-search.js";
// Seleciona o título dos resultados e o container dos resultados

const resultsTitle = document.getElementById("search-results-title");

const params = new URLSearchParams(window.location.search);
// Extrai o termo de busca da URL
const query = params.get("query");

// Se houver uma query, busca e exibe os resultados
if (query) {
  // Atualiza o título dos resultados
  resultsTitle.innerText = `Resultados para "${query}"`;
  fetchAndDisplayMovies(
    `/search/movie?query=${encodeURIComponent(query)}`,
    "search-results-grid"
  );
} else {
  resultsTitle.innerText = "Por favor, digite um termo para buscar.";
}
