import React from 'react';

export const CardDetailsPage = async ({ params }) => {
    const [cardId] = params

    const singleCardData = await getSingleCard();
    console.log(singleCardData);
    
    return (
        <main className="mx-auto grid w-full max-w-[1440px] flex-1 grid-cols-1 gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[1fr_1fr] lg:gap-9 xl:gap-10">
            {/* Exercise Image */}
            <div className="relative h-[350px] w-full overflow-hidden rounded-[9px] sm:h-[440px] lg:h-[min(57vw,580px)] lg:min-h-[430px]">
                <Image
                    src={exercise.image}
                    alt={exercise.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={95}
                    className="object-cover object-center"
                />
            </div>

            {/* Exercise Information */}
            <section className="flex flex-col">
                <h1 className="text-2xl font-black uppercase leading-tight tracking-tight sm:text-[28px]">
                    {exercise.name}
                </h1>

                <p className="mt-2 text-[12px] leading-[1.7] text-[#a2a3ac]">
                    {exercise.description}
                </p>

                {/* Muscle Groups */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {exercise.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#c8ff00] px-3 py-[3px] text-[10px] font-extrabold text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Exercise Stats */}
                <div className="mt-4 overflow-hidden rounded-xl border border-[#22252d] bg-[#171a22]">
                    {[
                        ["Equipment", exercise.equipment],
                        ["Difficulty", exercise.difficulty],
                        ["Sets", exercise.sets],
                        ["Reps", exercise.reps],
                        ["Duration", `${exercise.duration} min`],
                        ["Calories", `${exercise.caloriesBurned} kcal`],
                        ["Rating", exercise.rating],
                    ].map(([label, value], index, array) => (
                        <div
                            key={label}
                            className={`flex min-h-[30px] items-center justify-between gap-4 px-4 py-2 ${index !== array.length - 1
                                    ? "border-b border-[#252831]"
                                    : ""
                                }`}
                        >
                            <span className="text-[9px] font-semibold uppercase tracking-wide text-[#a5a7b2]">
                                {label}
                            </span>
                            <span className="text-right text-[10px] font-medium text-[#e3e3e8]">
                                {value}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Instructions */}
                <div className="mt-5">
                    <h2 className="text-[12px] font-extrabold uppercase tracking-wide">
                        Instructions
                    </h2>

                    <ol className="mt-2 space-y-2">
                        {exercise.instructions.map((instruction, index) => (
                            <li
                                key={instruction}
                                className="flex gap-2 text-[10px] leading-[1.6] text-[#b5b6bf]"
                            >
                                <span className="shrink-0 text-[#777984]">
                                    {index + 1}.
                                </span>
                                <span>{instruction}</span>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-2.5">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c8ff00] px-4 py-2.5 text-[10px] font-bold text-black transition-colors hover:bg-[#d8ff4d] active:scale-[0.98]"
                    >
                        <CalendarPlus size={12} />
                        Add to today's plan
                    </button>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#34353d] px-4 py-2.5 text-[10px] font-medium text-[#e1e1e6] transition-all hover:border-[#c8ff00] hover:text-[#c8ff00] active:scale-[0.98]"
                    >
                        <Bookmark size={12} />
                        Save for later
                    </button>
                </div>
            </section>
        </main>
    );
};

