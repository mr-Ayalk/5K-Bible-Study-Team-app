import Footer from "@/sections/Footer";
import ContactSection from "@/sections/ContactSection";
import Navbar2 from "@/sections/Navbar2";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar2 />
            {/* Adding top padding to clear the fixed Navbar */}
            <div className="pt-10">
                <ContactSection />
            </div>
            <Footer />
        </main>
    );
}
