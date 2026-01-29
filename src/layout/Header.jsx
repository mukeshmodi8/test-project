import React from "react";

const Header = () => {
  return (
    <header className="h-20 lg:h-[92px] bg-white flex items-center justify-between px-4 lg:px-6 border-b border-[#E5E7EB] sticky top-0 z-30 w-full">
      
      {/* LEFT SPACER - Desktop पर साइडबार की जगह छोड़ता है, मोबाइल पर गायब */}
      <div className="hidden lg:block lg:w-[240px]" />

      {/* SEARCH BAR - मोबाइल पर फ्लेक्सिबल बनाया गया है */}
      <div className="flex flex-1 lg:flex-none items-center bg-[#EEF3F9] px-3 lg:px-5 py-2 rounded-full max-w-[580px] mx-2 lg:mx-4">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full text-sm placeholder-gray-500 min-w-[50px]"
        />
        <div className="ml-2 lg:ml-3 w-8 h-8 lg:w-9 lg:h-9 shrink-0 rounded-full bg-[#EAF1FB] flex items-center justify-center">
          <img
            src="/serchicon.svg"
            className="w-4 h-4 lg:w-5 lg:h-5 text-[#202020]"
            alt="search"
          />
        </div>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-3 lg:gap-6 shrink-0">
        {/* Notification */}
        <div className="relative cursor-pointer">
          <img
            src="/Group 699.svg"
            className="w-5 h-5 lg:w-6 lg:h-6"
            alt="notification"
          />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 lg:w-4 lg:h-4 bg-red-600 text-white text-[8px] lg:text-[10px] rounded-full flex items-center justify-center">
            13
          </span>
        </div>

        {/* Settings - मोबाइल पर छुपा सकते हैं या छोटा रख सकते हैं */}
        <img
          src="/Group 697.svg"
          className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hidden sm:block"
          alt="settings"
        />

        {/* PROFILE SECTION */}
        <div className="flex items-center gap-2 lg:gap-3 cursor-pointer bg-white border border-[#E5E7EB] rounded-full px-2 lg:px-4 py-1.5 lg:py-2">
          {/* PROFILE IMAGE WRAPPER */}
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-[#2C6032] flex items-center justify-center shrink-0">
            <img
              src="/user.png"
              alt="profile"
              className="w-6 h-6 lg:w-8 lg:h-8 rounded-full object-cover"
            />
          </div>

          {/* NAME - मोबाइल पर पूरी तरह छुपा दिया है ताकि सर्च बार को जगह मिले */}
          <div className="leading-4 hidden md:block">
            <p className="text-sm font-semibold text-[#3D2B65] whitespace-nowrap">
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