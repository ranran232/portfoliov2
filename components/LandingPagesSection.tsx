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
        <div key={index} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                Thumbnail
              </div>
            )}
          </a>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-4">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Visit Page
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPagesSection;