"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const CtaBanner: React.FC = () => {
    return (
        <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#050505] transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden p-12 md:p-16 rounded-[2.5rem] text-center shadow-2xl bg-[#6A0DAD] dark:bg-slate-900/40 border border-transparent dark:border-purple-500/20 transition-all duration-500">
                    {/* Decorative Background Elements for "Amazing" factor */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                        <div className="absolute top-[-20%] left-[-10%] w-64 h-64 rounded-full bg-white blur-[80px] dark:bg-purple-600" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 rounded-full bg-orange-400 blur-[80px] dark:opacity-30" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex justify-center mb-6">
                            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                                <Sparkles className="text-white w-8 h-8 animate-pulse" />
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            Ready to Deepen Your{" "}
                            <br className="hidden md:block" />
                            <span className="text-orange-300">
                                Walk in Faith?
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-purple-100 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                            Join thousands of believers in our 5K Bible Study
                            community. Start your journey towards a more rooted
                            and transformed spiritual life today.
                        </p>

                        <Link href="/Join" passHref>
                            <button className="group inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-2xl shadow-xl text-[#6A0DAD] bg-white hover:bg-gray-100 dark:bg-purple-600 dark:text-white dark:hover:bg-purple-500 transition-all duration-300 transform hover:scale-[1.03] active:scale-95">
                                Join Us Now
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>

                        <p className="mt-6 text-sm text-purple-200/70 dark:text-gray-500 font-semibold uppercase tracking-widest">
                            No commitment required • Free study materials
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaBanner;
