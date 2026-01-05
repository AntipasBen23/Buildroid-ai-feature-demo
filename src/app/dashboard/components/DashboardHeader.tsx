import Link from 'next/link';

export default function DashboardHeader() {
  return (
    <div className="card mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <Link href="/" className="inline-block mb-2 text-[#8B92B0] hover:text-[#FF6B00] transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">SimTwin</span> Dashboard
          </h1>
          <p className="text-[#C4C9D9]">
            Villa District Phase 2 - Building C | Dubai, UAE
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#00D68F] rounded-full animate-pulse"></div>
            <span className="text-sm text-[#C4C9D9]">Live</span>
          </div>
          <div className="badge-success">
            Active Deployment
          </div>
        </div>
      </div>
    </div>
  );
}