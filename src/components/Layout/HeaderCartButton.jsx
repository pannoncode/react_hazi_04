import { useContext } from "react";
import CartModalContext from "../../store/cart-modal";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const ctx = useContext(CartModalContext);

  return (
    //Kattintásra a clicked = true lesz, (mert behívja a clickHandler-t a context-ből) ami kell a Cart(modal) megnyitásához
    <button className={classes.button} onClick={ctx.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ctx.cartItems.length}</span>
    </button>
  );
};

export default HeaderCartButton;
