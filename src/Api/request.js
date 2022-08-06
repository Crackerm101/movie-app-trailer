import API_KEY from "./api";

const requests = {
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY.Movie_API}&page=&sort_by=popularity.desc&language=en`,
    fetchDiscoverMovies: `discover/movie?api_key=${API_KEY.Movie_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY.Movie_API}&language=en-US&page=1`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY.Movie_API}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY.Movie_API}&language=en-US&page=3`,
    fetchPopularMovies: `/movie/popular?api_key=${API_KEY.Movie_API}&language=en-US&page=3`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY.Movie_API}&with_genres=27`,
    fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY.Movie_API}&language=en-US&page=1`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
    backdrop: (backdrop_path) =>
        `https://image.tmdb.org/t/p/original/${backdrop_path}`,
};
export default requests;
