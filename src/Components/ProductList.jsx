import ProductCard from "./ProductCard";
import data from "../data.json";
export default function ProductList() {
  return (
    <div>
      <h1 className="font-bold text-4xl text mb-6">Desserts</h1>
      <div className="grid grid-cols-3 gap-6">
        {data.map((item, index) => (
          <ProductCard
            key={index}
            imgSrc={item.image.desktop}
            itemCategory={item.category}
            itemName={item.name}
            itemPrice={item.price.toFixed(2)}
          />
        ))}
      </div>
    </div>
  );
}
