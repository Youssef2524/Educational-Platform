import React from "react";
import { useState, useEffect } from "react";
import NavBarUp from "../../component/Navbar/NavBarUp";
import imgee from "../../assets/images/img111.svg";
import im4 from "../../assets/images/img12.jpg";
import "./Home.css";
import Category from "../../component/category/Category";
import Becom from "../../component/BecomInstructure/Becom";
import BestEducation from "../../component/BestEducation/BestEducation";
import { FaCheck } from "react-icons/fa";
import NewsHome from "../../component/News/NewsHome";
import Testamonial from "../../component/Testamonial/Testamonial";
import Price from "../../component/Price/Price";
import ChooseUs from "../../component/ChooseUs/ChooseUs";
import WhyUsImg from "../../assets/images/img6.jpg";
import {  useLoaderData } from "react-router-dom";
import CourseHome from "../course/CourseHome";

const Home = () => {
  const backgroundImageUrl = imgee;

  const containerAllStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const [coursedata, setcoursedata] = useState([]);
  const dataCourse = useLoaderData();

  useEffect(() => {
    setcoursedata(dataCourse);
   
  }, [dataCourse]);

  const coursesToShow = dataCourse.slice(0, 3);
console.log(coursesToShow)
  return (
    <div>
      <div style={containerAllStyle}>
        <div className="home-content">
          <span>WHATCH THE VIDEO</span>
          <h2>Education is the Mother of Leadership </h2>
          <button className="home-button">EXPLORE MORE</button>
        </div>
        <NavBarUp />
      </div>
      <Category />
      <Becom />
      <BestEducation />

      <CourseHome coursedata={coursesToShow} />

      <div className="educat">
        <h2>Education for Tomorrow's Leaders</h2>
        <p className="educatP">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          impedit, vero error perspiciatis laudantium labore temporibus cum
          optio eaque labore temporibus cum optio eaqu labore temporibus cum
          optio eaqu
        </p>
        <button className="home-button">ENROLL NOW</button>
      </div>

      <div className="home-about">
        <div className="become-left">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            similique iusto molestias,
            <br /> nostrum quas quod Reiciendis similique iusto molestias,
            Reiciendis similique iusto molestias,
            <br /> Reiciendis similique iusto
          </p>
          <ul className="becom-ul">
            <li className="becom-li">
              <FaCheck size={15} /> <span>Sperated They live.</span>
            </li>
            <li className="becom-li">
              <FaCheck size={15} />{" "}
              <span>Bookmarksgrove right at the coast.</span>
            </li>
            <li className="becom-li">
              <FaCheck size={15} /> <span>Larg Language Ocean</span>
            </li>
            <div className="home-about-num">
              <p className="home-about-numP">
                {" "}
                <span className="home-about-numspan">2+0</span> No, Students
              </p>
              <p className="home-about-numP">
                <span className="home-about-numspan">0</span>No , Teachers
              </p>
              <p className="home-about-numP">
                <span className="home-about-numspan">0</span>No , Awards
              </p>
            </div>
            <button className="becom-button">ADDMITION</button>
            <button className="home-about-button">LEARN MORE</button>
          </ul>
        </div>

        <div className="right-test">
          <div></div>
          <div></div>
          <img src={im4} alt="Image" className="person-test" />
        </div>
      </div>
      <NewsHome />

      <Price />
      <Testamonial />
      <ChooseUs
        title="Why Choose Us"
        img={WhyUsImg}
        desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
             there live the blind texts. "
      />
    </div>
  );
};

export default Home;
