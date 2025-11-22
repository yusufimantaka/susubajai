"use client";

import { FiHome, FiFileText, FiBox, FiArchive, FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside
      className="
        flex 
        flex-col 
        justify-between 
        w-64 
        h-[96vh] 
        bg-white
        rounded-[16px]
        border-gray-200 
        shadow-xl
        p-6
      "
    >
      {/* Top Section */}
      <div className="border-b pt-5">
         {/* Logo */}
        <h1 className="text-2xl font-bold mb-5">SUSU BAJAI</h1>

      </div>
      <div className="flex-1 mt-6 ">

        {/* Navigation */}
        <h1 className="text-[13px] font-regular mb-4 text-gray-400">Menu</h1>
        <nav className="space-y-4">
          <MenuItem icon={<FiHome />} label="Dashboard" />
          <MenuItem icon={<FiFileText />} label="Laporan" />
          <MenuItem icon={<FiBox />} label="Barang" />
          <MenuItem icon={<FiArchive />} label="Inventaris" />
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="border-t pt-4">
        <div className="text-sm text-gray-600 mb-2">Admin</div>

        <button className="flex items-center gap-2 text-red-500 hover:text-red-700 text-sm">
          <FiLogOut className="text-lg" />
          Log Out
        </button>
      </div>
    </aside>
  );
}

function MenuItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 text-gray-700 hover:text-black cursor-pointer text-sm">
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
