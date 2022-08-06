import React, { useState, useEffect } from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Import Css
import "./UniversalMovie.css";

import { Link } from "react-router-dom";

// Swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Keyboard } from "swiper";

// API Request
import requests from "../../Api/request";
import axios from "../../Api/axios";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            setIsLoading(false);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="Most_popular_container">
            <div className="popular_head_title">
                <h1>{title}</h1>
                <span>MOVIES</span>
            </div>

            <Swiper
                className="Most_popular"
                scrollbar={{
                    // hide: false,
                    draggable: true,
                    dragSize: 80,
                }}
                modules={[Scrollbar, Keyboard]}
                keyboard={{
                    enabled: true,
                }}
                spaceBetween={5}
                breakpoints={{
                    1320: {
                        slidesPerView: 8,
                    },
                    1100: {
                        slidesPerView: 7,
                    },
                    910: {
                        slidesPerView: 6,
                    },
                    800: {
                        slidesPerView: 5,
                    },
                    650: {
                        slidesPerView: 4,
                    },

                    320: {
                        slidesPerView: 3,
                    },
                }}
            >
                {isloading && <p>Loading...</p>}
                {movies.map((movie) => (
                    <SwiperSlide className="Popular_item " key={movie.id}>
                        <div className="Movie_popular_item_con">
                            <div className="average">
                                <span>{movie.vote_average}</span>
                            </div>
                            <Link to={`/movie/${movie.id}`}>
                                <img
                                    className="row__poster"
                                    src={requests.w500Image(movie.poster_path)}
                                    alt={movie.name}
                                />
                            </Link>
                        </div>

                        <div className="Movie_popular_item_con_title">
                            <p>
                                {movie.original_title}
                                <br></br>
                                {movie.release_date}
                            </p>
                            <p></p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Row;
