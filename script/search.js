import { fetchAndDisplayMovies } from "./api-search.js";

const resultsTitle = document.getElementById("search-results-title");

const params = new URLSearchParams(window.location.search);
const query = params.get("query");

if (query) {
  resultsTitle.innerText = `Resultados para "${query}"`;
  fetchAndDisplayMovies(
    `/search/movie?query=${encodeURIComponent(query)}`,
    "search-results-grid"
  );
} else {
  resultsTitle.innerText = "Por favor, digite um termo para buscar.";
}
