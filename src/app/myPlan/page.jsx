
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { useCardContext } from "@/context/CardContext";

export default function MyPlanPage() {
    const { plan, saved, setPlan, setSaved } = useCardContext();
    const router = useRouter();

    const [activeTab, setActiveTab] = useState("Today's Plan");
    const [sortBy, setSortBy] = useState("default");
    const [completedIds, setCompletedIds] = useState([]);

    
    const isPlanTab = activeTab === "Today's Plan";
    const currentList = isPlanTab ? plan : saved;

    // Read numeric values from your JSON
    const getNumber = (value) => {
        const number = Number.parseFloat(value);
        return Number.isFinite(number) ? number : 0;
    };

    const getMinutes = (item) =>
        getNumber(item.durationTime ?? item.duration);

    const getCalories = (item) =>
        getNumber(item.caloriesBurned ?? item.calories ?? item.calorie);

    const getRating = (item) => getNumber(item.rating);

    const sortedList = [...currentList].sort((a, b) => {
        let valueA;
        let valueB;

        switch (sortBy) {
            case "duration":
                valueA = getMinutes(a);
                valueB = getMinutes(b);
                break;

            case "calories":
                valueA = getCalories(a);
                valueB = getCalories(b);
                break;

            case "rating":
                valueA = getRating(a);
                valueB = getRating(b);
                break;

            default:
                return 0;
        }

        return valueA - valueB;
    });

    
    const totalExercises = currentList.length;

    const totalMinutes = currentList.reduce(
        (total, item) => total + getMinutes(item),
        0
    );

    const totalCalories = currentList.reduce(
        (total, item) => total + getCalories(item),
        0
    );

    // View exercise details
    const onViewDetails = (item) => {
        router.push(`/cards/${item.id}`);
    };

    // Mark as done
    const onMarkDone = (item) => {
        const alreadyDone = completedIds.some(
            (id) => String(id) === String(item.id)
        );

        if (alreadyDone) return;

        setCompletedIds((prev) => [...prev, item.id]);

        toast.success("Mark as Done successfully");
    };

    // Remove exercise from the current tab
    const onRemove = (item) => {
        const updateList = isPlanTab ? setPlan : setSaved;

        updateList((prev) =>
            prev.filter(
                (exercise) => String(exercise.id) !== String(item.id)
            )
        );

        setCompletedIds((prev) =>
            prev.filter((id) => String(id) !== String(item.id))
        );

        toast.success("Exercise removed successfully");
    };

    return (
        <div className="container mx-auto px-4 py-6 text-white">
            {/* Page Heading */}
            <div className="mb-5">
                <h1 className="mb-1 text-2xl font-bold uppercase">
                    My Plan
                </h1>

                <p className="text-sm text-white/40">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Statistics */}
            <div className="mb-5 grid grid-cols-1 gap-4 rounded-xl border border-[#252830] bg-[#13151c] p-5 sm:grid-cols-3">
                <div >
                    <p className="text-xs text-white/40">Exercises</p>
                    <p className="mt-1 text-3xl font-extrabold text-[#c8ff00]">
                        {totalExercises}
                    </p>
                </div>

                <div className="border-t border-[#252830] pt-3 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                    <p className="text-xs text-white/40">Minutes</p>
                    <p className="mt-1 text-3xl font-extrabold">
                        {totalMinutes}
                    </p>
                </div>

                <div className="border-t border-[#252830] pt-3 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                    <p className="text-xs text-white/40">Calories</p>
                    <p className="mt-1 text-3xl font-extrabold">
                        {totalCalories}
                    </p>
                </div>
            </div>

            {/* Tabs and Sorting */}
            <div className="rounded-xl border border-[#252830] bg-[#101116] p-4">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex rounded-lg bg-[#171920] p-1">
                        {["Today's Plan", "Saved"].map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setActiveTab(tab)}
                                className={`rounded-md px-4 py-2 text-xs transition ${activeTab === tab
                                    ? "bg-[#292c35] text-white"
                                    : "text-white/50 hover:text-white"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Sort dropdown */}
                    <label className="flex items-center gap-2 text-xs text-white/50">
                        Sort by

                        <select
                            value={sortBy}
                            onChange={(event) => setSortBy(event.target.value)}
                            className="rounded-lg border border-[#30333d] bg-[#171920] px-3 py-2 text-white outline-none"
                        >
                            <option value="duration">Duration: Shortest first</option>
                            <option value="calories">Calories: Lowest first</option>
                            <option value="rating">Rating: Lowest first</option>
                        </select>
                    </label>
                </div>

                {/* Exercise List */}
                {sortedList.length === 0 ? (
                    <div className="grid min-h-48 place-content-center justify-items-center text-center">
                        <h2 className="font-bold uppercase">
                            Nothing Here Yet
                        </h2>

                        <p className="mt-2 text-sm text-white/40">
                            {isPlanTab
                                ? "Add an exercise to today's plan."
                                : "Save an exercise to find it here."}
                        </p>

                        <Link
                            href="/"
                            className="mt-3 rounded-full bg-[#c8ff00] px-4 py-2 text-sm font-bold text-black"
                        >
                            Browse Workouts
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {sortedList.map((item) => {
                            const isCompleted = completedIds.some(
                                (id) => String(id) === String(item.id)
                            );

                            return (
                                <article
                                    key={item.id}
                                    className="flex flex-col gap-3 rounded-xl border border-[#252830] bg-[#15171e] p-3 sm:flex-row sm:items-center"
                                >
                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-24 w-full shrink-0 rounded-lg object-cover sm:h-16 sm:w-28"
                                    />

                                    {/* Exercise Information */}
                                    <div className="min-w-0 flex-1">
                                        <h3 className="truncate text-sm font-extrabold uppercase">
                                            {item.name}
                                        </h3>

                                        <p className="mt-1 truncate text-xs text-white/40">
                                            {item.equipment}
                                        </p>

                                        <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-white/60">
                                            <span>
                                                <span className="text-[#c8ff00]">◷</span>{" "}
                                                {getMinutes(item)} min
                                            </span>

                                            <span>
                                                <span className="text-[#c8ff00]">♨</span>{" "}
                                                {getCalories(item)} kcal
                                            </span>

                                            <span>
                                                <span className="text-[#c8ff00]">☆</span>{" "}
                                                {getRating(item)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex shrink-0 flex-wrap items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => onViewDetails(item)}
                                            className="rounded-full border border-[#30333d] px-3 py-2 text-[11px] text-white/80 hover:bg-[#252830]"
                                        >
                                            View Details
                                        </button>

                                        {isPlanTab && (
                                            <button
                                                type="button"
                                                onClick={() => onMarkDone(item)}
                                                disabled={isCompleted}
                                                className="whitespace-nowrap rounded-full bg-[#c8ff00] px-3 py-2 text-[11px] font-semibold text-black disabled:opacity-60"
                                            >
                                                {isCompleted ? "✓ Done" : "✓ Mark as Done"}
                                            </button>
                                        )}

                                        <button
                                            type="button"
                                            onClick={() => onRemove(item)}
                                            aria-label={`Remove ${item.name}`}
                                            className="rounded-full px-2 py-1 text-lg text-white/40 hover:text-white"
                                        >
                                            ×
                                        </button>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
