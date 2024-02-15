import React, { useState, useEffect } from "react";
import "./Teachers.css";
import imgee from "../../assets/images/img111.svg";
import NavBarUp from "../../component/Navbar/NavBarUp";

import { useLoaderData } from "react-router-dom";

const Teachers = () => {
  const backgroundImageUrl = imgee;

  const containerAllStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const [Teacher, setDataTeacher] = useState([]);
  const dataTeacher = useLoaderData();

  useEffect(() => {
    setDataTeacher(dataTeacher);
   
  }, [dataTeacher]);

  return (
    <div>
      <div style={containerAllStyle}>
        <div className="home-content">
          <span>OUR TEACHERS</span>
          <h2>Education is the Mother of Leadership </h2>
          <button className="home-button">EXPLORE MORE</button>
        </div>
        <NavBarUp />
      </div>

      <div className="teachers-container">
        {dataTeacher.map((teacher) => (
          <div key={teacher.id} className="teacher-card">
            <div className="image-container">
              <img src={teacher.image} alt="Teacher" />
            </div>
            <div className="details-container">
              <h2>{teacher.Name}</h2>
              <p>Specialization: <span className='details-container-span'>{teacher.specialization}</span></p>
             
              <p>phone: <span className='details-container-span'> {teacher.phone}</span></p>
              <p>Email: <span className='details-container-span'> {teacher.email}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
