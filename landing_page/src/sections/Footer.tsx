import React from "react";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

import logoImage from "../assets/images/eyohalogo.png";

const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Contact", href: "#" },
];

const ourServices = [
    "Digital Marketing",
    "Social Media Management",
    "SEO Optimization",
    "Content Creation",
    "Brand Strategy",
    "Web Development",
];

const SocialLinks = () => (
    <div className="flex space-x-4 mt-6">
        <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
        >
            <Linkedin className="w-5 h-5" />
        </a>
        <a
            href="#"
            aria-label="Instagram"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
        >
            <Instagram className="w-5 h-5" />
        </a>
        <a
            href="#"
            aria-label="Facebook"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
        >
            <Facebook className="w-5 h-5" />
        </a>
        <a
            href="#"
            aria-label="Twitter"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
        >
            <Twitter className="w-5 h-5" />
        </a>
    </div>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-purple-900 text-white pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 pb-16">
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4 space-x-2">
                            <div
                                className={`w-[40px] h-[40px]  flex items-center justify-center rounded-sm`}
                            >
                                {" "}
                                <Image
                                    src={logoImage}
                                    alt="Eyoha Digitals Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>

                            <span className="text-2xl font-bold">
                                Eyoha Digitals
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                            Transforming businesses through innovative digital
                            marketing strategies and creative solutions.
                        </p>
                        <SocialLinks />
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="text-lg font-semibold  pb-2 mb-4 inline-block">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 text-sm hover:text-indigo-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="text-lg font-semibold pb-2 mb-4">
                            Our Service
                        </h4>
                        <ul className="space-y-3">
                            {ourServices.map((service) => (
                                <li
                                    key={service}
                                    className="text-gray-300 text-sm"
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="text-lg font-semibold pb-2 mb-4">
                            Subscribe
                        </h4>
                        <p className="text-gray-300 text-sm mb-4">
                            Join our newsletter for exclusive insights.
                        </p>
                        <form>
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full p-3 mb-4 rounded bg-purple-800 border border-purple-700 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                                aria-label="Email address for newsletter"
                            />
                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition-colors text-sm shadow-lg"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-purple-800 pt-6 pb-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© 2025 Eyoha Digitals. All rights reserved.</p>

                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a
                            href="#"
                            className="hover:text-indigo-400 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-indigo-400 transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="hover:text-indigo-400 transition-colors"
                        >
                            Cookies Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
