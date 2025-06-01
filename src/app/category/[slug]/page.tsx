import { Metadata } from "next";
import mockProducts from "@/data/mockProducts";
import ProductCard from "@/components/ProductCard";

type Props = {
  params: {
    slug: string;
  };
};

// Generate SEO metadata for the category page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = params.slug.replace("-", " ");
  return {
    title: `Top Picks in ${name} | Top Picks Weekly`,
    description: `Curated top Amazon picks in ${name}`,
  };
}

// Display products matching the category slug
export default function CategoryPage({ params }: Props) {
  const { slug } = params;
  const products = mockProducts.filter(p => p.categorySlug === slug);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        Top Picks: {slug.replace("-", " ")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
