import "./Company.css";
import LogoSVG1 from "../../Assets/logo-1.svg";
import LogoSVG2 from "../../Assets/logo-2.svg";
import LogoSVG3 from "../../Assets/logo-3.svg";
import LogoSVG4 from "../../Assets/logo-4.svg";
import LogoSVG5 from "../../Assets/logo-5.svg";
import LogoSVG6 from "../../Assets/logo-6.svg";
import LogoSVG7 from "../../Assets/logo-7.svg";

const Company = (props) => {
    return (
        <div className="company_container">
            <div className="company_logo_container">
                <img src={LogoSVG1} className="company_icon" alt="" />
                <img src={LogoSVG2} className="company_icon" alt="" />
                <img src={LogoSVG3} className="company_icon" alt="" />
                <img src={LogoSVG4} className="company_icon" alt="" />
                <img src={LogoSVG5} className="company_icon" alt="" />
                <img src={LogoSVG6} className="company_icon" alt="" />
            </div>
        </div>
    );
};

export default Company;
