import React, { useState, useEffect } from "react";

function Shoppopup(props) {
 const { category, setShopPopup, handlePopup } = props;

 const [products, setProducts] = useState([]);

 useEffect(() => {
  fetch(category.url)
   .then((req) => req.json())
   .then((res) => setProducts(res && res.products));
 }, [category.url]);

 return (
  <section className="shoppopup">
   <p className="cross" onClick={() => setShopPopup(false)}>
    X
   </p>

   {products.length > 0 ? (
    <div>
     <div className="list">
      {products &&
       products.map((each) => (
        <article key={each.title}>
         <figure onClick={() => handlePopup(each)}>
          <img src={each.images[0]} alt={`image-${each.title}`} />
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
    </div>
   ) : (
    <h3>Loading...</h3>
   )}
  </section>
 );
}

export default Shoppopup;
