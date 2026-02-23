"use client"; // This line is the fix!
import AboutHero from "@/sections/AboutHero";
import CoreValues from "@/sections/CoreValues";
import CtaBanner from "@/sections/CtaBanner";

import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";

import VisionMission from "@/sections/VisionMission";
import WhoWeAre from "@/sections/WhoWeAre";
import { useEffect, useState } from "react";

export default function AboutPage() {
     const [theme, setTheme] = useState("light");
    
        useEffect(() => {
            // Checking for saved theme in localStorage
            const savedTheme = localStorage.getItem("theme") || "light";
            setTheme(savedTheme);
    
            // Apply the class to the document for Tailwind's dark mode to work
            if (savedTheme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }, []);
    
        // Helper to sync theme changes with the HTML class
        const toggleTheme = (newTheme: string) => {
            setTheme(newTheme);
            localStorage.setItem("theme", newTheme);
            if (newTheme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        };
    return (
        <main className="min-h-screen bg-white">
         <Navbar theme={theme} setTheme={toggleTheme} />
            <AboutHero />
            <WhoWeAre />
            <VisionMission />
            <CoreValues />
            <CtaBanner />
            <Footer />
        </main>
    );
}
