"use client";

interface KPICardProps {
  title: string;
  value: string;
  percent: string;
  icon: React.ReactNode;
}

export default function KPICard({ title, value, percent, icon }: KPICardProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        bg-white
        p-5
        rounded-2xl
        shadow-sm
      "
    >
      {/* Left section */}
      <div>
        <p className="text-[#6C432D] text-l">{title}</p>

        <h2 className="text-2xl font-semibold mt-1">{value}</h2>

        <span
          className="
            inline-block
            mt-2
            text-green-600 
            text-xs 
            font-medium
            bg-green-100
            px-2
            py-1
            rounded-md
          "
        >
          {percent}
        </span>
      </div>

      {/* Right section - Icon */}
      <div className="text-3xl text-gray-400">
        {icon}
      </div>
    </div>
  );
}
