'use client';

import { useState } from 'react';
import { getPredictiveAlerts, getHistoricalPredictions } from '@/app/mockData';
import ActiveAlerts from './ActiveAlerts';
import HistoricalPredictions from './HistoricalPredictions';

export default function PredictiveAlertsView() {
  const [alerts] = useState(() => getPredictiveAlerts());
  const [historical] = useState(() => getHistoricalPredictions());

  const activeAlerts = alerts.filter(a => a.status === 'active');
  const resolvedAlerts = alerts.filter(a => a.status === 'resolved');

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-2">Predictive Issue Detection</h2>
        <p className="text-[#8B92B0]">
          AI analyzes real-time patterns to flag issues before they become problems
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <div className="text-3xl font-bold text-[#FF4757] mb-1">{activeAlerts.length}</div>
          <div className="text-sm text-[#8B92B0]">Active Alerts</div>
        </div>
        <div className="card">
          <div className="text-3xl font-bold text-[#00D68F] mb-1">{resolvedAlerts.length}</div>
          <div className="text-sm text-[#8B92B0]">Resolved Today</div>
        </div>
        <div className="card">
          <div className="text-3xl font-bold text-[#FFB946] mb-1">92%</div>
          <div className="text-sm text-[#8B92B0]">Prediction Accuracy</div>
        </div>
      </div>

      {/* Active Alerts */}
      <ActiveAlerts alerts={activeAlerts} />

      {/* Historical Predictions */}
      <HistoricalPredictions predictions={historical} />
    </div>
  );
}