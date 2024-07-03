import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Watchlist from './pages/watchlist/Watchlist';
import Category from './pages/category/Category';
import SingleProduct from './pages/single-product/SingleProduct';
import Cart from './pages/cart/Cart';
import Search from './components/search/Search';
import { useLocation } from 'react-router-dom';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';

function App() {
  const { pathname } = useLocation()
  return (
    <>
      {!pathname.includes("search") && !pathname.includes("login") && !pathname.includes("sign-up") && <Nav/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watchList' element={<Watchlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category/:product_id' element={<Category/>}/>
        <Route path='/single-product/:single_product_id' element={<SingleProduct/>}/>     
        <Route path='/search' element={<Search/>}/>     
        <Route path='/login' element={<Login/>}/>     
        <Route path='/sign-up' element={<SignUp/>}/>     
      </Routes>
      {!pathname.includes("login") && !pathname.includes("sign-up") && <Footer/>}
    </>
  );
}

export default App;
