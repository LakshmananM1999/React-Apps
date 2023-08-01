import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";





function App() {
  const [showCart, setShowCart] = useState(false);
  function onClickClose() {
    setShowCart((prev) => !prev);
  }
document.createElement("p").appendChild(document.createTextNode("Hello"));
  return (
    <CartProvider>
      {showCart && <Cart click={onClickClose} />}
      <Header click={onClickClose} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
  
}


export default App;
