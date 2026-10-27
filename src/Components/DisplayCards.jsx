import Image from 'next/image'
import Link from "next/link";

import { Clock, Flame,  Star } from "lucide-react";

export default function DisplayCards({ card }) {
    return (
        <Link 
            href={`/cards/${card.id}`}
        >
            <div className=" overflow-hidden rounded-[14px] border border-transparent bg-[#17181c] text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#c8ff00] hover:shadow-[0_8px_30px_rgba(200,255,0,0.15)]">
                
                {/* Exercise Image */}
                <div className="relative h-41 w-full overflow-hidden">
                    <Image
                        src={card.image}
                        alt={card.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 330px"
                        quality={95}
                        className="object-cover"
                    />
                </div>


                {/* Card Content */}
                <div className="px-5 pb-4 pt-5">
                    {/* Muscle Group Tags */}
                    <div className="mb-3 flex flex-wrap gap-1.5">
                        {card.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#c8ff00] px-3 py-0.75 text-[10px] font-extrabold uppercase leading-3.5 text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Exercise Name */}
                    <h3 className="text-[16px] font-extrabold uppercase leading-5 tracking-[0.2px]">
                        {card.name}
                    </h3>

                    {/* Equipment */}
                    <p className="mt-1 text-[11px] font-normal leading-4 text-[#96979f]">
                        {card.equipment}
                    </p>

                    {/* Divider */}
                    <div className="mb-2.5 mt-3.5 border-t border-[#25262b]" />

                    {/* Exercise Stats */}
                    <div className="flex items-center gap-3.5 text-[10px] text-[#a6a7b0]">
                        <div className="flex items-center gap-1 whitespace-nowrap">
                            <Clock size={12} strokeWidth={1.8} />
                            <span>{card.duration} min</span>
                        </div>

                        <div className="flex items-center gap-1 whitespace-nowrap">
                            <Flame
                                size={12}
                                strokeWidth={1.8}
                                fill="#a6a7b0"
                            />
                            <span>{card.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center gap-1 whitespace-nowrap">
                            <Star size={12} strokeWidth={1.8} />
                            <span>{card.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
