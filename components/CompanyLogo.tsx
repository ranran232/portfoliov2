'use client';

import { useState } from 'react';
import { IBM_Plex_Mono } from 'next/font/google';

const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

function companyInitials(company: string) {
  const words = company.split(' ').filter(Boolean);
  return words
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');
}

export default function CompanyLogo({ logo, company }: { logo?: string; company: string }) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(logo) && !errored;

  return (
    <div className="h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
      {showImage ? (
        <img
          src={logo}
          alt={`${company} logo`}
          className="h-full w-full object-contain"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className={`${mono.className} flex h-full w-full items-center justify-center bg-gray-100 rounded text-xs font-medium text-gray-400`}>
          {companyInitials(company)}
        </div>
      )}
    </div>
  );
}