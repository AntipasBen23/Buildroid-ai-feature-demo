import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Logo/Brand */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="gradient-text">SimTwin</span> Dashboard
        </h1>
        <p className="text-xl text-[#8B92B0] max-w-2xl">
          See Simulation Confidence Before Deployment
        </p>
      </div>

      {/* Hero Content */}
      <div className="card max-w-3xl text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Transparency Between Simulation & Reality
        </h2>
        <p className="text-[#C4C9D9] mb-6">
          Built for Buildroid AI - giving contractors confidence in AI-driven 
          multi-robot construction workflows through real-time visibility into 
          simulation reasoning, digital twin sync, and predictive analytics.
        </p>
        
        <Link href="/dashboard" className="btn-primary inline-block glow-orange">
          View Live Demo Project
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
        <div className="card text-center">
          <div className="text-3xl font-bold text-[#FF6B00] mb-1">1,000+</div>
          <div className="text-sm text-[#8B92B0]">Scenarios Tested</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-[#00D68F] mb-1">94.7%</div>
          <div className="text-sm text-[#8B92B0]">Confidence Score</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-[#FFB946] mb-1">67%</div>
          <div className="text-sm text-[#8B92B0]">Time Savings</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-[#FF6B00] mb-1">$58K</div>
          <div className="text-sm text-[#8B92B0]">Cost Reduction</div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-[#8B92B0] text-sm">
        <p>Prototype by Antipas Ben | Built for Buildroid AI</p>
      </div>
    </div>
  );
}