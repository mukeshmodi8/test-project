import React from "react";

const ProjectHero = () => {
  return (
    <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-5">
      <div
        className="
          relative w-full
          h-[140px]
          xs:h-[160px]
          sm:h-[180px]
          md:h-[220px]
          lg:h-[260px]
          rounded-t-xl
          sm:rounded-t-2xl
          md:rounded-t-[24px]
          overflow-hidden
          shadow-sm
        "
      >
        {/* IMAGE */}
        <img
          src="/hmmm.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />

        {/* BLACK OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENT */}
        <div className="absolute left-3 right-3 sm:left-4 sm:right-4 md:left-8 md:right-8 bottom-3 sm:bottom-4 md:bottom-6 text-white flex items-end justify-between">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight leading-none">
              CH4OW
            </h1>
            <p className="text-[11px] sm:text-sm md:text-base mt-0.5 font-medium opacity-90">
              ME0001
            </p>
          </div>

          {/* RIGHT EDIT ICON */}
          <button
            className="
              p-1 sm:p-1.5 md:p-2
              rounded-md sm:rounded-lg
              transition-all
              
            "
          >
            <img
              src="/edit.svg"
              alt="edit"
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
