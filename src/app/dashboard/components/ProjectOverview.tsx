import { ProjectInfo } from '@/app/types';

interface ProjectOverviewProps {
  project: ProjectInfo;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const daysElapsed = Math.floor((Date.now() - project.startDate.getTime()) / (1000 * 60 * 60 * 24));
  const totalDays = Math.floor((project.estimatedCompletion.getTime() - project.startDate.getTime()) / (1000 * 60 * 60 * 24));
  const progress = (daysElapsed / totalDays) * 100;

  return (
    <div className="card">
      <h3 className="text-xl font-bold mb-4">Project Overview</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#0A0E27] rounded-lg p-4">
          <div className="text-sm text-[#8B92B0] mb-1">Project Name</div>
          <div className="font-semibold text-[#C4C9D9]">{project.name}</div>
        </div>

        <div className="bg-[#0A0E27] rounded-lg p-4">
          <div className="text-sm text-[#8B92B0] mb-1">Location</div>
          <div className="font-semibold text-[#C4C9D9]">{project.location}</div>
        </div>

        <div className="bg-[#0A0E27] rounded-lg p-4">
          <div className="text-sm text-[#8B92B0] mb-1">Total Area</div>
          <div className="font-semibold text-[#C4C9D9]">{project.totalArea.toLocaleString()} m²</div>
        </div>

        <div className="bg-[#0A0E27] rounded-lg p-4">
          <div className="text-sm text-[#8B92B0] mb-1">Block Count</div>
          <div className="font-semibold text-[#C4C9D9]">{project.blockCount.toLocaleString()}</div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-[#0A0E27] rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm text-[#8B92B0]">Start Date</div>
            <div className="font-semibold text-[#C4C9D9]">{formatDate(project.startDate)}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#FF6B00] mb-1">{progress.toFixed(0)}%</div>
            <div className="text-sm text-[#8B92B0]">Complete</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-[#8B92B0]">Est. Completion</div>
            <div className="font-semibold text-[#C4C9D9]">{formatDate(project.estimatedCompletion)}</div>
          </div>
        </div>

        <div className="w-full bg-[#151B3D] rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] h-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="mt-3 text-center text-sm text-[#8B92B0]">
          {daysElapsed} of {totalDays} days elapsed
        </div>
      </div>
    </div>
  );
}