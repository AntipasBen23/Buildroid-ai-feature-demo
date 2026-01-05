import { HistoricalPrediction } from '@/app/types';

interface HistoricalPredictionsProps {
  predictions: HistoricalPrediction[];
}

export default function HistoricalPredictions({ predictions }: HistoricalPredictionsProps) {
  const formatTime = (date: Date) => {
    const hours = Math.floor((Date.now() - date.getTime()) / 3600000);
    return `${hours}h ago`;
  };

  const averageAccuracy = predictions.reduce((acc, p) => acc + p.accuracy, 0) / predictions.length;
  const totalTimeSaved = predictions.reduce((acc, p) => acc + p.timeSaved, 0);

  return (
    <div className="card">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold mb-1">Historical Predictions</h3>
          <p className="text-[#8B92B0]">Recent predictions and their outcomes</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-[#00D68F] mb-1">{averageAccuracy.toFixed(0)}%</div>
          <div className="text-sm text-[#8B92B0]">Avg Accuracy</div>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#0A0E27] rounded-lg p-4">
          <div className="text-2xl font-bold text-[#FFB946] mb-1">{predictions.length}</div>
          <div className="text-sm text-[#8B92B0]">Predictions Today</div>
        </div>
        <div className="bg-[#0A0E27] rounded-lg p-4">
          <div className="text-2xl font-bold text-[#00D68F] mb-1">{totalTimeSaved} min</div>
          <div className="text-sm text-[#8B92B0]">Time Saved</div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {predictions.map((prediction, index) => (
          <div key={prediction.id} className="relative">
            {/* Timeline Line */}
            {index < predictions.length - 1 && (
              <div className="absolute left-[15px] top-8 w-0.5 h-full bg-[#8B92B0]/20"></div>
            )}

            <div className="flex gap-4">
              {/* Timeline Dot */}
              <div className="relative flex-shrink-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  prediction.accuracy >= 95 ? 'bg-[#00D68F]' : 
                  prediction.accuracy >= 85 ? 'bg-[#FFB946]' : 'bg-[#FF6B00]'
                }`}>
                  <span className="text-white text-xs font-bold">
                    {prediction.accuracy}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-[#0A0E27] rounded-lg p-4 border border-[#8B92B0]/10">
                <div className="flex items-start justify-between mb-2">
                  <div className="text-sm text-[#8B92B0]">{formatTime(prediction.timestamp)}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#8B92B0]">Saved:</span>
                    <span className="text-sm font-semibold text-[#00D68F]">
                      {prediction.timeSaved} min
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <div className="text-xs font-semibold text-[#8B92B0] mb-1">PREDICTION:</div>
                    <div className="text-sm text-[#C4C9D9]">{prediction.prediction}</div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-[#8B92B0] mb-1">OUTCOME:</div>
                    <div className="text-sm text-[#00D68F]">✓ {prediction.outcome}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}