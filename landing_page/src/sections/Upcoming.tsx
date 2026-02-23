"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Sparkles, Bell } from "lucide-react";

export default function Upcoming() {
    const duplicatedEvents = [...upcomingEvents, ...upcomingEvents];

    return (
        <section className="py-20 bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6 mb-12">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-4 flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 dark:border-orange-800/30 bg-orange-50 dark:bg-orange-900/10 text-[#FF6600] text-xs font-bold uppercase tracking-[0.2em]"
                    >
                        <Sparkles size={14} />
                        <span>Don't Miss Out</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                        Upcoming <span className="text-[#6A0DAD]">Programs</span>
                    </h2>
                    <p className="text-slate-500 dark:text-gray-400 max-w-2xl">
                        Our calendar is packed with opportunities to grow and serve. 
                        Stay tuned for registration details.
                    </p>
                </div>
            </div>

            <div className="relative flex overflow-hidden">
                {/* Visual Fades */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-64 z-10 bg-gradient-to-r from-white dark:from-[#050505] to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-64 z-10 bg-gradient-to-l from-white dark:from-[#050505] to-transparent pointer-events-none" />

                <motion.div
                    className="flex whitespace-nowrap gap-8 py-10"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                    whileHover={{ transition: { duration: 100 } }} 
                >
                    {duplicatedEvents.map((event, index) => (
                        <div
                            key={index}
                            className="inline-block w-[320px] md:w-[450px] flex-shrink-0"
                        >
                            <div className="group relative bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 p-10 rounded-[2.5rem] transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(106,13,173,0.15)] hover:-translate-y-2">
                                
                                {/* Background Glow on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-[#6A0DAD] dark:text-purple-400">
                                            <Calendar size={28} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#FF6600] bg-orange-100 dark:bg-orange-900/30 px-4 py-1.5 rounded-full">
                                            Coming Soon
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 whitespace-normal tracking-tight">
                                        {event.title}
                                    </h3>
                                    
                                    <p className="text-slate-600 dark:text-gray-400 text-sm md:text-lg leading-relaxed whitespace-normal mb-8 min-h-[80px]">
                                        {event.desc}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-white/5">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest">
                                                Schedule
                                            </span>
                                            <span className="text-sm font-bold text-slate-900 dark:text-white">
                                                TBA 2024
                                            </span>
                                        </div>

                                        {/* REMINDER BUTTON */}
                                        <button 
                                            onClick={() => alert(`We'll notify you about ${event.title}!`)}
                                            className="flex items-center gap-2 bg-[#6A0DAD] hover:bg-[#520a85] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-lg shadow-purple-500/20"
                                        >
                                            <Bell size={14} />
                                            Remind Me
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

const upcomingEvents = [
    { title: "TNT Training", desc: "Equipping leaders with explosive spiritual growth and leadership tools." },
    { title: "Manuscript Program", desc: "Deep-dive inductive study exploring the original context of scripture." },
    { title: "Hermeneutics Program", desc: "Mastering the art and science of biblical interpretation." },
    { title: "Bible Reading Challenge", desc: "A community-wide journey through the Word of God together." },
    { title: "Freshers Welcome", desc: "Welcoming new students into our spiritual family with open arms." },
    { title: "GC Goodbye", desc: "Celebrating our graduates as they transition to their next calling." },
    { title: "Outreach Mission", desc: "Spreading the message of hope and love to our local community." },
    { title: "Panel Discussion", desc: "Engaging difficult questions with biblical wisdom and community clarity." },
];