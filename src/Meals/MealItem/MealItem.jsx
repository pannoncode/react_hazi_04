import { useContext } from "react";
import CartModalContext from "../../store/cart-modal";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;
  const ctx = useContext(CartModalContext);

  const addToCart = (event) => {
    //ne töltődjön újra +add gomb kattintásnál
    event.preventDefault();
    //+add gomra kattintva a props.meal-ben van az objektum ami tartalmazza azt amit hozzá kell adni a kosárhoz
    ctx.add(props.meal);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm addCart={addToCart} />
      </div>
    </li>
  );
};

export default MealItem;
