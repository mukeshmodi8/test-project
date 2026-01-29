import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/", icon: "/sidebar_icons.svg" },
  { name: "Project", path: "/projects", icon: "/sidebar_icons2.svg" },
  { name: "Farmers", path: "/farmers", icon: "/sidebar_icons3.svg" },
  { name: "Carbon Credits", path: "/Carbon", icon: "/sidebar_icons4.svg" },
  { name: "Customers", path: "/customers", icon: "/sidebar_icons5.svg" },
  { name: "Retirement", path: "/Retirement", icon: "/sidebar_icons6.svg" },
  { name: "VVB", path: "/carbon-credits", icon: "/sidebar_icons7.svg" },
  { name: "User", path: "/User", icon: "/sidebar_icons8.svg" },
  { name: "Notification", path: "/vvb", icon: "/sidebar_icons9.svg" },
  { name: "Master", path: "/master", icon: "/sidebar_icons10.svg" },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const scrollRef = useRef(null);

  // मोबाइल पर बाहर क्लिक करने पर बंद करने के लिए
  const handleClose = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
     ${isActive ? "bg-red-50 text-red-600 shadow-sm" : "text-[#202020] hover:bg-gray-100"}`;

  return (
    <>
      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80] lg:hidden transition-opacity"
          onClick={handleClose}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 bg-white border-r border-gray-100 shadow-xl lg:shadow-none z-[90] transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0 w-[240px]" : "-translate-x-full lg:translate-x-0 lg:w-0"}
        flex flex-col overflow-hidden`}
      >
        {/* LOGO SECTION */}
        <div className="p-5 h-20 flex items-center shrink-0 border-b border-gray-50">
          <img src="/Logo.svg" className="h-8 object-contain" alt="logo" />
        </div>

        {/* SCROLLABLE MENU AREA */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto no-scrollbar px-3 py-4 flex flex-col justify-between"
        >
          {/* Main Navigation */}
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                onClick={handleClose}
                className={linkClass}
              >
                <img src={item.icon} className="w-5 h-5 shrink-0" alt="" />
                <span className="truncate">{item.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* ORGANIZATION DETAILS (Moved inside scroll for better UX on small screens) */}
          <div className="mt-8 mb-4">
            <div className="bg-[#FFF6F6] rounded-[14px] p-4 space-y-3 relative border border-red-50">
              <button className="absolute right-3 top-3 w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-sm text-red-600 hover:bg-red-50 transition-colors">
                <span className="text-[14px]"><img src="/edit.svg" alt="" /></span>
              </button>

              <h4 className="text-[13px] font-bold text-[#202020] uppercase tracking-wider">
                Organization Details
              </h4>

              <div className="space-y-2 text-[12px] text-gray-700">
                <p className="flex items-center gap-2">
                  <span className="opacity-70"><img src="/user.svg" alt="" /></span> <span className="font-medium">Yogendra Panchal</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="opacity-70"><img src="/phone.svg" alt="" /></span> <span>+91 9876543210</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="opacity-70"><img src="/mail.svg" alt="" /></span> <span className="truncate">info@ola.com</span>
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-red-100/50 space-y-2 text-[12px] text-gray-700">
                <p className="leading-relaxed">
                  <span className="font-semibold text-[#202020]">Address:</span>{" "}
                  Near MMRDA Grounds, Kolivery Village, MMRDA Area, Bandra Kurla Complex,
                  Bandra East, Mumbai, Maharashtra 400051
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <p><span className="font-semibold text-[#202020]">City:</span> Mumbai</p>
                </div>
                <p><span className="font-semibold text-[#202020]">State:</span> MH</p>
                <p><span className="font-semibold text-[#202020]">GST:</span> XXXXXXXXXX</p>
                <p><span className="font-semibold text-[#202020]">PAN:</span> XXXXXXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;