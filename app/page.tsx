import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const ACCENT = "#4338CA";

export default function HomePage() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen py-12`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Intro video */}
        <section className="mb-16">
          <h2
            className="mb-6 text-center text-2xl font-semibold text-gray-900 sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Introduction Video
          </h2>

          <div className="mx-auto max-w-4xl">
            <div
              className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.loom.com/embed/1cbffb65895541aabaf6564004ee6713"
                title="Introduction Video"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </section>
{/* Contact details */}
<section className="mx-auto max-w-3xl">
  <div className="mb-8 text-center">
    <p
      className={`${mono.className} mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-gray-400`}
    >
      // get in touch
    </p>

    <h2
      className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl"
      style={{ fontFamily: "var(--font-display)" }}
    >
      Let&apos;s connect
    </h2>

    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
      Have a project, idea, or opportunity in mind? Feel free to reach out
      through either channel.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {/* WhatsApp */}
    <a
      href="https://wa.me/639622325926"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] focus:outline-none focus-visible:ring-2"
      style={
        {
          "--tw-ring-color": ACCENT,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"
        style={{ backgroundColor: ACCENT }}
      />

      <div className="relative flex items-center gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundColor: `${ACCENT}14`,
            color: ACCENT,
          }}
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.9 11.9 0 0012.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.86 11.86 0 005.64 1.44h.01c6.54 0 11.85-5.3 11.85-11.84 0-3.16-1.23-6.14-3.38-8.44zM12.05 21.5a9.6 9.6 0 01-4.9-1.34l-.35-.2-3.66.96.98-3.57-.23-.37a9.63 9.63 0 01-1.48-5.14c0-5.32 4.33-9.65 9.66-9.65 2.58 0 5 1.01 6.83 2.84a9.58 9.58 0 012.83 6.82c0 5.33-4.34 9.65-9.68 9.65zm5.3-7.23c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.15-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5-.17 0-.36-.02-.56-.02-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.44 1.05 2.83 1.2 3.02.15.19 2.06 3.14 4.98 4.4.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z" />
          </svg>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <p
              className={`${mono.className} text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400`}
            >
              WhatsApp
            </p>

            <svg
              className="h-4 w-4 text-gray-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0L13.06 8l-6.78-6.78a.75.75 0 00-1.06 1.06L10.94 8l-5.72 5.72a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <p className="mt-1 truncate text-sm font-semibold text-gray-900">
            +63 962 232 5926
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Message me directly
          </p>
        </div>
      </div>
    </a>

    {/* Email */}
    <a
      href="mailto:randy.automation.dev@gmail.com"
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] focus:outline-none focus-visible:ring-2"
      style={
        {
          "--tw-ring-color": ACCENT,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"
        style={{ backgroundColor: ACCENT }}
      />

      <div className="relative flex items-center gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundColor: `${ACCENT}14`,
            color: ACCENT,
          }}
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path
              d="M3 7l9 6 9-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <p
              className={`${mono.className} text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400`}
            >
              Email
            </p>

            <svg
              className="h-4 w-4 text-gray-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0L13.06 8l-6.78-6.78a.75.75 0 00-1.06 1.06L10.94 8l-5.72 5.72a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <p className="mt-1 truncate text-sm font-semibold text-gray-900">
            randy.automation.dev@gmail.com
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Send me an email
          </p>
        </div>
      </div>
    </a>
  </div>
</section>


      </div>
    </main>
  );
}