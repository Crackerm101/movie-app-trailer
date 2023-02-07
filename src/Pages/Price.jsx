import PriceData from "../MovieAppData/PriceData";
import { BsDot } from "react-icons/bs";

import "../styles/price.css";
const Price = () => {
    return (
        <section className="movie_price_container" id="Price">
            <div className="movie_price_head_title">
                <h1>
                    Choose The Plan <br /> That Suits For You
                </h1>
                <span>
                    Movie Apps Variety of Plans to meet your needs. The Plan you
                    choose will <br />
                    determine the video quality and the numbers of screens you
                    can watch on at the same time
                </span>
            </div>
            <div className="movie_price_box_container">
                {PriceData.map(
                    (
                        {
                            headerTitle,
                            headerTitleDesc,
                            priceAmmount,
                            orginalprice,
                            listPackageList1,
                            listPackageList2,
                            listPackageList3,
                            listPackageList4,
                            listPackageList5,
                            listPackageList6,
                            btnPrice,
                            savePrice,
                        },
                        index
                    ) => {
                        return (
                            <div
                                className="movie_price_box movie_price_box_border"
                                key={index}
                            >
                                <div className="save_more">
                                    <div className="Save_price_details">
                                        {savePrice}
                                    </div>
                                </div>
                                <div className="box_price_title_head">
                                    <h2>{headerTitle}</h2>
                                    <p>{headerTitleDesc}</p>
                                    <div className="box_package_price">
                                        <h3>{priceAmmount}</h3>
                                        <span>/month</span>
                                    </div>
                                    <div className="orginal_price">
                                        <span>
                                            Orginal Price {orginalprice}
                                        </span>
                                    </div>
                                </div>
                                <div className="list_package_item">
                                    <ul>
                                        <li>
                                            <span className="dot">
                                                <BsDot />
                                            </span>
                                            <span>{listPackageList1}</span>
                                        </li>
                                        <li>
                                            <span className="dot">
                                                <BsDot />
                                            </span>
                                            <span>{listPackageList2}</span>
                                        </li>
                                        <li>
                                            <span className="dot">
                                                <BsDot />
                                            </span>
                                            <span>{listPackageList3}</span>
                                        </li>
                                        <li>
                                            <span className="dot">
                                                <BsDot />
                                            </span>
                                            <span>{listPackageList4}</span>
                                        </li>
                                        <li>
                                            <span className="dot">
                                                <BsDot />
                                            </span>
                                            <span>{listPackageList5}</span>
                                        </li>
                                        <li>
                                            <span className="dot">
                                                <BsDot />
                                            </span>
                                            <span>{listPackageList6}</span>
                                        </li>
                                    </ul>
                                </div>

                                <button className="movie_btn">
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn_price"
                                    >
                                        {btnPrice}
                                    </a>
                                </button>
                            </div>
                        );
                    }
                )}
            </div>
        </section>
    );
};

export default Price;
