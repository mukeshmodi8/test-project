import React from "react";

const Header = ({ setIsSidebarOpen }) => {

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <header className="  bg-white flex items-center justify-between px-4 sticky top-0 z-30 pt-4 w-full">

      {/* LEFT */}
      <div className="flex items-center gap-2">
        {/* MENU ICON */}
        <button onClick={toggleSidebar} className="lg:hidden">
          <img src="/menu.svg" alt="menu" className="w-6 h-6" />
        </button>
      </div>

      {/* SEARCH */}
      <div className="flex flex-1 lg:flex-none items-center bg-[#EEF3F9] px-3 lg:px-5 py-2 rounded-full w-[850px] mx-2">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-[#202020]  outline-none w-full text-sm"
        />
        <div className="ml-2 w-8 h-8  rounded-full bg-[#EAF1FB] flex items-center justify-center">
          <img src="/serchicon.svg" className="w-4 h-4" alt="search" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="relative">
          <img src="/ball.svg" className="w-6 h-6" alt="notification" />
          
        </div>

        <img
          src="/Group 697.svg"
          className="w-7\6 h-6 hidden sm:block"
          alt="settings"
        />
        <div
          className="
    flex items-center gap-[10px]
    h-[50px]
    px-[8px] py-[5px]
    bg-white
    border border-[#D8D8D8]
    rounded-[82px]
  "
        >
          <div className="w-10 h-10 rounded-full border border-[#2C6032] flex items-center justify-center shrink-0">
            <img
              src="/user.png"
              className="w-7 h-7 rounded-full"
              alt="user"
            />
          </div>

          {/* Name */}
          <div className="hidden md:flex flex-col leading-none">
            <p className="text-sm font-semibold text-[#3D2B65] leading-none">
              Abhimanyu Rathi
            </p>
            <span className="text-xs mt-1.5 text-[#BE202E] leading-none">
              @abrathi
            </span>
          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;
