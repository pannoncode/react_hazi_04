import { Fragment } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import MealsSummary from "./Meals/MealsSummary";
import AvailableMeals from "./Meals/AvailibleMeals";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </Fragment>
  );
}

export default App;
