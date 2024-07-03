import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useDispatch } from "react-redux";
import { watchListProduct } from "../../redux/slice/watchListSlice";
import { cartProduct } from "../../redux/slice/cartSlice";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './SingleProduct.scss';

const thumbsSwiper = null



const SingleProduct = () => {

    interface Product {
        id: number;
        images: string[];
        products: any;
        category: any;
        map: any;
        title: string;
        description: string;
        price: number;
    }

    const [ thumbsSwiper, setThumbsSwiper ] = useState(null);
    const [ products, setProducts ] = useState<Product | null>(null)
    const { single_product_id } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${single_product_id}/`)
            .then(response => response.json())
            .then(data => setProducts(data))  
    }, [])

    console.log(products)
    return (
        <div className="single__product">
            <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode,  Navigation, Thumbs]} className="mySwiper">
              {
                  products?.images.map((image, index) => (
                      <SwiperSlide key={index}>
                          <img className="single__product__image" src={image} />
                      </SwiperSlide>
                  ))
              }
            </Swiper>
            <div className="product__info">         
                <Swiper spaceBetween={10} navigation={true} loop={true} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper2">
                  {
                      products?.images.map((image, index) => (
                          <SwiperSlide key={index}>
                              <img className="single__product__image" src={image} />
                          </SwiperSlide>
                      ))
                  }
                </Swiper>
                <div className="product__text">
                    <h1>{products?.title}</h1>
                    <div className="product__description"><h5>Description:</h5><h4>{products?.description}</h4></div>
                    <div className="product__price">
                        <h3>Price:  </h3><h2>${products?.price}</h2>
                        <div className="product__buttons">
                            <button className="button1">Buy it now</button>
                            <button className="button2" onClick={() => dispatch(cartProduct(products))}>Add to cart</button>
                            <button className="button3" onClick={() => dispatch(watchListProduct(products))} >Add to watchlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// import './styles.css';
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Category } from "../../types";
// import "./SingleProduct.scss";


//  export const SingleProduct = () => {
//     const [thumbsSwiper, setThumbsSwiper] = useState(null);

//       interface Product {
//         id: number;
//         images: string[];
//         products: any;
//         category: any;
//     }

//     const [ products, setProducts ] = useState<Product | null>(null)
//     const { single_product_id } = useParams();

//     useEffect(() => {
//         fetch(`https://dummyjson.com/products/${single_product_id}/`)
//             .then(response => response.json())
//             .then(data => setProducts(data))  
//     }, [])

//   return (
//     <div>
    //   <Swiper
    //     style={{
    //       '--swiper-navigation-color': '#fff',
    //       '--swiper-pagination-color': '#fff',
    //     }}
    //     spaceBetween={10}
    //     navigation={true}
    //     thumbs={{ swiper: thumbsSwiper }}
    //     modules={[FreeMode, Navigation, Thumbs]}
    //     className="mySwiper2"
    //   >
    //     {

    //     }
    //     <SwiperSlide>
    //       <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
    //     </SwiperSlide>
    //   <Swiper
    //     onSwiper={setThumbsSwiper}
    //     spaceBetween={10}
    //     slidesPerView={4}
    //     freeMode={true}
    //     watchSlidesProgress={true}
    //     modules={[FreeMode, Navigation, Thumbs]}
    //     className="mySwiper"
    //   >

    //     <SwiperSlide>
    //       <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
    //     </SwiperSlide>
    //   </Swiper>
//     </div>
//   )
// }

// {/* export default SingleProduct */}