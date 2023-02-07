import TVrows from "../Components/TvShows/TVRows";
import "../Components/Allmovies/UniversalMovie.css";

import requests from "../Api/request";
import { useEffect, useState } from "react";

import axios from "../Api/axios";

const TVshows = () => {
    const [tvData, setTVData] = useState([]);

    useEffect(() => {
        const tvData = async () => {
            const { data } = await axios.get(requests.fetchTvAirTodayPage);
            setTVData(data.results);
            return data;
        };
        tvData();
    }, []);
    return (
        <div className="TV_data_row">
            <div className="banner_TV">
                {tvData.slice(0, 11).map((AlltvShows) => (
                    <div className="header_tv_content" key={AlltvShows.id}>
                        <img
                            src={requests.w500Image(AlltvShows.poster_path)}
                            alt=""
                        />
                    </div>
                ))}
            </div>
            <TVrows />
        </div>
    );
};

export default TVshows;
