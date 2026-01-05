import { DashboardView } from '@/app/types';

interface NavigationTabsProps {
  activeView: DashboardView;
  onViewChange: (view: DashboardView) => void;
}

export default function NavigationTabs({ activeView, onViewChange }: NavigationTabsProps) {
  const tabs = [
    { id: 'pre-deployment' as DashboardView, label: 'Pre-Deployment Analysis', icon: '🎯' },
    { id: 'digital-twin' as DashboardView, label: 'Digital Twin Sync', icon: '🔄' },
    { id: 'predictive-alerts' as DashboardView, label: 'Predictive Alerts', icon: '⚠️' },
    { id: 'roi-validation' as DashboardView, label: 'ROI Validation', icon: '💰' },
  ];

  return (
    <div className="card p-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onViewChange(tab.id)}
            className={`
              px-4 py-3 rounded-lg font-semibold transition-all duration-200
              ${activeView === tab.id 
                ? 'bg-[#FF6B00] text-white shadow-lg' 
                : 'bg-[#0A0E27] text-[#8B92B0] hover:text-white hover:bg-[#151B3D]'
              }
            `}
          >
            <span className="mr-2">{tab.icon}</span>
            <span className="hidden md:inline">{tab.label}</span>
            <span className="md:hidden">{tab.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}