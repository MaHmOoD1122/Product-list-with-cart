import { useState } from "react";
import cartIcon from "../assets/icons/icon-add-to-cart.svg";
import PlusIcon from "../assets/icons/icon-increment-quantity.svg?react";
import MinusIcon from "../assets/icons/icon-decrement-quantity.svg?react";

export default function ProductCard({
  imgSrc,
  itemCategory,
  itemName,
  itemPrice,
}) {
  const [itemNumber, setItemNumber] = useState(0);
  function handleIncrement() {
    setItemNumber(itemNumber + 1);
  }
  function handleDecrement() {
    setItemNumber(itemNumber - 1);
  }
  return (
    <div className="flex flex-col font-red-hat w-fit">
      <img
        src={imgSrc}
        alt={itemName}
        className={`size-60 rounded-xl transition-all duration-300 ${itemNumber === 0 ? "border-3 border-transparent" : "border-3 border-red"}`}
      />
      <div
        className={`flex justify-center items-center gap-1.5 font-semibold pb-2 pt-2 pr-6 pl-6  border border-rose-500 rounded-3xl w-fit -mt-5 mb-5 self-center cursor-pointer transition-all duration-300 ${itemNumber === 0 ? `bg-rose-50 hover:text-red` : `bg-red gap-8`}`}
        onClick={itemNumber === 0 ? handleIncrement : undefined}
      >
        {itemNumber === 0 ? (
          <>
            <img src={cartIcon} alt="" />
            <span> Add to cart </span>
          </>
        ) : (
          <>
            <button
              className="group flex-none border border-rose-50 rounded-[50%] pl-1.25 pr-1.25 pt-2 pb-2 cursor-pointer hover:scale-105 hover:bg-white hover:fill-red active:scale-95 transition-all duration-300"
              onClick={handleDecrement}
            >
              <MinusIcon className="fill-white group-gihover:fill-red " />
            </button>
            <p className="flex-1 text-rose-50">{itemNumber}</p>
            <button
              className="flex-none border border-rose-50 rounded-[50%] pl-1.25 pr-1.25 pt-1 pb-1 cursor-pointer hover:scale-105 hover:bg-white active:scale-95 transition-all duration-300"
              onClick={handleIncrement}
            >
              <PlusIcon className="hover:fill-red" />
            </button>
          </>
        )}
      </div>
      <small className="text-rose-500 ">{itemCategory}</small>
      <p className="font-semibold">{itemName}</p>
      <p className="text-red font-semibold">${itemPrice}</p>
    </div>
  );
}
