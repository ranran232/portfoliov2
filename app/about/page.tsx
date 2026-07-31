import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Ads & Automation Hub',
  description: 'About page of Ads & Automation Hub',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          About
        </h1>
        <p className="text-center text-gray-600">
          This is the About page. Content coming soon!
        </p>
      </div>
    </main>
  );
}