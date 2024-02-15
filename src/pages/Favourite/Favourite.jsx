import React, { useEffect, useState } from 'react'
import './Favourite.css';
import imgee from "../../assets/images/img111.svg";
import NavBarUp from '../../component/Navbar/NavBarUp';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import {HiOutlineArrowLeft} from 'react-icons/hi'
import { toast, ToastContainer } from 'react-toastify';
import { removeCourse, resertFavourite } from '../../Redux/actionSlice';
import { Link } from 'react-router-dom';
const Favourite = () => {
  const courseData= useSelector((state)=>state.educat.courseData)
 
  const dispatch=useDispatch()
 const [totalPrice, setTotalPrice] = useState(0);

useEffect(() => {
  let price = 0;
  courseData.forEach((item) => {

    price += item.price * item.quantity;
  });

 

  setTotalPrice(price.toFixed(2));

}, [courseData]);

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
          <span>WHATCH THE VIDEO</span>
          <h2>Education is the Mother of Leadership </h2>
          <button className="home-button">EXPLORE MORE</button>
        </div>
        <NavBarUp />
      </div>
        <div className='favourite'>
        <div className="container">
      
      <div className='card-items'>
        {courseData.map((item) => (
          <div
            className="cart-item"
            key={item._id}
          >
            <div className="close-icon">
              <MdOutlineClose
                size={40}
                onClick={() =>
                  dispatch(removeCourse(item.id)) &
                  toast.error(`${item.title}is removed `)
                }
                className="close-icon"
              />
              </div>
              <img
               
                src={item.image}
                alt="ItemImage"
              />
           
            <h2>{item.title}</h2>
           
            <p >${item.price}</p>
            
          
            
          </div>
        ))}
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <button
        onClick={() =>
          dispatch(resertFavourite()) & toast.error("Your Favourite Is Empty")
        }
        className="reset-button"
      >
        Reset Favourite
      </button>
      <Link to="/Educational-Platform/course">
        <button className="go-shopping-button">
          <span>
            <HiOutlineArrowLeft />
          </span>
          Go Courses
        </button>
      </Link>
    </div>

   
<div class="container-price">
  <div class="main-content">
    <div class="border-padding">
      <h2 class="cart-heading">Price Total</h2>
      <p class="subtotal">
        Subtotal
        <span class="price">${totalPrice}</span>
      </p>
      <p class="shipping">
        Shipping
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt consequuntur
        </span>
      </p>
    </div>
    <p class="total-amount">
      Total: <span class="total-price">${totalPrice}</span>
    </p>
    <button  class="checkout-button">
      Proceed to checkout
    </button>
  </div>
</div>
</div>
    </div>
  )
}

export default Favourite