import React from "react";
import "./NavBarUp.css";
import { AiFillPhone, AiOutlineQuestionCircle } from "react-icons/ai";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import NaveBarDown from "./NaveBarDown";
import NavData from "../../const/NavBarData";
const NavBarUp = () => {
  return (
    <div className="containerAll">
      <div className="containerUp">
        <div className="nav-left">
          <div className="nav-left">
            {" "}
            <AiOutlineQuestionCircle size={14} />
            <p>Have a questions?</p>
          </div>
          <div className="nav-left">
            <AiFillPhone size={14} />
            <p>14 22 254 101</p>
          </div>
          <div className="nav-left">
            <MdEmail size={14} />
            <p>info@emailEdu.com</p>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-left">
            {" "}
            <MdLock size={14} />
            <p>Log in</p>
          </div>
          <div className="nav-left">
            {" "}
            <MdPerson size={14} />
            <p>Rigester</p>
          </div>
        </div>
      </div>
      <NaveBarDown />
    </div>
  );
};

export default NavBarUp;
