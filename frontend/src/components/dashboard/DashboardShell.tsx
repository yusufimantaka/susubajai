"use client";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import KPICards from "./KPICards";
import SalesChart from "./SalesChart";

export default function DashboardShell() {
  return (
    <div className="flex h-screen shadow-l">
      {/* Sidebar on the left */}
      <div className="m-3">
        <Sidebar />
      </div>

        <main className="flex-1 p-8 bg-[#FAFAFC]">
          <TopBar />
          <KPICards />

          <div className="mt-4">
            <SalesChart />
          </div>
        </main>

    </div>
  );
}
