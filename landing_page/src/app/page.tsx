import ClientSuccessStories from "@/sections/ClientSuccessStories";
import CtaBanner from "@/sections/CtaBanner";
import CtaSection from "@/sections/CtaSection";
import EyohaGuarantee from "@/sections/EyohaGuarantee";
import EyohaGuaranteenew from "@/sections/EyohaGuaranteenew";
import FeaturesSection from "@/sections/FeaturesSection";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";

import ServicesSection from "@/sections/Services";
import Upcoming from "@/sections/Upcoming";

export default function Home() {
    return (
        <div className="w-full overflow-x-hidden dark:bg-black relative">
            <Hero />

            <ServicesSection />
            <CtaBanner />
            <Upcoming />
            <EyohaGuarantee />

            <CtaSection />
            <EyohaGuaranteenew />
            {/* <ExcellenceSection /> */}
            <FeaturesSection />
            <Footer />
        </div>
    );
}
