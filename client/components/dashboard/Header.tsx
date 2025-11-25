import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-[245px] h-[66px] border-b border-[#D5D5D5] bg-white shadow-sm z-10",
        className
      )}
    >
      <div className="h-full flex items-center justify-end px-6">
        <button className="flex items-center gap-2 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#242426] text-white text-sm font-semibold">
            R
          </div>
          <span className="text-lg font-semibold">Rohit Ghosh</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
