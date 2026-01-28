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
    <div className="flex justify-between items-center px-5 py-3 bg-white">
        <div className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center">
                <img src={iconSrc} alt="" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        </div>
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
);

const ManufacturersDistributorPage = () => {
    return (
        <div className="bg-[#FFFFFF] p-4 md:p-6 min-h-screen font-sans">
            <div className="max-w-[1600px] mx-auto space-y-6">

                {/* Manufacturers Table */}
                <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden">
                    <TableHeader
                        title="Manufacturers"
                        iconSrc="/Icons1.svg"
                    />
                    <div className="px-5 pb-4 text-[14px] overflow-x-auto">
                        <table className="w-full text-left border-separate border-spacing-0">
                            <thead className="bg-[#BE202E] text-white">
                                <tr>
                                    <th className="px-3 py-2 font-medium text-[10px] uppercase tracking-wider rounded-tl-[8px]">#</th>
                                    <th className="px-3 py-2 font-medium text-[10px] uppercase tracking-wider">Manufacturer ID</th>
                                    <th className="px-3 py-2 font-medium text-[10px] uppercase tracking-wider">Manufacturer Name</th>
                                    <th className="px-3 py-2 font-medium text-[10px] uppercase tracking-wider">Email</th>
                                    <th className="px-3 py-2 font-medium text-[10px] uppercase tracking-wider">Phone No.</th>
                                    <th className="px-3 py-2 font-medium text-[10px] uppercase tracking-wider">Location</th>
                                    <th className="px-3 py-2 font-medium text-[10px] uppercase tracking-wider text-right rounded-tr-[8px]">Action</th>
                                </tr>
                            </thead>
                            <tbody className="border-x border-b border-gray-100">
                                {manufacturers.map((m) => (
                                    <tr key={m.id} className="hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0">
                                        <td className="px-3 py-2 text-[10px] text-gray-500">
                                            <div className="flex items-center gap-1.5">
                                                <svg className="w-2 h-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                                {m.id}
                                            </div>
                                        </td>
                                        <td className="px-3 py-2 text-[14px] font-bold text-gray-800">{m.mid}</td>
                                        <td className="px-3 py-2 text-[14px] text-gray-600">{m.name}</td>
                                        <td className="px-3 py-2 text-[14px] text-gray-600">{m.email}</td>
                                        <td className="px-3 py-2 text-[14px] text-gray-600">{m.phone}</td>
                                        <td className="px-3 py-2 text-[14px] text-gray-600">{m.location}</td>
                                        <td className="px-3 py-2 text-center">
                                            <div className="flex justify-center gap-2">
                                                <button className="hover:opacity-80 text-[#4D4D4]">
                                                    <img
                                                        src="/Vector.svg"
                                                        alt="edit"
                                                        className="w-4 h-4"
                                                    />
                                                </button>
                                                <button className="hover:opacity-80 ">
                                                    <img
                                                        src="/Iconsdet.svg"
                                                        alt="delete"
                                                        className="w-6 h-7 text-[#4D4D4D]"
                                                    />
                                                </button>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Distributor Table */}
                <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden">
                    <TableHeader
                        title="Distributor"
                        iconSrc="/Icons3.svg"
                    />
                    <div className="px-5 pb-4 overflow-x-auto">
                        <table className="w-full text-left border-separate border-spacing-0">
                            <thead className="bg-[#BD2831] text-white">
                                <tr>
                                    <th className="px-3 py-2 font-medium text-[10px] uppercase tracking-wider rounded-tl-[8px]">#</th>
                                    <th className="px-3 py-2 font-medium text-[10px] uppercase tracking-wider">Distributor ID</th>
                                    <th className="px-3 py-2 font-medium text-[10px] uppercase tracking-wider">Distributor Name</th>
                                    <th className="px-3 py-2 font-medium text-[10px] uppercase tracking-wider">Registration No.</th>
                                    <th className="px-3 py-2 font-medium text-[10px] uppercase tracking-wider">Email</th>
                                    <th className="px-3 py-2 font-medium text-[10px] uppercase tracking-wider">Phone No.</th>
                                    <th className="px-3 py-2 font-medium text-[10px] uppercase tracking-wider">Status</th>
                                    <th className="px-3 py-2 font-medium text-[10px] uppercase tracking-wider text-center rounded-tr-[8px]">Action</th>
                                </tr>
                            </thead>
                            <tbody className="border-x border-b border-gray-100">
                                {distributors.map((d) => (
                                    <tr key={d.id} className="hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0">
                                        <td className="px-3 py-2 text-[10px] text-gray-500">
                                            <div className="flex items-center gap-1.5">
                                                <svg className="w-2 h-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                                {d.id}
                                            </div>
                                        </td>
                                        <td className="px-3 py-2 text-[14px] font-bold text-gray-800">{d.did}</td>
                                        <td className="px-3 py-2 text-[14px] text-gray-600">{d.name}</td>
                                        <td className="px-3 py-2 text-[14px] text-gray-600">{d.reg}</td>
                                        <td className="px-3 py-2 text-[14px] text-gray-600">{d.email}</td>
                                        <td className="px-3 py-2 text-[14px] text-gray-600">{d.phone}</td>
                                        <td className="px-3 py-2">
                                            <span className="inline-block px-3 py-0.5 rounded-full text-[9px] font-bold bg-[#EBF5FF] text-[#3B82F6] border border-blue-100">
                                                {d.status}
                                            </span>
                                        </td>
                                        <td className="px-3 py-2 text-center">
                                            <div className="flex justify-center gap-2">

                                                {/* EDIT */}
                                                <button className="hover:opacity-80">
                                                    <img
                                                        src="/icons11.svg"
                                                        alt="edit"
                                                        className="w-4 h-4"
                                                    />
                                                </button>

                                                {/* DELETE */}
                                                <button className="hover:opacity-80">
                                                    <img
                                                        src="/delet.svg"
                                                        alt="delete"
                                                        className="w-4 h-4"
                                                    />
                                                </button>

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