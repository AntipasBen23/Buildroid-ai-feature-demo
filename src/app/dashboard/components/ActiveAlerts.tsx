import { PredictiveAlert } from '@/app/types';

interface ActiveAlertsProps {
  alerts: PredictiveAlert[];
}

export default function ActiveAlerts({ alerts }: ActiveAlertsProps) {
  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case 'critical':
        return {
          bg: 'bg-[#FF4757]/10',
          border: 'border-[#FF4757]',
          text: 'text-[#FF4757]',
          badge: 'bg-[#FF4757]',
        };
      case 'warning':
        return {
          bg: 'bg-[#FFB946]/10',
          border: 'border-[#FFB946]',
          text: 'text-[#FFB946]',
          badge: 'bg-[#FFB946]',
        };
      default:
        return {
          bg: 'bg-[#FF6B00]/10',
          border: 'border-[#FF6B00]',
          text: 'text-[#FF6B00]',
          badge: 'bg-[#FF6B00]',
        };
    }
  };

  const formatTime = (date: Date) => {
    const minutes = Math.floor((Date.now() - date.getTime()) / 60000);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };

  return (
    <div className="card">
      <h3 className="text-xl font-bold mb-4">Active Alerts</h3>

      {alerts.length === 0 ? (
        <div className="text-center py-8 text-[#8B92B0]">
          <div className="text-4xl mb-2">✓</div>
          <div>No active alerts - all systems operating normally</div>
        </div>
      ) : (
        <div className="space-y-4">
          {alerts.map((alert) => {
            const styles = getSeverityStyles(alert.severity);
            return (
              <div
                key={alert.id}
                className={`${styles.bg} border-l-4 ${styles.border} rounded-lg p-5`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className={`font-bold ${styles.text}`}>{alert.title}</h4>
                      <span className={`${styles.badge} text-white text-xs px-2 py-1 rounded-full uppercase`}>
                        {alert.severity}
                      </span>
                    </div>
                    <p className="text-sm text-[#8B92B0]">{formatTime(alert.timestamp)}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#C4C9D9]">{alert.confidence}%</div>
                    <div className="text-xs text-[#8B92B0]">Confidence</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-semibold text-[#C4C9D9] mb-1">Current State:</div>
                    <div className="text-sm text-[#8B92B0]">{alert.description}</div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-[#C4C9D9] mb-1">Prediction:</div>
                    <div className="text-sm text-[#8B92B0]">{alert.prediction}</div>
                  </div>

                  <div className="bg-[#0A0E27] rounded-lg p-3 border border-[#8B92B0]/10">
                    <div className="text-sm font-semibold text-[#00D68F] mb-1">
                      ✓ Recommended Action:
                    </div>
                    <div className="text-sm text-[#C4C9D9]">{alert.recommendation}</div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#8B92B0] pt-2 border-t border-[#8B92B0]/10">
                    <span>Historical Accuracy: {alert.historicalAccuracy}%</span>
                    <span>Based on {Math.floor(alert.historicalAccuracy / 2)} similar patterns</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}