"use client";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between mb-6">
      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-500 text-sm">
          Ringkasan Bisnis Susu Bajai
        </p>
      </div>

      {/* Right Section: Date Filters */}
      <div className="flex items-center gap-3">
        <select
          className="
            bg-white 
            border 
            border-gray-300 
            rounded-[16px] 
            px-1 
            py-2 
            text-sm
          "
        >
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>

        <select
          className="
            bg-white 
            border 
            border-gray-300 
            rounded-[16px] 
            px-2 
            py-2 
            text-sm
          "
        >
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
        </select>
      </div>
    </div>
  );
}
