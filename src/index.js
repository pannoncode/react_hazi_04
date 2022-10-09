import ReactDOM from "react-dom/client";

import "./index.css";
import { CartModalContextProvider } from "./store/cart-modal";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartModalContextProvider>
    <App />
  </CartModalContextProvider>
);
