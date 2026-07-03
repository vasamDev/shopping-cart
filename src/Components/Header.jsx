import React, { useContext } from "react";
import headerImg from "../assets/header-logo.png";
import cartImg from "../assets/cart-img.png";
import searchImg from "../assets/search.png";
import { CartContext } from "../Context/CartProvider";
import { categories } from "../data/categories";

function Header(props) {
 const { setCartOpen, setShopPopup, setCategory, handleFunc } = props;

 const { cart } = useContext(CartContext);

 return (
  <header className="header">
   <nav className="container">
    <figure>
     <a href="">
      <img src={headerImg} alt="header logo image" />
     </a>
    </figure>

    <ul>
     <li className="shop">
      Shop{" "}
      <div className="shop-popup">
       {categories.map((each) => (
        <p key={each.name} onClick={() => handleFunc(each)}>
         {each.name}
        </p>
       ))}
      </div>
     </li>

     <li>
      <a href="#top-selling">On Sale</a>
     </li>

     <li>
      <a href="#new-arrivals">New Arrivals</a>
     </li>

     <li>
      <a href="#brands">Brands</a>
     </li>
    </ul>

    <form action="">
     <div className="first-layer">
      <label htmlFor="products">
       <img src={searchImg} alt="" />
      </label>

      <input type="text" id="products" placeholder="Search For Products" />
     </div>
    </form>

    <figure className="cart" onClick={() => setCartOpen(true)}>
     <img src={cartImg} alt="cart image" />

     <span>{cart && cart.length}</span>
    </figure>
   </nav>
  </header>
 );
}

export default Header;
