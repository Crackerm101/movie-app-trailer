import React from "react";
import IOSIMG from "../Assets/ios_icon.svg";
import GOOGLEIMG from "../Assets/google_play_icon.svg";

import ContactIcon from "../Assets/Contact_Icon.svg";
import LocationIcon from "../Assets/location_icon.svg";
import NumberIcon from "../Assets/contact_number-icon.svg";
import MailIcon from "../Assets/mail_icon.svg";

function Contact() {
    return (
        <div className="contact_us_container">
            <div className="movie_price_head_title">
                <img src={ContactIcon} alt="" className="Contact_Icon" />
                <h1>Let's start a conversation!</h1>
                <span>
                    Send a message, and we can help you find the services that
                    best fit your needs.
                </span>
            </div>

            <div className="contact_details">
                <div className="contact_information">
                    <div className="contact_Header_Information">
                        <span>Contact Information </span>
                    </div>
                    <div className="contact_information_con_data">
                        <div className="contact_box_data_box">
                            <span className="icon_data">
                                <img src={LocationIcon} alt="" />
                            </span>
                            <span className="information_data">
                                477 Findley Avenue , Minot North Dakota
                            </span>
                        </div>
                        <div className="contact_box_data_box">
                            <span className="icon_data">
                                <img src={NumberIcon} alt="" />
                            </span>
                            <span className="information_data">
                                +639367155128
                            </span>
                        </div>
                        <div className="contact_box_data_box">
                            <span className="icon_data">
                                <img src={MailIcon} alt="" />
                            </span>
                            <span className="information_data">
                                movieapp@bussiness.email.com
                            </span>
                        </div>
                        <div className="devices_con">
                            <img src={IOSIMG} alt="" className="devices_icon" />
                            <img
                                src={GOOGLEIMG}
                                alt=""
                                className="devices_icon"
                            />
                        </div>
                    </div>
                </div>
                <form action="" id="contact_ID">
                    <div className="Contact_form">
                        <div className="first_name_con">
                            <div className="first_con">
                                <label htmlFor="">FirsName*</label>
                                <input
                                    type="text"
                                    className="first_name_input"
                                    placeholder="Your First Name..."
                                    required
                                />
                            </div>
                            <div className="first_con">
                                <label htmlFor="">Last Name*</label>
                                <input
                                    type="text"
                                    className="first_name_input"
                                    placeholder="Your Last Name..."
                                    required
                                />
                            </div>
                        </div>
                        <div className="first_name_con">
                            <div className="first_con">
                                <label htmlFor="">Email Address*</label>
                                <input
                                    type="text"
                                    className="first_name_input"
                                    placeholder="Your Email Address..."
                                    required
                                />
                            </div>
                            <div className="first_con">
                                <label htmlFor="">Contact Number*</label>
                                <input
                                    type="text"
                                    className="first_name_input"
                                    placeholder="Your Contact Number..."
                                    required
                                />
                            </div>
                        </div>
                        <div className="message_con">
                            <label htmlFor="">Message*</label>
                            <input
                                type="email"
                                className="email_name_input"
                                placeholder="Write your message..."
                                required
                            />
                        </div>

                        <div className="text_contact">
                            <p>
                                This site is protected by reCAPTCHA and the
                                Google Privacy Policy and Terms of Service
                                apply.
                            </p>
                        </div>
                        <button type="submit" className="btn_contact">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Contact;
