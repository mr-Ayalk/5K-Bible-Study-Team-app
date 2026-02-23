"use client";
import React from "react";
import { Heart, Users, ArrowRight } from "lucide-react";

const CtaSection: React.FC = () => {
    return (
        <section className="px-6 py-12 md:py-24 bg-white dark:bg-[#050505] transition-colors duration-500">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#6A0DAD] dark:bg-slate-900/50 border border-transparent dark:border-purple-500/20 p-8 md:p-16 relative">
                {/* Decorative Background Glow */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
                    <div className="max-w-2xl text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-orange-300 text-xs font-bold uppercase tracking-widest mb-6">
                            <Users size={14} />
                            <span>Action / Evangelical Team</span>
                        </div>

                        <h2 className="mb-6 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.1]">
                            Partner With Our <br />
                            <span className="text-orange-400">
                                Mission of Grace
                            </span>
                        </h2>

                        <p className="text-lg text-purple-100/90 dark:text-gray-300 mb-2">
                            Every Tuesday, our team heads out for the **General
                            Fellowship Outreach**. Your support fuels these
                            life-changing encounters.
                        </p>
                        <p className="text-sm font-medium text-orange-200 uppercase tracking-widest">
                            Join us this Tuesday • Be the hands and feet
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full lg:w-auto">
                        {/* Support Button */}
                        <button
                            type="button"
                            className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-[#6A0DAD] shadow-xl transition-all hover:bg-orange-50 hover:scale-105 active:scale-95"
                        >
                            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                            Support Us
                        </button>

                        {/* Outreach Button */}
                        <button
                            type="button"
                            className="group flex items-center justify-center gap-3 rounded-2xl bg-[#FF6600] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-[#e65c00] hover:scale-105 active:scale-95"
                        >
                            Engage in Outreach
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
