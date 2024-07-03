import React from 'react'
import "./Section3.scss"

import logoBlue from "../../../assets/images/logo.jpg"
import image1 from "../../../assets/images/section3_left.jpg"
import image2 from "../../../assets/images/secton3_right.png"

import { FaArrowRight } from "react-icons/fa6";


const Section3 = () => {
  return (
    <>
      <div className='section3'>
        <div className='section3_text'>
          <h4>Featured</h4>
          <img src={logoBlue} />
          <h1>Deals made easy all year long.</h1>
          <p>Free shipping. Best prices.</p>
          <button>Get your thing <span><FaArrowRight /></span> </button>
        </div>
        <div className='section3_image'>
          <img src={image1} />
          <div className='section3_image_image2'>
            <img src={image2}  />
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3