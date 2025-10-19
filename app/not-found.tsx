export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#180B2B] to-[#0B0716] text-white">
      <div className="text-center">
        <h1 className="text-4xl font-serif mb-4">404 - Page Not Found</h1>
        <p className="text-white/80 mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="btn-gradient text-white px-6 py-3 rounded-full">
          Go Home
        </a>
      </div>
    </div>
  );
}


