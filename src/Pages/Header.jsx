import { AiFillYoutube } from "react-icons/ai";
import { RiStarSLine } from "react-icons/ri";

// Swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//React Hook Fetch Data
import useFectch from "../Api/useFectch";
import requests from "../Api/request";
import MovieCard from "../Components/Allmovies/MovieCard";

const Header = () => {
    const { data, loading, error } = useFectch(requests.fetchUpcoming);
    if (loading) return;
    <div className="Loader_con">
        <span className="loader"></span>
    </div>;
    if (error) console.log(error);
    return (
        <div className="homepage">
            <div className="Header_container">
                <Swiper
                    className="header_con"
                    slidesPerView={1}
                    spaceBetween={0}
                    centeredSlides={true}
                    simulateTouch={false}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{
                        delay: 5500,
                    }}
                >
                    {data.slice(0, 7).map((allmovie) => (
                        <SwiperSlide
                            className="header_content"
                            key={allmovie.id}
                        >
                            <div className="image_content">
                                <img
                                    src={requests.w500Image(
                                        allmovie.poster_path
                                    )}
                                    alt=""
                                />
                            </div>
                            <div className="desc_content">
                                <div className="Coming">
                                    <h1>UPCOMING MOVIES</h1>
                                </div>
                                <div className="dec_content_second">
                                    <div className="star_rating">
                                        <span>
                                            <RiStarSLine />
                                            <RiStarSLine />
                                            <RiStarSLine />
                                            <RiStarSLine />
                                            <RiStarSLine />
                                        </span>
                                    </div>
                                    <div className="youtube_trailer">
                                        <div className="youtube_trailer_width">
                                            <span className="youtube_icon">
                                                <AiFillYoutube />
                                            </span>
                                            <span className="line_text"></span>
                                            <span className="text_trailer">
                                                Watch Trailer
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="movie_title">
                                    <h1>{allmovie.original_title}</h1>
                                </div>
                                <div className="movie_title_date">
                                    <p>{allmovie.release_date}</p>
                                </div>
                                <div className="movie_title_overview">
                                    <h1>Overview</h1>
                                </div>
                                <div className="movie_title_overview_desc">
                                    <p>{allmovie.overview}</p>
                                </div>
                            </div>
                            <div
                                className="background_home_movie"
                                style={{
                                    backgroundImage: `url('${requests.backdrop(
                                        allmovie.backdrop_path
                                    )}')`,
                                }}
                            ></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* Movies Rows */}
            <div className="section_row">
                <MovieCard
                    title="Now Playing"
                    fetchUrl={requests.fetchNowPlaying}
                />
                <MovieCard
                    title="Top Rated"
                    fetchUrl={requests.fetchTopRated}
                />
                <MovieCard
                    title="Action"
                    fetchUrl={requests.fetchActionMovies}
                />
                <MovieCard
                    title="Horror"
                    fetchUrl={requests.fetchHorrorMovies}
                />
            </div>
        </div>
    );
};

export default Header;
