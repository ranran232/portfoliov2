import { Metadata } from 'next';
import DemoVideosSection from "@/components/DemoVideosSection";

export const metadata: Metadata = {
  title: 'Demo Videos - Ads & Automation Hub',
  description: 'Demo videos section of Ads & Automation Hub',
};

export default function DemoVideosPage() {
  const demoVideos = [
    {
      title: 'Set Up Meta Conversion API with Funnel Events',
      url: 'https://app.airtimetools.com/recorder/s/z_mBC14FEqV9ayVVuelgJa',
      thumbnail: '/funnel-event.png'
    },
    {
      title: 'Set Up Meta Conversion API with Lead Events',
      url: 'https://app.airtimetools.com/recorder/s/z_C9e3TQB0JOxLVdpeMpZz',
      thumbnail: '/lead-event.png'
    }
  ];

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Demo Videos
        </h1>
        <DemoVideosSection videos={demoVideos} />
      </div>
    </main>
  );
}