'use client';

import { useState, useEffect } from 'react';
import { getROIMetrics } from '@/app/mockData';
import { ROIMetrics } from '@/app/types';
import ProjectOverview from './ProjectOverview';
import ComparisonMetrics from './ComparisonMetrics';
import LiveSavingsCounter from './LiveSavingsCounter';
import MilestoneTracker from './MilestoneTracker';

export default function ROIValidationView() {
  const [roiMetrics] = useState<ROIMetrics>(getROIMetrics());
  const [liveSavings, setLiveSavings] = useState({
    cost: roiMetrics.savings.totalCostSavings,
    time: roiMetrics.savings.totalTimeSavings,
  });

  // Simulate live counter updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveSavings(prev => ({
        cost: prev.cost + Math.random() * 50,
        time: prev.time + Math.random() * 0.5,
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-2">ROI Validation & Tracking</h2>
        <p className="text-[#8B92B0]">
          Real-time comparison: Traditional methods vs Buildroid deployment
        </p>
      </div>

      {/* Project Overview */}
      <ProjectOverview project={roiMetrics.project} />

      {/* Live Savings Counter */}
      <LiveSavingsCounter savings={liveSavings} />

      {/* Comparison Metrics */}
      <ComparisonMetrics 
        traditional={roiMetrics.traditional}
        buildroid={roiMetrics.buildroid}
        savings={roiMetrics.savings}
      />

      {/* Milestone Tracker */}
      <MilestoneTracker milestones={roiMetrics.milestones} />
    </div>
  );
}