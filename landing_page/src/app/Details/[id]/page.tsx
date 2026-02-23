"use client"; 

import React from "react";
import { useParams } from "next/navigation"; 
import { PAGE_DATA } from "@/types/caseStudiesData";

import { ContentSamples } from "@/sectionsclientdetailpage/ContentSamples";
import { FinalOutcome } from "@/sectionsclientdetailpage/FinalOutcome";
import { HeroChallenges } from "@/sectionsclientdetailpage/HeroChallenges";
import { Metrics } from "@/sectionsclientdetailpage/Metrics";
import { ServicesGrid } from "@/sectionsclientdetailpage/ServicesGrid";
import { Testimonial } from "@/sectionsclientdetailpage/Testimonial";
import { Transformation } from "@/sectionsclientdetailpage/Transformation";
import Navbar2 from "@/sections/Navbar2";
import Footer from "@/sections/Footer";

const CaseStudyTemplate = () => {
    const params = useParams();
    const id = params?.id as string; // Get ID from URL

    const project = PAGE_DATA[id || "skillbridge"];

    if (!project)
        return <div className="p-20 text-center">Project not found</div>;

    const themeMap: Record<string, string> = {
        skillbridge: "#7C3AED",
        galaxyFurniture: "#F97316",
        aminHospital: "#10B981",
        beltechSolutions: "#2563EB",
        safeFurniture: "#B45309",
        makiInterior: "#DB2777",
    };

    const accentColor = themeMap[id] || "#7C3AED";

    return (
        <main className="bg-white min-h-screen">
            <Navbar2 />
            <HeroChallenges {...project} accentColor={accentColor} />

            <ServicesGrid
                services={project.services}
                accentColor={accentColor}
            />

            <ContentSamples
                contentSamples={project.contentSamples}
                accentColor={accentColor}
            />

            <Transformation
                companyName={project.companyName} 
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                transformationPoints={project.transformationPoints}
                accentColor={accentColor}
            />

            <Metrics metrics={project.metrics} accentColor={accentColor} />

            <Testimonial
                testimonial={project.testimonial}
                accentColor={accentColor}
            />

            <FinalOutcome
                tools={project.tools}
                finalOutcome={project.finalOutcome}
                accentColor={accentColor}
            />
            <Footer />
        </main>
    );
};

export default CaseStudyTemplate;
