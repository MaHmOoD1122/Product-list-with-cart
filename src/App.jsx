import "./index.css";
import ProductList from "../src/Components/ProductList";
import CartContainer from "./Components/CartContainer";
import { useState } from "react";
export default function App() {
  const [cartItems, setCartItems] = useState([]);
  // function addToCart(product) {
  //   setCartItems([
  //     ...cartItems,
  //     {
  //       name: product.itemName,
  //       number: product.itemNumber,
  //       price: product.itemPrice,
  //       totalPrice: product.itemTotalPrice,
  //     },
  //   ]);
  // }
  // function handleRemoveFromCart(productId) {}
  function handleAddToCart(product) {
    setCartItems((prevItems) => [...prevItems, product]);
  }
  function handleRemoveFromCart(productId) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  }
  return (
    <main className="flex justify-center gap-8">
      <ProductList onAddItem={handleAddToCart} className="flex-1" />
      <CartContainer
        onDeleteItem={handleRemoveFromCart}
        className="flex-none"
        cartItems={cartItems}
      />
    </main>
  );
}
