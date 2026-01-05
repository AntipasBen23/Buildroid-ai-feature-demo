interface LiveSavingsCounterProps {
  savings: {
    cost: number;
    time: number;
  };
}

export default function LiveSavingsCounter({ savings }: LiveSavingsCounterProps) {
  return (
    <div className="card bg-gradient-to-br from-[#FF6B00]/10 to-[#151B3D] border-[#FF6B00]/30 glow-orange">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Live Savings Tracker</h3>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#00D68F] rounded-full animate-pulse"></div>
          <span className="text-sm text-[#C4C9D9]">Updating in real-time</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cost Savings */}
        <div className="text-center">
          <div className="text-sm text-[#8B92B0] mb-2">Total Cost Savings</div>
          <div className="text-5xl font-bold gradient-text mb-2">
            ${Math.floor(savings.cost).toLocaleString()}
          </div>
          <div className="text-sm text-[#00D68F]">↑ Increasing</div>
        </div>

        {/* Time Savings */}
        <div className="text-center">
          <div className="text-sm text-[#8B92B0] mb-2">Total Time Savings</div>
          <div className="text-5xl font-bold gradient-text mb-2">
            {Math.floor(savings.time)} hrs
          </div>
          <div className="text-sm text-[#00D68F]">↑ Increasing</div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-[#8B92B0]">
        Compared to traditional construction methods
      </div>
    </div>
  );
}