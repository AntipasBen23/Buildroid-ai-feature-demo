'use client';

import { useState } from 'react';
import { DashboardView } from '../types';
import DashboardHeader from './components/DashboardHeader';
import NavigationTabs from './components/NavigationTabs';
import PreDeploymentView from './components/PreDeploymentView';
import DigitalTwinView from './components/DigitalTwinView';
import PredictiveAlertsView from './components/PredictiveAlertsView';
import ROIValidationView from './components/ROIValidationView';

export default function DashboardPage() {
  const [activeView, setActiveView] = useState<DashboardView>('pre-deployment');

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <DashboardHeader />
      
      <NavigationTabs 
        activeView={activeView} 
        onViewChange={setActiveView} 
      />

      <div className="mt-6">
        {activeView === 'pre-deployment' && <PreDeploymentView />}
        {activeView === 'digital-twin' && <DigitalTwinView />}
        {activeView === 'predictive-alerts' && <PredictiveAlertsView />}
        {activeView === 'roi-validation' && <ROIValidationView />}
      </div>
    </div>
  );
}