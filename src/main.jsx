import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./stylesheets/style.css";

import CartProvider from "./Context/CartProvider";

let root = createRoot(document.getElementById("root"));

root.render(
 <StrictMode>
  <CartProvider>
   <App />
  </CartProvider>
 </StrictMode>,
);
