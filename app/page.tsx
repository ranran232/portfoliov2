export default function HomePage() {

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Introduction Video</h2>
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative w-full h-0 pb-[56.25%] bg-gray-200">
              {/* Placeholder for video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="rounded-lg bg-white/90 px-6 py-3 flex items-center gap-2 hover:bg-white/95 transition-colors">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5l6 4-6 4V5z" />
                  </svg>
                  <span className="text-lg font-medium">Play Video</span>
                </button>
              </div>
            </div>
            <p className="mt-4 text-center text-gray-600">
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}