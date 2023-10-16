const API_KEY = "10b2af30b82e9ae4cd5dd566cb53ee40";

const request = {
  fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_companies=84`,
  //https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_companies=84
  fetchComendyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchromanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchdocumentryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default request;
