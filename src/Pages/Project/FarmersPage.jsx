import React from "react";

const farmers = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    distributorId: "DS0001",
    farmerId: "FA0001",
    name: "Rakesh Patel",
    whatsapp: "7986543210",
    phone: "9876543222",
    email: "rp@gmail.com",
    cattle: 20,
    status: "Active",
}));

const FarmersPage = () => {
    return (
        <div className="bg-[#FFFFFF] p-4 md:p-6 min-h-screen font-sans">
            <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-6 items-start">

                {/* Left Side: Map Section */}
                <div className="col-span-12 lg:col-span-4 bg-white rounded-[16px] border border-[#E5E7EB] p-3 shadow-sm">
                    <div className="flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden h-[450px]">
                        <img src="/Frame 740.svg" alt="Map" className="max-w-full max-h-full object-contain" />
                    </div>
                </div>

                {/* Right Side: Table Section */}
                <div className="col-span-12 lg:col-span-8 bg-white rounded-[16px] border border-[#E5E7EB] shadow-sm overflow-hidden">

                    {/* Compact Header */}
                    <div className="flex justify-between items-center px-5 py-3 border-b border-gray-50">
                        <div className="flex items-center gap-2">
                            <div className="p-1 border border-gray-200 rounded-full">
                                <img src="Iconsss.svg" alt="" />
                            </div>
                            <h2 className="font-semibold text-gray-700 text-sm">Farmers</h2>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="text-gray-400 hover:text-gray-600">
                            </button>
                            <div className="flex items-center gap-3">
                                <button className="text-gray-400 hover:text-gray-600">
                                    <img src="menu.svg" alt="" />
                                </button>
                                <div className="flex items-center gap-1.5 border rounded-[40px] px-2 py-1 text-[10px] text-gray-200 font-medium bg-white shadow-sm">
                                    <img src="Iconss.svg" alt="" />
                                    <span className="text-gray-500">2025</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-5 pb-4 overflow-x-auto">
                        <table className="w-full text-left border-separate border-spacing-0">
                            <thead className="bg-[#BE202E] text-white">
                                <tr>
                                    <th className="px-3 py-2 font-medium text-[14px] uppercase tracking-wider rounded-tl-[8px]">#</th>
                                    <th className="px-3 py-2 font-medium text-[14px] uppercase tracking-wider">Distributor ID</th>
                                    <th className="px-3 py-2 font-medium text-[14px] uppercase tracking-wider">Farmer ID</th>
                                    <th className="px-3 py-2 font-medium text-[14px] uppercase tracking-wider">Farmer</th>
                                    <th className="px-3 py-2 font-medium text-[14px] uppercase tracking-wider">WhatsApp No</th>
                                    <th className="px-3 py-2 font-medium text-[14px] uppercase tracking-wider text-nowrap">Phone No.</th>
                                    <th className="px-3 py-2 font-medium text-[14px] uppercase tracking-wider">Email</th>
                                    <th className="px-3 py-2 font-medium text-[14px] uppercase tracking-wider text-center">Total Cattle</th>
                                    <th className="px-3 py-2 font-medium text-[14px] uppercase tracking-wider text-center rounded-tr-[8px]">Status</th>
                                </tr>
                            </thead>

                            <tbody className="border-x border-b border-gray-100">
                                {farmers.map((f) => (
                                    <tr key={f.id} className="hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0">
                                        <td className="px-3 py-2 text-[10px] text-gray-500">
                                            <div className="flex items-center gap-1.5">
                                                <svg className="w-2 h-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                                {f.id}
                                            </div>
                                        </td>
                                        <td className="px-3 py-2 text-[10px] font-bold text-gray-800">{f.distributorId}</td>
                                        <td className="px-3 py-2 text-[10px] font-bold text-gray-800">{f.farmerId}</td>
                                        <td className="px-3 py-2 text-[10px] text-gray-600">{f.name}</td>
                                        <td className="px-3 py-2 text-[10px] text-gray-600">{f.whatsapp}</td>
                                        <td className="px-3 py-2 text-[10px] text-gray-600">{f.phone}</td>
                                        <td className="px-3 py-2 text-[10px] text-gray-600 truncate max-w-[120px]">{f.email}</td>
                                        <td className="px-3 py-2 text-[10px] text-gray-600 text-center">{f.cattle}</td>
                                        <td className="px-3 py-2 text-center">
                                            <span className="inline-block px-3 py-0.5 rounded-full text-[9px] font-bold bg-[#EBF5FF] text-[#3B82F6] border border-blue-100">
                                                {f.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmersPage;