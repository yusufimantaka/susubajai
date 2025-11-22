"use client";

import Sidebar from "./Sidebar";

export default function DashboardShell() {
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 bg-[#F3F3F3]">
        <h1 className="text-[30px] font-regular mt-1">Dashboard</h1>
        <h2 className="text-gray-600 mb-6">Ringkasan Bisnis Susu Bajai</h2>
      </main>
    </div>
  );
}
