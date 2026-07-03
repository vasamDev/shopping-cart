import React, { createContext, useState } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {
 const [cart, setCart] = useState([]);

 const updateCart = (item) => {
  setCart((prev) => {
   return [...prev, item];
  });
 };

 const removeCartItems = (val) => {
  const results = cart.filter((el) => {
   return val.title !== el.title;
  });

  setCart(results);
 };

 return (
  <CartContext.Provider
   value={{
    cart,
    updateCart,
    removeCartItems,
   }}
  >
   {children}
  </CartContext.Provider>
 );
}

export default CartProvider;
