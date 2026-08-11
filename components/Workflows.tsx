'use client';

import { useEffect, useRef, useState } from 'react';
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

// ---------------------------------------------------------------------------
// Data. Swap `loomId` for the real IDs from your Loom share links
// (loom.com/share/<id> -> use <id> here) and adjust title/description/duration.
// `step` reflects the order these workflows are meant to be set up in, and
// drives the pipeline connector in the sidebar — reorder the array to reorder it.
// ---------------------------------------------------------------------------
interface Video {
  id: string;
  step: number;
  title: string;
  description?: string;
  duration: string;
  loomId: string;
}

const videos: Video[] = [
  {
    id: '1',
    step: 1,
    title: 'Video Tracking Workflow',
    description:
      "This video demonstrates a custom video tracking workflow for a coaching business. When a lead books an appointment, they are redirected to a Thank You page containing a welcome video and pre-call videos. As the lead reaches each viewing milestone, the workflow sends the data to GoHighLevel, updates the contact's watch progress, and logs the activity in Google Sheets for easy tracking and reporting.",
    duration: '3:35',
    loomId: '1fbeb11bf34142c68bab51b7ca6a9fff',
  },
  {
    id: '2',
    step: 2,
    title: 'Maintenance Subscription Workflow',
    description:
      'In this video, I walk through the completed maintenance membership workflow, including the products, payment links, booking calendars, and automated credit system. When a customer makes a payment, credits are added to their CRM account, they are redirected to the appropriate booking calendar, and receive a confirmation SMS with their available balance. Before confirming a booking, the workflow validates whether the customer has enough credits. If the balance is insufficient, the booking is automatically cancelled and the customer is notified with their remaining balance. For successful bookings, the appropriate credit amount is automatically deducted based on the selected service.',
    duration: '3:11',
    loomId: '04106ee3c0f542628147a14a06cf677a',
  },
  {
    id: '3',
    step: 3,
    title: 'CAPI - Lead Event',
    description:
      'In this video, I demonstrate the Meta Conversion API workflow and verify that it is tracking CRM events correctly. I test the Lead, Scheduled, and Closed events by moving a contact through the pipeline, confirming that each event is successfully captured. Once configured, you can use the provided Dataset ID in your Meta Lead Ads setup to enable CRM event tracking and improve conversion reporting.',
    duration: '1:30',
    loomId: 'f53e828c9b4a4798ae7226c6a7d9e8ab',
  },
  {
    id: '4',
    step: 4,
    title: 'How to Verify the Meta Instant Form Connection',
    description:
      'This video explains how to verify that your Meta Instant Form is properly connected to GoHighLevel. It shows how to use Meta’s Lead Ads Testing Tool to select the correct Facebook Page and form, check that Lead Access is properly configured, and confirm that Lead Connector is listed as the connected CRM. The video also demonstrates how to create a test lead and verify that the lead successfully flows into the CRM, either as a contact or an opportunity if an automation has been set up.',
    duration: '1:29',
    loomId: '1b781bee52f944b2ac2a2c98149c439c',
  },
  {
    id: '5',
    step: 5,
    title: 'Simple and Effective Lead Workflow Setup',
    description:
      'A simple and effective lead workflow for service businesses, covering lead capture, source tracking, automated follow-ups, appointment booking, reminders, and Meta Conversion API tracking to improve lead management and ad performance.',
    duration: '1:29',
    loomId: '7f3f097536454ea29a8bc091707eab9d',
  },
];

const ACCENT = '#4338CA';
const ACCENT_SOFT = '#EEF2FF';

// Loom doesn't expose a predictable CDN thumbnail URL, so we resolve the real
// one per-video through Loom's public oEmbed endpoint and cache it in state.
function Thumbnail({ video, size = 'sm' }: { video: Video; size?: 'sm' | 'lg' }) {
  const [thumbUrl, setThumbUrl] = useState<string | null>(null);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setThumbUrl(null);
    setErrored(false);

    const shareUrl = `https://www.loom.com/share/${video.loomId}`;
    fetch(`https://www.loom.com/v1/oembed?url=${encodeURIComponent(shareUrl)}`)
      .then((res) => {
        if (!res.ok) throw new Error('oEmbed request failed');
        return res.json();
      })
      .then((data: { thumbnail_url?: string }) => {
        if (cancelled) return;
        if (data?.thumbnail_url) setThumbUrl(data.thumbnail_url);
        else setErrored(true);
      })
      .catch(() => {
        if (!cancelled) setErrored(true);
      });

    return () => {
      cancelled = true;
    };
  }, [video.loomId]);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-[10px] bg-gray-100">
      {thumbUrl && !errored ? (
        <img
          src={thumbUrl}
          alt={video.title}
          loading="lazy"
          onError={() => setErrored(true)}
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      ) : errored ? (
        // Fallback if Loom couldn't return a thumbnail for this session
        <div className="flex h-full w-full items-center justify-center bg-gray-200">
          <svg width={size === 'lg' ? 34 : 26} height={size === 'lg' ? 34 : 26} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" stroke="#9CA3AF" strokeWidth="1.5" />
            <path d="M9.5 7.5v9l7-4.5-7-4.5z" fill="#9CA3AF" />
          </svg>
        </div>
      ) : (
        // Loading skeleton while the oEmbed request resolves
        <div className="h-full w-full animate-pulse bg-gray-200" />
      )}
      {/* duration */}
      <span className={`${mono.className} absolute bottom-1.5 right-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[11px] font-medium text-white`}>
        {video.duration}
      </span>
    </div>
  );
}

const PAGE_SIZE = 6;
const DESCRIPTION_LIMIT = 170;

function ExpandableDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > DESCRIPTION_LIMIT;
  const shown = expanded || !isLong ? text : `${text.slice(0, DESCRIPTION_LIMIT).trimEnd()}…`;

  return (
    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-gray-500">
      {shown}
      {isLong && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className={`${mono.className} ml-1.5 inline text-[12px] font-medium underline-offset-2 hover:underline`}
          style={{ color: ACCENT }}
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </p>
  );
}

export default function VideoLibrary() {
  const [selectedId, setSelectedId] = useState(videos[0].id);
  const [page, setPage] = useState(1);
  const playerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const selected = videos.find((v) => v.id === selectedId) ?? videos[0];
  const rest = videos.filter((v) => v.id !== selectedId);

  const pageCount = Math.max(1, Math.ceil(rest.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageItems = rest.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // Selecting a different video reshuffles `rest`, so start back on page 1.
  useEffect(() => {
    setPage(1);
  }, [selectedId]);

  const select = (id: string) => {
    setSelectedId(id);
    playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goToPage = (p: number) => {
    setPage(p);
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={`${display.variable} ${body.variable} ${mono.variable}`} style={{ fontFamily: 'var(--font-body)' }}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
       
          <h1
            className="my-6 text-2xl font-semibold text-gray-900 sm:text-3xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
             Workflows library
          </h1>
    

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
          {/* Main player */}
          <div ref={playerRef} className="min-w-0 scroll-mt-6">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-black shadow-sm">
              <div className="aspect-video w-full">
                <iframe
                  key={selected.id}
                  src={`https://www.loom.com/embed/${selected.loomId}?autoplay=0`}
                  title={selected.title}
                  allow="fullscreen; autoplay"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-start justify-between gap-3">
                <h2
                  className="text-lg font-semibold text-gray-900 sm:text-xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {selected.title}
                </h2>
                <span
                  className={`${mono.className} shrink-0 rounded-full px-2.5 py-1 text-xs font-medium`}
                  style={{ background: ACCENT_SOFT, color: ACCENT }}
                >
                  Step {selected.step} of {videos.length}
                </span>
              </div>
              {selected.description && <ExpandableDescription key={selected.id} text={selected.description} />}
            </div>
          </div>

          {/* Sidebar — desktop only */}
          <aside className="hidden lg:block">
            <div className="sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto rounded-xl border border-gray-200 bg-white p-2 shadow-sm">
              <p className={`${mono.className} px-2 pb-2 pt-1 text-[11px] font-medium uppercase tracking-wider text-gray-400`}>
                Up next
              </p>
              <ol className="relative flex flex-col gap-1">
                {/* pipeline connector */}
                <span aria-hidden className="absolute left-[27px] top-3 bottom-3 w-px border-l border-dashed border-gray-200" />
                {videos.map((v) => {
                  const isSelected = v.id === selectedId;
                  return (
                    <li key={v.id} className="relative">
                      <button
                        onClick={() => select(v.id)}
                        aria-current={isSelected ? 'true' : undefined}
                        className={`group flex w-full items-start gap-3 rounded-lg p-2 text-left transition-all duration-200 ease-out hover:-translate-y-[1px] hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${
                          isSelected ? 'ring-1' : ''
                        }`}
                        style={isSelected ? { background: ACCENT_SOFT, ['--tw-ring-color' as string]: ACCENT } : undefined}
                      >
                        <span
                          className="relative z-10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 bg-white"
                          style={{ borderColor: isSelected ? ACCENT : '#D1D5DB' }}
                        >
                          {isSelected && <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />}
                        </span>
                        <div className="w-[132px] shrink-0">
                          <Thumbnail video={v} />
                        </div>
                        <div className="min-w-0 flex-1 pt-0.5">
                          <p className={`line-clamp-2 text-[13px] font-medium leading-snug ${isSelected ? 'text-gray-900' : 'text-gray-800'}`}>
                            {v.title}
                          </p>
                          {v.description && (
                            <p className="mt-0.5 line-clamp-1 text-[12px] text-gray-400">{v.description}</p>
                          )}
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </aside>
        </div>

        {/* Browse grid — always visible, doubles as the mobile/tablet list */}
        <section ref={gridRef} className="mt-10 mb-16 scroll-mt-6">
          <div className="mb-4 flex items-baseline justify-between">
            <h3 className={`${mono.className} text-[11px] font-medium uppercase tracking-wider text-gray-400`}>
              More workflows
            </h3>
            <p className={`${mono.className} text-[11px] text-gray-400`}>
              {rest.length === 0 ? '0 of 0' : `${(currentPage - 1) * PAGE_SIZE + 1}–${Math.min(currentPage * PAGE_SIZE, rest.length)} of ${rest.length}`}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {pageItems.map((v) => (
              <button
                key={v.id}
                onClick={() => select(v.id)}
                className="group rounded-xl border border-gray-200 bg-white p-2.5 text-left shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2"
                style={{ ['--tw-ring-color' as string]: ACCENT }}
              >
                <Thumbnail video={v} size="lg" />
                <div className="mt-2.5 px-0.5 pb-0.5">
                  <p className="line-clamp-1 text-sm font-semibold text-gray-900">{v.title}</p>
                  {v.description && (
                    <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-gray-500">{v.description}</p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Pagination */}
          {pageCount > 1 && (
            <nav aria-label="More workflows pagination" className="mt-7 flex items-center justify-center gap-1.5">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors duration-150 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  aria-current={p === currentPage ? 'page' : undefined}
                  className={`${mono.className} flex h-8 w-8 items-center justify-center rounded-lg text-[13px] font-medium transition-colors duration-150`}
                  style={
                    p === currentPage
                      ? { background: ACCENT, color: 'white' }
                      : { color: '#6B7280' }
                  }
                  onMouseEnter={(e) => {
                    if (p !== currentPage) e.currentTarget.style.background = '#F3F4F6';
                  }}
                  onMouseLeave={(e) => {
                    if (p !== currentPage) e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === pageCount}
                aria-label="Next page"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors duration-150 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </nav>
          )}
        </section>
      </div>
    </div>
  );
}