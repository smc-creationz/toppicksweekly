import Image from "next/image";
import { Product } from "@/types/Product";

type Props = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index }: Props) {
    return (
  <div className="relative border p-4 rounded-md shadow hover:shadow-md transition">
    {typeof index === "number" && (
      <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
        #{index + 1}
      </div>
    )}
      <a href={product.buyLink} target="_blank" rel="noopener noreferrer">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-80 object-cover rounded"
        />
        <div className="mt-2">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-sm dark:text-gray-300">{product.summary}</p>
          <span className="inline-block mt-2 text-xs text-white bg-blue-500 px-2 py-1 rounded">
            {product.badge}
          </span>
        </div>
      </a>
    </div>
  );


}
