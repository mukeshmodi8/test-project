import React from "react";

const ProjectDetailsPage = () => {
    return (
        <div className="md:p-2 px-4 ">
            <div className="mx-auto space-y-2">
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                    <button className="flex items-center gap-2 bg-[#C22D34] text-white px-4 py-1.5 rounded-full text-sm font-medium">
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
                            className="flex items-center gap-2 bg-white border border-[#E5E7EB] px-4 py-1.5 rounded-full text-sm text-[#3A3A3A]"
                        >
                            <img src={tab.icon} className="w-4 h-4 opacity-60" alt={tab.label} />
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-12 gap-4 items-stretch">

                    {/* OVERVIEW CARD */}
                    <div className="col-span-12 lg:col-span-6 bg-white rounded-[14px] border border-[#E5E7EB] shadow-sm h-full">
                        <div className="px-4 py-2 border-b border-[#E5E7EB]">
                            <h2 className="text-sm font-semibold text-[#202020]">Overview</h2>
                        </div>

                        <div className="px-4 py-2">
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
                                    className="grid grid-cols-2 gap-4 border-b border-gray-100 py-1.5 last:border-0"
                                >
                                    <span className="text-[13px] text-[#202020] leading-tight">
                                        {label}
                                    </span>
                                    <span className="text-[13px] font-medium text-[#6B7280] leading-tight">
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* MAP CARD */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-[14px] border border-[#E5E7EB] p-3 shadow-sm flex flex-col h-full">
                        <div className="rounded-[10px] overflow-hidden h-[220px] border border-gray-100">
                            <iframe
                                title="map"
                                className="w-full h-full"
                                loading="lazy"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.796324832442!2d72.8603276!3d19.072671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e630f9d977%3A0x6a099f663f760f38!2sBandra%20Kurla%20Complex!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
                            />
                        </div>

                        <div className="mt-3 flex-1">
                            <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#202020] mb-1.5">
                                Address
                            </h4>
                            <p className="text-[#727272] text-[12px] leading-snug mb-3">
                                Near MMRDA Grounds, Kolivery Village, MMRDA Area, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051
                            </p>

                            <div className="space-y-2">
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-[#202020]">Latitude</p>
                                    <p className="text-[#727272] text-[12px] font-mono">19.0693124375</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-[#202020]">Longitude</p>
                                    <p className="text-[#727272] text-[12px] font-mono">72.8625163181</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NFT CARD */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-[14px] border border-[#E5E7EB] p-4 shadow-sm flex flex-col h-full">
                        <h4 className="text-[10px] uppercase font-bold text-[#202020] mb-3">
                            NFT
                        </h4>

                        <div className="flex items-center justify-center rounded-[10px] border border-dashed border-gray-200  p-2 flex-1">
                            <img
                                src="/bharat.svg"
                                alt="NFT"
                                className="w-300 h-full object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;