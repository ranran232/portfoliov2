import Link from "next/link";

type DemoVideosSectionProps = {
  videos: Array<{
    title: string;
    url: string;
    thumbnail: string;
  }>;
};

const DemoVideosSection = ({ videos }: DemoVideosSectionProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {videos.map((video, index) => (
        <div key={index} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
          <a href={video.url} target="_blank" rel="noopener noreferrer" className="block">
            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
          </a>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
            <p className="text-sm text-gray-600 mb-4">
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Watch Video
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DemoVideosSection;