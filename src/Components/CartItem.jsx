import RemoveIcon from "../assets/icons/icon-remove-item.svg?react";
export default function CartItem({ item, dispatch }) {
  return (
    <div className="flex justify-between items-center border-b-2 border-b-rose-100 py-3">
      <div>
        <p className="font-semibold">{item?.name}</p>
        <div className="flex gap-2">
          <p className="text-red mr-1">{item?.number}</p>
          <p className="text-rose-400">
            <small>@</small>${(item?.price ?? 0).toFixed(2)}
          </p>
          <p className="font-semibold text-rose-400">
            ${((item?.price ?? 0) * (item?.quantity ?? 0)).toFixed(2)}
          </p>
        </div>{" "}
      </div>
      <div>
        <button
          className="group rounded-[50%] border-2 border-rose-300 p-1 cursor-pointer hover:border-rose-500 transition-all duration-300"
          onClick={() =>
            item && dispatch({ type: "delete", payload: item?.id })
          }
        >
          <RemoveIcon className="size-3 text-rose-300 group-hover:text-rose-500 transition-all duration-300" />
        </button>
      </div>
    </div>
  );
}
