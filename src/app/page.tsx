import mockProducts from "@/data/mockProducts";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featured = mockProducts.filter(p => p.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">This Week’s Top Picks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((product, index) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
