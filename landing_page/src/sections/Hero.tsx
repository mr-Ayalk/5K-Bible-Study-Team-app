"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import arrowatangle from "../assets/images/arrowatangle.png";
// Ensure this path matches your file structure for the Bible Study logo
import bibleLogo from "../assets/images/bible_logo.png";

export default function Hero() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
    }, []);

    return (
        <section className="relative w-full h-screen flex flex-col transition-colors duration-700 bg-slate-50 dark:bg-[#050505] overflow-hidden">
            {/* 1. ATMOSPHERIC BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-400/10 dark:bg-purple-900/20 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-orange-300/10 dark:bg-orange-900/10 blur-[100px]" />
            </div>

            <div className="absolute top-0 w-full z-50">
                <Navbar theme={theme} setTheme={setTheme} />
            </div>

            {/* 2. MAIN CONTENT AREA */}
            <div className="relative z-10 container mx-auto px-6 lg:px-[80px] flex-1 flex flex-col justify-center pt-20">
                {/* Badge Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-purple-200 dark:border-purple-800/30 bg-white/50 dark:bg-purple-900/10 text-purple-600 dark:text-purple-300 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]"
                >
                    <Sparkles size={14} className="animate-pulse" />
                    <span>Transformed Lives, Rooted in Faith</span>
                </motion.div>

                {/* Main Heading */}
                <div className="mb-6 max-w-5xl leading-[1.1]">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-extrabold font-poppins tracking-tight text-slate-900 dark:text-white"
                    >
                        Rooted. Growing. <br />
                        <span className="text-[#FF6600]">Together.</span>
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-slate-600 dark:text-gray-400 text-lg md:text-xl font-normal mb-8 max-w-[700px] leading-relaxed"
                >
                    We empower your faith to thrive in the modern age through
                    tailored, scripture-driven study that delivers measurable
                    spiritual growth.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-6 mb-12 items-start sm:items-center"
                >
                    <Link href="#contact" className="w-full sm:w-auto">
                        <button className="group flex items-center justify-center space-x-3 text-white text-base font-bold px-10 py-5 w-full sm:w-[250px] rounded-2xl bg-[#6A0DAD] hover:bg-[#520a85] transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(106,13,173,0.5)]">
                            <span>Let&apos;s Talk</span>
                            <ArrowRight
                                size={20}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </button>
                    </Link>

                    <Link href="#portfolio" className="w-full sm:w-auto">
                        <button className="flex items-center justify-center space-x-3 text-slate-900 dark:text-white text-base font-bold px-10 py-5 w-full sm:w-[250px] rounded-2xl border-2 border-slate-200 dark:border-white/10 hover:bg-slate-200/50 dark:hover:bg-white/5 transition-all transition-duration-300">
                            <span>View Our Work</span>
                            <Image
                                src={arrowatangle}
                                alt="Arrow"
                                width={18}
                                height={18}
                                className="dark:invert-0 brightness-0 dark:brightness-200"
                            />
                        </button>
                    </Link>
                </motion.div>

                {/* MOVED STATS SECTION HERE - Immediately below buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-slate-200 dark:border-white/10 pt-8 w-full max-w-3xl"
                >
                    <StatItem label="Served Students" value="200+" />
                    <StatItem label="Active Members" value="60+" />
                    <StatItem
                        label="Support"
                        value="24/7"
                        className="hidden md:flex"
                    />
                </motion.div>

                {/* 3. THE FLOATING LOGO BADGE (Stays in its fixed position) ..*/}
                <motion.div
                    className="absolute top-1/2 right-12 hidden xl:block -translate-y-1/2"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 1,
                    }}
                >
                    <motion.div
                        animate={{ y: [0, -25, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative group cursor-pointer"
                    >
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/30 dark:border-white/20 animate-[spin_20s_linear_infinite]" />

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-white/10 m-3">
                            <div className="flex flex-col items-center justify-center text-center rounded-full">
                                <Image
                                    src={bibleLogo}
                                    alt="Bible Study Logo"
                                    width={180}
                                    height={180}
                                    className="mb-2 rounded-full"
                                />
                                <span className="text-[10px] font-black uppercase tracking-tighter text-[#FF6600]">
                                    Est. 2024
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function StatItem({
    label,
    value,
    className = "",
}: {
    label: string;
    value: string;
    className?: string;
}) {
    return (
        <div className={`flex flex-col items-start ${className}`}>
            <span className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
                {value}
            </span>
            <span className="text-[9px] md:text-xs text-slate-500 dark:text-gray-500 font-bold uppercase tracking-[0.3em] mt-1">
                {label}
            </span>
        </div>
    );
}
