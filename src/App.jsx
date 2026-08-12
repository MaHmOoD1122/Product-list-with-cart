import "./index.css";
import ProductList from "../src/Components/ProductList";
import CartContainer from "./Components/CartContainer";
export default function App() {
  return (
    <main className="flex justify-center gap-8">
      <ProductList className="flex-1" />
      <CartContainer className="flex-none" />
    </main>
  );
}
