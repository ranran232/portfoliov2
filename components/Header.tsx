'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top */}
        <div className="flex h-20 items-center justify-between">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            {/* Logo */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-200 text-xs text-gray-500">
              <img src="/profile_img.jpg" alt="profile-img" />
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <h1 className="max-w-[180px] text-lg font-semibold leading-tight break-words text-gray-900 sm:max-w-[300px] sm:text-xl md:max-w-none md:text-3xl">
                GoHighLevel, n8n, Ads, AI &amp; Integration
              </h1>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Randy Olais
              </p>
            </div>
          </div>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 md:hidden"
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-200 ${
                  menuOpen ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 block h-0.5 w-6 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-200 ${
                  menuOpen ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden gap-10 md:flex">
          <Link href="/demo-videos" className={`
            relative pb-5 text-lg font-medium transition-colors
            ${pathname === "/demo-videos" ? "text-black" : "text-gray-500 hover:text-black"}
          `}>
            Demo Videos
            {pathname === "/demo-videos" && (
              <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-gradient-to-br from-[#0B0617] via-[#2A0D52] to-[#0F0424]" />
            )}
          </Link>
          <Link href="/landing-pages" className={`
            relative pb-5 text-lg font-medium transition-colors
            ${pathname === "/landing-pages" ? "text-black" : "text-gray-500 hover:text-black"}
          `}>
            Landing Pages
            {pathname === "/landing-pages" && (
              <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-gradient-to-br from-[#0B0617] via-[#2A0D52] to-[#0F0424]" />
            )}
          </Link>
          <Link href="/websites" className={`
            relative pb-5 text-lg font-medium transition-colors
            ${pathname === "/websites" ? "text-black" : "text-gray-500 hover:text-black"}
          `}>
            Websites
            {pathname === "/websites" && (
              <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-gradient-to-br from-[#0B0617] via-[#2A0D52] to-[#0F0424]" />
            )}
          </Link>
          <Link href="/workflows" className={`
            relative pb-5 text-lg font-medium transition-colors
            ${pathname === "/workflows" ? "text-black" : "text-gray-500 hover:text-black"}
          `}>
            Workflows
            {pathname === "/workflows" && (
              <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-gradient-to-br from-[#0B0617] via-[#2A0D52] to-[#0F0424]" />
            )}
          </Link>
          <Link href="/about" className={`
            relative pb-5 text-lg font-medium transition-colors
            ${pathname === "/about" ? "text-black" : "text-gray-500 hover:text-black"}
          `}>
            About
            {pathname === "/about" && (
              <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-gradient-to-br from-[#0B0617] via-[#2A0D52] to-[#0F0424]" />
            )}
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <nav
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            <div onClick={() => setMenuOpen(false)}>
              <Link href="/demo-videos">
                Demo Videos
              </Link>
            </div>

            <div onClick={() => setMenuOpen(false)}>
              <Link href="/landing-pages">
                Landing Pages
              </Link>
            </div>

            <div onClick={() => setMenuOpen(false)}>
              <Link href="/websites">
                Websites
              </Link>
            </div>

            <div onClick={() => setMenuOpen(false)}>
              <Link href="/workflows">
                Workflows
              </Link>
            </div>

            <div onClick={() => setMenuOpen(false)}>
              <Link href="/about">
                About
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;