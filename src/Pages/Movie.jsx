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

import CardAPI from "../Api/api";
import newrequests from "../Api/request";
// icons
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";

import MovieIconCardList from "../Assets/list_icon.svg";
import MovieIconCardheart from "../Assets/heart_icon.svg";
import MovieIconCardbookmark from "../Assets/bookmark_icon.svg";
import MovieIconCardstar from "../Assets/star_icon.svg";

import MovieIconCardNetflix from "../Assets/logos_netflix-icon.svg";

const Movie = () => {
  const [currentMovieDetail, setCurrentMovieDetail] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(false);
  const [castMovie, setCastMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(
      `/movie/${id}?api_key=${CardAPI.Movie_API}`
    );
    setCurrentMovieDetail(data);
  };

  useEffect(() => {
    const castMovies = async () => {
      const { data } = await axios.get(
        `/movie/${id}/credits?api_key=${CardAPI.Movie_API}&language=en-US&append_to_response=credits`
      );
      setCastMovie(data.cast);
      return data;
    };
    castMovies();
  }, []);

  const handleClick = async (isLargeRow) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else if (!isLargeRow) {
      const trailerurl = await axios.get(
        `/movie/${id}/videos?api_key=${CardAPI.Movie_API}&append_to_response=videos`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };

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
            src={newrequests.w500Image(currentMovieDetail.poster_path)}
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
            <div className="player-wrapper" onLoadStart={() => handleClick()}>
              <ReactPlayer
                className="react-player"
                url={`https://www.youtube.com/embed/${trailerUrl}`}
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
          </div>
          <div className="play_con">
            <button className="btn_trailer" onClick={() => handleClick()}>
              <BsFillPlayCircleFill /> Play Trailer
            </button>
            <button className="btn_trailer">
              <RiMovie2Fill /> Watch HD
            </button>
            <button className="btn_trailer">
              <AiOutlineCloudDownload /> <span>Download Now</span>
            </button>
          </div>
        </div>
        <div className="Data_cast">
          <div className="review_data">
            <div className="Item_data_tab">Reviews</div>
          </div>
          <div className="discussions_data">
            <div className="Item_data_tab">Discussions</div>
          </div>
          <div className="more_data">
            <div className="Item_data_tab">More</div>
          </div>
        </div>
      </div>
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
          {castMovie.slice(0, 13).map((CastMovielist) => (
            <SwiperSlide className="Cast_list" key={CastMovielist.cast_id}>
              <div className="cast_card_img">
                <img
                  src={newrequests.w500Image(CastMovielist.profile_path)}
                  alt=""
                />
              </div>

              <span>{CastMovielist.character}</span>
              <span>({CastMovielist.name})</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Movie;
