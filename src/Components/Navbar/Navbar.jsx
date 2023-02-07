import React from "react";
import "./Navbar.css";
import IMGLogo from "../../Assets/Logo.png";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineSearch, AiTwotoneSetting } from "react-icons/ai";
import { MdOutlineNotifications, MdAccountCircle } from "react-icons/md";
import NoNotif from "../../Assets/ic_round-notifications-paused.svg";
import { Link } from "react-router-dom";

import { useState, useRef } from "react";
// Scrollbar Component
window.addEventListener("scroll", function () {
    const header = document.querySelector(".nav_head_container");
    header.classList.toggle("active", window.scrollY > 0);
});

const Navbar = () => {
    const [isActive, setActive] = useState(false);
    const [newprofile, setNewProfile] = useState(false);
    const [search, setSearch] = useState(false);

    const catMenu = useRef(null);
    const closeOpenMenus = (e) => {
        if (
            catMenu.current &&
            isActive &&
            !catMenu.current.contains(e.target)
        ) {
            setActive(false);
        }
    };

    document.addEventListener("mousedown", closeOpenMenus);

    const profileMenu = useRef(null);
    const closeOpenProfileMenus = (e) => {
        if (
            profileMenu.current &&
            newprofile &&
            !profileMenu.current.contains(e.target)
        ) {
            setNewProfile(false);
        }
    };

    document.addEventListener("mousedown", closeOpenProfileMenus);

    return (
        <div className="nav_head_container">
            <div className="nav_container">
                <div className="navbar_container">
                    <div className="nav_con_1">
                        <div className="img_con">
                            <img src={IMGLogo} alt="" />
                        </div>
                        <div className="nav_content">
                            <Link to="/" className="Nav_link">
                                Home
                            </Link>
                            <Link to="/" className="Nav_link">
                                Categories
                            </Link>
                            <Link to="Price" className="Nav_link">
                                Pricing
                            </Link>
                            <Link to="/TVshows" className="Nav_link">
                                TV Shows
                            </Link>
                            <Link to="/Contact" className="Nav_link">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="nav_con_2">
                        <div className="navbar_toggle_item">
                            <div className={"Search"}>
                                <input
                                    type="text"
                                    id="searchItem"
                                    placeholder="Search your movie.... "
                                />
                                <div
                                    className="search_icon"
                                    onClick={() =>
                                        setSearch((search) => !search)
                                    }
                                >
                                    <AiOutlineSearch />
                                </div>
                            </div>
                            <span className="Notif_icon">
                                <span
                                    className="btn_nav_list"
                                    onClick={() =>
                                        setActive((isActive) => !isActive)
                                    }
                                >
                                    <MdOutlineNotifications />
                                </span>
                                <h3
                                    className="notif_number"
                                    id="notif_num"
                                    onClick={() =>
                                        setActive((isActive) => !isActive)
                                    }
                                >
                                    0
                                </h3>
                                <div
                                    ref={catMenu}
                                    className={
                                        isActive
                                            ? "Notif_dataActive"
                                            : "Notif_data"
                                    }
                                >
                                    <div className="notif_header">
                                        <span>
                                            <MdOutlineNotifications />
                                        </span>
                                        <h2>Natifications</h2>
                                        <span>
                                            <AiTwotoneSetting />
                                        </span>
                                    </div>
                                    <div className="notif_content">
                                        <div className="notif_no_message">
                                            No notfication yet!
                                        </div>
                                        <img
                                            src={NoNotif}
                                            alt=""
                                            className="noNotif"
                                        />
                                        <div className="notif_no_message_parag">
                                            "well notify you when something
                                            arrives"
                                        </div>
                                    </div>
                                    <div className="check_all_Activity">
                                        <h3>See All notifications</h3>
                                    </div>
                                </div>
                            </span>
                            <div className="Profile_Account">
                                <span
                                    className="profile_account_con"
                                    onClick={() =>
                                        setNewProfile(
                                            (newprofile) => !newprofile
                                        )
                                    }
                                >
                                    <MdAccountCircle />
                                </span>
                                <div
                                    ref={profileMenu}
                                    className={
                                        newprofile
                                            ? "Profile_Account_container_modal"
                                            : "Profile_Account_container_modal_Active"
                                    }
                                >
                                    <div className="Profile_Account_container_modal_box">
                                        <Link
                                            to="/Login"
                                            className="Account_Log"
                                        >
                                            <span> Account Login</span>
                                        </Link>
                                        <Link
                                            to="/CreateAccount"
                                            className="Account_Log"
                                        >
                                            <span>Create New Account</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <span className="Menu_item">
                                <BiMenuAltRight />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
