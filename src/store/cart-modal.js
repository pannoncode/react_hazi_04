import React from "react";
import { useState } from "react";

const CartModalContext = React.createContext({
  clicked: false,
  onCLick: () => {},
  onClose: () => {},
  add: () => {},
  cartItems: [],
});

export const CartModalContextProvider = (props) => {
  //Cart(modal) felugrásához és bezárásához
  const [clicked, setClicked] = useState(false);

  //kosárba rakott elemek kezeléséhez
  const [addItems, setAddItems] = useState([]);

  //clicked = true értéknél a cart(modal) felugrik
  const clickHandler = () => {
    setClicked(true);
  };

  //Cart(modal) close gombra kattintva clicked = false => Cart(modal) bezáródik
  const closeHandler = () => {
    setClicked(false);
  };

  //Kosár tartalma
  const addCartHandler = (cartitems) => {
    setAddItems((prevItems) => {
      return [...prevItems, cartitems];
    });
  };

  return (
    <CartModalContext.Provider
      value={{
        clicked: clicked,
        onClick: clickHandler,
        onClose: closeHandler,
        add: addCartHandler,
        cartItems: addItems,
      }}
    >
      {props.children}
    </CartModalContext.Provider>
  );
};

export default CartModalContext;
