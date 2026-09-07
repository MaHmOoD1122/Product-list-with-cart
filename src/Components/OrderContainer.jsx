import confirmIcon from "../assets/icons/icon-order-confirmed.svg";
export default function OrderContainer({ cart, onStartNewOrder }) {
  let cartTotalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center p-10">
      <div className="p-7 bg-white border-0 rounded-xl max-md:fixed max-md:bottom-0 max-md:w-full">
        <img src={confirmIcon} alt="confirm icon" className="mb-5" />
        <h3 className="font-extrabold text-4xl">Order Confirmed</h3>
        <p className="text-rose-500">We hope you enjoy your food!</p>
        <div className="bg-rose-50 p-5 rounded-xl">
          <ul className="max-h-60 overflow-y-auto pr-2">
            {cart.map((item) => {
              let itemTotalPrice = item.quantity * item.price;
              return (
                <li
                  className="flex justify-between items-center gap-15 border-b border-rose-200 py-5"
                  key={item.id}
                >
                  <div className="flex gap-5 items-center">
                    <img
                      src={item.image.desktop}
                      alt="item image"
                      className="w-10 h-10 rounded-[5px]"
                    />
                    <div className="flex flex-col gap-1">
                      <div>
                        <p className="font-semibold text-[0.8rem]">
                          {item.name}
                        </p>
                      </div>
                      <div className="flex gap-3 text-[0.8rem]">
                        <p className="font-semibold text-red">
                          {item.quantity}x
                        </p>
                        <p className="text-rose-400 ">
                          @${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">
                      ${itemTotalPrice.toFixed(2)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-between items-center pt-4">
            <p className="text-[0.8rem] text-rose-500 font-semibold">
              Order Total
            </p>
            <p className="font-extrabold text-2xl">
              ${cartTotalPrice.toFixed(2)}
            </p>
          </div>
        </div>
        <button
          className="w-full bg-red text-rose-100 border-0 outline-0 rounded-3xl py-2 text-[0.8rem] font-semibold mt-5 cursor-pointer transition-all duration-300 hover:brightness-95 active:translate-y-0.5"
          onClick={onStartNewOrder}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
