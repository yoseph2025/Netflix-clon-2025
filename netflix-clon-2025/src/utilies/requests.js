const API = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${API}/trending/all/week`,
  fetchNetflixOriginals: `${API}/discover/tv?with_networks=213`,
  fetchTopRated: `${API}/movie/top_rated`,
  fetchActionMovies: `${API}/discover/movie?with_genres=28`,
  fetchComedyMovies: `${API}/discover/movie?with_genres=35`,
  fetchHorrorMovies: `${API}/discover/movie?with_genres=27`,
  fetchRomanceMovies: `${API}/discover/movie?with_genres=10749`,
  fetchDocumentaries: `${API}/discover/movie?with_genres=99`,
};

export default requests;
