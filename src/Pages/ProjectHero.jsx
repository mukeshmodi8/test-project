import React from "react";

const ProjectHero = () => {
  return (
    <div className="w-full md:p-2 px-4">
      <div
        className="
          relative w-full
          h-[110px]
          sm:h-[135px]
          md:h-[165px]
          lg:h-[190px]
          rounded-t-xl
          sm:rounded-t-2xl
          md:rounded-t-[24px]
          overflow-hidden
        "
      >
        {/* IMAGE */}
        <img
          src="/hmmm.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENT */}
        <div className="absolute left-4 right-4 md:left-8 md:right-8 bottom-3 md:bottom-4 text-white flex items-end justify-between">
          <div>
            <h1 className="text-lg sm:text-xl md:text-3xl font-bold leading-none">
              CH4OW
            </h1>
            <p className="text-xs sm:text-sm opacity-90 mt-0.5">
              ME0001
            </p>
          </div>

          <button className="p-1.5 rounded-lg bg-black/30 hover:bg-black/40 transition">
            <img src="/edit.svg" className="w-4 h-4 invert" alt="edit" />
          </button>
        </div>
      </div>
    </div>
  );
};


export default ProjectHero;
