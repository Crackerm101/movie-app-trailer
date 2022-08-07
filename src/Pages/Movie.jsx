import React, { useState } from "react";
import axios from "../Api/axios";
import ReactPlayer from "react-player";
// Import css
import "../styles/MovieCard.css";
import { useParams } from "react-router";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Keyboard } from "swiper";

// cast Sample Image
import Avatar from "../Assets/cast-1.png";

import newrequests from "../Api/request";
// icons
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { RiMovie2Fill, RiSendPlaneFill } from "react-icons/ri";
import { GiTrafficCone } from "react-icons/gi";

import MovieIconCardList from "../Assets/list_icon.svg";
import MovieIconCardheart from "../Assets/heart_icon.svg";
import MovieIconCardbookmark from "../Assets/bookmark_icon.svg";
import MovieIconCardstar from "../Assets/star_icon.svg";

import MovieIconCardNetflix from "../Assets/logos_netflix-icon.svg";

const Movie = () => {
    const [currentMovieDetail, setCurrentMovieDetail] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState([]);
    const [castMovie, setCastMovie] = useState([]);
    const [recommendation, setRecommendation] = useState([]);
    const [Reviews, setReviews] = useState([]);
    const { id } = useParams();

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const { data } = await axios.get(
            `/movie/${id}?api_key=${process.env.REACT_APP_Movie_API_KEY}`
        );
        setCurrentMovieDetail(data);
    };

    useEffect(() => {
        const castMovies = async () => {
            const { data } = await axios.get(
                `/movie/${id}/credits?api_key=${process.env.REACT_APP_Movie_API_KEY}&language=en-US&append_to_response=credits`
            );
            setCastMovie(data.cast);
        };
        castMovies();
    }, []);

    useEffect(() => {
        const trailerurl = async () => {
            const { data } = await axios.get(
                `/movie/${id}/videos?api_key=${process.env.REACT_APP_Movie_API_KEY}&append_to_response=videos`
            );
            setTrailerUrl(data.results);
        };
        trailerurl();
    }, []);

    useEffect(() => {
        const recommendation = async () => {
            const { data } = await axios.get(
                `movie/${id}/recommendations?api_key=${process.env.REACT_APP_Movie_API_KEY}`
            );
            setRecommendation(data.results);
            // console.log(data.results);
        };
        recommendation();
    }, []);

    useEffect(() => {
        const Reviews = async () => {
            const { data } = await axios.get(
                `movie/${id}/reviews?api_key=${process.env.REACT_APP_Movie_API_KEY}`
            );
            setReviews(data.results);
            // console.log(data.results);
        };
        Reviews();
    }, []);

    return (
        <div className="Movie_get_container">
            <div className="background_movie_data">
                <img
                    src={newrequests.backdrop(currentMovieDetail.backdrop_path)}
                    alt=""
                />
            </div>

            <div className="movie_main_image">
                <div className="data_image_header">
                    <img
                        loading="lazy"
                        src={newrequests.w500Image(
                            currentMovieDetail.poster_path
                        )}
                        alt=""
                    />
                    <div className="movie_main_image_netflix">
                        <img src={MovieIconCardNetflix} alt="" />
                        <div className="now_Playing">
                            <span>Now Playing</span>
                            <span>Watch Now</span>
                        </div>
                    </div>
                </div>
                <div className="movie_main_details">
                    <div className="movie_title_card">
                        <h1>{currentMovieDetail.original_title}</h1>
                    </div>
                    <div className="movie_title_date_card">
                        <p>{currentMovieDetail.release_date}</p>
                    </div>
                    <div className="movie_icons_card">
                        <img src={MovieIconCardList} alt="" />
                        <img src={MovieIconCardheart} alt="" />
                        <img src={MovieIconCardbookmark} alt="" />
                        <img src={MovieIconCardstar} alt="" />
                    </div>
                    <div className="movie_title_overview_card">
                        <h1>Overview</h1>
                    </div>
                    <div className="movie_title_overview_desc_card">
                        <p>{currentMovieDetail.overview}</p>
                    </div>
                </div>
            </div>
            <div className="movie_list_con">
                <div className="Movie_trailer_youtube">
                    <div className="Data_container">
                        {trailerUrl.slice(0, 1).map((TrailerData) => (
                            <div
                                className="player_wrapper_data"
                                key={TrailerData.id}
                            >
                                <div className="player-wrapper">
                                    <ReactPlayer
                                        className="react-player"
                                        url={`https:www.youtube.com/embed/${TrailerData.key}`}
                                        width="100%"
                                        height="100%"
                                        controls={true}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="play_con">
                        <button className="btn_trailer">
                            <BsFillPlayCircleFill /> Play Trailer
                        </button>
                        <button className="btn_trailer">
                            <RiMovie2Fill /> Watch HD
                        </button>
                        <button className="btn_trailer">
                            <AiOutlineCloudDownload /> <span>Download Now</span>
                        </button>
                    </div>

                    {/* =========================Tabs SideBar  ========================= */}
                </div>
                <div className="data_tabs_container">
                    <div className="data_tab">
                        <div
                            className={
                                toggleState === 1
                                    ? "Item_data_tab active_tabs"
                                    : "Item_data_tab"
                            }
                            onClick={() => toggleTab(1)}
                        >
                            Reviews
                        </div>
                        <div
                            className={
                                toggleState === 2
                                    ? "Item_data_tab active_tabs"
                                    : "Item_data_tab"
                            }
                            onClick={() => toggleTab(2)}
                        >
                            Discussions
                        </div>
                        <div
                            className={
                                toggleState === 3
                                    ? "Item_data_tab active_tabs"
                                    : "Item_data_tab"
                            }
                            onClick={() => toggleTab(3)}
                        >
                            More
                        </div>
                    </div>
                    <div className="content-tabs">
                        <div
                            className={
                                toggleState === 1
                                    ? "content  active_content"
                                    : "content"
                            }
                        >
                            {Reviews.map((DataReviews) => (
                                <div
                                    className="review_data_container"
                                    key={DataReviews.id}
                                >
                                    <div className="data_image_name">
                                        <div className="data_img_load_imgandName">
                                            <img src={Avatar} alt="" />
                                            <span>
                                                {DataReviews.author}
                                                <br />
                                                {DataReviews.updated_at}
                                            </span>
                                        </div>
                                        <span>
                                            Rating: &nbsp;
                                            {DataReviews.author_details.rating}
                                        </span>
                                    </div>
                                    <div className="data_review_desc">
                                        <span>{DataReviews.content}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div
                            className={
                                toggleState === 2
                                    ? "content  active_content"
                                    : "content"
                            }
                        >
                            <div className="form_comment_discussion">
                                <div className="message_container">
                                    <input
                                        type="text"
                                        className="message_dis"
                                        placeholder="Write your message here...."
                                    />
                                    <div className="message_icon">
                                        <RiSendPlaneFill />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={
                                toggleState === 3
                                    ? "content  active_content"
                                    : "content"
                            }
                        >
                            <div className="more_container">
                                <span>
                                    <GiTrafficCone />
                                </span>
                                <h2>Under Maintenance.....</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================Top BIlled Cast  ========================= */}

            <div className="data_cast_image">
                <span className="title_cast">Top Billed Cast</span>
                <Swiper
                    className="card_cast_img"
                    scrollbar={{
                        // hide: false,
                        draggable: true,
                        dragSize: 80,
                    }}
                    modules={[Scrollbar, Keyboard]}
                    keyboard={{
                        enabled: true,
                    }}
                    spaceBetween={0}
                    breakpoints={{
                        1320: {
                            slidesPerView: 7,
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
                    {castMovie.slice(0, 13).map((CastMovielist) => (
                        <SwiperSlide
                            className="Cast_list"
                            key={CastMovielist.cast_id}
                        >
                            <div className="cast_card_img">
                                <img
                                    src={newrequests.w500Image(
                                        CastMovielist.profile_path
                                    )}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>

                            <span>{CastMovielist.character}</span>
                            <span>({CastMovielist.name})</span>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <span className="title_recomendation">Recommendations</span>
            <Swiper
                className="recommendation_container"
                modules={[Keyboard]}
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
                {recommendation.map((Recommend) => (
                    <SwiperSlide className="Popular_item " key={Recommend.id}>
                        <div className="Movie_popular_item_con">
                            <img
                                className="row__poster"
                                loading="lazy"
                                src={newrequests.backdrop(
                                    Recommend.backdrop_path
                                )}
                                alt={Recommend.name}
                            />
                        </div>

                        <div className="Movie_popular_item_con_title">
                            <p>
                                {Recommend.original_title}
                                <br></br>
                                {Recommend.release_date}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Movie;
