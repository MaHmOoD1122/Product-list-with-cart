import { useState } from "react";
import emptyIcon from "../assets/icons/illustration-empty-cart.svg";
export default function CartContainer() {
  const [cartItems, setCartItem] = useState(0);
  return (
    <div className="bg-white p-6 rounded-2xl h-fit w-[22rem] ">
      <h2 className="font-bold text-red text-2xl mb-10">
        Your Cart ({cartItems})
      </h2>
      {cartItems === 0 ? (
        <>
          {" "}
          <img
            src={emptyIcon}
            alt="empty cart illustarion"
            className="justify-self-center mb-4"
          />
          <p className="text-sm justify-self-center font-semibold text-rose-400">
            Your added items will appear here
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
