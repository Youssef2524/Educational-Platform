import React, { useState } from "react";
import NavBarUp from "../../component/Navbar/NavBarUp";
import imgee from "../../assets/images/img222.svg";
import Becom from "../../component/BecomInstructure/Becom";
import t1 from "../../assets/images/t-image1.png";
import t2 from "../../assets/images/t-image2.jpg";
import t3 from "../../assets/images/t-image3.jpg";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./About.css";
import BestEducation from "../../component/BestEducation/BestEducation";
import ChooseUs from "../../component/ChooseUs/ChooseUs";
import WhyUsImg from '../../assets/images/img6.jpg';
const About = () => {
  const backgroundImageUrl = imgee;
  const containerAllStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "1030px",
  };

  const [team, setTeam] = useState([
    {
      id: 1,
      image: t1,
      Name: "Anderson Mattheo",
      job: "Teacher in Music",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. t",
      icon1: <FaFacebook />,
      icon2: <FaTwitter />,
      icon3: <FaLinkedin />,
    },
    {
      id: 2,
      image: t2,
      Name: "Mina Colleds",
      job: "Teacher in Math",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. t",
      icon1: <FaFacebook />,
      icon2: <FaTwitter />,
      icon3: <FaLinkedin />,
    },
    {
      id: 3,
      image: t3,
      Name: "Dora",
      job: "Teacher English",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. t",
      icon1: <FaFacebook />,
      icon2: <FaTwitter />,
      icon3: <FaLinkedin />,
    },
  ]);

  return (
    <div>
      <div className="about" style={containerAllStyle}>
        <div className="home-content">
          <h1>About Us</h1>
          <p className="about-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            praesentium <br /> Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illum praesentium elit. <br />
            t, consectetur adipisicing elit. Illum praesentium{" "}
          </p>
          <button className="home-button">EXPLORE MORE</button>
        </div>
        <NavBarUp />
      </div>

      <Becom />

      <div className="course-container">
        <h2 className="course-container-h2">Our Team</h2>
        <p className="best-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,{" "}
          <br /> dolorum maxime minus libero ab recusandae delectus exercitation
        </p>

        <div className="team">
          {team.map((card) => (
            <div className="team-card" key={card.id}>
              <div className="team-card-content">
                <div className="team-image-container">
                  <img src={card.image} alt={card.Name} />
                </div>

                <h3 className="team-title">{card.Name}</h3>
                <span className="team-job">{card.job}</span>

                <span className="team-p">
                  {card.description} <br /> {card.description}
                </span>

                <div className="team-icons">
                  <p className="team-icon"> {card.icon1}</p>
                  <p className="team-icon">{card.icon2} </p>
                  <p className="team-icon"> {card.icon3}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BestEducation />
      <ChooseUs title="Why Choose Us" img={WhyUsImg} desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
             there live the blind texts. " />
    </div>
  );
};

export default About;
