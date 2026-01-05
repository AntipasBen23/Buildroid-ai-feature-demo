// Simulation Scenario Types
export interface SimulationScenario {
  id: string;
  workflowId: string;
  efficiency: number; // 0-100
  costReduction: number; // percentage
  timeReduction: number; // percentage
  safetyScore: number; // 0-100
  qualityScore: number; // 0-100
  confidenceScore: number; // 0-100
  robotCount: number;
  executionTime: number; // minutes
  materialWaste: number; // percentage
  status: 'optimal' | 'suboptimal' | 'rejected';
}

// Decision Tree Node
export interface DecisionNode {
  id: string;
  label: string;
  value: number;
  type: 'root' | 'branch' | 'leaf';
  children?: DecisionNode[];
  isWinningPath?: boolean;
  reasoning: string;
}

// Winning Workflow Details
export interface WinningWorkflow {
  id: string;
  name: string;
  confidenceScore: number;
  robots: Robot[];
  estimatedCompletion: number; // minutes
  costSavings: number; // USD
  timeSavings: number; // percentage
  reasoning: string[];
  riskFactors: RiskFactor[];
  alternatives: AlternativeWorkflow[];
}

export interface Robot {
  id: string;
  type: 'BLR' | 'AMR' | 'QC' | 'MATERIAL_HANDLER';
  name: string;
  role: string;
  utilizationRate: number; // percentage
  status: 'active' | 'idle' | 'maintenance';
}

export interface RiskFactor {
  id: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  mitigation: string;
  probability: number; // percentage
}

export interface AlternativeWorkflow {
  id: string;
  name: string;
  confidenceScore: number;
  whyNotChosen: string;
}

// Digital Twin Sync Types
export interface DriftMetrics {
  positionAccuracy: number; // percentage
  timingVariance: number; // seconds
  materialUsageVariance: number; // percentage
  qualityScore: number; // 0-100
  lastUpdated: Date;
}

export interface RobotPerformance {
  robotId: string;
  robotName: string;
  simulated: PerformanceData;
  actual: PerformanceData;
  drift: number; // percentage difference
  status: 'in-sync' | 'minor-drift' | 'major-drift';
}

export interface PerformanceData {
  blocksPlaced: number;
  accuracy: number; // percentage
  speed: number; // blocks per hour
  uptime: number; // percentage
}

// Predictive Alert Types
export interface PredictiveAlert {
  id: string;
  timestamp: Date;
  severity: 'info' | 'warning' | 'critical';
  title: string;
  description: string;
  prediction: string;
  recommendation: string;
  confidence: number; // percentage
  historicalAccuracy: number; // percentage
  status: 'active' | 'resolved' | 'dismissed';
}

export interface HistoricalPrediction {
  id: string;
  timestamp: Date;
  prediction: string;
  outcome: string;
  accuracy: number; // percentage
  timeSaved: number; // minutes
}

// ROI Tracking Types
export interface ROIMetrics {
  project: ProjectInfo;
  traditional: MethodMetrics;
  buildroid: MethodMetrics;
  savings: SavingsData;
  milestones: Milestone[];
}

export interface ProjectInfo {
  name: string;
  location: string;
  startDate: Date;
  estimatedCompletion: Date;
  totalArea: number; // square meters
  blockCount: number;
}

export interface MethodMetrics {
  timeSpent: number; // hours
  laborCost: number; // USD
  materialWaste: number; // percentage
  qualityScore: number; // 0-100
  workersRequired: number;
  dailyOutput: number; // square meters
}

export interface SavingsData {
  totalCostSavings: number; // USD
  totalTimeSavings: number; // hours
  costReductionPercentage: number;
  timeReductionPercentage: number;
  qualityImprovement: number; // percentage
  laborReduction: number; // number of workers
}

export interface Milestone {
  id: string;
  name: string;
  date: Date;
  completed: boolean;
  metrics: {
    areaCompleted: number; // square meters
    efficiency: number; // percentage
    quality: number; // score
  };
}

// Dashboard View Types
export type DashboardView = 
  | 'pre-deployment' 
  | 'digital-twin' 
  | 'predictive-alerts' 
  | 'roi-validation';

// Chart Data Types
export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface TimeSeriesData {
  timestamp: Date;
  value: number;
  label?: string;
}

// Live Update Types (for simulating real-time data)
export interface LiveUpdate {
  type: 'drift' | 'alert' | 'roi' | 'performance';
  timestamp: Date;
  data: any;
}