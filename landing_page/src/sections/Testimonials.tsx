"use client";
import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import logoImage from "../assets/images/bible_logo.png";
import Tag from "@/components/Tag";
const testimonies = [
    {
        name: "Abenezer K.",
        role: "TNT Trainee",
        image: logoImage,
        text: "The TNT program didn't just teach me leadership; it showed me how to live the Word in my daily campus life. My perspective on service has shifted forever.",
    },
    {
        name: "Selamawit T.",
        role: "Manuscript Member",
        image: logoImage,
        text: "Studying the Bible through the Manuscript method opened my eyes. For the first time, I felt like I was hearing God's voice directly from the text.",
    },
    {
        name: "Dawit M.",
        role: "Hermenutics Student",
        image: logoImage,
        text: "I used to struggle with difficult passages. Now, I have the tools to interpret faithfully. This study has been a foundation for my spiritual growth.",
    },
    {
        name: "Hanna G.",
        role: "Bible Reading Challenge",
        image: logoImage,
        text: "Consistency was my biggest challenge. Being part of this 5K community kept me accountable, and reading through the Word changed my heart.",
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-[#050505] transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                        <Tag className="bg-gradient-to-r from-[#6A0DAD] to-orange-400 text-white border-none">
                            Testimonials
                        </Tag>
                    </h2>
                    <h2 className="text-3xl md:text-6xl font-black mt-6 text-center max-w-2xl mx-auto text-gray-900 dark:text-white leading-tight">
                        Changed <span className="text-[#6A0DAD]">Lives</span>
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto italic font-medium">
                        ` ሕይወት ለዋጩ ፤ የእግዚአብሔር ቃል ይጠና ፤ በታማኝነትም ይታወጅ !`
                    </p>
                </div>

                {/* Grid - 4 Columns on Large Screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonies.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-900/40 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 relative group hover:shadow-xl transition-all duration-300"
                        >
                            <Quote className="absolute top-6 right-8 text-purple-600/10 dark:text-purple-400/10 w-12 h-12 group-hover:text-orange-500/20 transition-colors" />

                            <div className="relative z-10">
                                <div className="mb-6 relative w-16 h-16">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-purple-100 dark:border-purple-900/30"
                                    />
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-6 font-medium italic">
                                    "{item.text}"
                                </p>

                                <div className="mt-auto">
                                    <h4 className="text-gray-900 dark:text-white font-bold text-base">
                                        {item.name}
                                    </h4>
                                    <p className="text-[#6A0DAD] dark:text-orange-400 text-xs font-bold uppercase tracking-widest">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
