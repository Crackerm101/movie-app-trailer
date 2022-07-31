import React from "react";
import "./Footer.css";
import QR from "../../Assets/QR.png";
import FooterLogo from "../../Assets/Logo.png";
import Mastercard from "../../Assets/Mastercard.svg";
import PayPal from "../../Assets/PayPal.svg";
import GooglePay from "../../Assets/GooglePay.svg";
import Skrill from "../../Assets/Skrill.svg";
import Visa from "../../Assets/Visa-logo.svg";

function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_con_content">
                <div className="logo_container">
                    <div className="qr_image">
                        <img src={QR} alt="" />
                    </div>
                    <div className="footer_logo">
                        <img src={FooterLogo} alt="" />
                    </div>
                    <span>Available Installation for Mobile Application</span>
                </div>
                <div className="footer_menu_container">
                    <div className="footer_title_header">
                        <h1>Menu</h1>
                    </div>
                    <div className="footer_menu_con">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Home
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Categories
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Pricing
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Tv Shows
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Contact Us
                        </a>
                    </div>
                </div>
                <div className="footer_movie_category">
                    <div className="footer_title_header">
                        <h1>Movie Category</h1>
                    </div>
                    <div className="footer_category_row">
                        <div className="first_row">
                            <a href="">Action</a>
                            <a href="">Comedy</a>
                            <a href="">Drama</a>
                            <a href="">Fantasy</a>
                            <a href="">Horror</a>
                            <a href="">Mystery</a>
                            <a href="">Romance</a>
                        </div>
                        <div className="second_row">
                            <a href="">Thriller</a>
                            <a href="">Western</a>
                            <a href="">Romantic Comedy</a>
                            <a href="">Historical Romance</a>
                            <a href="">Sci-Fi</a>
                            <a href="">War</a>
                            <a href="">Misicals</a>
                        </div>
                    </div>
                </div>
                <div className="subcribe_con">
                    <div className="footer_title_header">
                        <h1>Subscribe</h1>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Amet porta elementum proin morbi pretium.
                        </span>
                    </div>
                    <div className="form_subcribe_container">
                        <form action="" id="form_subcribe">
                            <input
                                type="email"
                                className="subcribe_text"
                                placeholder="Your Email Address..."
                                required
                            />
                            <button className="btn_subcribe">Subscribe</button>
                        </form>
                    </div>
                    <div className="payment_method">
                        <div className="footer_payment_header">
                            <h4>Payment Method</h4>
                            <span></span>
                            <div className="payment_icon">
                                <img
                                    src={Mastercard}
                                    alt=""
                                    className="payment_class_item"
                                />
                                <img
                                    src={PayPal}
                                    alt=""
                                    className="payment_class_item"
                                />
                                <img
                                    src={GooglePay}
                                    alt=""
                                    className="payment_class_item"
                                />
                                <img
                                    src={Skrill}
                                    alt=""
                                    className="payment_class_item"
                                />
                                <img
                                    src={Visa}
                                    alt=""
                                    className="payment_class_item"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright_item">
                <span>
                    © Copyright © 2020 Movie App All Rights Reserved. Coded by
                    Jayvee
                </span>
            </div>
        </div>
    );
}

export default Footer;
