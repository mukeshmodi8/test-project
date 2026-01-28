import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/", icon: "/sidebar_icons.svg" },
  { name: "Project", path: "/projects", icon: "/sidebar_icons2.svg" },
  { name: "Farmers", path: "/farmers", icon: "/sidebar_icons3.svg" },
  { name: "Carbon Credits", path: "/Carbon", icon: "/sidebar_icons4.svg" },
  { name: "customers", path: "/customers", icon: "/sidebar_icons5.svg" },
  { name: "Retirement", path: "/Retirement", icon: "/sidebar_icons6.svg" },
  { name: "VVB", path: "/carbon-credits", icon: "/sidebar_icons7.svg" },
  { name: "User", path: "/User", icon: "/sidebar_icons8.svg" },
  { name: "Notification", path: "/vvb", icon: "/sidebar_icons9.svg" },
  { name: "Master", path: "/master", icon: "/sidebar_icons10.svg" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all
     ${isActive ? "bg-red-50 text-red-600" : "text-gray-600 hover:bg-gray-100"}`;

  return (
    <div className="relative flex h-screen">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-10 z-[100] bg-white rounded-full shadow-md border border-gray-100 p-0.5 transition-all
          ${isOpen ? "left-[245px]" : "left-4"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 20 20"
          className={`text-red-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            fill="currentColor"
            d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-100 h-screen w-[265px]
        flex flex-col justify-between shadow-sm fixed lg:relative transition-all
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* ===== TOP SECTION ===== */}
        <div>
          {/* Logo */}
          <div className="p-5 h-20 flex items-center">
            <img src="/Logo.svg" className="h-8 object-contain" alt="Logo" />
          </div>

          {/* Navigation (NO SCROLL) */}
          <nav className="px-3 space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={linkClass}
              >
                <img
                  src={item.icon}
                  className="w-5 h-5 min-w-[20px]"
                  alt={item.name}
                />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* ===== BOTTOM SECTION (FIXED) ===== */}
      <div className="p-3 bg-white shrink-0 border-t border-gray-100">
          <div className="bg-[#FFF9F9] border border-[#FEE2E2] rounded-2xl p-4 relative shadow-sm">
            {/* Edit Icon in top right */}
            <button className="absolute top-4 right-4 hover:opacity-70 transition-opacity">
              <img src="/edit.svg" alt="edit" className="w-4 h-4" />
            </button>

            <h4 className="text-[14px] font-bold text-gray-800 mb-4">
              Organization Name
            </h4>

            {/* Contact Information Section */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 text-[12px] text-gray-600">
                <img src="/user.svg" className="w-4 h-4 opacity-80" alt="user" />
                <span>Yogendra Panchal</span>
              </div>
              <div className="flex items-center gap-3 text-[12px] text-gray-600">
                <img src="/phone.svg" className="w-4 h-4 opacity-80" alt="phone" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3 text-[12px] text-gray-600">
                <img src="/mail.svg" className="w-4 h-4 opacity-80" alt="mail" />
                <span className="truncate">info@ola.com</span>
              </div>
            </div>

            {/* Detailed Info Section */}
            <div className="pt-4 border-t border-[#FEE2E2] space-y-3">
              {/* Address */}
              <div className="flex gap-4 text-[11px]">
                <span className="text-gray-400 font-medium w-14 shrink-0">Address</span>
                <span className="text-gray-600 leading-normal">
                  Near MMRDA Grounds, Kolivery Village, MMRDA Area, Bandra Kurla Complex,
                  Bandra East, Mumbai, Maharashtra 400051
                </span>
              </div>

              {/* City & State */}
              <div className="flex text-[11px]">
                <div className="flex gap-4 w-1/2">
                  <span className="text-gray-400 font-medium w-14 shrink-0">City</span>
                  <span className="text-gray-600">Mumbai</span>
                </div>
               
              </div>
              {/* Pincode */}
              <div className="flex gap-4 text-[11px]">
                <span className="text-gray-400 font-medium w-14 shrink-0">State</span>
                <span className="text-gray-600">Maharashtra</span>
              </div>

              {/* Pincode */}
              <div className="flex gap-4 text-[11px]">
                <span className="text-gray-400 font-medium w-14 shrink-0">Pincode</span>
                <span className="text-gray-600">400051</span>
              </div>

              {/* Identifications with dashed top border */}
              <div className="space-y-2 pt-2 border-t border-dashed border-red-100 text-[11px]">
                <div className="flex gap-4">
                  <span className="text-gray-400 font-medium w-14 shrink-0">GST No.</span>
                  <span className="text-gray-800 font-semibold tracking-wide">XXXXXXXXXX</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-400 font-medium w-14 shrink-0">PAN No.</span>
                  <span className="text-gray-800 font-semibold tracking-wide">XXXXXXXXXX</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-400 font-medium w-14 shrink-0">CIN No.</span>
                  <span className="text-gray-800 font-semibold tracking-wide">XXXXXXXXXX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
