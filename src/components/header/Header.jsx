import React from "react";
import "./Header.scss";
import Facebook from "../../assets/facebook.svg";
import Intagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Youtube from "../../assets/youtube.svg";
import Mail from "../../assets/gmail.svg";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="header_1">
            <div className="logo">EcoBonus</div>
            <ul className="navbar">
              <li className="lists">Главная</li>
              <li className="lists">О нас</li>
              <li className="lists">Как работает</li>
              <li className="lists">Связаться</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header" style={{ background: "#E6EDFF" }}>
        <div className="container">
          <div className="header_2">
            <div className="phone">Номер тел : +996 552 911 166</div>
            <div className="navigations">
              <img src={Facebook} alt="" />
              <img src={Intagram} alt="" />
              <img src={Youtube} alt="" />
              <img src={Linkedin} alt="" />
              <img src={Mail} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
