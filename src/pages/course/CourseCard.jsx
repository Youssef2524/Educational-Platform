import { AnimatePresence,motion } from 'framer-motion'
import React from 'react';
import { MdMenuBook, MdStar } from 'react-icons/md';
import './Course.css'


import { toast, ToastContainer } from 'react-toastify';
import { addToFavorite } from '../../Redux/actionSlice';
import { useDispatch } from 'react-redux';
const CourseCard = ({course}) => {
  const dispatch=useDispatch();
   
  return (
    <div>
        
        <div className="course">
        <AnimatePresence>
          {course.map((item) => (
            <motion.div
              className="course-card"
              key={item.id}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 9 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <div className="course-card-content">
                <div className="course-image-container">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="coursr-rate">
                  <p className="coursr-countP">
                    {" "}
                    { <MdMenuBook />} {item.count}
                  </p>
                  <p className="coursr-rateP">
                    {<MdStar />} {item.rate}
                  </p>
                </div>
                <h3 className="course-title">{item.title}</h3>

                <span className="course-p">
                  {item.description} <br /> {item.description}
                </span>

                <div>
                  <hr />
                </div>
                <div className="coursr-rate">
                  <p className="coursr-pric"> ${item.price}</p>
                  <p className="coursr-link">{item.link}</p>
                </div>
                  <button onClick={()=>dispatch(addToFavorite({
                    id:item.id,
                    title:item.title,
                    image:item.image,
                    price:item.price,
                    description:item.description,
                    quantity:1,
                  }))& toast.success( `${item.title} is added`)} className='course-add'>Add To Favourite</button>
              </div>
            </motion.div>
          ))}
           </AnimatePresence>
        </div>
        <ToastContainer
      position='top-left'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'/>
    
    </div>
  )
}

export default CourseCard;