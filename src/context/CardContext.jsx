"use client"

import { createContext, use, useContext, useState } from "react"

const CardContext = createContext();

export function CardProvider({ children }) {
    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);
    const value = { plan, setPlan, saved, setSaved };
    return (
        <CardContext.Provider value={value}>{children}</CardContext.Provider>
    )
}

export function useCardContext() {
    const context = useContext(CardContext);

    if (!context) {
        throw new Error(`Maybe you haven't wrapped the app into the provider`);
    }
    return context;
}