import Image from "next/image";
import { Product } from "@/types/Product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="border p-4 rounded-md shadow hover:shadow-md transition">
      <a href={product.buyLink} target="_blank" rel="noopener noreferrer">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="w-full object-cover rounded"
        />
        <div className="mt-2">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-sm text-gray-600">{product.summary}</p>
          <span className="inline-block mt-2 text-xs text-white bg-blue-500 px-2 py-1 rounded">
            {product.badge}
          </span>
        </div>
      </a>
    </div>
  );
}
