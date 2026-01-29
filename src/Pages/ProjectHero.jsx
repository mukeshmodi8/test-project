import React from 'react';

const ProjectHero = () => {
    return (
        <div className="w-full px-2 md:px-4 py-3 md:py-5">
            <div className="relative w-full h-[160px] sm:h-[180px] md:h-[220px] rounded-2xl md:rounded-t-[24px] overflow-hidden shadow-sm">

                {/* Image */}
                <img
                    src="/hmmm.jpg"
                    alt="banner"
                    className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                {/* Text Content */}
                <div className="absolute left-4 md:left-8 bottom-4 md:bottom-6 text-white">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                        CH4OW
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base mt-0.5 md:mt-1 font-medium opacity-90">
                        ME0001
                    </p>
                </div>

                {/* Edit Button */}
                <button className="absolute right-3 md:right-6 top-3 md:top-6 p-1.5 md:p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-lg transition-all border border-white/30">
                    <img
                        src="/edit.svg"
                        alt="edit"
                        className="w-4 h-4 md:w-6 md:h-6"
                    />
                </button>

            </div>
        </div>
    );
};

export default ProjectHero;