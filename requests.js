const API_KEY = "9bc57abc952d61a59eedfc97824501ec";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movies/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movies?api_key=${API_KEY}&_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key${API_KEY}&with_genres=10749`,
  fetchDocmentaries: `/discover/movie?api_key${API_KEY}&with_henres=99`,
};

export default requests;
