import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="A tabele full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
