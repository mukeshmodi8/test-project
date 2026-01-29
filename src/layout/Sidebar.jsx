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
    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
     ${isActive ? "bg-red-50 text-red-600" : "text-gray-600 hover:bg-gray-100"}`;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[80] lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div className="relative flex h-screen overflow-hidden">
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className={`fixed top-6 z-[100] bg-white rounded-full shadow-lg transition-all duration-300 border border-gray-100 p-1 
            ${isOpen ? "left-[215px] lg:left-[225px]" : "left-4"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            className={`text-red-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              fill="currentColor"
              d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z"
            />
          </svg>
        </button>

        {/* Sidebar */}
        <aside
          className={`bg-white border-r border-gray-100 h-screen flex flex-col transition-all duration-300 shadow-sm z-[90] fixed top-0 bottom-0
            ${isOpen ? "translate-x-0 w-[240px]" : "-translate-x-full w-0"}`}
        >
          {/* Logo Section */}
          <div className="p-5 flex items-center h-20 shrink-0">
            <img src="/Logo.svg" className="h-8 object-contain" alt="Logo" />
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-3 space-y-1 mt-2 no-scrollbar scroll-smooth">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                className={linkClass}
              >
                <img
                  src={item.icon}
                  className="w-5 h-5 min-w-[20px] object-contain"
                  alt={item.name}
                />
                <span className={`whitespace-nowrap transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                  {item.name}
                </span>
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content Placeholder - adjusts when sidebar is open on desktop */}
        <main className={`flex-1 transition-all duration-300 ${isOpen ? "lg:ml-[240px]" : "ml-0"}`}>
          {/* Yahan aapka content aayega */}
        </main>
      </div>
    </>
  );
};

export default Sidebar;