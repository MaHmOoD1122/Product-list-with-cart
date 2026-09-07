import ProductCard from "./ProductCard";
import data from "../data.json";
export default function ProductList({ cart, dispatch }) {
  return (
    <div>
      <h1 className="font-bold text-4xl text mb-6">Desserts</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => {
          const productWithId = { ...item, id: item.id ?? item.name };
          return (
            <ProductCard
              key={productWithId.id}
              item={productWithId}
              dispatch={dispatch}
              cart={cart}
            />
          );
        })}
      </div>
    </div>
  );
}
