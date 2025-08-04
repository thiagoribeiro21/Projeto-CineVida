import { fetchAndDisplayMovies } from "./api.js";

document.addEventListener("DOMContentLoaded", function () {
  
  fetchAndDisplayMovies("/movie/popular", "popular-movies");

  fetchAndDisplayMovies("/movie/now_playing", "now-playing-movies");

  fetchAndDisplayMovies("/movie/top_rated", "top-rated");

  fetchAndDisplayMovies("/discover/movie?with_genres=28", "action-movies");

  fetchAndDisplayMovies("/discover/movie?with_genres=35", "comedy-movies");

  fetchAndDisplayMovies("/discover/movie?with_genres=18", "drama-movies");

  fetchAndDisplayMovies("/discover/movie?with_genres=27", "terror-movies");

  fetchAndDisplayMovies("/discover/movie?with_genres=10749", "romance-movies");

  fetchAndDisplayMovies("/discover/movie?with_genres=12", "adventure-movies");

  fetchAndDisplayMovies("/discover/movie?with_genres=53", "thriller-movies");

});
