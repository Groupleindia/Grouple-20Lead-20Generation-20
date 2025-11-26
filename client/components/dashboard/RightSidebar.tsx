import { cn } from "@/lib/utils";

interface RightSidebarProps {
  className?: string;
}

export function RightSidebar({ className }: RightSidebarProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-col rounded-lg overflow-hidden">
        <div className="relative w-full h-[72px] flex items-center justify-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5a39757d394da7f568c5b478ca79d307fefe6397?width=660"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="bg-white border border-[#F6F6F6] rounded-b-lg p-5">
          <div className="flex flex-col gap-[18px]">
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px] font-medium text-[#404040] tracking-[-0.4px]">
                Top Category
              </h3>
              <p className="text-2xl font-semibold text-[#4A6AFE]">
                Corporate Events
              </p>
            </div>
            <p className="text-xs font-light text-[#404040] tracking-[-0.24px]">
              48.9% win rate
            </p>
          </div>
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
