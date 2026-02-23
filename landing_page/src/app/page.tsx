import CtaBanner from "@/sections/CtaBanner";
import CtaSection from "@/sections/CtaSection";
import Faqs from "@/sections/Faqs";

import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";

import ServicesSection from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import Upcoming from "@/sections/Upcoming";

export default function Home() {
    return (
        <div className="w-full overflow-x-hidden dark:bg-black relative">
            <Hero />

            <ServicesSection />
            <CtaBanner />
            <Upcoming />

            <CtaSection />
            <Testimonials />
            <Faqs />
            <Footer />
        </div>
    );
}
