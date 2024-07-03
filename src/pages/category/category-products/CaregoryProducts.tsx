import { Category } from "../../../types";
import "./CategoryProducts.scss";
import { Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";



const CaregoryProducts = ({ products }: Pick<Category, "products">) => {
    return (
        <div className="container__products">
            <div className="products">  
                {
                    products.map((item: Category["products"]) => 
                        <div className="product">
                            <Link to={`/single-product/${item.id}`} key={item.id}>
                                <img className="image" src={item.images[0]} alt="" />
                            </Link>
                            <p><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStarHalf /> {item.rating}</p>
                            <p className="title">{item.title}</p>
                            <p className="price">${item.price}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default CaregoryProducts;