import React from "react";
import imgee from "../../assets/images/img333.svg";
import NavBarUp from "../../component/Navbar/NavBarUp";
import NewsAbout from "../../component/News/NewsAbout";
const News = () => {
  const backgroundImageUrl = imgee;

  const containerAllStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div>
      <div style={containerAllStyle}>
        <div className="home-content">
          <h1>News</h1>
          <p className="about-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            praesentium <br /> Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illum praesentium elit. <br />
          </p>
          <button className="home-button">EXPLORE MORE</button>
        </div>
        <NavBarUp />
      </div>
      <NewsAbout />
    </div>
  );
};

export default News;
