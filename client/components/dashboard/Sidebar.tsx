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
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="text-sm font-medium text-[#657583] hover:text-[#242426] transition-colors"
            >
              How it works
            </a>
            <a
              href="#"
              className="text-sm font-medium text-[#657583] hover:text-[#242426] transition-colors"
            >
              How it works
            </a>

            <div className="flex items-center justify-between">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/bbea2b645ddf034dd947ab9173aab5b1dfb51f2b?width=100"
                alt="grouple"
                className="h-7 object-contain"
              />
              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#242426]"
                >
                  <path
                    d="M12.6875 7C12.6875 7.11603 12.6414 7.22731 12.5594 7.30936C12.4773 7.39141 12.366 7.4375 12.25 7.4375H4.99352L8.18453 10.628C8.22518 10.6686 8.25742 10.7169 8.27942 10.77C8.30142 10.8231 8.31274 10.88 8.31274 10.9375C8.31274 10.995 8.30142 11.0519 8.27942 11.105C8.25742 11.1581 8.22518 11.2064 8.18453 11.247C8.14388 11.2877 8.09563 11.3199 8.04252 11.3419C7.98941 11.3639 7.93249 11.3752 7.875 11.3752C7.81751 11.3752 7.76059 11.3639 7.70748 11.3419C7.65437 11.3199 7.60612 11.2877 7.56547 11.247L3.62797 7.30953C3.58729 7.2689 3.55502 7.22065 3.53301 7.16754C3.51099 7.11442 3.49966 7.05749 3.49966 7C3.49966 6.94251 3.51099 6.88558 3.53301 6.83246C3.55502 6.77935 3.58729 6.7311 3.62797 6.69047L7.56547 2.75297C7.60612 2.71232 7.65437 2.68008 7.70748 2.65808C7.76059 2.63608 7.81751 2.62476 7.875 2.62476C7.93249 2.62476 7.98941 2.63608 8.04252 2.65808C8.09563 2.68008 8.14388 2.71232 8.18453 2.75297C8.22518 2.79362 8.25742 2.84187 8.27942 2.89498C8.30142 2.94809 8.31274 3.00501 8.31274 3.0625C8.31274 3.11999 8.30142 3.17691 8.27942 3.23002C8.25742 3.28313 8.22518 3.33138 8.18453 3.37203L4.99352 6.5625H12.25C12.366 6.5625 12.4773 6.60859 12.5594 6.69064C12.6414 6.77269 12.6875 6.88397 12.6875 7ZM2.1875 1.75C2.07147 1.75 1.96019 1.79609 1.87814 1.87814C1.79609 1.96019 1.75 2.07147 1.75 2.1875V11.8125C1.75 11.9285 1.79609 12.0398 1.87814 12.1219C1.96019 12.2039 2.07147 12.25 2.1875 12.25C2.30353 12.25 2.41481 12.2039 2.49686 12.1219C2.57891 12.0398 2.625 11.9285 2.625 11.8125V2.1875C2.625 2.07147 2.57891 1.96019 2.49686 1.87814C2.41481 1.79609 2.30353 1.75 2.1875 1.75Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
