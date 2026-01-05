import { DriftMetrics } from '@/app/types';

interface LiveDriftMetricsProps {
  metrics: DriftMetrics;
}

export default function LiveDriftMetrics({ metrics }: LiveDriftMetricsProps) {
  const getStatusColor = (value: number, type: 'accuracy' | 'variance' | 'quality') => {
    if (type === 'accuracy' || type === 'quality') {
      if (value >= 98) return 'text-[#00D68F]';
      if (value >= 95) return 'text-[#FFB946]';
      return 'text-[#FF4757]';
    } else {
      if (value <= 2) return 'text-[#00D68F]';
      if (value <= 4) return 'text-[#FFB946]';
      return 'text-[#FF4757]';
    }
  };

  const getStatusBadge = () => {
    const avgDrift = (
      (100 - metrics.positionAccuracy) + 
      metrics.timingVariance + 
      metrics.materialUsageVariance
    ) / 3;

    if (avgDrift < 2) return <span className="badge-success">In Sync</span>;
    if (avgDrift < 4) return <span className="badge-warning">Minor Drift</span>;
    return <span className="badge-error">Major Drift</span>;
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold mb-1">Live Drift Metrics</h3>
          <p className="text-sm text-[#8B92B0]">
            Updated {new Date(metrics.lastUpdated).toLocaleTimeString()}
          </p>
        </div>
        {getStatusBadge()}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Position Accuracy */}
        <div className="bg-[#0A0E27] rounded-lg p-4 border border-[#8B92B0]/10">
          <div className="text-sm text-[#8B92B0] mb-2">Position Accuracy</div>
          <div className={`text-3xl font-bold mb-2 ${getStatusColor(metrics.positionAccuracy, 'accuracy')}`}>
            {metrics.positionAccuracy.toFixed(1)}%
          </div>
          <div className="flex-1 bg-[#151B3D] rounded-full h-2 overflow-hidden">
            <div 
              className="bg-[#00D68F] h-full transition-all duration-500"
              style={{ width: `${metrics.positionAccuracy}%` }}
            ></div>
          </div>
        </div>

        {/* Timing Variance */}
        <div className="bg-[#0A0E27] rounded-lg p-4 border border-[#8B92B0]/10">
          <div className="text-sm text-[#8B92B0] mb-2">Timing Variance</div>
          <div className={`text-3xl font-bold mb-2 ${getStatusColor(metrics.timingVariance, 'variance')}`}>
            ±{metrics.timingVariance.toFixed(1)}s
          </div>
          <div className="flex-1 bg-[#151B3D] rounded-full h-2 overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${
                metrics.timingVariance <= 2 ? 'bg-[#00D68F]' : 
                metrics.timingVariance <= 4 ? 'bg-[#FFB946]' : 'bg-[#FF4757]'
              }`}
              style={{ width: `${Math.min(100, (metrics.timingVariance / 5) * 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Material Usage Variance */}
        <div className="bg-[#0A0E27] rounded-lg p-4 border border-[#8B92B0]/10">
          <div className="text-sm text-[#8B92B0] mb-2">Material Variance</div>
          <div className={`text-3xl font-bold mb-2 ${getStatusColor(metrics.materialUsageVariance, 'variance')}`}>
            ±{metrics.materialUsageVariance.toFixed(1)}%
          </div>
          <div className="flex-1 bg-[#151B3D] rounded-full h-2 overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${
                metrics.materialUsageVariance <= 2 ? 'bg-[#00D68F]' : 
                metrics.materialUsageVariance <= 4 ? 'bg-[#FFB946]' : 'bg-[#FF4757]'
              }`}
              style={{ width: `${Math.min(100, (metrics.materialUsageVariance / 5) * 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Quality Score */}
        <div className="bg-[#0A0E27] rounded-lg p-4 border border-[#8B92B0]/10">
          <div className="text-sm text-[#8B92B0] mb-2">Quality Score</div>
          <div className={`text-3xl font-bold mb-2 ${getStatusColor(metrics.qualityScore, 'quality')}`}>
            {metrics.qualityScore.toFixed(1)}
          </div>
          <div className="flex-1 bg-[#151B3D] rounded-full h-2 overflow-hidden">
            <div 
              className="bg-[#00D68F] h-full transition-all duration-500"
              style={{ width: `${metrics.qualityScore}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}