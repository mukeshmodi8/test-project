import React from "react";

const Header = () => {
    return (
        <header className="h-[92px] bg-white flex items-center justify-between px-6 border-b border-[#E5E7EB] sticky top-0 z-30">

            <div className="w-[240px]" />
            <div className="flex items-center bg-[#EEF3F9] px-5 py-2 rounded-full w-[580px] m-2">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none w-full text-sm placeholder-gray-500"
                />
                <div className="ml-3 w-9 h-9 rounded-full bg-[#EAF1FB] flex items-center justify-center">
                    <img
                        src="/serchicon.svg"
                        className="w-5 h-5 text-[#202020]"
                        alt="search"
                    />
                </div>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-6">
                {/* Notification */}
                <div className="relative cursor-pointer">
                    <img
                        src="/Group 699.svg"
                        className="w-6 h-6"
                        alt="notification"
                    />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[10px] rounded-full flex items-center justify-center">
                        13
                    </span>
                </div>

                {/* Settings */}
                <img
                    src="/Group 697.svg"
                    className="w-6 h-6 cursor-pointer"
                    alt="settings"
                />

                <div className="flex items-center gap-3 cursor-pointer bg-white border border-[#E5E7EB] rounded-full px-4 py-2">

                    {/* OUTER RING */}


                    {/* INNER RING */}
                    <div className="w-10 h-10 rounded-full border-1 border-[#2C6032] flex items-center justify-center">

                        {/* PROFILE IMAGE */}
                        <img
                            src="/user.png"
                            alt="profile"
                            className="w-8 h-8 rounded-full object-cover"
                        />

                    </div>

                    {/* NAME */}
                    <div className="leading-4 hidden md:block">
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
