import React from "react";

function Footer() {
 return (
  <footer className="shop-footer">
   <div className="container">
    <div className="footer-top">
     <div className="footer-brand">
      <h2 className="logo">Qartivo</h2>
      <p>
       We have clothes that suits your style and which you’re proud to wear.
       From women to men.
      </p>

      <div className="social-icons">
       <a href="#">
        <i className="fa-brands fa-twitter"></i>
       </a>
       <a href="#" className="active">
        <i className="fa-brands fa-facebook-f"></i>
       </a>
       <a href="#">
        <i className="fa-brands fa-instagram"></i>
       </a>
       <a href="#">
        <i className="fa-brands fa-github"></i>
       </a>
      </div>
     </div>

     <div className="footer-links">
      <div className="footer-column">
       <h4>COMPANY</h4>
       <ul>
        <li>
         <a href="#">About</a>
        </li>
        <li>
         <a href="#">Features</a>
        </li>
        <li>
         <a href="#">Works</a>
        </li>
        <li>
         <a href="#">Career</a>
        </li>
       </ul>
      </div>

      <div className="footer-column">
       <h4>HELP</h4>
       <ul>
        <li>
         <a href="#">Customer Support</a>
        </li>
        <li>
         <a href="#">Delivery Details</a>
        </li>
        <li>
         <a href="#">Terms & Conditions</a>
        </li>
        <li>
         <a href="#">Privacy Policy</a>
        </li>
       </ul>
      </div>

      <div className="footer-column">
       <h4>FAQ</h4>
       <ul>
        <li>
         <a href="#">Account</a>
        </li>
        <li>
         <a href="#">Manage Deliveries</a>
        </li>
        <li>
         <a href="#">Orders</a>
        </li>
        <li>
         <a href="#">Payments</a>
        </li>
       </ul>
      </div>

      <div className="footer-column">
       <h4>RESOURCES</h4>
       <ul>
        <li>
         <a href="#">Free eBooks</a>
        </li>
        <li>
         <a href="#">Development Tutorial</a>
        </li>
        <li>
         <a href="#">How to - Blog</a>
        </li>
        <li>
         <a href="#">Youtube Playlist</a>
        </li>
       </ul>
      </div>
     </div>
    </div>

    <div className="footer-bottom">
     <p>Shop.co © 2000-2023, All Rights Reserved</p>

     <div className="payment-icons">
      <img
       src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
       alt="MasterCard"
      />
      <img
       src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
       alt="PayPal"
      />
      <img
       src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
       alt="Apple Pay"
      />
     </div>
    </div>
   </div>
  </footer>
 );
}

export default Footer;
