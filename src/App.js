import { Fragment, useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    return setCartIsShown(true);
  };

  const closeCartHandler = () => {
    return setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onCartClose={closeCartHandler} />}
      <Header onOpen={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
