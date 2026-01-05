'use client';

import { useState } from 'react';

export default function VideoComparison() {
  const [syncStatus] = useState<'synced' | 'drift'>('synced');

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Live Feed Comparison</h3>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${
            syncStatus === 'synced' ? 'bg-[#00D68F] animate-pulse' : 'bg-[#FFB946]'
          }`}></div>
          <span className="text-sm text-[#C4C9D9]">
            {syncStatus === 'synced' ? 'Synchronized' : 'Minor Drift'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Simulated View */}
        <div className="relative">
          <div className="absolute top-3 left-3 z-10 bg-[#FFB946] px-3 py-1 rounded-full text-sm font-semibold">
            Omniverse Simulation
          </div>
          <div className="aspect-video bg-gradient-to-br from-[#FFB946]/20 to-[#FF6B00]/10 rounded-lg border border-[#FFB946]/30 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-3">🤖</div>
              <div className="text-[#FFB946] font-semibold">Simulated Workflow</div>
              <div className="text-sm text-[#8B92B0] mt-1">Block placement in progress...</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-[#8B92B0]">
            Frame: 4,287 | Time: 02:14:36
          </div>
        </div>

        {/* Actual View */}
        <div className="relative">
          <div className="absolute top-3 left-3 z-10 bg-[#00D68F] px-3 py-1 rounded-full text-sm font-semibold">
            Live Robot Feed
          </div>
          <div className="aspect-video bg-gradient-to-br from-[#00D68F]/20 to-[#FF6B00]/10 rounded-lg border border-[#00D68F]/30 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-3">🏗️</div>
              <div className="text-[#00D68F] font-semibold">On-Site Deployment</div>
              <div className="text-sm text-[#8B92B0] mt-1">Live from Dubai, UAE</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-[#8B92B0]">
            Frame: 4,283 | Time: 02:14:38
          </div>
        </div>
      </div>

      <div className="mt-4 bg-[#0A0E27] rounded-lg p-4 border border-[#8B92B0]/10">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-[#8B92B0]">Synchronization Status</div>
            <div className="text-lg font-semibold text-[#00D68F] mt-1">
              98.7% Match | 2.3s Timing Delta
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-[#8B92B0]">Next Sync Check</div>
            <div className="text-lg font-semibold text-[#C4C9D9] mt-1">5 seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
}