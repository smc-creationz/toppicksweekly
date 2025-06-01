import ProductCard from "@/components/ProductCard";
import mockProducts from "@/data/mockProducts";

export default function WeeklyGrid() {
  return (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {mockProducts.map((product, index) => (
      <div key={index} className="relative overflow-visible">
<ProductCard key={index} product={product} index={index} />      </div>
    ))}
    </div>
  );
}
