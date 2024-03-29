import Modal from "../UI/Modal/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes.cartItems}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}

      <div className={classes.total}>
        <span>Total Amount :</span>
        <span>65 $</span>
      </div>

      <div className={classes.actions}>
        <button className={classes.buttonAlt} onClick={props.onCartClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
