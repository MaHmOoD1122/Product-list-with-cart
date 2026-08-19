import { useState } from "react";
import RemoveIcon from "../assets/icons/icon-remove-item.svg?react";
export default function CartItem({
  item,
  itemName,
  itemNumber,
  itemPrice,
  itemTotalPrice,
  onDeleteItem,
}) {
  return (
    <div className="flex justify-between items-center border-b-2">
      <div>
        <p className="font-semibold">{itemName}</p>
        <div className="flex gap-2">
          <p className="text-red mr-1">{itemNumber}</p>
          <p className="text-rose-400">
            <small>@</small>${itemPrice}
          </p>
          <p className="font-semibold text-rose-400">${itemTotalPrice}</p>
        </div>{" "}
      </div>
      <div>
        <button
          className="group rounded-[50%] border-2 border-rose-300 p-1 cursor-pointer hover:border-rose-500 transition-all duration-300"
          onClick={() => item && onDeleteItem(item.id)}
        >
          <RemoveIcon className="size-3 text-rose-300 group-hover:text-rose-500 transition-all duration-300" />
        </button>
      </div>
    </div>
  );
}
