import "./index.css";
import ProductList from "../src/Components/ProductList";
import CartContainer from "./Components/CartContainer";
import OrderContainer from "./Components/OrderContainer";
import { useState, useReducer } from "react";
import cartReducer from "./cartReducer";

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  return (
    <>
      <main className="flex justify-center gap-8 relative max-md:flex-col max-md:place-items-center">
        <ProductList cart={cart} className="flex-1" dispatch={dispatch} />
        <CartContainer
          className="flex-none"
          cart={cart}
          dispatch={dispatch}
          onConfirmOrder={() => setIsOrderConfirmed(true)}
        />
      </main>
      {isOrderConfirmed && (
        <OrderContainer
          cart={cart}
          onStartNewOrder={() => {
            dispatch({ type: "resetCart" });
            setIsOrderConfirmed(false);
          }}
        />
      )}
    </>
  );
}
