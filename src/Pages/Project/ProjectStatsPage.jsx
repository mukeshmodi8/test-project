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
        <div className="bg-[#FFFFFF] md:p-2 px-4">
            <div className="max-w-[full] mx-auto space-y-3">
                {/* CARBON OFFSET IMPACT */}
                <div className="bg-white rounded-[16px] border border-[#E5E7EB] p-4">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-[15px] font-semibold">Carbon Offset Impact</h2>

                        <span className="text-[11px] px-3 py-1 rounded-lg text-gray-400 flex items-center gap-2 bg-gray-50">
                            <img src="/Frame 415.svg" alt="" className="w-3 h-3" />
                            2024–2025
                        </span>
                    </div>
                    
                    <div className="grid grid-cols-12 gap-4">
                        {/* CHART SECTION */}
                        <div className="col-span-12 lg:col-span-7 border border-[#E5E7EB] rounded-[14px] p-4 flex gap-4">
                            <div className="w-[120px] flex flex-col justify-between">
                                <div>
                                    <p className="text-[13px] font-semibold leading-tight">
                                        Carbon offset<br />forecast
                                    </p>

                                    <div className="mt-3 space-y-1.5">
                                        <div className="flex items-center gap-2 text-[11px] text-gray-700">
                                            <span className="w-2.5 h-2.5 rounded bg-[#C22D34]" />
                                            Forecast
                                        </div>
                                        <div className="flex items-center gap-2 text-[11px] text-gray-700">
                                            <span className="w-2.5 h-2.5 rounded bg-[#F1D4D7]" />
                                            Actual
                                        </div>
                                    </div>
                                </div>

                                <p className="text-[10px] text-gray-400">tCO2e</p>
                            </div>

                            {/* CHART */}
                            <div className="flex-1 h-[180px]">
                                <CarbonOffsetChart />
                            </div>
                        </div>

                        {/* CARBON CARDS */}
                        <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-3">
                            {[
                                { value: "20,000", label: "Forecast Carbon", icon: "/Frame 793.svg" },
                                { value: "15,000", label: "Actual Carbon", icon: "/Group.svg" },
                            ].map((c) => (
                                <div
                                    key={c.label}
                                    className="bg-white border border-[#E5E7EB] rounded-[14px] overflow-hidden flex flex-col"
                                >
                                    {/* VALUE */}
                                    <div className="flex-1 flex flex-col items-center justify-center py-3">
                                        <h3 className="text-[24px] font-semibold text-gray-800 leading-none">
                                            {c.value}
                                            <span className="text-[13px] font-medium ml-1">t</span>
                                        </h3>

                                        <p className="text-[10px] text-[#9CA3AF] mt-0.5">
                                            CO₂eq
                                        </p>
                                    </div>

                                    {/* FOOTER */}
                                    <div className="bg-[#BE202E] text-white h-[38px] flex items-center justify-center gap-2 text-[11px] font-medium">
                                        <img src={c.icon} alt="" className="w-3.5 h-3.5" />
                                        {c.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* STATS CARDS ROW */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {/* Highlight Card */}
                    <div className="bg-[#9B5FA4] rounded-[14px] p-3 text-white shadow-sm flex flex-col justify-between h-[120px]">
                        <p className="text-[9px] leading-tight">
                            More cattle served, stronger network this month 💪
                        </p>

                        <div>
                            <h5 className="text-[26px] leading-none font-semibold">
                                18,500 <span className="text-[11px] opacity-90">cattle</span>
                            </h5>
                            <p className="text-[10px] opacity-80 mt-1.5 flex items-center gap-1">
                                <img src="/trending-up2.svg" alt="" className="w-3 h-3" />
                                +15% Compared to last month
                            </p>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className="bg-white border border-[#E5E7EB] rounded-[14px] p-3 flex flex-col justify-between h-[120px]"
                        >
                            <div className="flex justify-between items-start">
                                <p className="text-[11px] text-gray-500 leading-tight">{s.label}</p>
                                <div className="w-8 h-8 rounded-full bg-[#F2F6F7] flex items-center justify-center flex-shrink-0">
                                    <img src={s.icon} alt="" className="w-4 h-4" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[24px] text-[#1A1C1E] font-semibold leading-none">{s.val}</h3>

                                <p
                                    className={`text-[10px] flex items-center gap-1 mt-1 ${s.up ? "text-green-600" : "text-red-500"
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

                {/* CHARTS ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {/* PRODUCTION */}
                    <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-4">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-[14px] font-semibold flex items-center gap-2 text-[#202020]">
                                <img src="/Icons.svg" alt="" className="opacity-60 w-4 h-4" />
                                Production
                            </h3>
                            <span className="text-[11px] px-3 py-1 rounded-lg flex items-center gap-1.5 text-gray-500 bg-gray-50">
                                <img src="/Frame 415.svg" alt="" className="opacity-60 w-3 h-3" />
                                2025
                            </span>
                        </div>
                        <div className="w-full h-[240px]">
                            <ProductionChart />
                        </div>
                    </div>

                    {/* DISTRIBUTOR ORDERS */}
                    <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-4">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-[14px] font-semibold flex items-center gap-2 text-[#202020]">
                                <img src="/Icons3.svg" alt="" className="opacity-60 w-4 h-4" />
                                Distributor Orders
                            </h3>
                            <span className="text-[11px] px-3 py-1 rounded-lg flex items-center gap-1.5 text-gray-500 bg-gray-50">
                                <img src="/Frame 415.svg" alt="" className="opacity-60 w-3 h-3" />
                                2025
                            </span>
                        </div>
                        <div className="w-full h-[240px]">
                            <DistributorOrdersChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectStatsPage;