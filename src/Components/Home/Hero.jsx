import React from "react";
import heroImg from "../../assets/hero-img.png";
import vectorImg from "../../assets/vector.png";

function Hero() {
 return (
  <section className="hero-sec">
   <div className="container">
    <article>
     <h2 className="heading">FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
     <p className="desc">
      Browse through our diverse range of meticulously crafted garments,
      designed to bring out your individuality and cater to your sense of style.
     </p>
     <button className="gbl-btn">Shop Now</button>
    </article>
    <figure>
     <img src={heroImg} alt="hero image banner" />
     <img src={vectorImg} className="vector" alt="vector image banner" />
     <img
      src={vectorImg}
      className="vector vector2"
      alt="vector image banner"
     />
    </figure>
   </div>
  </section>
 );
}

export default Hero;
