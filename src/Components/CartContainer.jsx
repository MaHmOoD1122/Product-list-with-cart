import emptyIcon from "../assets/icons/illustration-empty-cart.svg";
import CartItem from "./CartItem";
export default function CartContainer({ cartItems, onDeleteItem }) {
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const orderTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="bg-white p-6 rounded-2xl h-fit w-88 ">
      <h2 className="font-bold text-red text-2xl mb-10">
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
        <CartItem
          itemName={"Classic Timramisu"}
          itemTotalPrice={5.5}
          itemPrice={5.5}
          itemNumber={"1x"}
          onDeleteItem={onDeleteItem}
        />
      )}
    </div>
  );
}
