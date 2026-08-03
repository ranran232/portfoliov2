import Link from "next/link";

type LandingPagesSectionProps = {
  items: Array<{
    title: string;
    url: string;
    imageUrl?: string;
  }>;
};

const LandingPagesSection = ({ items }: LandingPagesSectionProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className="flex h-48 w-full items-center justify-center bg-gray-200 text-gray-500">
              Thumbnail
            </div>
          )}

          <div className="p-4">
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">
              <span className="hover:underline">Visit Page</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LandingPagesSection;