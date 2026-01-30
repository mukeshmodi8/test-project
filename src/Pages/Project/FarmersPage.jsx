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
    <div className="  max-w-[full] md:p- 2px-4"> 
      {/* MAIN GRID */}
      <div
        className="
          max-w-[1600px]
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-6
          md:gap-8
          items-stretch
        "
      >
        {/* MAP CARD */}
        <div
          className="
            lg:col-span-4
            bg-white
            rounded-[16px]
            border
            border-[#E5E7EB]
            p-4
            md:p-6
            shadow-sm
            order-2
            lg:order-1
            flex
            flex-col
            h-full
          "
        >
          <div className="rounded-xl overflow-hidden flex-1 bg-gray-50">
            <img
              src="/Frame 740.svg"
              alt="Map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TABLE CARD */}
        <div
          className="
            lg:col-span-8
            bg-white
            rounded-[16px]
            border
            border-[#E5E7EB]
            shadow-sm
            overflow-hidden
            order-1
            lg:order-2
            h-full
            flex
            flex-col
          "
        >
          {/* TABLE HEADER */}
          <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-4 border-b border-gray-50 gap-4">
            <div className="flex items-center gap-2">
              <div className="p-1 border border-gray-200 rounded-full">
                <img src="/Iconsss.svg" alt="icon" className="w-4 h-4" />
              </div>
              <h2 className="font-semibold text-gray-700 text-sm md:text-base">
                Farmers List
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <img src="/menu.svg" alt="menu" className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5 border rounded-full px-3 py-1 text-[11px] text-gray-500 font-medium bg-white shadow-sm border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                <img src="/Iconss.svg" alt="calendar" className="w-3 h-3" />
                <span>2025</span>
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto no-scrollbar flex-1">
            <table className="w-full text-left border-separate border-spacing-0 min-w-[850px]">
              <thead className="bg-[#BE202E] text-white sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-2 text-[11px] uppercase rounded-tl-[16px]">#</th>
                  <th className="px-4 py-2 text-[11px] uppercase">Distributor ID</th>
                  <th className="px-4 py-2 text-[11px] uppercase">Farmer ID</th>
                  <th className="px-4 py-2 text-[11px] uppercase">Farmer Name</th>
                  <th className="px-4 py-2 text-[11px] uppercase">WhatsApp</th>
                  <th className="px-4 py-2 text-[11px] uppercase">Email</th>
                  <th className="px-4 py-2 text-[11px] uppercase text-center">Cattle</th>
                  <th className="px-4 py-2 text-[11px] uppercase text-center rounded-tr-[16px]">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {farmers.map((f) => (
                  <tr
                    key={f.id}
                    className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                  >
                    <td className="px-4 py-2 text-[11px] text-gray-400">
                      {f.id < 10 ? `0${f.id}` : f.id}
                    </td>
                    <td className="px-4 py-2 text-[11px] font-semibold text-gray-800">
                      {f.distributorId}
                    </td>
                    <td className="px-4 py-2 text-[11px] font-semibold text-gray-800">
                      {f.farmerId}
                    </td>
                    <td className="px-4 py-2 text-[11px] font-medium text-gray-600">
                      {f.name}
                    </td>
                    <td className="px-4 py-2 text-[11px] text-gray-600">
                      {f.whatsapp}
                    </td>
                    <td className="px-4 py-2 text-[11px] text-gray-600 truncate max-w-[160px]">
                      {f.email}
                    </td>
                    <td className="px-4 py-2 text-[11px] text-center font-semibold text-gray-600">
                      {f.cattle}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-semibold bg-green-50 text-green-600 border border-green-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                        {f.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FOOTER */}
          <div className="px-4 sm:px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center">
            <span className="text-[11px] text-gray-400">
              Showing {farmers.length} Farmers
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-[11px] border rounded hover:bg-white transition-colors">
                Prev
              </button>
              <button className="px-3 py-1 text-[11px] border rounded hover:bg-white transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmersPage;