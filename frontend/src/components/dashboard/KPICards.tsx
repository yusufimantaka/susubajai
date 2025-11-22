"use client";

import { FiCoffee, FiTrendingUp, FiArchive } from "react-icons/fi";
import KPICard from "./KPICard";

export default function KPICards() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <KPICard
        title="Total Gelas"
        value="10.060"
        percent="+20%"
        icon={<FiCoffee />}
      />

      <KPICard
        title="Total Penjualan"
        value="Rp18.899"
        percent="+12%"
        icon={<FiTrendingUp />}
      />

      <KPICard
        title="Supply"
        value="Rp6.000"
        percent="+5%"
        icon={<FiArchive />}
      />
    </div>
  );
}
