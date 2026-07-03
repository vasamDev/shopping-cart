import React, { useEffect, useState } from "react";
import starsImg from "../../assets/stars.png";
import { products } from "../../data/products";

function HappyCustomer() {
 let [reviews, setReviews] = useState();
 useEffect(() => {
  setReviews(products);
 }, []);

 return (
  <section className="happy-customers-sec">
   <div className="container">
    <h2 className="title">OUR HAPPY CUSTOMERS</h2>
    <div className="comments-list">
     {reviews &&
      reviews.map((review) =>
       review.reviews.map((each) => (
        <article key={each.user}>
         <img src={starsImg} alt="stars image" />
         <h6>{each.user}</h6>
         <p>{each.comment}</p>
        </article>
       )),
      )}
    </div>
   </div>
  </section>
 );
}

export default HappyCustomer;
