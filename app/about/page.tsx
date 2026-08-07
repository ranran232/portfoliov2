import About from '@/components/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Ads & Automation Hub',
  description: 'About page of Ads & Automation Hub',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <About/>
    </main>
  );
}