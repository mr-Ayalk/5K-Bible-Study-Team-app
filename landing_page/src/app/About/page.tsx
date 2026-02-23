import AboutHero from "@/sections/AboutHero";
import CoreValues from "@/sections/CoreValues";
import CtaBanner from "@/sections/CtaBanner";

import Footer from "@/sections/Footer";
import Navbar2 from "@/sections/Navbar2";
import VisionMission from "@/sections/VisionMission";
import WhoWeAre from "@/sections/WhoWeAre";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar2 />
            <AboutHero />
            <WhoWeAre />
            <VisionMission />
            <CoreValues />
            <CtaBanner />
            <Footer />
        </main>
    );
}
