import { MethodMetrics, SavingsData } from '@/app/types';

interface ComparisonMetricsProps {
  traditional: MethodMetrics;
  buildroid: MethodMetrics;
  savings: SavingsData;
}

export default function ComparisonMetrics({ traditional, buildroid, savings }: ComparisonMetricsProps) {
  return (
    <div className="card">
      <h3 className="text-xl font-bold mb-6">Method Comparison</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Traditional Method */}
        <div className="bg-[#0A0E27] rounded-lg p-5 border border-[#FF4757]/20">
          <h4 className="text-lg font-bold text-[#FF4757] mb-4">Traditional Method</h4>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[#8B92B0]">Time Spent</span>
              <span className="font-semibold text-[#C4C9D9]">{traditional.timeSpent} hrs</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8B92B0]">Labor Cost</span>
              <span className="font-semibold text-[#C4C9D9]">${traditional.laborCost.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8B92B0]">Material Waste</span>
              <span className="font-semibold text-[#C4C9D9]">{traditional.materialWaste}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8B92B0]">Quality Score</span>
              <span className="font-semibold text-[#C4C9D9]">{traditional.qualityScore}/100</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8B92B0]">Workers Required</span>
              <span className="font-semibold text-[#C4C9D9]">{traditional.workersRequired}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8B92B0]">Daily Output</span>
              <span className="font-semibold text-[#C4C9D9]">{traditional.dailyOutput} m²</span>
            </div>
          </div>
        </div>

        {/* Buildroid Method */}
        <div className="bg-[#0A0E27] rounded-lg p-5 border border-[#00D68F]/20">
          <h4 className="text-lg font-bold text-[#00D68F] mb-4">Buildroid Method</h4>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[#8B92B0]">Time Spent</span>
              <span className="font-semibold text-[#00D68F]">{buildroid.timeSpent} hrs</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8B92B0]">Labor Cost</span>
              <span className="font-semibold text-[#00D68F]">${buildroid.laborCost.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8B92B0]">Material Waste</span>
              <span className="font-semibold text-[#00D68F]">{buildroid.materialWaste}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8B92B0]">Quality Score</span>
              <span className="font-semibold text-[#00D68F]">{buildroid.qualityScore}/100</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8B92B0]">Workers Required</span>
              <span className="font-semibold text-[#00D68F]">{buildroid.workersRequired}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8B92B0]">Daily Output</span>
              <span className="font-semibold text-[#00D68F]">{buildroid.dailyOutput} m²</span>
            </div>
          </div>
        </div>
      </div>

      {/* Savings Summary */}
      <div className="bg-gradient-to-r from-[#FF6B00]/10 to-[#00D68F]/10 rounded-lg p-5 border border-[#FF6B00]/30">
        <h4 className="text-lg font-bold text-[#FF6B00] mb-4">Buildroid Impact</h4>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00D68F] mb-1">
              {savings.costReductionPercentage.toFixed(1)}%
            </div>
            <div className="text-sm text-[#8B92B0]">Cost Reduction</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-[#00D68F] mb-1">
              {savings.timeReductionPercentage.toFixed(1)}%
            </div>
            <div className="text-sm text-[#8B92B0]">Time Reduction</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-[#00D68F] mb-1">
              {savings.qualityImprovement.toFixed(1)}%
            </div>
            <div className="text-sm text-[#8B92B0]">Quality Boost</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-[#00D68F] mb-1">
              -{savings.laborReduction}
            </div>
            <div className="text-sm text-[#8B92B0]">Workers Saved</div>
          </div>
        </div>
      </div>
    </div>
  );
}