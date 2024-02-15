import React, { useEffect, useState } from "react";
import "./Students.css";
import NavBarUp from "../../component/Navbar/NavBarUp";
import imgee from "../../assets/images/img333.svg";
import { useLoaderData } from "react-router-dom";

const Students = () => {
  const backgroundImageUrl = imgee;

  const containerAllStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const [Student, setDataStudent] = useState([]);
  const dataStudent = useLoaderData();

  useEffect(() => {
    setDataStudent(dataStudent);
    
  }, [dataStudent]);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
  };

  return (
    <div>
      <div style={containerAllStyle}>
        <div className="home-content">
          <span>OUR STUDENTS</span>
          <h2>Education is the Mother of Leadership</h2>
          <button className="home-button">EXPLORE MORE</button>
        </div>
        <NavBarUp />
      </div>
      <div className="table-container">
        <h1>Student Information</h1>
        <div className="cards-container">
          {dataStudent.map((student) => (
            <div
              key={student.id}
              className="card"
              onClick={() => handleStudentClick(student)}
            >
              <img src={student.image} alt="Student" className="card-image" />
              <h3 className="card-name">
                {student.FirstName} {student.LastName}
              </h3>
            </div>
          ))}
        </div>
      </div>
      {selectedStudent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="modal-details">
              <h2>Student Details</h2>

              <div>
                <strong></strong>{" "}
                <img
                  src={selectedStudent.image}
                  alt="Student"
                  width="200"
                  height="200"
                />
              </div>
              
              <div>
                <strong>First Name:</strong> {selectedStudent.FirstName}
              </div>
              <div>
                <strong>Last Name:</strong> {selectedStudent.LastName}
              </div>
              <div>
                <strong>Age:</strong> {selectedStudent.age}
              </div>
              <div>
                <strong>Phone:</strong> {selectedStudent.phone}
              </div>
              <div>
                <strong>Email:</strong> {selectedStudent.email}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
