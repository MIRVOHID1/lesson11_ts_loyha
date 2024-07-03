import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import 'swiper/css/pagination';
import './CoruselSection2.scss';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';
import '../../../types'
import { Link } from 'react-router-dom';

const CoruselSection2 = () => {
  interface Product {
    id: number;
    title: string;
    images: string[];
    product: any;
    price: number;
    category: string;
    discountPercentage: number;
}

const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
  fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => setProducts(data.products))
}, []);

  return (
    <div className='slider__container'>
      <Swiper
        slidesPerView={7}  
        centeredSlides={false}
        spaceBetween={30}
        autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: false,}}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="my__swiper"
      >
        {
          products?.map(product =>(
            <SwiperSlide key={product.id}>
              <Link  className='slider__item' to={`/single-product/${product.id}`}>
                <img className='sliderr' src={product.images[0]} alt="" />
                <p>${product.price}</p>
                <p>%{product.discountPercentage}</p>
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper> 
    </div>
  );
}

export default CoruselSection2