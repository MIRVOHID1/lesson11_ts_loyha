import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { PiBellRingingBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
      interface Product {
        id: string;
        title: string;
        description: string;
        price: number;
        images: string[];
      }

    const [inputValue, setInputValue] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (inputValue) {
            fetch(`https://dummyjson.com/products/search?q=${inputValue}/`)
                .then(response => response.json())
                .then(data => setProducts(data.products))
                .catch(error => console.error('Fetch error:', error));
        }
    }, [inputValue]);

    const handle = () => {
      navigate("/search")
    }
    console.log(inputValue);
    console.log(products);

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__top">
                    <ul className="left">
                        <li>
                            Hi!
                            <Link to="/sign-up"><li>Sign Up</li></Link>
                            or
                            <Link to="/login"><li>Login</li></Link>
                        </li>
                        <li>Daily Deals</li>
                        <li>Brand Outlet</li>
                        <li>Help & Contact</li>
                    </ul>
                    <ul className="right">
                        <li>Sell</li>
                        <Link to="/watchList"><li>Wishlist</li></Link>
                        <li>My eBay</li>
                        <li><PiBellRingingBold /></li>
                        <Link to="/cart"><li><HiOutlineShoppingCart /></li></Link>
                    </ul>
                </div>
                <div className="nav__bottom">
                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                    <form onClick={handle} className="search">
                        <input
                            type="text"
                            className="search__input"
                            placeholder="Search for anything"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className="search__button">Search</button>
                    </form>
                    <p>Advanced</p>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
