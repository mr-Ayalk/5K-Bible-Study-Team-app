import ServiceCard from "@/components/ServiceCard";
import React from "react";
import socialmedia from "../assets/images/socialmedia.png";
import contentcreation from "../assets/images/contentcreation.png";
import branding from "../assets/images/branding.png";
import seo from "../assets/images/seo.png";
import webdesign from "../assets/images/webdesign.png";
import paidAd from "../assets/images/paidAD.png";
import hashIcon from "../assets/images/hashIcon.png";
import cameraIcon from "../assets/images/cameraIcon.png";
import seoIcon from "../assets/images/seoIcon.png";
import tagIcon from "../assets/images/tagIcon.png";
import paletteIcon from "../assets/images/paletteIcon.png";
import codeIcon from "../assets/images/codeIcon.png";

const serviceData = [
    {
        icon: hashIcon,
        title: "Social Media Management",
        description:
            "Build a powerful online presence with strategic content planning, community management, and data-driven growth tactics across all major platforms.",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-purple-600",
        thumbnailImage: socialmedia,
    },
    {
        icon: cameraIcon,
        title: "Creative Content Production",
        description:
            "Captivate your audience with stunning visuals, compelling videos, and engaging graphics that tell your brand story authentically.",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-orange-500",
        thumbnailImage: contentcreation,
    },
    {
        icon: seoIcon,
        title: "SEO & Content Optimization",
        description:
            "Dominate search rankings with expert keyword research, technical optimization, and content strategies that drive organic traffic and conversions.",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-indigo-600",
        thumbnailImage: seo,
    },
    {
        icon: tagIcon,
        title: "Paid Advertising Campaigns",
        description:
            "Maximize ROI with precision-targeted ads across Meta, Google, and TikTok. Data-driven campaigns that convert browsers into loyal customers.",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-red-500",
        thumbnailImage: paidAd,
    },
    {
        icon: paletteIcon,
        title: "Branding & Visual Identity",
        description:
            "Create a memorable brand identity with custom logos, color systems, and visual guidelines that resonate with your target audience and stand out.",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-purple-700",
        thumbnailImage: branding,
    },
    {
        icon: codeIcon,
        title: "Website Design & Development",
        description:
            "Transform your online presence with stunning, responsive websites that combine beautiful design with seamless functionality and user experience.",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-orange-400",
        thumbnailImage: webdesign,
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-sm font-medium text-purple-600 uppercase tracking-widest mb-1">
                        What We Offer
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Our <span className="text-purple-600">Services</span>
                    </h2>
                    <p className="mt-2 text-xl text-gray-500 max-w-3xl mx-auto">
                        Elevate your brand with our comprehensive suite of
                        digital solutions designed to drive growth and
                        engagement.
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
