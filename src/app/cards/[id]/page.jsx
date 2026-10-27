import Image from "next/image";
import { getSingleCard } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function CardDetailsPage({ params }) {
    const { id } = await params;

    const singleCardData = await getSingleCard(id);

    if (!singleCardData) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col bg-[#1c232c] text-white">
            {/* Main Content */}
            <main className="mx-auto grid w-full max-w-[1600px] flex-1 grid-cols-1 gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 xl:px-10">
                {/* Exercise Image */}
                <div className="relative h-[800px] w-full overflow-hidden rounded-xl sm:h-[500px] lg:h-[800px]">
                    <Image
                        src={singleCardData.image}
                        alt={singleCardData.name}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 52vw"
                        quality={95}
                        className="object-cover"
                    />
                </div>

                {/* Exercise Details */}
                <section className="flex flex-col py-1">
                    {/* Title */}
                    <h1 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
                        {singleCardData.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-7 text-gray-400">
                        {singleCardData.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {singleCardData.muscleGroups?.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#c8ff00] px-4 py-1 text-xs font-bold text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Exercise Statistics */}
                    <div className="mt-6 overflow-hidden rounded-xl border border-[#292e38] bg-[#171b23]">
                        {[
                            ["Equipment", singleCardData.equipment],
                            ["Difficulty", singleCardData.difficulty],
                            ["Sets", singleCardData.sets],
                            ["Reps", singleCardData.reps],
                            ["Duration", `${singleCardData.duration} min`],
                            ["Calories", `${singleCardData.caloriesBurned} kcal`],
                            ["Rating", singleCardData.rating],
                        ].map(([label, value], index, array) => (
                            <div
                                key={label}
                                className={`flex min-h-[42px] items-center justify-between gap-4 px-5 py-3 ${index !== array.length - 1
                                        ? "border-b border-[#292e38]"
                                        : ""
                                    }`}
                            >
                                <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                                    {label}
                                </span>

                                <span className="text-right text-xs font-medium text-gray-100">
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Instructions */}
                    <div className="mt-7">
                        <h2 className="text-base font-extrabold uppercase tracking-wide">
                            Instructions
                        </h2>

                        <ol className="mt-3 space-y-3">
                            {singleCardData.instructions?.map(
                                (instruction, index) => (
                                    <li
                                        key={`${index}-${instruction}`}
                                        className="flex gap-3 text-sm leading-6 text-gray-300"
                                    >
                                        <span className="shrink-0 text-gray-500">
                                            {index + 1}.
                                        </span>

                                        <span>{instruction}</span>
                                    </li>
                                )
                            )}
                        </ol>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                        <button
                            type="button"
                            className="rounded-lg bg-[#c8ff00] px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-[#d8ff4d] hover:shadow-[0_0_20px_rgba(200,255,0,0.15)] active:scale-95"
                        >
                            Add to today's plan
                        </button>

                        <button
                            type="button"
                            className="rounded-lg border border-[#363b45] px-5 py-3 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-[#c8ff00] hover:text-[#c8ff00] active:scale-95"
                        >
                            Save for later
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}