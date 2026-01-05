'use client';

import { useState, useEffect } from 'react';
import { getInitialDriftMetrics, getRobotPerformance } from '@/app/mockData';
import { DriftMetrics, RobotPerformance } from '@/app/types';
import LiveDriftMetrics from './LiveDriftMetrics';
import RobotPerformanceCards from './RobotPerformanceCards';
import VideoComparison from './VideoComparison';

export default function DigitalTwinView() {
  const [driftMetrics, setDriftMetrics] = useState<DriftMetrics>(getInitialDriftMetrics());
  const [robotPerformance] = useState<RobotPerformance[]>(getRobotPerformance());

  // Simulate real-time drift updates
  useEffect(() => {
    const interval = setInterval(() => {
      setDriftMetrics(prev => ({
        positionAccuracy: Math.max(95, Math.min(99.5, prev.positionAccuracy + (Math.random() - 0.5) * 0.3)),
        timingVariance: Math.max(0, Math.min(5, prev.timingVariance + (Math.random() - 0.5) * 0.4)),
        materialUsageVariance: Math.max(0, Math.min(4, prev.materialUsageVariance + (Math.random() - 0.5) * 0.3)),
        qualityScore: Math.max(94, Math.min(98, prev.qualityScore + (Math.random() - 0.5) * 0.4)),
        lastUpdated: new Date(),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-2">Live Digital Twin Synchronization</h2>
        <p className="text-[#8B92B0]">
          Real-time comparison between Omniverse simulation and on-site deployment
        </p>
      </div>

      {/* Video Comparison */}
      <VideoComparison />

      {/* Live Drift Metrics */}
      <LiveDriftMetrics metrics={driftMetrics} />

      {/* Robot Performance */}
      <RobotPerformanceCards performance={robotPerformance} />
    </div>
  );
}