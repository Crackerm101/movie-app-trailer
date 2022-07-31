import Movie1 from "../../Assets/Movie-1.jpg";
import Movie2 from "../../Assets/Movie-2.jpg";
import Movie3 from "../../Assets/Movie-3.jpg";
import { RiStarSLine } from "react-icons/ri";

import { v4 as uuidv4 } from "uuid";
const exportMovieData = [
    {
        id: uuidv4(),
        imgdata: Movie1,
        movieHead: "Coming Soon",
        movieStars: <RiStarSLine />,
        movieTitle: "The Hunger Games: Mockingjay - Part 4 (2022)",
        movieTitledate:
            "11/19/2022 (PH) Action, Adventure, Science Fiction 2h 17m",
        movieTitleDesc: "Overview",
        movieDesc:
            "With the nation of Panem in a full scale war, Katniss confronts President Snow in the final showdown. Teamed with a group of her closest friends – including Gale, Finnick, and Peeta – Katniss goes off on a mission with the unit from District 13 as they risk their lives to stage an assassination attempt on President Snow who has become increasingly obsessed with destroying her. The mortal traps, enemies, and moral choices that await Katniss will challenge her more than any arena she faced in The Hunger Games.",
    },
    {
        id: uuidv4(),
        imgdata: Movie2,
        movieHead: "Available This December",
        movieStars: <RiStarSLine />,
        movieTitle: "The Good, the Bad and the Ugly",
        movieTitledate:
            "11/19/2022 (PH) Action, Adventure, Science Fiction 2h 17m",
        movieTitleDesc: "Overview",
        movieDesc:
            "With the nation of Panem in a full scale war, Katniss confronts President Snow in the final showdown. Teamed with a group of her closest friends – including Gale, Finnick, and Peeta – Katniss goes off on a mission with the unit from District 13 as they risk their lives to stage an assassination attempt on President Snow who has become increasingly obsessed with destroying her. The mortal traps, enemies, and moral choices that await Katniss will challenge her more than any arena she faced in The Hunger Games.",
    },

    {
        id: uuidv4(),
        imgdata: Movie3,
        movieHead: "Coming Soon",
        movieStars: <RiStarSLine />,
        movieTitle: "The Hunger Games: Mockingjay - Part 4 (2022)",
        movieTitledate:
            "11/19/2022 (PH) Action, Adventure, Science Fiction 2h 17m",
        movieTitleDesc: "Overview",
        movieDesc:
            "With the nation of Panem in a full scale war, Katniss confronts President Snow in the final showdown. Teamed with a group of her closest friends – including Gale, Finnick, and Peeta – Katniss goes off on a mission with the unit from District 13 as they risk their lives to stage an assassination attempt on President Snow who has become increasingly obsessed with destroying her. The mortal traps, enemies, and moral choices that await Katniss will challenge her more than any arena she faced in The Hunger Games.",
    },
];
export default exportMovieData;
