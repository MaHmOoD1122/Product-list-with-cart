import { useState } from "react";
export default function CartItem({
  itemName,
  itemNumber,
  itemPrice,
  itemTotalPrice,
}) {
  return (
    <div>
      <p>{itemName}</p>
    </div>
  );
}
