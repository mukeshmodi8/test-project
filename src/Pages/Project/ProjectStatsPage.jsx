import CarbonOffsetChart from "../../assets/Components/charts/CarbonOffsetChart";
import DistributorOrdersChart from "../../assets/Components/charts/DistributorOrdersChart";
import ProductionChart from "../../assets/Components/charts/ProductionChart";


const stats = [
  {
    label: "Total Production",
    val: "10,000",
    up: true,
    icon: "/Icons.svg",
    change: "5% more than last month",
  },
  {
    label: "Total Manufacturer",
    val: "420",
    up: true,
    icon: "/Icons1.svg",
    change: "5% more than last month",
  },
  {
    label: "Total Distributor",
    val: "12",
    up: false,
    icon: "/Icons3.svg",
    change: "5% less than last month",
  },
  {
    label: "Total Farmers Served",
    val: "250",
    up: false,
    icon: "/Icons5.svg",
    change: "5% less than last month",
  },
];


const ProjectStatsPage = () => {
    return (
        <div className="bg-[#FFFFFF] p-6">
            <div className="max-w-[1400px] mx-auto space-y-6">
                <div className="bg-white rounded-[16px] border border-[#E5E7EB] p-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[17px] font-semibold">Carbon Offset Impact</h2>

                        <span className="text-xs px-4 py-2 rounded-lg text-gray-400 flex items-center gap-2">
                            <img src="/Frame 415.svg" alt="" />
                            2024–2025
                        </span>
                    </div>
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-7 border border-[#E5E7EB] rounded-[16px] p-5 flex gap-6 h-50">
                            <div className="w-[150px] flex flex-col justify-between">
                                <div>
                                    <p className="text-sm font-semibold leading-snug">
                                        Carbon offset<br />forecast
                                    </p>

                                    <div className="mt-4 space-y-2">
                                        <div className="flex items-center gap-2 text-[13px] text-gray-700">
                                            <span className="w-3 h-3 rounded bg-[#C22D34]" />
                                            Forecast
                                        </div>
                                        <div className="flex items-center gap-2 text-[13px] text-gray-700">
                                            <span className="w-3 h-3 rounded bg-[#F1D4D7]" />
                                            Actual
                                        </div>
                                    </div>
                                </div>

                                <p className="text-xs text-gray-400">tCO2e</p>
                            </div>

                            {/* CHART */}
                            <div className="flex-1 h-[220px]">
                                <CarbonOffsetChart />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-6">
                            {[
                                { value: "20,000t", label: "Forecast Carbon", icon: "/Frame 793.svg" },
                                { value: "15,000t", label: "Actual Carbon", icon: "/Group.svg" },
                            ].map((c) => (
                                <div
                                    key={c.label}
                                    className="bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden flex flex-col"
                                >
                                    <div className="flex-1 flex flex-col items-center justify-center py-5">
                                        <h3 className="text-[36px] font-medium">{c.value}</h3>
                                        <p className="text-sm text-[#9CA3AF]">CO2eq</p>
                                    </div>

                                    <div className="bg-[#BE202E] text-white h-[48px] flex items-center justify-center gap-2 text-sm font-medium">
                                        <img src={c.icon} alt="" className="w-4 h-4" />
                                        {c.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">

                    {/* Highlight Card */}
                    <div className="bg-[#9B5FA4] rounded-[16px] p-3 text-white shadow-sm flex flex-col justify-between h-[140px]">
                        <p className="text-[10px] leading-relaxed">
                            More cattle served, stronger network this month 💪
                        </p>

                        <div>
                            <h5 className="text-[32px] leading-none">
                                18,500 <span className="text-[12px] opacity-90">cattle</span>
                            </h5>
                            <p className="text-[11px] opacity-80 mt-2 flex items-center gap-1">
                                <img src="/trending-up2.svg" alt="" className="w-3 h-3" />
                                +15% Compared to last month
                            </p>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className="bg-white border border-[#E5E7EB] rounded-[16px] p-3 flex flex-col justify-between h-[140px]"
                        >
                            <div className="flex justify-between">
                                <p className="text-[13px] text-gray-500">{s.label}</p>
                                <div className="w-9 h-9 rounded-full bg-[#F2F6F7] flex items-center justify-center">
                                    <img src={s.icon} alt="" className="w-5 h-5" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[28px] text-[#1A1C1E]">{s.val}</h3>

                                <p
                                    className={`text-[11px] flex items-center gap-1 ${s.up ? "text-green-600" : "text-red-500"
                                        }`}
                                >
                                    <img
                                        src={s.up ? "/trending-up2.svg" : "/trending-down.svg"}
                                        alt=""
                                        className="w-3 h-3"
                                    />
                                    {s.change}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-8">
                        <div className="flex justify-between mb-4">
                            <h3 className="font-semibold flex items-center gap-2">
                                <img src="/Icons.svg" alt="" /> Production
                            </h3>
                            <span className="text-xs border border-[#E5E7EB] px-3 py-1 rounded-lg flex items-center gap-2">
                                <img src="/Frame 415.svg" alt="" /> 2025
                            </span>
                        </div>
                        <ProductionChart />
                    </div>

                    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-8">
                        <div className="flex justify-between mb-4">
                            <h3 className="font-semibold flex items-center gap-2">
                                <img src="/Icons3.svg" alt="" /> Distributor Orders
                            </h3>
                            <span className="text-xs border border-[#E5E7EB] px-3 py-1 rounded-lg flex items-center gap-2">
                                <img src="/Frame 415.svg" alt="" /> 2025
                            </span>
                        </div>
                        <DistributorOrdersChart />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectStatsPage;
