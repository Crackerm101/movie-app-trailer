import { AiFillYoutube } from "react-icons/ai";
import { RiStarSLine } from "react-icons/ri";

import "../styles/header.css";

import MovieRow from "../Components/Allmovies/MovieRow";

// Swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//React Hook Fetch Data
import requests from "../Api/request";
import { useEffect } from "react";

import axios from "../Api/axios";
import { useState } from "react";
const Header = () => {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const movieHeader = async () => {
            const { data } = await axios.get(requests.fetchUpcoming);
            setMovieData(data.results);
            return data;
        };
        movieHeader();
    }, []);

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
                    {movieData.slice(0, 15).map((allmovie) => (
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
            <MovieRow />
        </div>
    );
};

export default Header;
