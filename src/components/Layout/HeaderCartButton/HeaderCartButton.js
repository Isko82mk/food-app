import CartIcon from "../../../assets/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onOpenCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default HeaderCartButton;
