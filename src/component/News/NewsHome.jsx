import React, { useState } from "react";
import "./News.css";
import pic1 from "../../assets/images/img5.jpg";
import pic2 from "../../assets/images/img1.jpg";
import { FaCalendar, FaPersonBooth } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
const Card = ({ image, title, paragraph, icon1, icon2, date, role, link }) => {
  return (
    <div className="card-news">
      <img src={image} alt="Card Image" className="card-image-news" />
      <div className="card-content">
        <h2 className="card-titlee">{title}</h2>
        <p className="card-gray">
          {icon1} {date} {icon2} {role}
        </p>
        <p className="card-paragraph">{paragraph}</p>
        <p className="card-titlee">{link}</p>
      </div>
    </div>
  );
};

const NewsHome = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      image: pic1,
      title: "Education For Tomorrows Leaders",
      icon1: <FaCalendar />,
      date: " June 22 , 2020",
      icon2: <MdPerson />,
      role: "Admin",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "Learn More",
    },
    {
      id: 2,
      image: pic2,
      title: "Enroll Your Kids This Summer to get 30% off",
      icon1: <FaCalendar />,
      date: " June 22 , 2020",
      icon2: <MdPerson />,
      role: "Admin",
      paragraph:
        "Nullam lobortis magna sit amet urna viverra, nec fermentum odio varius.",
      link: "Learn More",
    },

    // Add more card objects as needed
  ]);

  return (
    <div>
      <div className="course-container">
        <h2 className="course-container-h2">School News</h2>
        <p className="best-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,{" "}
          <br /> dolorum maxime minus libero ab recusandae delectus exercitation
        </p>
        <div className="news-card">
          {cards.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              paragraph={card.paragraph}
              icon1={card.icon1}
              icon2={card.icon2}
              role={card.role}
              date={card.date}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsHome;
