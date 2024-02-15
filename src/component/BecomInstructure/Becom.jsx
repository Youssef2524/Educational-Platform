import React from "react";
import "./Becom.css";
import image from "../../assets/images/img4.jpg";
import { FaCheck } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
const Becom = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      controls.start({ x: 0, opacity: 1 });
    }, 2000); // Delay in milliseconds before animation starts

    return () => clearTimeout(animationTimeout);
  }, [controls]);

  const transition = {
    duration: 1.5,
    ease: 'easeInOut',
  };
  return (
    <div className="become">
      <motion.div
        className="become-left"
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        transition={transition}
      >
        <h2>Become an Instructor</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          similique iusto molestias, nostrum quas quod Reiciendis similique
          iusto molestias, Reiciendis similique iusto molestias,
        </p>
        <ul className="becom-ul">
          <li className="becom-li">
            <FaCheck size={15} /> <span>Behind the world Mountains</span>
          </li>
          <li className="becom-li">
            <FaCheck size={15} /> <span>Far far away Mountains</span>
          </li>
          <li className="becom-li">
            <FaCheck size={15} /> <span>Large Language Ocean</span>
          </li>
          <button className="becom-button">GET STARTED</button>
        </ul>
      </motion.div>
      <motion.div
        className="become-right"
        initial={{ opacity: 0, x: 50 }}
        animate={controls}
        transition={transition}
      >
        <div></div>
        <img src={image} alt="Image" />
      </motion.div>
    </div>
  );
};

export default Becom;
