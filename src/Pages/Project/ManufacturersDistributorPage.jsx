import React from "react";

const manufacturers = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    mid: "MFG0001",
    name: "Zero Earth",
    email: "info@zeroearth.com",
    phone: "9876543210",
    location: "Gujarat",
}));

const distributors = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    did: "DS0001",
    name: "John Dep",
    reg: "XXXXXXXXXX",
    email: "jd@gmail.com",
    phone: "9876543210",
    status: "Active",
}));

const TableHeader = ({ title, iconSrc }) => (
    <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
            <img src={iconSrc} className="w-5 h-5 opacity-70" alt="" />
            <h3 className="text-[15px] font-semibold text-[#4B5563]">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
                <img src="/menu.svg" className="w-4 h-4 opacity-40" alt="filter" />
            </button>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-white border border-gray-200 rounded-md text-[12px] text-gray-600 shadow-sm">
                <img src="/Iconss.svg" className="w-3.5 h-3.5" alt="calendar" />
                2025
            </div>
        </div>
    </div>
);

const ManufacturersDistributorPage = () => {
    return (
        <div className="md:p-2 px-4">

            {/* OUTER WRAPPER CARD */}
            <div className="bg-white rounded-[20px] border border-gray-200 p-4 md:p-6 shadow-sm space-y-3">        {/* INNER CARD FOR MANUFACTURERS */}
                <div className="bg-white rounded-[12px] border border-gray-100 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
                    <TableHeader title="Manufacturers" iconSrc="/Icons1.svg" />

                    <div className="overflow-x-auto px-4 pb-4">
                        <table className="w-full border-collapse rounded-lg overflow-hidden border border-gray-100">
                            <thead className="bg-[#C22D34] text-white">
                                <tr>
                                    <th className="px-4 py-2 text-[11px] font-semibold uppercase text-left w-12 border-r border-white/10">#</th>
                                    <th className="px-4 py-2 text-[11px] font-semibold uppercase text-left">Manufacturer ID</th>
                                    <th className="px-4 py-2 text-[11px] font-semibold uppercase text-left">Manufacturer Name</th>
                                    <th className="px-4 py-2 text-[11px] font-semibold uppercase text-left">Email</th>
                                    <th className="px-4 py-2 text-[11px] font-semibold uppercase text-left">Phone No.</th>
                                    <th className="px-4 py-2 text-[11px] font-semibold uppercase text-left">Location</th>
                                    <th className="px-4 py-2 text-[11px] font-semibold uppercase text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {manufacturers.map((m) => (
                                    <tr key={m.id} className="hover:bg-gray-50/50">
                                        <td className="px-4 py-2 text-xs text-gray-400 flex items-center gap-2">
                                            <img src="/Arrows.svg" alt="" />{m.id}
                                        </td>
                                        <td className="px-4 py-2 text-xs font-bold text-gray-800">{m.mid}</td>
                                        <td className="px-4 py-2 text-xs text-gray-600">{m.name}</td>
                                        <td className="px-4 py-2 text-xs text-gray-600">{m.email}</td>
                                        <td className="px-4 py-2 text-xs text-gray-600">{m.phone}</td>
                                        <td className="px-4 py-2 text-xs text-gray-600">{m.location}</td>
                                        <td className="px-4 py-2 text-right">
                                            <div className="flex justify-end gap-3">
                                                <img src="/Vector.svg" className="w-3.5 h-3.5 opacity-50 cursor-pointer" />
                                                <img src="/Iconsdet.svg" className="w-3.5 h-3.5 opacity-50 cursor-pointer" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* INNER CARD FOR DISTRIBUTOR */}
                <div className="bg-white rounded-[5px] border border-gray-100 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
                    <TableHeader title="Distributor" iconSrc="/Icons3.svg" />

                    <div className="overflow-x-auto px-4 pb-4">
                        <table className="w-full border-collapse rounded-lg overflow-hidden border border-gray-100">
                            <thead className="bg-[#C22D34] text-white">
                                <tr>
                                    <th className="px-4 py-2 text-[11px] font-semibold uppercase text-left w-12 border-r border-white/10">#</th>
                                    <th className="px-4 py-2 text-[11px] font-semibold uppercase text-left">Distributor ID</th>
                                    <th className="px-4 py-2 text-[11px] font-semibold uppercase text-left">Distributor Name</th>
                                    <th className="px-4 py-2 text-[11px] font-semibold uppercase text-left">Registration No.</th>
                                    <th className="px-4 py-2 text-[11px] font-semibold uppercase text-left">Email</th>
                                    <th className="px-4 py-2 text-[11px] font-semibold uppercase text-left">Phone No.</th>
                                    <th className="px-4 py-2 text-[11px] font-semibold uppercase text-center">Status</th>
                                    <th className="px-4 py-2 text-[11px] font-semibold uppercase text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {distributors.map((d) => (
                                    <tr key={d.id} className="hover:bg-gray-50/50">
                                        <td className="px-4 py-2 text-xs text-gray-400 flex items-center gap-2">
                                            <img src="/Arrows.svg" alt="" />{d.id}
                                        </td>
                                        <td className="px-4 py-2 text-xs font-bold text-gray-800">{d.did}</td>
                                        <td className="px-4 py-2 text-xs text-gray-600">{d.name}</td>
                                        <td className="px-4 py-2 text-xs text-gray-600">{d.reg}</td>
                                        <td className="px-4 py-2 text-xs text-gray-600">{d.email}</td>
                                        <td className="px-4 py-2 text-xs text-gray-600">{d.phone}</td>
                                        <td className="px-4 py-2 text-center">
                                            <span className="px-6 py-0.5 rounded-full text-[10px] bg-blue-50 text-blue-500 font-medium border border-blue-100">Active</span>
                                        </td>
                                        <td className="px-4 py-2 text-right">
                                            <div className="flex justify-end gap-3">
                                                <img src="/icons11.svg" className="w-4 h-4 opacity-50 cursor-pointer" />
                                                <img src="/delet.svg" className="w-4 h-4 opacity-50 cursor-pointer" />
                                            </div>
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

export default ManufacturersDistributorPage;