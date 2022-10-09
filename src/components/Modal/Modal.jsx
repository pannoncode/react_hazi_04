import { useContext } from "react";
import CartModalContext from "../../store/cart-modal";
import classes from "./Modal.module.css";

const Modal = (props) => {
  //Kattintásra a Modal megjelenik, különben "display: none" (css módosítva)
  const clickedCtx = useContext(CartModalContext);
  return (
    <div className={clickedCtx.clicked ? classes.modal : classes.noneModal}>
      {props.children}
    </div>
  );
};

export default Modal;
