import MovieCard from "./MovieCard";
import requests from "../../Api/request";
const MovieRow = () => {
    return (
        <div className="section_row">
            <MovieCard
                title="Now Playing"
                fetchUrl={requests.fetchNowPlaying}
            />
            <MovieCard title="Trending Now" fetchUrl={requests.fetchTrending} />
            <MovieCard
                title="Popular Now"
                fetchUrl={requests.fetchPopularMovies}
            />
            <MovieCard title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <MovieCard title="Horror" fetchUrl={requests.fetchHorrorMovies} />
        </div>
    );
};

export default MovieRow;
