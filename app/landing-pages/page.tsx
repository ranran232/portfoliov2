import { Metadata } from 'next';
import LandingPagesSection from '@/components/LandingPagesSection';

export const metadata: Metadata = {
  title: 'Landing Pages - Ads & Automation Hub',
  description: 'Landing pages section of Ads & Automation Hub',
};

export default function LandingPagesPage() {
  const items = [
    {
      title: 'Personal Funnel',
      url: 'https://randy-mu.vercel.app/funnel',
      imageUrl: '/aster.png',
    },
    {
      title: 'Clareflow',
      url: 'https://www.clareflow.io/',
      imageUrl: '/clareflow.png',
    },
  ];

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Landing Pages
        </h1>
        <LandingPagesSection items={items} />
      </div>
    </main>
  );
}