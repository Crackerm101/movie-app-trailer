import React from "react";
import "./Testimonial.css";

import TestiData from "../../MovieAppData/TestimonialData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";
import QuoteLeft from "../../Assets/icon-park_quote_left.svg";

function Testimonial() {
    return (
        <div className="Testimonial_container">
            <div className="testimonail_head_title">
                <h1>
                    Check what Our Customers <br /> says about us
                </h1>
                <span>
                    Movie Apps Variety of Plans to meet your needs. The Plan you
                    choose will determine the video quality <br /> and the
                    numbers of screens you can watch on at the same time
                </span>
            </div>
            <Swiper
                className="con_align"
                slidesPerView={3}
                spaceBetween={20}
                slidesPerGroup={3}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                    // when window width is >= 640px
                    1066: {
                        slidesPerView: 3,
                    },
                    800: {
                        slidesPerView: 2,
                    },
                }}
            >
                {TestiData.map(
                    (
                        { testiIMG, testiQuote, testiName, testiAddress },
                        index
                    ) => {
                        return (
                            <SwiperSlide className="Testi_data" key={index}>
                                <div className="testi_box">
                                    <div className="testi_image">
                                        <img src={testiIMG} alt="" />
                                    </div>
                                    <div className="testi_content_con">
                                        <div className="quote_icon">
                                            <img
                                                src={QuoteLeft}
                                                alt=""
                                                className="quote_left"
                                            />
                                            <img
                                                src={QuoteLeft}
                                                alt=""
                                                className="quote_right"
                                            />
                                        </div>

                                        <div className="testi_data_text">
                                            <p>{testiQuote}</p>
                                        </div>
                                        {/* <div className="testi_star_rating">
                                        <RiStarSLine />
                                        <RiStarSLine />
                                        <RiStarSLine />
                                        <RiStarSLine />
                                        <RiStarSLine />
                                    </div> */}
                                        <div className="testi_name">
                                            {testiName}
                                        </div>
                                        <div className="testi_address">
                                            ({testiAddress})
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    }
                )}
            </Swiper>
        </div>
    );
}

export default Testimonial;
