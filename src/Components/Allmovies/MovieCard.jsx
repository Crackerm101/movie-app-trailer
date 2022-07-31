import React, { useState, useEffect } from "react";

// import Libraries
import YouTube from "react-youtube";
// Import Css
import "./UniversalMovie.css";

// import React-Icons
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

// Swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

// API Request
import requests from "../../Api/request";
import axios from "../../Api/axios";
import CardAPI from "../../Api/api";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState(false);
    const [cardModal, setCardModal] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const Cardtoggle = () => {
        setCardModal(!cardModal);
        if (cardModal) {
            document.body.classList.add("active");
            setTrailerUrl("");
        } else {
            document.body.classList.remove("active");
        }
    };

    const handleClick = async (movie, isLargeRow) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else if (!isLargeRow) {
            let trailerurl = await axios.get(
                `/movie/${movie.id}/videos?api_key=${CardAPI.Movie_API}&append_to_response=videos`
            );
            setTrailerUrl(trailerurl.data.results[0]?.key);
        }
    };

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
                modules={[Scrollbar]}
                spaceBetween={15}
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
                {movies.map((movie) => (
                    <SwiperSlide className="Popular_item " key={movie.id}>
                        <div
                            className="Movie_popular_item_con"
                            onClick={Cardtoggle}
                        >
                            <div className="average">
                                <span>{movie.vote_average}</span>
                            </div>
                            <span className="Heart">
                                <AiOutlineHeart />
                            </span>

                            <img
                                onClick={() => handleClick(movie)}
                                key={movie.id}
                                className="row__poster"
                                src={requests.backdrop(movie.poster_path)}
                                alt={movie.name}
                            />
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

            {cardModal && (
                <div className="Serv_modal">
                    <div onClick={Cardtoggle} className="Serv_overlay"></div>
                    <div className="Serv_modal-content">
                        {trailerUrl ? (
                            <YouTube
                                videoId={trailerUrl}
                                className={"Player"}
                                host={"http://www.youtube.com"}
                                opts={{
                                    playerVars: {
                                        height: "100%",
                                        width: "100%",
                                        autoplay: 1,
                                        controls: 1,
                                        cc_load_policy: 0,
                                        fs: 0,
                                        iv_load_policy: 0,
                                        modestbranding: 0,
                                        showinfo: 0,
                                        origin: window.location.href,
                                        allowfullscreen: "true",
                                    },
                                }}
                            />
                        ) : (
                            "Sorry, no trailer available"
                        )}
                        <button onClick={Cardtoggle} className={"close_video"}>
                            <AiOutlineClose />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Row;
