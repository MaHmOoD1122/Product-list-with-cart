import emptyIcon from "../assets/icons/illustration-empty-cart.svg";
import CartItem from "./CartItem";
import carbonIcon from "../assets/icons/icon-carbon-neutral.svg";

export default function CartContainer({ cart, dispatch, onConfirmOrder }) {
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const orderTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="bg-white p-6 rounded-2xl h-fit w-140 max-md:w-full">
      <h2 className="font-bold text-red text-3xl mb-3">
        Your Cart ({totalCount})
      </h2>
      {totalCount === 0 ? (
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
        <>
          {cart.map((item) => (
            <CartItem key={item.name} dispatch={dispatch} item={item} />
          ))}
          <div className="flex justify-between my-6 items-center">
            <h3 className="text-rose-500 font-semibold">Order Total</h3>
            <p className="font-extrabold text-3xl">${orderTotal.toFixed(2)}</p>
          </div>
          <div className="border-0 rounded-xl bg-rose-50 flex gap-3 justify-center items-center p-2 h-15 mb-7">
            <img src={carbonIcon} alt="carbon icon" className="" />
            <p className="text-[0.8rem]">
              This is a <strong> carbon-neutral</strong> delivery
            </p>
          </div>
          <button
            className="bg-red text-white w-full h-15 border-none outline-none rounded-4xl font-semibold hover:brightness-95 transition-all cursor-pointer active:translate-y-px"
            onClick={onConfirmOrder}
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}
