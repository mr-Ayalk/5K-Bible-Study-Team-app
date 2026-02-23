import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import aboutImage from "../assets/images/newLogo.png";

export default function WhoWeAre() {
    const orangeAccent = "text-[#F97316]";
    const purpleHeading = "text-[#6A0DAD]";
    const orangeButtonBg = "bg-[#FF6600]";

    return (
        // Replaced fixed padding with responsive padding
        <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-[55px]">
            <div className="mx-auto max-w-[1233px] w-full">
                {/* 1. Removed h-[404px] - Let the content determine the height.
          2. Stack on mobile (grid-cols-1), split on tablet/desktop (lg:grid-cols-2).
        */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content Area */}
                    <div className="order-2 lg:order-1">
                        <div className="flex items-center space-x-3 mb-4">
                            <div
                                className={`w-10 h-0.5 ${orangeButtonBg}`}
                            ></div>
                            <span
                                className={`text-sm font-bold tracking-wider ${orangeAccent}`}
                            >
                                ABOUT US
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Who <span className={purpleHeading}>We Are</span>
                        </h2>

                        <div className="space-y-6 text-gray-600 text-base md:text-lg">
                            <p>
                                Eyoha Digitals is a results-driven digital
                                marketing and creative agency helping businesses
                                build strong online identities, reach the right
                                audience, and convert followers into customers.
                            </p>
                            <p>
                                We blend strategy, creativity, and analytics to
                                give brands a modern, fresh, and high-impact
                                digital presence. Our goal is simple: deliver
                                exceptional marketing that works.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link
                                href="#about"
                                className="inline-block w-full sm:w-auto"
                            >
                                <button
                                    className={`flex items-center justify-center space-x-2 text-white text-base font-semibold px-8 h-12 w-full sm:w-auto rounded-lg 
                             ${orangeButtonBg} hover:opacity-90 transition duration-200 shadow-lg`}
                                >
                                    <span>Learn More About Us</span>
                                    <ArrowRight size={18} />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Image Area: 
            1. Removed fixed width md:w-[601px].
            2. Using aspect ratio to keep the image proportional.
          */}
                    <div className="order-1 lg:order-2 w-full">
                        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-square xl:aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl">
                            <Image
                                src={aboutImage}
                                alt="Eyoha Digitals Team Meeting"
                                fill
                                priority
                                className="object-cover transform hover:scale-105 transition duration-500 ease-in-out"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
