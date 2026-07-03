import React, { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Home/Hero";
import Home from "./Components/Home";

function App() {
 let [cartOpen, setCartOpen] = useState(false);
 let [shopPopup, setShopPopup] = useState(false);
 let [category, setCategory] = useState("");

 let handleFunc = (value) => {
  setShopPopup(true);
  setCategory(value);
 };

 return (
  <div>
   <Header
    cartOpen={cartOpen}
    setCartOpen={setCartOpen}
    setShopPopup={setShopPopup}
    setCategory={setCategory}
    handleFunc={handleFunc}
   />

   <Home
    cartOpen={cartOpen}
    category={category}
    setCartOpen={setCartOpen}
    shopPopup={shopPopup}
    setShopPopup={setShopPopup}
   />
  </div>
 );
}

export default App;
