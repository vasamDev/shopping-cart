import React, { useState } from "react";
import Hero from "./Hero";
import Brands from "./Brands";
import Arrivals from "./Arrivals";
import CategoryStyles from "./CategoryStyles";
import { products } from "../../data/products";
import HappyCustomer from "./HappyCustomer";
import Footer from "./Footer";
import Popup from "../Popup";
import Cart from "../Cart";
import Shoppopup from "../Shoppopup";

function Home(props) {
 const { cartOpen, setCartOpen, shopPopup, category, setShopPopup } = props;

 const [popup, setPopup] = useState(false);
 const [product, setProduct] = useState({});

 const handlePopupOpen = (prod) => {
  setPopup(true);
  setProduct(prod);
  console.log("popup open");
 };

 return (
  <div>
   <Hero />

   <Brands />

   <Arrivals
    handlePopup={handlePopupOpen}
    title={"New Arrivals"}
    products={products.slice(0, 8)}
   />

   <CategoryStyles />

   <Arrivals
    handlePopup={handlePopupOpen}
    title={"Top Selling"}
    products={products.slice(8, 20)}
   />

   <HappyCustomer />

   <Footer />

   {popup ? <Popup product={product} setPopup={setPopup} /> : null}

   {cartOpen ? <Cart setCartOpen={setCartOpen} cartOpen={cartOpen} /> : null}

   {shopPopup ? (
    <Shoppopup
     handlePopup={handlePopupOpen}
     setShopPopup={setShopPopup}
     category={category}
    />
   ) : null}
  </div>
 );
}

export default Home;
