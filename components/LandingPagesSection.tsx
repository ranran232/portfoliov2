import Link from 'next/link';
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

const ACCENT = '#4338CA';

type LandingPagesSectionProps = {
  items: Array<{
    title: string;
    url: string;
    imageUrl?: string;
  }>;
};

function hostnameFromUrl(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

const LandingPagesSection = ({ items }: LandingPagesSectionProps) => {
  return (
    <div className={`${display.variable} ${body.variable} ${mono.variable}`} style={{ fontFamily: 'var(--font-body)' }}>
      <h2
        className="mt-1 text-2xl font-semibold text-gray-900 sm:text-3xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Landing Pages
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-gray-200 bg-white p-2.5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2"
            style={{ ['--tw-ring-color' as string]: ACCENT }}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-[10px] bg-gray-100">
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-200">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="#9CA3AF" strokeWidth="1.5" />
                    <circle cx="8.5" cy="9.5" r="1.5" stroke="#9CA3AF" strokeWidth="1.5" />
                    <path d="M4 16l5-5 4 4 3-3 4 4" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              <span
                className={`${mono.className} absolute right-1.5 top-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[11px] font-medium text-white`}
              >
                {hostnameFromUrl(item.url)}
              </span>
            </div>

            <div className="mt-2.5 px-0.5 pb-0.5">
              <p
                className="line-clamp-1 text-sm font-semibold text-gray-900"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {item.title}
              </p>
              <p className={`${mono.className} mt-1 flex items-center gap-1 text-[12px] font-medium`} style={{ color: ACCENT }}>
                Visit page
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
  );
};

export default LandingPagesSection;