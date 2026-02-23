"use client";
import React from "react";
import {
    FileText,
    Download,
    ExternalLink,
    Calendar,
    BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

const mainArticle = {
    title: "The Pursuit of Holiness",
    description:
        "An in-depth exploration by the 5K Bible Study team on living a set-apart life in a modern world. This article dives into the biblical foundations of sanctification.",
    date: "Oct 24, 2025",
    category: "Featured Study",
    fileUrl: "/materials/holiness.pdf", // Ensure this exists in public/materials/
    fileName: "Holiness_Study_5K.pdf",
};

const otherResources = [
    {
        title: "Understanding Spiritual Gifts",
        description:
            "A comprehensive guide to identifying and exercising the gifts of the Spirit.",
        date: "Jan 12, 2026",
        fileUrl: "/materials/spiritual-gifts.pptx",
        fileName: "Spiritual_Gifts_5K.pptx",
        isPPT: true,
    },
    {
        title: "Foundations of Discipleship",
        description:
            "Mastering the basics of following Jesus: prayer, word, and fellowship.",
        date: "Dec 05, 2025",
        fileUrl: "/materials/discipleship.pdf",
        fileName: "Discipleship_Foundations.pdf",
        isPPT: false,
    },
    {
        title: "Spiritual Growth Principles",
        description:
            "Strategies for consistent maturity in your spiritual journey.",
        date: "Nov 18, 2025",
        fileUrl: "/materials/growth.pdf",
        fileName: "Spiritual_Growth_5K.pdf",
        isPPT: false,
    },
];

const MaterialsSection: React.FC = () => {
    // Function to View/Open
    const handleView = (url: string, isPPT: boolean) => {
        if (isPPT) {
            // PPTs can't be viewed natively in browser easily,
            // so we use Google Docs Viewer or just trigger a download tab
            const viewerUrl = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(window.location.origin + url)}`;
            window.open(viewerUrl, "_blank");
        } else {
            window.open(url, "_blank");
        }
    };

    // Function to Download
    const handleDownload = (url: string, name: string) => {
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", name);
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
    };

    return (
        <section className="py-20 bg-white dark:bg-[#050505] transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">
                        Study <span className="text-[#6A0DAD]">Materials</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl font-medium">
                        "ሕይወት ለዋጩ ፤ የእግዚአብሔር ቃል ይጠና" — Access our latest study
                        guides and articles.
                    </p>
                </div>

                {/* Featured Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative overflow-hidden rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-gray-100 dark:border-white/5 p-8 md:p-12 mb-12 group transition-all"
                >
                    <div className="flex flex-col lg:flex-row justify-between gap-10">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 text-[#6A0DAD] dark:text-orange-400 font-bold text-xs uppercase tracking-widest mb-6">
                                <BookOpen size={16} />
                                <span>{mainArticle.category}</span>
                                <span className="flex items-center gap-1">
                                    <Calendar size={14} className="ml-2" />{" "}
                                    {mainArticle.date}
                                </span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                                {mainArticle.title}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                {mainArticle.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() =>
                                        handleView(mainArticle.fileUrl, false)
                                    }
                                    className="flex items-center gap-2 bg-[#6A0DAD] hover:bg-[#5a0bb4] text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20"
                                >
                                    <ExternalLink size={18} /> Open Article
                                </button>
                                <button
                                    onClick={() =>
                                        handleDownload(
                                            mainArticle.fileUrl,
                                            mainArticle.fileName,
                                        )
                                    }
                                    className="flex items-center gap-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#6A0DAD] text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-bold transition-all"
                                >
                                    <Download size={18} /> Download PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Resource Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherResources.map((res, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/5 p-8 rounded-[2rem] hover:border-orange-500/50 transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-orange-100 dark:bg-orange-500/10 rounded-2xl text-orange-600 dark:text-orange-400">
                                        <FileText size={24} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                        {res.date}
                                    </span>
                                </div>
                                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                                    {res.title}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                                    {res.description}
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() =>
                                        handleView(res.fileUrl, !!res.isPPT)
                                    }
                                    className="flex-1 bg-gray-50 dark:bg-white/5 hover:bg-[#6A0DAD] hover:text-white text-gray-900 dark:text-gray-300 py-3 rounded-xl text-xs font-bold transition-all uppercase tracking-widest"
                                >
                                    View
                                </button>
                                <button
                                    onClick={() =>
                                        handleDownload(
                                            res.fileUrl,
                                            res.fileName,
                                        )
                                    }
                                    className="p-3 bg-gray-50 dark:bg-white/5 hover:bg-orange-500 hover:text-white text-gray-900 dark:text-gray-300 rounded-xl transition-all"
                                >
                                    <Download size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MaterialsSection;
