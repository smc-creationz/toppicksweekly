type ProductCardProps = {
  title: string;
  image: string;
  summary: string;
  buyLink: string;
  badge?: string;
};

export default function ProductCard({ title, image, summary, buyLink, badge }: ProductCardProps) {
  return (
    <div className="border p-4 rounded-xl shadow-md hover:shadow-lg transition bg-white">
      <div className="w-full h-48 overflow-hidden rounded">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {badge && (
          <span className="inline-block text-sm bg-yellow-300 text-black px-2 py-1 rounded-full mt-1">
            {badge}
          </span>
        )}
        <p className="text-sm mt-2">{summary}</p>
        <a
          href={buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-600 hover:underline"
        >
          View on Amazon →
        </a>
      </div>
    </div>
  );
}
