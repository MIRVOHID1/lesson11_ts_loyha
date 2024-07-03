import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import slide1_1 from "../../../assets/images/engine_home.webp"
import slide1_2 from "../../../assets/images/Frames_home.webp"
import slide1_3 from "../../../assets/images/Helmets_home.webp"
import slide2_1 from "../../../assets/images/slide2_accessories.webp"
import slide2_2 from "../../../assets/images/slide2_fragrances.webp"
import slide2_3 from "../../../assets/images/slide2_hairCare.webp"
import slide3 from "../../../assets/images/slide_3.jpg"
import { Link } from 'react-router-dom';
import './Slider.scss';

const Slider = () => {
  return (
    <div className='slider_container'>
      <div className='slider'>
        <ul className='categories'>
          <Link to={"/category/skincare"}><li>Skincare</li></Link>
          <Link to={"/category/sunglasses"}><li>Sunglasses</li></Link>
          <Link to={"/category/automotive"}>Automotive</Link>
          <Link to={"/category/furniture"}><li>Furniture</li></Link>
          <Link to={"/category/tops"}><li>Tops</li></Link>
          <Link to={"/category/fragrances"}><li>Fragrances</li></Link>
          <Link to={"/category/lighting"}>Lighting</Link>
          <Link to={"/category/laptops"}><li>Laptops</li></Link>
          <Link to={"/category/home-decoration"}><li>Home decoration</li></Link>
          <Link to={"/category/mens-shirts"}><li>Mens shirts</li></Link>
          <Link to={"/category/motorcycle"}><li>Motorcycle</li></Link>
          <Link to={"/category/groceries"}>Groceries</Link>
          <Link to={"/category/smartphones"}><li>Smartphones</li></Link>
        </ul>
        <Swiper slidesPerView={1}
          centeredSlides={false}
          spaceBetween={30}
          autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: false, }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper">
          <SwiperSlide className='slide_1'>
            <div className='slide_1_item1'>
              <h1>Convenient gear, unconventional travel</h1>
              <p>Save up to 20%* on the motorcycle parts you need on eBay.</p>
              <Link to={"/category/motorcycle"}><button>Code:MOTOPROM20</button></Link>
            </div>
            <div className='slide_1_item2'>
              <img src={slide1_2} style={{ width: "300px" }} />
              <img src={slide1_1} style={{ width: "300px" }} />
              <img src={slide1_3} style={{ width: "300px" }} />
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide_2'>
            <div className='slide_2_item1'>
              <h1>Get in harmony</h1>
              <p>Health, hair care and luxury items can help you feel at one.</p>
              <Link to={"/category/skincare"}><button>Feel at one</button></Link>
            </div>
            <div className='slide_2_item2'>
              <img src={slide2_1} style={{ width: "350px" }} />
              <img src={slide2_2} style={{ width: "350px" }} />
              <img src={slide2_3} style={{ width: "350px" }} />
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide_3'>
            <div className='slide_3_item1'>
              <h1>May  the collectible be with you</h1>
              <p>Discover a variety of action figures, cards, toys and more.</p>
              <Link to={"/"}><button>Find yours</button></Link>
            </div>
            <div className='slide_3_item2'>
              <img src={slide3}  />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div >
  )
}

export default Slider