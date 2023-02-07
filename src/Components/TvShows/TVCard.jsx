import React, { useState, useEffect } from "react";

import TVrequests from "../../Api/request";
import axios from "../../Api/axios";

// Swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Keyboard } from "swiper";

import "../Allmovies/UniversalMovie.css";

const TVCard = ({ title, fetchUrl }) => {
    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        async function fetchTvData() {
            const TVrequests = await axios.get(fetchUrl);
            setTvShows(TVrequests.data.results);
            // console.log(TVrequests.data.results);
            return TVrequests;
        }
        fetchTvData();
    }, [fetchUrl]);

    return (
        <div className="tv_container">
            <div className="main_tv_container">
                <div className="popular_head_title">
                    <h1>{title}</h1>
                    <span>TV Shows</span>
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
                    {/* {isloading && (
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )} */}
                    {tvShows.map((TVshow) => (
                        <SwiperSlide className="Popular_item " key={TVshow.id}>
                            <div className="Movie_popular_item_con">
                                <div className="average">
                                    <span>{TVshow.vote_average}</span>
                                </div>

                                <img
                                    className="row__poster"
                                    loading="lazy"
                                    src={TVrequests.w500Image(
                                        TVshow.poster_path
                                    )}
                                    alt={TVshow.name}
                                />
                            </div>

                            <div className="Movie_popular_item_con_title">
                                <p>
                                    {TVshow.name}
                                    <br></br>
                                    {TVshow.first_air_date}
                                </p>
                                <p></p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TVCard;
