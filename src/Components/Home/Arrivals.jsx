import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../Context/CartProvider";

function NewArrivals(props) {
 const { products, title, handlePopup, setPopup } = props;

 const { cart, updateCart } = useContext(CartContext);

 const [view, setView] = useState(false);
 const [list, setList] = useState(products.slice(0, 4));

 useEffect(() => {
  if (view) {
   setList(products);
  } else {
   setList(products.slice(0, 4));
  }
 }, [view]);

 const handleList = () => {
  setView((prev) => (prev ? false : true));
 };

 return (
  <section
   className="arrivals-sec"
   id={
    title.toLowerCase() === "new arrivals"
     ? "new-arrivals"
     : title.toLowerCase() === "top selling"
       ? "top-selling"
       : ""
   }
  >
   <div className="container">
    <h2 className="title">{title}</h2>

    <div className="list">
     {list &&
      list.map((each) => (
       <article key={each.title}>
        <figure onClick={() => handlePopup(each)}>
         <img src={each.image} alt={`image-${each.title}`} />
        </figure>

        <div className="price-details">
         <h6 onClick={() => handlePopup(each)}>{each.title}</h6>

         <p onClick={() => handlePopup(each)}>
          ₹ {each.price - Math.round(each.price * 0.15)}{" "}
          <span>₹ {each.price}</span>
         </p>

         <button className="gbl-btn" onClick={() => handlePopup(each)}>
          View
         </button>
        </div>
       </article>
      ))}
    </div>

    <button className="gbl-btn" onClick={handleList}>
     {view ? "View Less" : "View All"}
    </button>
   </div>
  </section>
 );
}

export default NewArrivals;
