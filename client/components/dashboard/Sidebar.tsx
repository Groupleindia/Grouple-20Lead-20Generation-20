import { Home, FileCheck, PieChart, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen w-[245px] border-r border-[#D5D5D5] bg-white overflow-auto",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="p-5">
          <div className="flex items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/bd7b775f66d46877e7c9356d907202c9d282b170?width=332"
              alt="The Plaza"
              className="h-12 object-contain"
            />
          </div>
        </div>

        <div className="h-px bg-[#D5D5D5] mx-4" />

        <nav className="flex flex-col gap-3 mt-6 px-0">
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-2.5 border-l-4 border-[#4A6AFE] bg-[#EDF0FF] text-[#4B68FE]"
          >
            <Home className="w-5 h-5" />
            <span className="text-sm font-medium">Dashboard</span>
          </a>

          <a
            href="#"
            className="flex items-center justify-between px-6 py-2.5 text-[#7C7C80] hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <FileCheck className="w-5 h-5" />
              <span className="text-sm font-medium">Leads</span>
            </div>
            <div className="flex items-center justify-center min-w-[20px] h-5 px-2 bg-[#4B68FE] text-white text-xs font-medium rounded">
              2
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-6 py-2.5 text-[#7C7C80] hover:bg-gray-50 transition-colors"
          >
            <PieChart className="w-5 h-5" />
            <span className="text-sm font-medium">Analytics</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-6 py-2.5 text-[#7C7C80] hover:bg-gray-50 transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </a>
        </nav>

        <div className="mt-auto border-t border-[#D5D5D5] p-6">
          <div className="flex items-center gap-3">
            <svg
              width="100"
              height="28"
              viewBox="0 0 100 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="50"
                y="20"
                fontSize="16"
                fontWeight="600"
                fill="#4B68FE"
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
              >
                grouple
              </text>
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
}
