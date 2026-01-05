import { RobotPerformance } from '@/app/types';

interface RobotPerformanceCardsProps {
  performance: RobotPerformance[];
}

export default function RobotPerformanceCards({ performance }: RobotPerformanceCardsProps) {
  const getStatusBadge = (status: string) => {
    if (status === 'in-sync') return <span className="badge-success">In Sync</span>;
    if (status === 'minor-drift') return <span className="badge-warning">Minor Drift</span>;
    return <span className="badge-error">Major Drift</span>;
  };

  return (
    <div className="card">
      <h3 className="text-xl font-bold mb-4">Robot Performance Comparison</h3>
      <p className="text-[#8B92B0] mb-6">Simulated vs Actual Performance</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {performance.map((robot) => (
          <div key={robot.robotId} className="bg-[#0A0E27] rounded-lg p-5 border border-[#8B92B0]/10">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-[#C4C9D9]">{robot.robotName}</h4>
              {getStatusBadge(robot.status)}
            </div>

            <div className="space-y-4">
              {/* Blocks Placed (if applicable) */}
              {robot.simulated.blocksPlaced > 0 && (
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-[#8B92B0]">Blocks Placed</span>
                    <span className="text-[#C4C9D9]">
                      <span className="text-[#FFB946]">{robot.simulated.blocksPlaced}</span> → 
                      <span className="text-[#00D68F] ml-1">{robot.actual.blocksPlaced}</span>
                    </span>
                  </div>
                </div>
              )}

              {/* Accuracy */}
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-[#8B92B0]">Accuracy</span>
                  <span className="text-[#C4C9D9]">
                    <span className="text-[#FFB946]">{robot.simulated.accuracy}%</span> → 
                    <span className="text-[#00D68F] ml-1">{robot.actual.accuracy}%</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-[#151B3D] rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-[#FFB946] h-full"
                      style={{ width: `${robot.simulated.accuracy}%` }}
                    ></div>
                  </div>
                  <div className="flex-1 bg-[#151B3D] rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-[#00D68F] h-full"
                      style={{ width: `${robot.actual.accuracy}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Speed */}
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-[#8B92B0]">Speed (per hour)</span>
                  <span className="text-[#C4C9D9]">
                    <span className="text-[#FFB946]">{robot.simulated.speed}</span> → 
                    <span className="text-[#00D68F] ml-1">{robot.actual.speed}</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-[#151B3D] rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-[#FFB946] h-full"
                      style={{ width: `${(robot.simulated.speed / 50) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex-1 bg-[#151B3D] rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-[#00D68F] h-full"
                      style={{ width: `${(robot.actual.speed / 50) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Uptime */}
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-[#8B92B0]">Uptime</span>
                  <span className="text-[#C4C9D9]">
                    <span className="text-[#FFB946]">{robot.simulated.uptime}%</span> → 
                    <span className="text-[#00D68F] ml-1">{robot.actual.uptime}%</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-[#151B3D] rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-[#FFB946] h-full"
                      style={{ width: `${robot.simulated.uptime}%` }}
                    ></div>
                  </div>
                  <div className="flex-1 bg-[#151B3D] rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-[#00D68F] h-full"
                      style={{ width: `${robot.actual.uptime}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Overall Drift */}
              <div className="pt-3 border-t border-[#8B92B0]/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#8B92B0]">Overall Drift</span>
                  <span className={`text-lg font-bold ${
                    robot.drift < 2 ? 'text-[#00D68F]' : 
                    robot.drift < 4 ? 'text-[#FFB946]' : 'text-[#FF4757]'
                  }`}>
                    {robot.drift.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-2 bg-[#FFB946] rounded"></div>
          <span className="text-[#8B92B0]">Simulated</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-2 bg-[#00D68F] rounded"></div>
          <span className="text-[#8B92B0]">Actual</span>
        </div>
      </div>
    </div>
  );
}