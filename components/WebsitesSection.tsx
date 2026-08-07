import Link from 'next/link';
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

const ACCENT = '#4338CA';

interface Website {
  title: string;
  description: string;
  image: string;
  link: string;
}

const websites: Website[] = [
  {
    title: 'Sheen',
    description:
      'A simulated e-commerce store built using Next.js for both front-end and back-end, MongoDB for data storage, BetterAuth for secure user authentication, Stripe for payment simulation, and Tailwind CSS for responsive, modern styling. Features include product listing, shopping cart, user registration/login, and checkout flow.',
    image: '/sheen.png',
    link: 'https://sheen-eight.vercel.app/',
  },
  {
    title: 'Cebu Best Properties',
    description:
      'My first freelance project — a full-stack real estate platform built with Next.js, Tailwind CSS, Express.js, and MongoDB. The client site lets users browse and search featured houses and buildings, while the admin site enables CRUD management of property listings, streamlining property availability updates. Designed for smooth navigation, responsive layouts, and efficient data handling.',
    image: '/cebu_state.webp',
    link: 'https://www.cebubestproperties.com/',
  },
  {
    title: 'KeyDash - Speed Typing Game',
    description:
      'A dynamic typing game built with Next.js and Tailwind CSS on the front end, using MongoDB for data storage and AuthJS for authentication. Users can select from multiple difficulty levels, each with unique scoring rules, and compete on leaderboards to see top rankings across all players. The app combines real-time feedback, personalized challenges.',
    image: '/key_dash.png',
    link: 'https://keydash-rust.vercel.app/',
  },
  {
    title: 'CRM',
    description:
      'A full-stack CRM application built using Next.js, Tailwind CSS, and MongoDB, created with the help of OpenClaw. Features include authentication, customer CRUD operations, and tools for tracking and managing client relationships. Designed for efficient workflow, easy management, and responsive user experience.',
    image: '/crm.png',
    link: 'https://crm-sooty-mu.vercel.app/',
  },
];

function hostnameFromUrl(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

export default function WebsitesSection() {
  return (
    <section
      className={`${display.variable} ${body.variable} ${mono.variable} bg-white py-16`}
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <h2
        className="mt-1 text-2xl font-semibold text-gray-900 sm:text-3xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Websites
      </h2>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {websites.map((website, index) => (
            <Link
              key={index}
              href={website.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-gray-200 bg-white p-2.5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2"
              style={{ ['--tw-ring-color' as string]: ACCENT }}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-[10px] bg-gray-100">
                <img
                  src={website.image}
                  alt={website.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
                <span
                  className={`${mono.className} absolute right-1.5 top-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[11px] font-medium text-white`}
                >
                  {hostnameFromUrl(website.link)}
                </span>
              </div>

              <div className="mt-2.5 px-0.5 pb-0.5">
                <p
                  className="text-sm font-semibold text-gray-900"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {website.title}
                </p>
                <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-gray-500">
                  {website.description}
                </p>
                <p className={`${mono.className} mt-2 flex items-center gap-1 text-[12px] font-medium`} style={{ color: ACCENT }}>
                  Visit site
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                  >
                    <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}