import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change: number;
  changeLabel: string;
  className?: string;
}

export function StatsCard({
  title,
  value,
  change,
  changeLabel,
  className,
}: StatsCardProps) {
  const isPositive = change >= 0;

  return (
    <div
      className={cn(
        "p-6 bg-white border border-[#F6F6F6] rounded-lg flex flex-col gap-5",
        className
      )}
    >
      <div className="flex flex-col gap-3">
        <h3 className="text-base text-[#303030] font-normal">{title}</h3>
        <p className="text-[28px] font-bold text-black">{value}</p>
      </div>

      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex items-center gap-1 px-2.5 py-1 rounded-full",
            isPositive ? "bg-[#E4F8EB]" : "bg-[rgba(239,71,34,0.10)]"
          )}
        >
          {isPositive ? (
            <TrendingUp className="w-3 h-3 text-[#2EB265]" />
          ) : (
            <TrendingDown className="w-3 h-3 text-[#EF4722]" />
          )}
          <span
            className={cn(
              "text-xs font-medium",
              isPositive ? "text-[#2EB265]" : "text-[#EF4722]"
            )}
          >
            {Math.abs(change)}%
          </span>
        </div>
        <span className="text-xs text-[#303030]">{changeLabel}</span>
      </div>
    </div>
  );
}
