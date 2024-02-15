import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa";
import img7 from "../../assets/images/img8.jpg";
import img9 from "../../assets/images/img6.jpg";
import img10 from "../../assets/images/img5.jpg";
import img11 from "../../assets/images/img11.jpg";
import img12 from "../../assets/images/img12.jpg";
import img13 from "../../assets/images/img13.jpg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid-container">
        <div className="grid-item">
          <div className="colOne">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              blanditiis amet culpa ad quisquam, animi voluptas
            </p>
            <p>Contact</p>
            <div className="foot-social">
              <FaLinkedin className="foot-social-li" />
              <FaFacebook className="foot-social-li" />
              <FaInstagram className="foot-social-li" />
              <FaTwitter className="foot-social-li" />
              <FaYoutube className="foot-social-li" />
            </div>
          </div>
        </div>
        <div className="grid-item">
          <h4>Project</h4>
          <div className="colTwo">
            <li className="colTwo-li">Web Design</li>
            <li className="colTwo-li">Html5</li>
            <li className="colTwo-li">Css3</li>
            <li className="colTwo-li">jQuery</li>
            <li className="colTwo-li">Bootstrap</li>
          </div>
        </div>
        <div className="grid-item">
          <h4>Gallery</h4>
          <div className="colThree">
            <div className="row-foot">
              <img src={img7} alt="Image 1" className="foot-image" />
              <img src={img9} alt="Image 2" className="foot-image" />
              <img src={img10} alt="Image 3" className="foot-image" />
            </div>
            <div className="row-foot">
              <img src={img11} alt="Image 4" className="foot-image" />
              <img src={img12} alt="Image 5" className="foot-image" />
              <img src={img13} alt="Image 6" className="foot-image" />
            </div>
          </div>
        </div>
        <div className="grid-item">
          <h4>Contact</h4>
          <div className="colFour">
            <p>43 Rymoundth Rd. Baltmoer, London 1254</p>
            <div className="colTwo">
              <li className="colTwo-li">+1(123)-587-521</li>
              <li className="colTwo-li">+1(123)-587-521</li>
              <li className="colTwo-li">info@emailEdu.com</li>
            </div>
          </div>
        </div>
      </div>

      <div className="foot-end">
        <p>
          copyright © 2022 all rights reserved -Designed with love by Untree.co
          Distributed By Arwa
        </p>
      </div>
    </footer>
  );
};

export default Footer;
