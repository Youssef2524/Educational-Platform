import React from "react";
import "./NaveBarDown.css";
import { Link } from "react-router-dom";
import { BiChevronDown,BiHeart } from "react-icons/bi";
import { useState } from "react";
import { BsList } from "react-icons/bs";

function NaveBarDown() {

  const [menueopen, setmenueopen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
    <nav className="navbar">
      <h2>Learner</h2>
      <div className="top-menue" onClick={() => setmenueopen((prev) => !prev)}>
        <BsList />
      </div>
      <ul className="menue" style={{ top: menueopen && "0" }}>
        <li className={`nav-item ${activeItem === "home" ? "active" : ""}`}>
          <Link onClick={() => handleClick("home")} to="/Educational-Platform/">
            Home
          </Link>
        </li>
       {/* <li
          className={`nav-item dropdown ${
            activeItem === "dropdown" ? "active" : ""
          }`}
        >
          <a
            href="#!"
            className="nav-link"
            onClick={() => handleClick("dropdown")}
          >
            Dropdown <BiChevronDown />
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link to="/option1">Option 1</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/option2">Option 2</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/option3">Option 3</Link>
            </li>
          </ul>
        </li>*/}
        <li className={`nav-item ${activeItem === "about" ? "active" : ""}`}>
          <Link to="/Educational-Platform/about" onClick={() => handleClick("about")}>
            About
          </Link>
        </li>
        <li className={`nav-item ${activeItem === "news" ? "active" : ""}`}>
          <Link to="/Educational-Platform/news" onClick={() => handleClick("news")}>
            News
          </Link>
        </li>
        <li className={`nav-item ${activeItem === "course" ? "active" : ""}`}>
          <Link to="/Educational-Platform/course" onClick={() => handleClick("course")}>
            Courses
          </Link>
        </li>
        <li className={`nav-item ${activeItem === "teachers" ? "active" : ""}`}>
          <Link to="/Educational-Platform/teachers" onClick={() => handleClick("teachers")}>
            Our Teachers
          </Link>
        </li>

       
        <li className={`nav-item ${activeItem === "students" ? "active" : ""}`}>
          <Link to="/Educational-Platform/students" onClick={() => handleClick("students")}>
            Students
          </Link>
        </li>
        <li className={`nav-item ${activeItem === "contact" ? "active" : ""}`}>
          <Link to="/Educational-Platform/favourite" onClick={() => handleClick("contact")}>
          Favourite <BiHeart/>
         
          </Link>
        </li>
      </ul>

      <button className="nav-button">ENROLL NOW</button>
    </nav>
  );
}

export default NaveBarDown;
