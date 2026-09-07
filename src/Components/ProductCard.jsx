import cartIcon from "../assets/icons/icon-add-to-cart.svg";
import PlusIcon from "../assets/icons/icon-increment-quantity.svg?react";
import MinusIcon from "../assets/icons/icon-decrement-quantity.svg?react";

export default function ProductCard({ item, cart = [], dispatch }) {
  const cartItem = cart.find((product) => product?.id === item?.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  return (
    <div className="flex flex-col font-red-hat w-full md:w-fit">
      <img
        src={item?.image?.desktop}
        alt={item?.name}
        className={`w-full rounded-xl transition-all duration-300 ${quantity === 0 ? "border-3 border-transparent" : "border-3 border-red"}`}
      />
      <div
        className={`flex justify-center items-center gap-1.5 font-semibold pb-2 pt-2 pr-6 pl-6  border border-rose-500 rounded-3xl w-fit -mt-5 mb-5 self-center cursor-pointer transition-all duration-300 ${quantity === 0 ? `bg-rose-50 hover:text-red` : `bg-red gap-8`}`}
        onClick={() =>
          quantity === 0 && dispatch({ type: "add", payload: item })
        }
      >
        {quantity === 0 ? (
          <>
            <img src={cartIcon} alt="" />
            <span> Add to cart </span>
          </>
        ) : (
          <>
            <button
              className="group flex-none border border-rose-50 rounded-[50%] pl-1.25 pr-1.25 pt-1 pb-1 cursor-pointer hover:scale-105 hover:bg-white hover:fill-red active:scale-95 transition-all duration-300"
              onClick={() => dispatch({ type: "decrement", payload: item.id })}
            >
              <MinusIcon className="w-3 h-3 text-white group-hover:text-red " />
            </button>
            <p className="flex-1 text-rose-50">{quantity}</p>
            <button
              className="group flex-none border border-rose-50 rounded-[50%] pl-1.25 pr-1.25 pt-1 pb-1 cursor-pointer hover:scale-105 hover:bg-white active:scale-95 transition-all duration-300"
              onClick={() => dispatch({ type: "increment", payload: item.id })}
            >
              <PlusIcon className="w-3 h-3 text-white group-hover:text-red " />
            </button>
          </>
        )}
      </div>
      <small className="text-rose-500 ">{item?.category}</small>
      <p className="font-semibold">{item?.name}</p>
      <p className="text-red font-semibold">${item?.price.toFixed(2)}</p>
    </div>
  );
}
