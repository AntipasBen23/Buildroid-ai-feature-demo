import { WinningWorkflow } from '@/app/types';

interface WinningWorkflowCardProps {
  workflow: WinningWorkflow;
}

export default function WinningWorkflowCard({ workflow }: WinningWorkflowCardProps) {
  return (
    <div className="card">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">{workflow.name}</h3>
          <p className="text-[#8B92B0]">Optimized for efficiency, safety, and cost reduction</p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold text-[#00D68F] mb-1">{workflow.confidenceScore}%</div>
          <div className="text-sm text-[#8B92B0]">Confidence Score</div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#0A0E27] rounded-lg p-4">
          <div className="text-2xl font-bold text-[#FF6B00] mb-1">{workflow.timeSavings}%</div>
          <div className="text-sm text-[#8B92B0]">Time Savings</div>
        </div>
        <div className="bg-[#0A0E27] rounded-lg p-4">
          <div className="text-2xl font-bold text-[#00D68F] mb-1">${workflow.costSavings.toLocaleString()}</div>
          <div className="text-sm text-[#8B92B0]">Cost Savings</div>
        </div>
        <div className="bg-[#0A0E27] rounded-lg p-4">
          <div className="text-2xl font-bold text-[#FFB946] mb-1">{workflow.estimatedCompletion} min</div>
          <div className="text-sm text-[#8B92B0]">Est. Completion</div>
        </div>
      </div>

      {/* Robots */}
      <div className="mb-6">
        <h4 className="text-lg font-bold mb-3">Robot Configuration</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {workflow.robots.map((robot) => (
            <div key={robot.id} className="bg-[#0A0E27] rounded-lg p-4 border border-[#8B92B0]/10">
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold text-[#C4C9D9]">{robot.name}</div>
                <div className={`
                  w-2 h-2 rounded-full
                  ${robot.status === 'active' ? 'bg-[#00D68F]' : 'bg-[#8B92B0]'}
                `}></div>
              </div>
              <div className="text-sm text-[#8B92B0] mb-2">{robot.role}</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-[#151B3D] rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-[#FF6B00] h-full transition-all duration-500"
                    style={{ width: `${robot.utilizationRate}%` }}
                  ></div>
                </div>
                <div className="text-sm font-semibold text-[#FF6B00]">{robot.utilizationRate}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reasoning */}
      <div className="mb-6">
        <h4 className="text-lg font-bold mb-3">Why This Workflow Won</h4>
        <ul className="space-y-2">
          {workflow.reasoning.map((reason, index) => (
            <li key={index} className="flex items-start gap-2 text-[#C4C9D9]">
              <span className="text-[#00D68F] mt-1">✓</span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Risk Factors */}
      <div className="mb-6">
        <h4 className="text-lg font-bold mb-3">Risk Assessment & Mitigation</h4>
        <div className="space-y-3">
          {workflow.riskFactors.map((risk) => (
            <div key={risk.id} className="bg-[#0A0E27] rounded-lg p-4 border-l-4" style={{
              borderColor: risk.severity === 'high' ? '#FF4757' : risk.severity === 'medium' ? '#FFB946' : '#00D68F'
            }}>
              <div className="flex items-start justify-between mb-2">
                <div className="font-semibold text-[#C4C9D9]">{risk.description}</div>
                <span className={`
                  px-2 py-1 rounded text-xs font-semibold
                  ${risk.severity === 'high' ? 'bg-[#FF4757]/10 text-[#FF4757]' : ''}
                  ${risk.severity === 'medium' ? 'bg-[#FFB946]/10 text-[#FFB946]' : ''}
                  ${risk.severity === 'low' ? 'bg-[#00D68F]/10 text-[#00D68F]' : ''}
                `}>
                  {risk.probability}%
                </span>
              </div>
              <div className="text-sm text-[#8B92B0]">
                <span className="font-semibold text-[#C4C9D9]">Mitigation:</span> {risk.mitigation}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alternatives */}
      <div>
        <h4 className="text-lg font-bold mb-3">Alternative Workflows Considered</h4>
        <div className="space-y-3">
          {workflow.alternatives.map((alt) => (
            <div key={alt.id} className="bg-[#0A0E27] rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold text-[#C4C9D9]">{alt.name}</div>
                <div className="text-[#8B92B0] font-semibold">{alt.confidenceScore}%</div>
              </div>
              <div className="text-sm text-[#8B92B0]">{alt.whyNotChosen}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}