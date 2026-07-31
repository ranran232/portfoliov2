"use client"
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const PAGE_SIZE = 6;

interface Video {
  title: string;
  url: string;
  thumbnail: string;
}

interface DemoVideosSectionProps {
  videos: Video[];
}

export default function DemoVideosSection({
  videos,
}: DemoVideosSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    if (activeIndex >= videos.length) {
      setActiveIndex(0);
    }
  }, [videos, activeIndex]);

  if (videos.length === 0) {
    return null;
  }

  const active = videos[activeIndex];
  const rest = videos.filter((_, index) => index !== activeIndex);
  const pageCount = Math.ceil(rest.length / PAGE_SIZE);
  const safePage = Math.min(page, Math.max(pageCount - 1, 0));
  const paginatedRest = rest.slice(
    safePage * PAGE_SIZE,
    safePage * PAGE_SIZE + PAGE_SIZE
  );

  const handleSelectVideo = (index: number) => {
    setActiveIndex(index);
    setPage(0);
  };

  return (
    <section className="w-full bg-neutral-50 p-4 md:p-6">
      <div className="mx-auto max-w-[1600px]">
        {/* Top: Main video + sidebar (sidebar hidden on mobile) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Main Video */}
          <div className="min-w-0">
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-video w-full overflow-hidden rounded-xl bg-black"
            >
              <img
                src={active.thumbnail}
                alt={active.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <Play className="ml-1 h-7 w-7 fill-white text-white" />
                </div>
              </div>
            </a>

            <h2 className="mt-4 text-xl font-semibold">
              {active.title}
            </h2>
          </div>

          {/* Sidebar - hidden on mobile, visible from lg up */}
          <aside className="hidden lg:sticky lg:top-6 lg:flex lg:h-fit lg:flex-col">
            <h3 className="mb-3 shrink-0 text-sm text-neutral-500">
              Up next
            </h3>

            <div className="flex max-h-[500px] flex-col gap-2 overflow-y-auto pr-1">
              {videos.map((video, index) => {
                if (index === activeIndex) return null;

                return (
                  <button
                    key={video.url}
                    type="button"
                    onClick={() => handleSelectVideo(index)}
                    className="flex gap-3 rounded-lg p-2 text-left hover:bg-neutral-200 transition"
                  >
                    <div className="aspect-video w-40 overflow-hidden rounded-md bg-neutral-200">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="text-sm font-medium"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {video.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>

        {/* Below: remaining videos as a paginated grid — 1 col mobile, 3 cols desktop, 6 per page */}
        {rest.length > 0 && (
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm text-neutral-500">More videos</h3>

              {pageCount > 1 && (
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-neutral-700">
                    {safePage + 1} / {pageCount}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setPage((p) => Math.max(p - 1, 0))}
                      disabled={safePage === 0}
                      aria-label="Previous videos"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-purple-200 disabled:text-purple-400"
                    >
                      <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setPage((p) => Math.min(p + 1, pageCount - 1))
                      }
                      disabled={safePage >= pageCount - 1}
                      aria-label="Next videos"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-purple-200 disabled:text-purple-400"
                    >
                      <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {paginatedRest.map((video) => {
                const index = videos.indexOf(video);

                return (
                  <button
                    key={video.url}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group text-left"
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-200">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/20">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                          <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
                        </div>
                      </div>
                    </div>

                    <p
                      className="mt-2 text-sm font-medium"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {video.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}