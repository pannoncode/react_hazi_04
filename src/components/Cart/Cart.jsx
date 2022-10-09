import classes from "./Cart.module.css";
import ReactDOM from "react-dom";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import CartModalContext from "../../store/cart-modal";

const Cart = (props) => {
  //Close gombra kattintás => modal bezárás
  const ctx = useContext(CartModalContext);
  const closeCart = ctx.onClose;
  //A kosárba rakott elemek a contextből
  const cartItemsCtx = ctx.cartItems;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartItemsCtx.map((item) => (
        <div key={item.id}>
          <li>{item.name}</li>
          <span> ${item.price}</span>
        </div>
      ))}
    </ul>
  );

  //Portal a Cart-hoz (index.html szerkesztve)
  return ReactDOM.createPortal(
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$35.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>,
    document.getElementById("cart")
  );
};

export default Cart;
