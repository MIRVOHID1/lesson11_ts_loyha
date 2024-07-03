import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Cart.scss'

const Cart = () => {
    interface Type {
        cardData: {
            cart: {
                map: (arg0: (product: any, index: any) => JSX.Element) => JSX.Element;
                images: string
                thumbnail: string
            }
        };
    }
    const cart = useSelector((state: Type) => state.cardData.cart);
    console.log(cart);
    return (
        <div className="cart__container">
            <div className="cart__wrapper">
                {
                    cart?.map((product, index) => (
                        <Link to={`/single-product/${product.id}`} key={index} className="cart__item">
                            <img className="cart__img" src={product.images[0]} alt={product.thumbnail} />
                            <p className="cart__text">${product.price}</p>
                            <p className="cart__text">{product.title}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Cart;