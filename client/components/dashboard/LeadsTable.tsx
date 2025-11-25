import { Search, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Lead {
  customerName: string;
  eventDate: string;
  timeSlot: string;
  groupSize: string;
  requestId: string;
}

const leadsData: Lead[] = [
  {
    customerName: "Oliver Thompson",
    eventDate: "15 Nov 2025",
    timeSlot: "8:00PM",
    groupSize: "85 Guests",
    requestId: "RFQ-1001",
  },
  {
    customerName: "Emily Carter",
    eventDate: "22 Nov 2025",
    timeSlot: "1:00PM",
    groupSize: "45 Guests",
    requestId: "RFQ-1003",
  },
  {
    customerName: "James Whitmore",
    eventDate: "2 Dec 2025",
    timeSlot: "7:30PM",
    groupSize: "120 Guests",
    requestId: "RFQ-1005",
  },
  {
    customerName: "Sophie Bennett",
    eventDate: "18 Nov 2025",
    timeSlot: "12:30PM",
    groupSize: "35 Guests",
    requestId: "RFQ-1008",
  },
  {
    customerName: "Harry Collins",
    eventDate: "25 Nov 2025",
    timeSlot: "6:00PM",
    groupSize: "20 Guests",
    requestId: "RFQ-1004",
  },
  {
    customerName: "Chloe Harrison",
    eventDate: "30 Nov 2025",
    timeSlot: "5:00PM",
    groupSize: "15 Guests",
    requestId: "RFQ-1002",
  },
  {
    customerName: "George Wilkinson",
    eventDate: "3 Dec 2025",
    timeSlot: "7:00PM",
    groupSize: "30 Guests",
    requestId: "RFQ-1010",
  },
  {
    customerName: "Amelia Foster",
    eventDate: "12 Dec 2025",
    timeSlot: "6:30PM",
    groupSize: "50 Guests",
    requestId: "RFQ-1006",
  },
  {
    customerName: "Thomas Greenfield",
    eventDate: "20 Nov 2025",
    timeSlot: "3:00PM",
    groupSize: "25 Guests",
    requestId: "RFQ-1008",
  },
  {
    customerName: "Isabella Clarke",
    eventDate: "28 Nov 2025",
    timeSlot: "9:00PM",
    groupSize: "30 Guests",
    requestId: "RFQ-1009",
  },
];

interface LeadsTableProps {
  className?: string;
}

export function LeadsTable({ className }: LeadsTableProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <h2 className="text-xl font-medium text-black">Active Leads</h2>

      <div className="flex flex-wrap items-center gap-3.5">
        <div className="flex items-center gap-1.5 px-3 py-2 border border-[#D8D8DC] rounded bg-white min-w-[280px] flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#7C7C80]" />
          <input
            type="text"
            placeholder="Search by RFQ ID, customer name"
            className="flex-1 text-xs text-[#7C7C80] bg-transparent outline-none placeholder:text-[#7C7C80]"
          />
        </div>

        <div className="flex items-center gap-3.5">
          <button className="flex items-center gap-1.5 px-3 py-2 border border-[#D8D8DC] rounded bg-white text-xs text-[#242426]">
            Status
            <ChevronDown className="w-3.5 h-3.5 text-[#7C7C80]" />
          </button>

          <button className="flex items-center gap-1.5 px-3 py-2 border border-[#D8D8DC] rounded bg-white text-xs text-[#242426]">
            Event Type
            <ChevronDown className="w-3.5 h-3.5 text-[#7C7C80]" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden border border-[#F6F6F6]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#FAFAFA] border-b border-[rgba(0,0,0,0.06)]">
                <th className="px-4 py-4 text-left text-sm font-medium text-[#7C7C80] min-w-[186px]">
                  Customer Name
                </th>
                <th className="px-4 py-4 text-center text-sm font-medium text-[#7C7C80] min-w-[180px]">
                  Event Date
                </th>
                <th className="px-4 py-4 text-center text-sm font-medium text-[#7C7C80] min-w-[170px]">
                  Time Slot
                </th>
                <th className="px-4 py-4 text-center text-sm font-medium text-[#7C7C80] min-w-[125px]">
                  Group size
                </th>
                <th className="px-4 py-4 text-left text-sm font-medium text-[#7C7C80] min-w-[133px]">
                  Request ID:
                </th>
              </tr>
            </thead>
            <tbody>
              {leadsData.map((lead, index) => (
                <tr
                  key={index}
                  className="border-b border-[rgba(0,0,0,0.06)] hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4 text-sm text-[#242426]">
                    {lead.customerName}
                  </td>
                  <td className="px-4 py-4 text-sm text-[#242426] text-center">
                    {lead.eventDate}
                  </td>
                  <td className="px-4 py-4 text-sm text-[#242426] text-center">
                    {lead.timeSlot}
                  </td>
                  <td className="px-4 py-4 text-sm text-[#242426] text-center">
                    {lead.groupSize}
                  </td>
                  <td className="px-4 py-4 text-sm text-[#242426]">
                    {lead.requestId}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-4 py-2.5 border-t border-[#E5E5EA] bg-white">
          <span className="text-xs text-[#242426]">
            Showing 1 to 10 of 11 results
          </span>

          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
              <ChevronLeft className="w-4.5 h-4.5 text-[#242426]" />
            </button>

            <button className="px-2.5 py-2 bg-[#4B68FE] text-white text-xs font-medium rounded">
              1
            </button>

            <button className="px-2.5 py-2 text-[#242426] text-xs hover:bg-gray-100 rounded transition-colors">
              2
            </button>

            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
              <ChevronRight className="w-4.5 h-4.5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
