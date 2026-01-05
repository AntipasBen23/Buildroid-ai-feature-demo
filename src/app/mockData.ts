import {
  SimulationScenario,
  DecisionNode,
  WinningWorkflow,
  Robot,
  RiskFactor,
  AlternativeWorkflow,
  DriftMetrics,
  RobotPerformance,
  PredictiveAlert,
  HistoricalPrediction,
  ROIMetrics,
  ProjectInfo,
  MethodMetrics,
  SavingsData,
  Milestone,
} from './types';

// Generate 1000 simulation scenarios
export const generateSimulationScenarios = (): SimulationScenario[] => {
  const scenarios: SimulationScenario[] = [];
  
  for (let i = 0; i < 1000; i++) {
    const efficiency = Math.random() * 100;
    const costReduction = Math.random() * 40;
    const timeReduction = Math.random() * 50;
    const safetyScore = 60 + Math.random() * 40;
    const qualityScore = 70 + Math.random() * 30;
    
    // Calculate confidence score based on other metrics
    const confidenceScore = (
      efficiency * 0.3 +
      costReduction * 0.2 +
      timeReduction * 0.2 +
      safetyScore * 0.15 +
      qualityScore * 0.15
    );
    
    let status: 'optimal' | 'suboptimal' | 'rejected';
    if (confidenceScore > 85) status = 'optimal';
    else if (confidenceScore > 65) status = 'suboptimal';
    else status = 'rejected';
    
    scenarios.push({
      id: `scenario-${i + 1}`,
      workflowId: `workflow-${Math.floor(i / 10) + 1}`,
      efficiency,
      costReduction,
      timeReduction,
      safetyScore,
      qualityScore,
      confidenceScore,
      robotCount: 2 + Math.floor(Math.random() * 4),
      executionTime: 180 + Math.random() * 300,
      materialWaste: Math.random() * 15,
      status,
    });
  }
  
  return scenarios.sort((a, b) => b.confidenceScore - a.confidenceScore);
};

// Decision tree explaining why workflow was chosen
export const getDecisionTree = (): DecisionNode => {
  return {
    id: 'root',
    label: 'Workflow Selection',
    value: 100,
    type: 'root',
    reasoning: 'Analyzing 1,000 simulated scenarios',
    isWinningPath: true,
    children: [
      {
        id: 'efficiency',
        label: 'Efficiency > 85%',
        value: 247,
        type: 'branch',
        reasoning: 'Filtered scenarios with high efficiency scores',
        isWinningPath: true,
        children: [
          {
            id: 'cost',
            label: 'Cost Reduction > 25%',
            value: 89,
            type: 'branch',
            reasoning: 'Prioritized significant cost savings',
            isWinningPath: true,
            children: [
              {
                id: 'safety',
                label: 'Safety Score > 90',
                value: 34,
                type: 'branch',
                reasoning: 'Ensured high safety standards',
                isWinningPath: true,
                children: [
                  {
                    id: 'winner',
                    label: 'Workflow #247',
                    value: 1,
                    type: 'leaf',
                    reasoning: 'Best balance of efficiency, cost, and safety',
                    isWinningPath: true,
                  },
                ],
              },
              {
                id: 'safety-low',
                label: 'Safety Score < 90',
                value: 55,
                type: 'leaf',
                reasoning: 'Rejected due to safety concerns',
                isWinningPath: false,
              },
            ],
          },
          {
            id: 'cost-low',
            label: 'Cost Reduction < 25%',
            value: 158,
            type: 'leaf',
            reasoning: 'Insufficient cost savings',
            isWinningPath: false,
          },
        ],
      },
      {
        id: 'efficiency-low',
        label: 'Efficiency < 85%',
        value: 753,
        type: 'leaf',
        reasoning: 'Below minimum efficiency threshold',
        isWinningPath: false,
      },
    ],
  };
};

// Winning workflow details
export const getWinningWorkflow = (): WinningWorkflow => {
  return {
    id: 'workflow-247',
    name: 'Multi-Robot Masonry Workflow #247',
    confidenceScore: 94.7,
    robots: [
      {
        id: 'robot-1',
        type: 'BLR',
        name: 'Block Layer Robot #1',
        role: 'Primary block placement',
        utilizationRate: 92,
        status: 'active',
      },
      {
        id: 'robot-2',
        type: 'AMR',
        name: 'Material Handler #1',
        role: 'Block supply & positioning',
        utilizationRate: 88,
        status: 'active',
      },
      {
        id: 'robot-3',
        type: 'AMR',
        name: 'Material Handler #2',
        role: 'Mortar mixing & delivery',
        utilizationRate: 76,
        status: 'active',
      },
      {
        id: 'robot-4',
        type: 'QC',
        name: 'Quality Control Scanner',
        role: 'Real-time quality inspection',
        utilizationRate: 65,
        status: 'active',
      },
    ],
    estimatedCompletion: 284,
    costSavings: 12750,
    timeSavings: 67,
    reasoning: [
      'Optimal robot utilization (85%+ average across all units)',
      'Minimal material waste (3.2% vs industry average 12%)',
      'Highest safety score (94/100) among top candidates',
      'Proven pattern in 127 previous simulations',
      'Best performance in complex corner configurations',
      'Redundancy built-in for 99.2% uptime guarantee',
    ],
    riskFactors: [
      {
        id: 'risk-1',
        severity: 'low',
        description: 'Weather sensitivity during mortar curing',
        mitigation: 'Indoor staging area with climate control',
        probability: 12,
      },
      {
        id: 'risk-2',
        severity: 'medium',
        description: 'AMR navigation in congested areas',
        mitigation: 'Dynamic pathfinding with 2m safety buffer',
        probability: 28,
      },
      {
        id: 'risk-3',
        severity: 'low',
        description: 'Network latency affecting coordination',
        mitigation: 'Local edge computing with offline fallback',
        probability: 8,
      },
    ],
    alternatives: [
      {
        id: 'workflow-183',
        name: 'Workflow #183',
        confidenceScore: 91.3,
        whyNotChosen: 'Lower robot utilization (73%) led to 14% longer completion time',
      },
      {
        id: 'workflow-421',
        name: 'Workflow #421',
        confidenceScore: 89.8,
        whyNotChosen: 'Higher material waste (6.7%) and safety score only 87/100',
      },
      {
        id: 'workflow-92',
        name: 'Workflow #92',
        confidenceScore: 88.4,
        whyNotChosen: 'Requires 5 robots vs 4, increasing coordination complexity by 31%',
      },
    ],
  };
};

// Initial drift metrics
export const getInitialDriftMetrics = (): DriftMetrics => {
  return {
    positionAccuracy: 98.7,
    timingVariance: 2.3,
    materialUsageVariance: 1.8,
    qualityScore: 96.2,
    lastUpdated: new Date(),
  };
};

// Robot performance comparison
export const getRobotPerformance = (): RobotPerformance[] => {
  return [
    {
      robotId: 'robot-1',
      robotName: 'Block Layer Robot #1',
      simulated: {
        blocksPlaced: 187,
        accuracy: 99.1,
        speed: 42.3,
        uptime: 96.5,
      },
      actual: {
        blocksPlaced: 184,
        accuracy: 98.7,
        speed: 41.6,
        uptime: 97.2,
      },
      drift: 1.6,
      status: 'in-sync',
    },
    {
      robotId: 'robot-2',
      robotName: 'Material Handler #1',
      simulated: {
        blocksPlaced: 0,
        accuracy: 97.8,
        speed: 38.5,
        uptime: 94.2,
      },
      actual: {
        blocksPlaced: 0,
        accuracy: 97.1,
        speed: 37.9,
        uptime: 95.8,
      },
      drift: 1.2,
      status: 'in-sync',
    },
    {
      robotId: 'robot-3',
      robotName: 'Material Handler #2',
      simulated: {
        blocksPlaced: 0,
        accuracy: 96.4,
        speed: 35.2,
        uptime: 92.8,
      },
      actual: {
        blocksPlaced: 0,
        accuracy: 95.8,
        speed: 34.6,
        uptime: 94.1,
      },
      drift: 1.8,
      status: 'in-sync',
    },
    {
      robotId: 'robot-4',
      robotName: 'Quality Control Scanner',
      simulated: {
        blocksPlaced: 0,
        accuracy: 99.7,
        speed: 45.8,
        uptime: 98.3,
      },
      actual: {
        blocksPlaced: 0,
        accuracy: 99.4,
        speed: 45.1,
        uptime: 98.9,
      },
      drift: 0.8,
      status: 'in-sync',
    },
  ];
};

// Predictive alerts
export const getPredictiveAlerts = (): PredictiveAlert[] => {
  return [
    {
      id: 'alert-1',
      timestamp: new Date(Date.now() - 1000 * 60 * 12),
      severity: 'warning',
      title: 'Potential Material Shortage Detected',
      description: 'Current block consumption rate 8% higher than simulated baseline',
      prediction: 'Material stockout likely in 47 minutes if trend continues',
      recommendation: 'Schedule early material delivery or reduce placement speed by 6%',
      confidence: 87,
      historicalAccuracy: 92,
      status: 'active',
    },
    {
      id: 'alert-2',
      timestamp: new Date(Date.now() - 1000 * 60 * 23),
      severity: 'info',
      title: 'Efficiency Opportunity Identified',
      description: 'AMR #2 idle time 14% above optimal',
      prediction: 'Workflow adjustment could improve overall efficiency by 3.2%',
      recommendation: 'Reassign mortar mixing to earlier preparation phase',
      confidence: 78,
      historicalAccuracy: 84,
      status: 'resolved',
    },
    {
      id: 'alert-3',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      severity: 'critical',
      title: 'Quality Variance Approaching Threshold',
      description: 'Block placement accuracy drifting: 98.7% → 97.2% over last 30 minutes',
      prediction: 'May require rework if accuracy drops below 97% threshold',
      recommendation: 'Immediate recalibration recommended for BLR #1',
      confidence: 94,
      historicalAccuracy: 96,
      status: 'active',
    },
  ];
};

// Historical predictions
export const getHistoricalPredictions = (): HistoricalPrediction[] => {
  return [
    {
      id: 'hist-1',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      prediction: 'Network latency spike predicted in 15 minutes',
      outcome: 'Latency increased 23ms as predicted, backup system activated automatically',
      accuracy: 96,
      timeSaved: 12,
    },
    {
      id: 'hist-2',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4),
      prediction: 'Robot coordination conflict at corner junction',
      outcome: 'Conflict detected 3 minutes early, robots rerouted successfully',
      accuracy: 94,
      timeSaved: 8,
    },
    {
      id: 'hist-3',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
      prediction: 'Mortar consistency variance detected',
      outcome: 'Early adjustment prevented 47 blocks from quality rejection',
      accuracy: 91,
      timeSaved: 23,
    },
    {
      id: 'hist-4',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8),
      prediction: 'Material delivery timing optimization available',
      outcome: 'Delivery scheduled 12 minutes earlier, eliminated idle time',
      accuracy: 88,
      timeSaved: 18,
    },
  ];
};

// ROI Metrics
export const getROIMetrics = (): ROIMetrics => {
  const projectInfo: ProjectInfo = {
    name: 'Villa District Phase 2 - Building C',
    location: 'Dubai, UAE',
    startDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14),
    estimatedCompletion: new Date(Date.now() + 1000 * 60 * 60 * 24 * 18),
    totalArea: 2840,
    blockCount: 18650,
  };

  const traditional: MethodMetrics = {
    timeSpent: 512,
    laborCost: 89600,
    materialWaste: 12.4,
    qualityScore: 78,
    workersRequired: 8,
    dailyOutput: 5.2,
  };

  const buildroid: MethodMetrics = {
    timeSpent: 168,
    laborCost: 31200,
    materialWaste: 3.2,
    qualityScore: 96,
    workersRequired: 2,
    dailyOutput: 17.8,
  };

  const savings: SavingsData = {
    totalCostSavings: 58400,
    totalTimeSavings: 344,
    costReductionPercentage: 65.2,
    timeReductionPercentage: 67.2,
    qualityImprovement: 23.1,
    laborReduction: 6,
  };

  const milestones: Milestone[] = [
    {
      id: 'milestone-1',
      name: 'Foundation Level Complete',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
      completed: true,
      metrics: {
        areaCompleted: 420,
        efficiency: 94,
        quality: 97,
      },
    },
    {
      id: 'milestone-2',
      name: 'First Floor Complete',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
      completed: true,
      metrics: {
        areaCompleted: 890,
        efficiency: 96,
        quality: 96,
      },
    },
    {
      id: 'milestone-3',
      name: 'Second Floor 60% Complete',
      date: new Date(),
      completed: false,
      metrics: {
        areaCompleted: 1320,
        efficiency: 95,
        quality: 96,
      },
    },
    {
      id: 'milestone-4',
      name: 'Second Floor Complete',
      date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 8),
      completed: false,
      metrics: {
        areaCompleted: 1840,
        efficiency: 95,
        quality: 95,
      },
    },
    {
      id: 'milestone-5',
      name: 'Final Inspection',
      date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 18),
      completed: false,
      metrics: {
        areaCompleted: 2840,
        efficiency: 94,
        quality: 96,
      },
    },
  ];

  return {
    project: projectInfo,
    traditional,
    buildroid,
    savings,
    milestones,
  };
};