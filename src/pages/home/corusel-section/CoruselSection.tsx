import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import 'swiper/css/pagination';
import './CoruselSection.scss';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';
import '../../../types'
import { Link } from 'react-router-dom';

const CoruselSection = () => {
  interface Product {
    id: number;
    title: string;
    images: string[];
    category: string;
}

const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
  fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => setProducts(data.products))
}, []);

  return (
    <div className='container__slider'>
      <Swiper
        slidesPerView={7}  
        centeredSlides={false}
        spaceBetween={30}
        autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: false,}}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {
          products?.map(product =>(
            <SwiperSlide >
              <Link className='slider__item' to={`/single-product/${product.id}`} key={product.id}>
                <img className='slider' src={product.images[0]} alt="" />
                <p>{product.title}</p>
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper> 
    </div>
  );
}

export default CoruselSection