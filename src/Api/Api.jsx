import axios from 'axios';

async function courseData() {
  try {
    const response = await axios.get("https://educate-server.onrender.com/course")
    const prouduct = response.data;
    return prouduct;
  
  } catch (error) {
    // Handle error
   
    throw error;
  }
}

// Usage example
export async function fetchData() {
  try {
    const data = await courseData();

    return data;
  } catch (error) {
    // Handle error
 
  }
}

fetchData();



async function teacherData() {
  try {
    const response = await axios.get('https://educate-server.onrender.com/teachers');
    const teacher = response.data;
    return teacher;
  
  } catch (error) {
    // Handle error
  
    throw error;
  }
}

// Usage example
export async function fetchDataTeacher() {
  try {
    const dataTeacher = await teacherData();
   
    return dataTeacher;
  } catch (error) {
    // Handle error
 
  }
}

fetchDataTeacher();


async function studentData() {
  try {
    const response = await axios.get('https://educate-server.onrender.com/students');
    const student = response.data;
    return student;
  
  } catch (error) {
    // Handle error
  
    throw error;
  }
}


export async function fetchDataStudent() {
  try {
    const dataStudent = await studentData();
  
    return dataStudent;
  } catch (error) {
    // Handle error
  
  }
}

fetchDataStudent();