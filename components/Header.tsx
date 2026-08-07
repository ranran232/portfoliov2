'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

const ACCENT = '#4338CA';
const ACCENT_SOFT = '#EEF2FF';

const NAV_ITEMS = [
  { href: '/', label: 'Intro Video' },
  { href: '/landing-pages', label: 'Landing Pages' },
  { href: '/websites', label: 'Websites' },
  { href: '/workflows', label: 'Workflows' },
  { href: '/about', label: 'About' },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`${display.variable} ${body.variable} ${mono.variable} w-full border-b border-gray-200 bg-white`}
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top */}
        <div className="flex h-20 items-center justify-between">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            {/* Logo */}
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
              <img src="/profile_img.jpg" alt="Randy Olais" className="h-full w-full object-cover" />
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <h1
                className="max-w-[180px] text-lg font-semibold leading-tight break-words text-gray-900 sm:max-w-[300px] sm:text-xl md:max-w-none md:text-3xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                GoHighLevel, n8n, Ads, AI &amp; Integration
              </h1>

              <p className={`${mono.className} mt-1 text-xs text-gray-400 sm:text-sm`}>Randy Olais</p>
            </div>
          </div>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gray-700 transition-colors duration-150 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 md:hidden"
            style={{ ['--tw-ring-color' as string]: ACCENT }}
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-200 ${
                  menuOpen ? 'top-2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-2 block h-0.5 w-6 bg-current transition-opacity duration-200 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-200 ${
                  menuOpen ? 'top-2 -rotate-45' : 'top-4'
                }`}
              />
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden gap-10 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-5 text-lg font-medium transition-colors duration-150 ${
                  isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full" style={{ background: ACCENT }} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation */}
        <nav
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors duration-150"
                  style={
                    isActive
                      ? { background: ACCENT_SOFT, color: ACCENT }
                      : { color: '#4B5563' }
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;