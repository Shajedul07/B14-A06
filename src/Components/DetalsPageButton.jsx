"use client"
import { useCardContext } from '@/context/CardContext';
import React from 'react';
import toast from 'react-hot-toast';

const DetailsPageButton = ({ card }) => {
    const { plan, saved, setPlan, setSaved } = useCardContext();
    const isBuildFull = plan.length >= 5;
    const allReadyInPlan = plan.some((item) => item.id === card.id);
    const allReadyInSaved = plan.some((item) => item.id === card.id);

    const handleAddToTodayPlan = () => {
        if (allReadyInPlan) {
            toast.error('Already In My Plan')
            return
        }
        if (isBuildFull) {
            toast.error('Build Is full')
            return
        }
        setPlan((prev) => [...prev, card]);
        toast.success("Added To My Plan");
    }

    const handleSaveForLater = () => {
        const alreadySaved = saved.some(
            (item) => String(item.id) === String(card.id)
        )

        if (alreadySaved) {
            toast.error('Already Saved')
            return
        }

        setSaved((prev) => [...prev, card])
        toast.success('Saved Successfully')
    }
    return (
        <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
                type="button"
                className="rounded-lg bg-[#c8ff00] px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-[#d8ff4d] hover:shadow-[0_0_20px_rgba(200,255,0,0.15)] active:scale-95"
                onClick={handleAddToTodayPlan}
            >
                Add to today's plan
            </button>

            <button
                type="button"
                className="rounded-lg border border-[#363b45] px-5 py-3 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-[#c8ff00] hover:text-[#c8ff00] active:scale-95"
                onClick={handleSaveForLater}
            >
                Save for later
            </button>
        </div>
    );
};

export default DetailsPageButton;