import React, { useContext } from "react";
import { CartContext } from "../Context/CartProvider";

function Cart(props) {
 const { setCartOpen, cartOpen } = props;

 const { cart, removeCartItems } = useContext(CartContext);

 const sumCartValue =
  cart &&
  cart.reduce((acc, curr) => {
   acc = acc + curr.price;
   return acc;
  }, 0);

 return (
  <aside className={`cart-aside ${cartOpen ? "active" : ""}`}>
   <p className="cross" onClick={() => setCartOpen(false)}>
    X
   </p>

   <div>
    <ul>
     {cart &&
      cart.map((each) => (
       <li key={each.id || each.title}>
        <figure>
         <img src={each.image || each.images[0]} alt={each.title} />
        </figure>

        <div>
         <h6>{each.title}</h6>

         <p onClick={() => handlePopup(each)}>
          ₹ {each.price - Math.round(each.price * 0.15)}{" "}
          <span>₹ {each.price}</span>
         </p>

         <div className="buttns">
          <span
           style={{ cursor: "pointer" }}
           onClick={() => removeCartItems(each)}
          >
           Remove
          </span>
         </div>
        </div>
       </li>
      ))}
    </ul>
   </div>

   {cart && cart.length > 0 ? (
    <div className="total-price-details">
     <div className="total-sec">
      <p>Total :</p>
      <p>₹ {Math.round(sumCartValue)}</p>
     </div>

     <button>Proceed</button>
    </div>
   ) : (
    <h3 style={{ textAlign: "center" }}>Add something in cart</h3>
   )}
  </aside>
 );
}

export default Cart;
