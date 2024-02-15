import { AnimatePresence,motion } from 'framer-motion';
import React from 'react';
import './Course.css'
import { MdArrowRight, MdMenuBook, MdStar } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../Redux/actionSlice';
import { toast, ToastContainer } from 'react-toastify';

const CourseHome = ({coursedata}) => {
  const dispatch=useDispatch();
  console.log(coursedata)
 
  return (

    <div>
        
      <div className="course-container">
        <h2 className="course-container-h2">The Right Course For You</h2>
        <p className="best-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,{" "}
          <br /> dolorum maxime minus libero ab recusandae delectus exercitation
        </p>

        <div className="course">
        <AnimatePresence>
          {coursedata.map((item) => (
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
                  <p className="coursr-pric"> {item.price}</p>
                  <p className="coursr-link">{item.link}</p>
                </div>
                  <button onClick={()=>dispatch(addToFavorite({
                    id:item.id,
                    title:item.title,
                    image:item.image,
                    price:item.price,
                    description:item.description,
                    quantity:1,
                  }))& toast.success( `${item.title} is added`)} className='course-add'>add to favourite</button>
              </div>
            </motion.div>
          ))}
           </AnimatePresence>
        </div>
        <Link to="/Educational-Platform/course">
        <p className="coursr-link-see">See More <span ><MdArrowRight/></span></p>
        </Link>
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

export default CourseHome