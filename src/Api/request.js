import API_KEY from "./api";

const requests = {
    fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY.Movie_API}&language=en-US&page=1`,
    fetchDiscoverMovies: `discover/movie?api_key=${API_KEY.Movie_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY.Movie_API}&language=en-US&page=2`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY.Movie_API}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY.Movie_API}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY.Movie_API}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY.Movie_API}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY.Movie_API}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY.Movie_API}&with_genres=10749`,
    fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY.Movie_API}&language=en-US&page=3`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
    backdrop: (backdrop_path) =>
        `https://image.tmdb.org/t/p/original/${backdrop_path}`,
};
export default requests;
