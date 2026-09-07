export default function cartReducer(cart, action) {
  switch (action.type) {
    case "add": {
      return [...cart, { ...action.payload, quantity: 1 }];
    }
    case "delete": {
      return cart.filter((item) => item.id !== action.payload);
    }
    case "increment": {
      return cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    }
    case "decrement": {
      return cart
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
    }
    case "resetCart": {
      return [];
    }
    default:
      return cart;
  }
}
