import { Fragment } from "react";
import MealsSummery from "./MealsSummery/MealsSummery";
import AveableMeals from "./AveableMeals/AveableMeals";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummery />
      <main>
        <AveableMeals />
      </main>
    </Fragment>
  );
};

export default Meals;
