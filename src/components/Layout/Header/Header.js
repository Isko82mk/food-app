import foodImg from "../../../assets/meals.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import { Fragment } from "react";

import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food App</h1>
        <HeaderCartButton onOpenCart={props.onOpen} />
      </header>

      <div className={classes.mainImg}>
        <img alt="foodImg" src={foodImg} />
      </div>
    </Fragment>
  );
};

export default Header;
