'use client';

import { useState, useEffect } from 'react';
import { generateSimulationScenarios, getWinningWorkflow, getDecisionTree } from '@/app/mockData';
import ScenarioHeatmap from './ScenarioHeatmap';
import WinningWorkflowCard from './WinningWorkflowCard';
import DecisionTreeVisualization from './DecisionTreeVisualization';

export default function PreDeploymentView() {
  const [scenarios] = useState(() => generateSimulationScenarios());
  const [workflow] = useState(() => getWinningWorkflow());
  const [decisionTree] = useState(() => getDecisionTree());

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-2">Pre-Deployment Confidence Analysis</h2>
        <p className="text-[#8B92B0]">
          Simulation tested 1,000 scenarios. Here's why workflow #247 was chosen.
        </p>
      </div>

      {/* Scenario Heatmap */}
      <ScenarioHeatmap scenarios={scenarios} />

      {/* Decision Tree */}
      <DecisionTreeVisualization tree={decisionTree} />

      {/* Winning Workflow Details */}
      <WinningWorkflowCard workflow={workflow} />
    </div>
  );
}