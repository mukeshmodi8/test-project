import React from 'react';
// import { Pencil } from 'lucide-react';

const ProjectHero = () => {
    return (
        <div className="w-full px-4 py-5">
            <div className="relative w-full h-[180px] md:h-[220px] rounded-t-[24px] overflow-hidden shadow-sm">

                {/* Image */}
                <img
                    src="/hmmm.jpg"
                    alt="banner"
                    className="w-full h-full object-cover"
                />

                {/* Gradient Overlay (image jaisa) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                {/* Left Text */}
                <div className="absolute left-8 bottom-6 text-white">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                        CH4OW
                    </h1>
                    <p className="text-sm md:text-base mt-1 font-medium opacity-90">
                        ME0001
                    </p>
                </div>

                {/* Edit Button */}
                <button className="absolute right-6 top-6 p-2 rounded-lg hover:bg-white transition">
                    <img
                        src="/edit.svg"
                        alt="edit"
                        className="mt-35 h-10 w-7"
                    />
                </button>

            </div>

        </div>
    );
};

export default ProjectHero;