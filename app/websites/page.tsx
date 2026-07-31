import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Websites - Ads & Automation Hub',
  description: 'Websites section of Ads & Automation Hub',
};

export default function WebsitesPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Websites
        </h1>
        <p className="text-center text-gray-600">
          This is the Websites page. Content coming soon!
        </p>
      </div>
    </main>
  );
}