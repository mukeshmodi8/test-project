import React from "react";

const ProjectDetailsPage = () => {
    return (
        <div className="bg-[#FFFFFF] p-6 min-h-screen">
            <div className="max-w-[1400px] mx-auto space-y-6">

                {/* TABS */}
                <div className="flex flex-wrap gap-3 text-[15px] text-[#3A3A3A]">
                    <button className="flex items-center gap-2 bg-[#C22D34] text-white px-5 py-2 rounded-full text-sm font-medium">
                        <img src="/Layer_1.svg" className="w-4 h-4 invert" />
                        Overview
                    </button>

                    {[
                        { label: "Manufacturers", icon: "/archive.svg" },
                        { label: "Feed Concentrator", icon: "/Capa_1.svg" },
                        { label: "Distributor", icon: "/g2268.svg" },
                    ].map((tab) => (
                        <button
                            key={tab.label}
                            className="flex items-center gap-2 bg-white border border-[#E5E7EB] px-5 py-2 rounded-full text-sm text-[#3A3A3A] hover:bg-gray-50"
                        >
                            <img src={tab.icon} className="w-4 h-4 opacity-60 text-[#3A3A3A]" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-12 gap-6 items-stretch">

                    {/* OVERVIEW */}
                    <div className="col-span-12 lg:col-span-6 bg-white rounded-[16px] border border-[#E5E7EB] flex flex-col h-full">
                        <div className="px-6 py-4 border-b border-[#E5E7EB]">
                            <h2 className="text-sm font-semibold text-gray-800">Overview</h2>
                        </div>

                        <div className="p-6 space-y-4 text-sm flex-1 text-[15px]">
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
                                <div key={label} className="flex justify-between items-center">
                                    <span className="text-[#1F2937] font-medium">{label}</span>
                                    <span className="text-[#6B7280]">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* MAP */}
                    <div className="col-span-12 lg:col-span-3 bg-white rounded-[16px] border border-[#E5E7EB] p-4 flex flex-col h-full">
                        <div className="rounded-[12px] overflow-hidden h-[280px]">
                            <iframe
                                title="map"
                                className="w-full h-full"
                                src="https://www.google.com/maps?q=19.0693,72.8625&z=14&output=embed"
                                loading="lazy"
                            />
                        </div>

                        <div className="mt-4 text-sm flex-1">
                            <h4 className="text-xs font-semibold text-gray-500 mb-1">
                                Address
                            </h4>
                            <p className="text-gray-700 mb-4">
                                Near MMRDA Grounds, Kolivery Village, MMRDA Area,
                                Bandra Kurla Complex, Bandra East, Mumbai,
                                Maharashtra 400051
                            </p>

                            <div className="text-xs space-y-2">
                                <div>
                                    <p className="font-medium">Latitude</p>
                                    <p className="text-gray-400">19.0693124375</p>
                                </div>
                                <div>
                                    <p className="font-medium">Longitude</p>
                                    <p className="text-gray-400">72.8625163181</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NFT */}
                    <div className="col-span-12 lg:col-span-3 bg-white rounded-[16px] border border-[#E5E7EB] p-6 flex flex-col h-full">
                        <h4 className="text-xs font-semibold text-gray-500 mb-3">NFT</h4>

                        <div className="flex-1 flex items-center justify-center rounded-[12px] border border-dashed border-[#E5E7EB]">
                            <img
                                src="/bharat.svg"
                                alt="NFT"
                                className="max-h-full object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;
