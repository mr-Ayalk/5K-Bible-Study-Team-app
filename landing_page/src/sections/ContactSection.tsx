// components/ContactSection.tsx
import React from "react";
import {
    Mail,
    Phone,
    Send,
    MessageCircle,
    // MapPin,
    // Calendar,
} from "lucide-react";
import Image from "next/image";
import mapImage from "../assets/images/Rectangle.png";
import Link from "next/link";
export default function ContactSection() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#6A0DAD] mb-4">
                        Let&apos;s Create Something Great
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Ready to boost your brand? Fill out the form below or
                        drop us a line.
                    </p>
                </div>

                {/* Main Contact Container */}
                <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
                    {/* Left Column: Contact Form */}
                    <div className="flex-1 p-8 md:p-12">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@company.com"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="number"
                                    placeholder="+2519 1234 5678"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>
                            <button className="w-full bg-[#6A0DAD] text-white font-bold py-4 rounded-xl hover:bg-[#5a0bbd] transition-colors shadow-lg shadow-purple-200">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Contact Info & Consultation */}
                    <div className="w-full lg:w-[450px] bg-[#F3E8FF] p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-[#6A0DAD] mb-8">
                            Contact Info
                        </h2>

                        {/* Contact Details */}
                        <div className="space-y-6 mb-12">
                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#6A0DAD] shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <span className="text-gray-700 font-medium">
                                    eyohadigitals@gmail.com
                                </span>
                            </div>
                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#6A0DAD] shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all">
                                    <Phone size={18} />
                                </div>

                                <span className="text-gray-700 font-medium">
                                    +251944036611
                                </span>
                            </div>
                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#6A0DAD] shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all">
                                    <Phone size={18} />
                                </div>

                                <span className="text-gray-700 font-medium">
                                    +251955935455
                                </span>
                            </div>

                            <div className="flex space-x-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#6A0DAD] cursor-pointer hover:bg-purple-600 hover:text-white transition-all">
                                    <Send size={18} />
                                </div>
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#6A0DAD] cursor-pointer hover:bg-purple-600 hover:text-white transition-all">
                                    <MessageCircle size={18} />
                                </div>
                            </div>
                        </div>

                        {/* Book a Consultation */}
                        <Link
                            href="https://calendly.com/eyohadigitals/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            <div className="mb-10">
                                <h3 className="text-lg font-bold text-[#6A0DAD] mb-4">
                                    Let&apos;s have a one to one meeting
                                </h3>
                                <div className="bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm border border-purple-100 hover:scale-[1.02] transition-transform cursor-pointer">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-[#E9D5FF] rounded-lg flex items-center justify-center text-[#6A0DAD] font-bold">
                                            30
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800">
                                                Discovery Call
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                30 min • Google Meet
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-[#6A0DAD] flex items-center text-sm font-bold">
                                        Select Time{" "}
                                        <span className="ml-1">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Map Preview Placeholder */}
                        <div className="relative h-40 rounded-2xl overflow-hidden group">
                            <Image
                                src={mapImage}
                                alt="Location Map"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="bg-white px-4 py-2 rounded-full text-sm font-bold shadow-md hover:bg-[#6A0DAD] hover:text-white transition-all">
                                    View on Map
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
