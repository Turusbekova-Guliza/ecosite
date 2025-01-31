import React from "react";
import "./Footer.scss";
import Facebook from "../../assets/facebook.svg";
import Intagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Youtube from "../../assets/youtube.svg";
import Mail from "../../assets/gmail.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer_block">
            <h2>EcoBonus</h2>
            <p>Номер тел : +996 552 911 166</p>
            <p>Почта: EcoBonus@gmail.com</p>
          </div>
          <div className="footer_block">
            <h2>Важные ссылки</h2>
            <ul className="footer_ul">
              <li className="footer_li">Главная</li>
              <li className="footer_li">О нас</li>
              <li className="footer_li">Как работает</li>
              <li className="footer_li">Новости</li>
              <li className="footer_li">Связаться</li>
            </ul>
          </div>
          <div className="footer_block">
            <h2>Социальные ссылки</h2>
            <div className="footer_icons">
              <img src={Facebook} alt="" />
              <img src={Intagram} alt="" />
              <img src={Youtube} alt="" />
              <img src={Linkedin} alt="" />
              <img src={Mail} alt="" />
            </div>
            <p>Copyright © 2025 | All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
