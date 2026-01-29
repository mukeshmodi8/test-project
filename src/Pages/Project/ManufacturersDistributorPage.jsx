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
    <div className="flex justify-between items-center px-4 py-3 bg-white border-b border-gray-50">
        <div className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center shrink-0">
                <img src={iconSrc} alt="" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-sm font-semibold text-gray-700 whitespace-nowrap">{title}</h3>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <img src="menu.svg" alt="menu" className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1.5 border rounded-full px-3 py-1 text-[11px] text-gray-500 font-medium bg-white shadow-sm border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">

                <img src="Iconss.svg" alt="calendar" className="w-3 h-3" />
                <span>2025</span>
            </div>

        </div>
    </div>
);

const ManufacturersDistributorPage = () => {
    return (
        <div className="bg-[#F9FAFB] w-full min-h-screen font-sans">
            <div className="w-full max-w-full lg:max-w-[1600px] mx-auto p-3 sm:p-4 md:p-6 space-y-6">

                {/* ================= MANUFACTURERS ================= */}
                <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden">
                    <TableHeader title="Manufacturers" iconSrc="/Icons1.svg" />

                    <div className="overflow-x-auto no-scrollbar">
                        <table className="w-full min-w-[800px] text-left border-separate border-spacing-0">
                            <thead className="bg-[#BE202E] text-white">
                                <tr>
                                    <th className="px-3 py-2 text-[10px] font-semibold uppercase">#</th>
                                    <th className="px-3 py-2 text-[10px] font-semibold uppercase">Manufacturer ID</th>
                                    <th className="px-3 py-2 text-[10px] font-semibold uppercase">Name</th>
                                    <th className="px-3 py-2 text-[10px] font-semibold uppercase">Email</th>
                                    <th className="px-3 py-2 text-[10px] font-semibold uppercase">Phone No.</th>
                                    <th className="px-3 py-2 text-[10px] font-semibold uppercase">Location</th>
                                    <th className="px-3 py-2 text-[10px] font-semibold uppercase text-center">Action</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-50">
                                {manufacturers.map((m) => (
                                    <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-3 py-2 text-[11px] text-gray-500">{m.id}</td>
                                        <td className="px-3 py-2 text-[12px] font-semibold text-gray-800">{m.mid}</td>
                                        <td className="px-3 py-2 text-[12px] text-gray-600">{m.name}</td>
                                        <td className="px-3 py-2 text-[12px] text-gray-600">{m.email}</td>
                                        <td className="px-3 py-2 text-[12px] text-gray-600">{m.phone}</td>
                                        <td className="px-3 py-2 text-[12px] text-gray-600">{m.location}</td>
                                        <td className="px-3 py-2 text-center">
                                            <div className="flex justify-center gap-2">
                                                <button><img src="/Vector.svg" className="w-3.5 h-3.5" /></button>
                                                <button><img src="/Iconsdet.svg" className="w-4 h-4" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

                {/* ================= DISTRIBUTORS ================= */}
                <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden">
                    <TableHeader title="Distributor" iconSrc="/Icons3.svg" />

                    <div className="overflow-x-auto no-scrollbar">
                        <table className="w-full min-w-[900px] text-left border-separate border-spacing-0">
                            <thead className="bg-[#BD2831] text-white">
                                <tr>
                                    <th className="px-3 py-2 text-[10px] font-semibold uppercase">#</th>
                                    <th className="px-3 py-2 text-[10px] font-semibold uppercase">Distributor ID</th>
                                    <th className="px-3 py-2 text-[10px] font-semibold uppercase">Name</th>
                                    <th className="px-3 py-2 text-[10px] font-semibold uppercase">Reg No.</th>
                                    <th className="px-3 py-2 text-[10px] font-semibold uppercase">Email</th>
                                    <th className="px-3 py-2 text-[10px] font-semibold uppercase">Phone No.</th>
                                    <th className="px-3 py-2 text-[10px] font-semibold uppercase">Status</th>
                                    <th className="px-3 py-2 text-[10px] font-semibold uppercase text-center">Action</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-50">
                                {distributors.map((d) => (
                                    <tr key={d.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-3 py-2 text-[11px] text-gray-500">{d.id}</td>
                                        <td className="px-3 py-2 text-[12px] font-semibold text-gray-800">{d.did}</td>
                                        <td className="px-3 py-2 text-[12px] text-gray-600">{d.name}</td>
                                        <td className="px-3 py-2 text-[12px] text-gray-600">{d.reg}</td>
                                        <td className="px-3 py-2 text-[12px] text-gray-600">{d.email}</td>
                                        <td className="px-3 py-2 text-[12px] text-gray-600">{d.phone}</td>
                                        <td className="px-3 py-2">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                                                {d.status}
                                            </span>
                                        </td>
                                        <td className="px-3 py-2 text-center">
                                            <div className="flex justify-center gap-2">
                                                <button><img src="/icons11.svg" className="w-3.5 h-3.5" /></button>
                                                <button><img src="/delet.svg" className="w-3.5 h-3.5" /></button>
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