
"use client";

import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { CardProvider } from "@/context/CardContext";

const ClientLayout = ({ children }) => {
    return (
        <CardProvider>
            <div className="flex min-h-screen flex-col">
                <NavBar />

                <main className="flex flex-1 flex-col">
                    {children}
                </main>

                <Footer />

                <Toaster />
            </div>
        </CardProvider>
    );
};

export default ClientLayout;
