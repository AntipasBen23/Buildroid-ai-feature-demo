import { Milestone } from '@/app/types';

interface MilestoneTrackerProps {
  milestones: Milestone[];
}

export default function MilestoneTracker({ milestones }: MilestoneTrackerProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const completedCount = milestones.filter(m => m.completed).length;
  const totalCount = milestones.length;

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold mb-1">Project Milestones</h3>
          <p className="text-[#8B92B0]">{completedCount} of {totalCount} completed</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-[#FF6B00] mb-1">
            {Math.round((completedCount / totalCount) * 100)}%
          </div>
          <div className="text-sm text-[#8B92B0]">Progress</div>
        </div>
      </div>

      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="relative">
            {/* Timeline Line */}
            {index < milestones.length - 1 && (
              <div className="absolute left-[19px] top-10 w-0.5 h-full bg-[#8B92B0]/20"></div>
            )}

            <div className="flex gap-4">
              {/* Timeline Dot */}
              <div className="relative flex-shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  milestone.completed 
                    ? 'bg-[#00D68F] border-[#00D68F]' 
                    : 'bg-[#151B3D] border-[#8B92B0]'
                }`}>
                  {milestone.completed ? (
                    <span className="text-white text-lg">✓</span>
                  ) : (
                    <span className="text-[#8B92B0] text-sm font-bold">{index + 1}</span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 rounded-lg p-5 border ${
                milestone.completed 
                  ? 'bg-[#00D68F]/10 border-[#00D68F]/30' 
                  : 'bg-[#0A0E27] border-[#8B92B0]/10'
              }`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-[#C4C9D9] mb-1">{milestone.name}</h4>
                    <p className="text-sm text-[#8B92B0]">{formatDate(milestone.date)}</p>
                  </div>
                  {milestone.completed && (
                    <span className="badge-success">Completed</span>
                  )}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#151B3D] rounded-lg p-3">
                    <div className="text-lg font-bold text-[#FF6B00] mb-1">
                      {milestone.metrics.areaCompleted.toLocaleString()} m²
                    </div>
                    <div className="text-xs text-[#8B92B0]">Area Completed</div>
                  </div>

                  <div className="bg-[#151B3D] rounded-lg p-3">
                    <div className="text-lg font-bold text-[#FFB946] mb-1">
                      {milestone.metrics.efficiency}%
                    </div>
                    <div className="text-xs text-[#8B92B0]">Efficiency</div>
                  </div>

                  <div className="bg-[#151B3D] rounded-lg p-3">
                    <div className="text-lg font-bold text-[#00D68F] mb-1">
                      {milestone.metrics.quality}
                    </div>
                    <div className="text-xs text-[#8B92B0]">Quality Score</div>
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