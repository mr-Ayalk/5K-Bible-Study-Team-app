import ClientSuccessStories from "@/sections/ClientSuccessStories";
import CtaBanner from "@/sections/CtaBanner";
import CtaSection from "@/sections/CtaSection";
// import ExcellenceSection from "@/sections/ExcellenceSection";
import EyohaGuarantee from "@/sections/EyohaGuarantee";
import EyohaGuaranteenew from "@/sections/EyohaGuaranteenew";
import FeaturesSection from "@/sections/FeaturesSection";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import PricingSection from "@/sections/Packages";
// import PricingPlans from "@/sections/PricingPlans";
// import RecentWinsSection from "@/sections/RecentWins";
import RecentWins from "@/sections/RecentWins";
import ServicesSection from "@/sections/Services";
import Upcoming from "@/sections/Upcoming";
// import OurServices from "@/sections/Services";

export default function Home() {
    return (
        <div className="w-full overflow-x-hidden dark:bg-black relative">
            <Hero />

            <ServicesSection />
            <CtaBanner />
            <Upcoming />
            <RecentWins />

            <ClientSuccessStories />
            {/* <PricingPlans /> */}
            <EyohaGuarantee />
            {/* <FeaturedClients /> */}
            <PricingSection />
            <CtaSection />
            <EyohaGuaranteenew />
            {/* <ExcellenceSection /> */}
            <FeaturesSection />
            <Footer />
        </div>
    );
}
