import React from 'react';
import banner_image from '../../public/banner.png';
import Image from 'next/image'
const Banner = () => {
    return (
        <section className="container  mx-auto w-full overflow-hidden rounded-lg border border-[#25262b] bg-[#15171d] ">
            <div className="container mx-auto flex  items-center justify-between px-6 py-6 sm:px-8 md:min-h-47.5 lg:min-h-100 md:px-12">

                {/* Left Content */}
                <div className="z-10 flex w-[60%] flex-col items-start sm:w-[58%] md:w-[60%] lg:w-[62%]">
                    <p className="mb-2 text-[7px] font-bold uppercase tracking-widest text-[#c5ff00] sm:mb-3 sm:text-[9px] lg:text-[11px]">
                        Workout Library
                    </p>

                    <h1 className="text-xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        Train With Intent. Log
                        <br />
                        Every Set.
                    </h1>

                    <p className="mt-3 max-w-[260px] text-[9px] leading-relaxed text-gray-400 sm:max-w-sm sm:text-xs md:text-sm lg:mt-4 lg:max-w-lg lg:text-base">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <button className="mt-4 rounded-sm bg-[#c5ff00] px-3 py-2 text-[8px] font-extrabold uppercase tracking-wide text-black transition-colors hover:bg-[#d7ff52] sm:px-4 sm:py-2.5 sm:text-[10px] lg:mt-6 lg:px-5 lg:py-3 lg:text-xs">
                        Browse Workouts
                    </button>
                </div>


                {/* Right Image */}
                <div className="flex w-[40%] items-center justify-center sm:w-[45%] lg:w-[50%]">
                    <Image
                        src={banner_image}
                        alt="Athlete exercising on gym equipment"
                        className="h-[160px] w-full object-contain sm:h-[220px] md:h-[280px] lg:h-[340px] xl:h-[400px]"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;