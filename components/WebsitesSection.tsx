import Link from "next/link";

interface Website {
  title: string;
  description: string;
  image: string;
  link: string;
}

const websites: Website[] = [
  {
    title: "Sheen",
    description:
      "A simulated e-commerce store built using Next.js for both front-end and back-end, MongoDB for data storage, BetterAuth for secure user authentication, Stripe for payment simulation, and Tailwind CSS for responsive, modern styling. Features include product listing, shopping cart, user registration/login, and checkout flow.",
    image: "/sheen.png",
    link: "https://sheen-eight.vercel.app/",
  },
  {
    title: "Cebu Best Properties",
    description:
      "My first freelance project — a full-stack real estate platform built with Next.js, Tailwind CSS, Express.js, and MongoDB. The client site lets users browse and search featured houses and buildings, while the admin site enables CRUD management of property listings, streamlining property availability updates. Designed for smooth navigation, responsive layouts, and efficient data handling.",
    image: "/cebu_state.webp",
    link: "https://www.cebubestproperties.com/",
  },
  {
    title: "KeyDash - Speed Typing Game",
    description:
      "A dynamic typing game built with Next.js and Tailwind CSS on the front end, using MongoDB for data storage and AuthJS for authentication. Users can select from multiple difficulty levels, each with unique scoring rules, and compete on leaderboards to see top rankings across all players. The app combines real-time feedback, personalized challenges.",
    image: "/key_dash.png",
    link: "https://keydash-rust.vercel.app/",
  },
  {
    title: "CRM",
    description:
      "A full-stack CRM application built using Next.js, Tailwind CSS, and MongoDB, created with the help of OpenClaw. Features include authentication, customer CRUD operations, and tools for tracking and managing client relationships. Designed for efficient workflow, easy management, and responsive user experience.",
    image: "/crm.png",
    link: "https://crm-sooty-mu.vercel.app/",
  },
];

export default function WebsitesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Websites
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {websites.map((website, index) => (
            <Link
              key={index}
              href={website.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <img
                src={website.image}
                alt={website.title}
                className="w-full h-48 object-cover"
              />

              <div className="px-6 py-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {website.title}
                </h3>
                <p className="line-clamp-2 text-gray-600">
                  {website.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}