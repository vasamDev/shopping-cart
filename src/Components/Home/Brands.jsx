import React from "react";
import brand1 from "../../assets/brand-1.png";
import brand2 from "../../assets/brand-2.png";
import brand3 from "../../assets/brand-3.png";
import brand4 from "../../assets/brand-4.png";
import brand5 from "../../assets/brand-5.png";

function Brands() {
 const imagesList = [brand1, brand2, brand3, brand4, brand5];

 return (
  <section id="brands" className="brands-sec">
   <div className="container">
    {imagesList.map((each) => (
     <figure key={each}>
      <img src={each} alt="brand image" />
     </figure>
    ))}
   </div>
  </section>
 );
}

export default Brands;
