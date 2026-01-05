import { SimulationScenario } from '@/app/types';

interface ScenarioHeatmapProps {
  scenarios: SimulationScenario[];
}

export default function ScenarioHeatmap({ scenarios }: ScenarioHeatmapProps) {
  const topScenarios = scenarios.slice(0, 100);
  const optimal = scenarios.filter(s => s.status === 'optimal').length;
  const suboptimal = scenarios.filter(s => s.status === 'suboptimal').length;
  const rejected = scenarios.filter(s => s.status === 'rejected').length;

  return (
    <div className="card">
      <h3 className="text-xl font-bold mb-4">Simulation Scenarios Overview</h3>
      
      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-[#0A0E27] rounded-lg p-4 border border-[#00D68F]/20">
          <div className="text-2xl font-bold text-[#00D68F] mb-1">{optimal}</div>
          <div className="text-sm text-[#8B92B0]">Optimal (85%+)</div>
        </div>
        <div className="bg-[#0A0E27] rounded-lg p-4 border border-[#FFB946]/20">
          <div className="text-2xl font-bold text-[#FFB946] mb-1">{suboptimal}</div>
          <div className="text-sm text-[#8B92B0]">Suboptimal (65-85%)</div>
        </div>
        <div className="bg-[#0A0E27] rounded-lg p-4 border border-[#FF4757]/20">
          <div className="text-2xl font-bold text-[#FF4757] mb-1">{rejected}</div>
          <div className="text-sm text-[#8B92B0]">Rejected (&lt;65%)</div>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="mb-4">
        <p className="text-sm text-[#8B92B0] mb-2">Top 100 Scenarios by Confidence Score</p>
        <div className="grid grid-cols-10 gap-1">
          {topScenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="aspect-square rounded transition-all hover:scale-110 cursor-pointer"
              style={{
                backgroundColor: 
                  scenario.status === 'optimal' ? '#00D68F' :
                  scenario.status === 'suboptimal' ? '#FFB946' : '#FF4757',
                opacity: scenario.confidenceScore / 100,
              }}
              title={`${scenario.id}: ${scenario.confidenceScore.toFixed(1)}%`}
            />
          ))}
        </div>
      </div>

      {/* Winner Highlight */}
      <div className="bg-[#FF6B00]/10 border border-[#FF6B00] rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-[#FF6B00] mb-1">Winner: Workflow #247</div>
            <div className="text-sm text-[#C4C9D9]">Ranked #1 out of 1,000 scenarios</div>
          </div>
          <div className="text-3xl font-bold text-[#FF6B00]">94.7%</div>
        </div>
      </div>
    </div>
  );
}