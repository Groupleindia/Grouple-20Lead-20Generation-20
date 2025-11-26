import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { LeadsTable } from "@/components/dashboard/LeadsTable";
import { RightSidebar } from "@/components/dashboard/RightSidebar";

export default function Index() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#F2F4F7]">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <Header sidebarCollapsed={sidebarCollapsed} />

      <main
        className={`pt-[66px] min-h-screen transition-all duration-300 ${sidebarCollapsed ? "ml-[82px]" : "ml-[245px]"}`}
      >
        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
            <StatsCard
              title="Active Leads"
              value="11"
              change={40.5}
              changeLabel="from last month"
            />
            <StatsCard
              title="Total Leads"
              value="20"
              change={40.5}
              changeLabel="from last month"
            />
            <StatsCard
              title="Avg Lead Value"
              value="£120 - £250"
              change={-1.5}
              changeLabel="from last month"
            />
            <StatsCard
              title="Avg. Group Size"
              value="85"
              change={-5}
              changeLabel="from last month"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_330px] gap-6">
            <LeadsTable />
            <RightSidebar />
          </div>
        </div>
      </main>
    </div>
  );
}
