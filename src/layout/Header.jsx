import React from "react";

const Header = ({ setIsSidebarOpen }) => {

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <header className="h-20 lg:h-[92px] bg-white flex items-center justify-between px-4 lg:px-6 border-b border-[#E5E7EB] sticky top-0 z-30 w-full">

      {/* LEFT */}
      <div className="flex items-center gap-2">
        {/* MENU ICON */}
        <button onClick={toggleSidebar} className="lg:hidden">
          <img src="/menu.svg" alt="menu" className="w-6 h-6" />
        </button>

        <div className="hidden lg:block lg:w-[240px]" />
      </div>

      {/* SEARCH */}
      <div className="flex flex-1 lg:flex-none items-center bg-[#EEF3F9] px-3 lg:px-5 py-2 rounded-full max-w-[580px] mx-2">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full text-sm"
        />
        <div className="ml-2 w-8 h-8 rounded-full bg-[#EAF1FB] flex items-center justify-center">
          <img src="/serchicon.svg" className="w-4 h-4" alt="search" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="relative">
          <img src="/Group 699.svg" className="w-5 h-5" alt="notification" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-600 text-white text-[8px] rounded-full flex items-center justify-center">
            13
          </span>
        </div>

        <img
          src="/Group 697.svg"
          className="w-5 h-5 hidden sm:block"
          alt="settings"
        />

        <div className="flex items-center gap-2 bg-white border rounded-full px-3 py-1.5">
          <div className="w-8 h-8 rounded-full border border-[#2C6032] flex items-center justify-center">
            <img src="/user.png" className="w-6 h-6 rounded-full" alt="user" />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-[#3D2B65]">
              Abhimanyu Rathi
            </p>
            <span className="text-xs text-[#BE202E]">@abrathi</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
