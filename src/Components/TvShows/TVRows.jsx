import requests from "../../Api/request";
import TVcard from "./TVCard";

const TVRows = () => {
    return (
        <div className="section_row">
            <TVcard title="Airing Today" fetchUrl={requests.fetchTvAirToday} />
            <TVcard title="On Air" fetchUrl={requests.fetchTvOnAir} />
            <TVcard title="TV Popular" fetchUrl={requests.fetchTvPopular} />
            <TVcard title="TV TopRated" fetchUrl={requests.fetchTvTopRated} />
        </div>
    );
};

export default TVRows;
