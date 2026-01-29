import React from "react";

const ProjectDetailsPage = () => {
    return (
        <div className="bg-[#F9FAFB] md:p-6 p-4 min-h-screen">
            <div className="max-w-[1400px] mx-auto space-y-6">

                <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">

                    <button className="flex items-center gap-2 shrink-0 bg-[#C22D34] text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
                        <img src="/Layer_1.svg" className="w-4 h-4 invert" alt="overview" />
                        Overview
                    </button>

                    {[
                        { label: "Manufacturers", icon: "/archive.svg" },
                        { label: "Feed Concentrator", icon: "/Capa_1.svg" },
                        { label: "Distributor", icon: "/g2268.svg" },
                    ].map((tab) => (
                        <button
                            key={tab.label}
                            className="flex items-center gap-2 shrink-0 bg-white border border-[#E5E7EB] px-5 py-2 rounded-full text-sm text-[#3A3A3A] hover:bg-gray-50 transition-colors"
                        >
                            <img src={tab.icon} className="w-4 h-4 opacity-60" alt={tab.label} />
                            <span className="whitespace-nowrap">{tab.label}</span>
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-6 bg-white rounded-[16px] border border-[#E5E7EB] flex flex-col shadow-sm">
                        <div className="px-4 py-3 border-b border-[#E5E7EB]">
                            <h2 className="text-sm font-semibold text-[#202020]">Overview</h2>
                        </div>
                        <div className="p-4 space-y-2 flex-1">
                            {[
                                ["Project Start Date", "01/03/2025"],
                                ["Project ID", "ME0001"],
                                ["Project Name", "CH4OW"],
                                ["Methodology", "Methane Cattle"],
                                ["Organization", "Zero Earth"],
                                ["Organization GST No.", "XXXXXXXXXX"],
                                ["Assigned Validator", "Zephyr Carbon"],
                                ["Total Credits Issued", "15000 tCO2eq"],
                                ["Total Credits Retired", "32000 MWh"],
                                ["POC Full Name", "Yogendra Panchal"],
                                ["Email", "yp@gmail.com"],
                                ["Phone no.", "+91 9876543210"],
                            ].map(([label, value]) => (
                                <div
                                    key={label}
                                    className="
          flex flex-col sm:flex-row
          sm:justify-between sm:items-center
          gap-0.5 sm:gap-2
          border-b border-gray-50
          pb-1
          last:border-0 last:pb-0
        "
                                >
                                    <span className="text-[#202020] text-sm">
                                        {label}
                                    </span>
                                    <span className="text-[#6B7280] text-sm font-medium">
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>


                    {/* MAP CARD */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-[16px] border border-[#E5E7EB] p-4 flex flex-col shadow-sm">
                        <div className="rounded-[12px] overflow-hidden h-[240px] lg:h-[280px] border border-gray-100">
                            <iframe
                                title="map"
                                className="w-full h-full  transition-all duration-500"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.796324832442!2d72.8603276!3d19.072671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e630f9d977%3A0x6a099f663f760f38!2sBandra%20Kurla%20Complex!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
                                loading="lazy"
                            />
                        </div>

                        <div className="mt-4 flex-1">
                            <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#202020] mb-2">Address</h4>
                            <p className="text-[#727272] text-sm leading-relaxed mb-4">
                                Near MMRDA Grounds, Kolivery Village, BKC, Bandra East, Mumbai, Maharashtra 400051
                            </p>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-[#202020]">Latitude</p>
                                <p className="text-[#727272] text-xs font-mono">19.0693124375</p>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-[#202020]">Longitude</p>
                                    <p className="text-[#727272] text-xs font-mono">72.8625163181</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-[16px] border border-[#E5E7EB] p-6 flex flex-col shadow-sm">
                        <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#202020] mb-4">NFT</h4>

                        <div className="flex-1 flex items-center justify-center rounded-[12px] border-2 border-dashed border-gray-100 bg-gray-50 p-4 min-h-[200px]">
                            <img
                                src="/bharat.svg"
                                alt="NFT"
                                className="w-full h-auto max-h-[250px] object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;