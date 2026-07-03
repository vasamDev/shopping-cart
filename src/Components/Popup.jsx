import React, { useContext } from "react";
import { CartContext } from "../Context/CartProvider";

function Popup(props) {
 const { setPopup, product } = props;

 const { updateCart, cart } = useContext(CartContext);

 const isAdded = cart.find((item) => item.id === product.id);

 return (
  <section className="popup-sec">
   <div className="content">
    <p className="cross" onClick={() => setPopup(false)}>
     X
    </p>

    <div className="content-child">
     <img
      src={product.image || product.images[0]}
      alt={product.title + "image"}
     />

     <div>
      <h2>{product.title}</h2>

      <p className="price">
       ₹ {product.price - Math.round(product.price * 0.15)}
       <span className="small-size">
        -{product.discount || product.discountPercentage}%
       </span>
      </p>

      <p className="brand">
       Brand : <span>{product.brand}</span>
      </p>

      <p className="brand">
       Status : <span>{product.status}</span>
      </p>

      <p className="brand">
       Category : <span>{product.category}</span>
      </p>

      {isAdded ? (
       <>
        <button className="gbl-btn active">Added</button>

        <span className="info">If you wanted to remove go to Cart</span>
       </>
      ) : (
       <button className="gbl-btn" onClick={() => updateCart(product)}>
        Add to cart
       </button>
      )}
     </div>
    </div>
   </div>
  </section>
 );
}

export default Popup;
