import { cn } from "@/lib/utils";

interface RightSidebarProps {
  className?: string;
}

export function RightSidebar({ className }: RightSidebarProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 border border-[#F6F6F6]">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-gray-800">Top Category</h3>
          <p className="text-2xl font-bold text-[#4B68FE]">Corporate Events</p>
          <p className="text-sm text-gray-600">48.5% win rate</p>
        </div>
        <div className="mt-4">
          <svg
            viewBox="0 0 200 80"
            className="w-full h-20"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#93AAFD" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#4B68FE" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2D5BFF" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M0,40 Q25,20 50,40 T100,40 T150,40 T200,40"
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="2"
            />
            <path
              d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50"
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="2"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      <div className="bg-white rounded-lg p-5 border border-[#F6F6F6]">
        <div className="flex flex-col gap-1 mb-6">
          <h3 className="text-2xl font-semibold text-black tracking-tight">
            Lead distribution
          </h3>
          <p className="text-sm font-medium text-[#4B68FE]">This month</p>
        </div>

        <div className="relative w-full aspect-square max-w-[200px] mx-auto mb-6">
          <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#D9D9D9"
              strokeWidth="20"
            />
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#4A3AFF"
              strokeWidth="20"
              strokeDasharray="282.7 282.7"
              strokeDashoffset="70.7"
            />
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#2D5BFF"
              strokeWidth="20"
              strokeDasharray="282.7 282.7"
              strokeDashoffset="212"
            />
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#93AAFD"
              strokeWidth="20"
              strokeDasharray="282.7 282.7"
              strokeDashoffset="282.7"
              strokeLinecap="round"
            />
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#C6D2FD"
              strokeWidth="20"
              strokeDasharray="282.7 282.7"
              strokeDashoffset="353.4"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center">
              <p className="text-[32px] font-extrabold text-[#242426]">100</p>
              <p className="text-[10px] text-[#303030]">Total Bids</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#4A3AFF]" />
            <span className="text-[#242426]">Wins</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#2D5BFF]" />
            <span className="text-[#242426]">Pending</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#93AAFD]" />
            <span className="text-[#242426]">Lost</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#C6D2FD]" />
            <span className="text-[#242426]">Connected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
