import ServiceCard from "@/components/ServiceCard";
import React from "react";
import socialmedia from "../assets/images/manuscript.png";
import contentcreation from "../assets/images/scripture.png";
import branding from "../assets/images/recitaion.png";
import seo from "../assets/images/weekly.png";
import webdesign from "../assets/images/game.png";
import paidAd from "../assets/images/special.png";
import hashIcon from "../assets/images/hashIcon.png";
import cameraIcon from "../assets/images/cameraIcon.png";
import seoIcon from "../assets/images/seoIcon.png";
import tagIcon from "../assets/images/tagIcon.png";
import paletteIcon from "../assets/images/paletteIcon.png";
import codeIcon from "../assets/images/codeIcon.png";

const serviceData = [
    {
        icon: hashIcon,
        title: "Manuscript",
        description:
            "we study a specific bible book for 3 weeks with out any destruction .from 100-150 students engage on this program and it happenes every semester one time.",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-purple-600",
        thumbnailImage: socialmedia,
    },
    {
        icon: cameraIcon,
        title: "Sctipture Day",
        description:
            "This program focuses on scripture canonization,history of bible ,and how the bible was formed and how it was transmitted to us .it happenes every year one time .",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-orange-500",
        thumbnailImage: contentcreation,
    },
    {
        icon: seoIcon,
        title: "Friday Regular BS Program",
        description:
            "we have a regular program every friday where we study the bible book by book and we have a good number of students who engage on this program and it happenes every week one time .",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-indigo-600",
        thumbnailImage: seo,
    },
    {
        icon: tagIcon,
        title: "Special Programs",
        description:
            "We will have a special program every semester where we will have a gratudates good bye program and freshers welcome program and we will have a special program for our students who are in their final year and it happenes every semester one time .",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-red-500",
        thumbnailImage: paidAd,
    },
    {
        icon: paletteIcon,
        title: "Reciatation Program",
        description:
            "This program focuses on recitation of the bible and it happenes every Week  and we have a good number of students who engage on this program .",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-purple-700",
        thumbnailImage: branding,
    },
    {
        icon: codeIcon,
        title: "Game and gettogether",
        description:
            "We organize fun and engaging games and gettogether events for our students to build community and foster relationships.",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-orange-400",
        thumbnailImage: webdesign,
    },
];

const ServicesSection: React.FC = () => {
    return (
        // Added dark:bg-[#050505] and transition-colors
        <section className="py-16 md:py-24 bg-white dark:bg-[#050505] transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    {/* Purple text remains consistent, or can be lightened for dark mode */}
                    <p className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-1">
                        What We Offer
                    </p>
                    {/* Added dark:text-white */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Our{" "}
                        <span className="text-purple-600 dark:text-purple-400">
                            Programs
                        </span>
                    </h2>
                    {/* Added dark:text-gray-400 */}
                    <p className="mt-2 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                        We offer a range of programs designed to help you grow
                        in your faith and connect with others. Whether
                        you&apos;re looking for in-depth Bible study, engaging
                        community events, or special programs, we have something
                        for everyone.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            linkText={service.linkText}
                            linkUrl={service.linkUrl}
                            iconBgClass={service.iconBgClass}
                            thumbnailImage={service.thumbnailImage}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
