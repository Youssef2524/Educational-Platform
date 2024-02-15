import React from 'react'
import NavBarUp from '../../component/Navbar/NavBarUp';
import './Course.css';
import imgee from "../../assets/images/img222.svg";
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Course = () => {
    
    const backgroundImageUrl = imgee;

  const containerAllStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
 
  const [course,setcourse]= useState([])
  const dataCourse=useLoaderData();
 
  
  useEffect(()=>{
    setcourse(dataCourse);
   
  },[dataCourse])


  return (
    <div>
        <div style={containerAllStyle} >
        <div className="home-content">
          <span>Our Courses</span>
          <h2>Our Courses are Important For Every Student</h2>
          <button className="home-button">EXPLORE MORE</button>
        </div>
        <NavBarUp />
      </div>
      <div className="course-container">
       
        
<div className='course-page'>
        <CourseCard course={course}/>
       
      </div>
      </div>
        </div>
  )
}

export default Course