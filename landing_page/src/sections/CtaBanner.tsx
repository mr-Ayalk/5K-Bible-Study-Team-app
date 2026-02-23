import React from "react";
import Link from "next/link";

const CtaBanner: React.FC = () => {
    return (
        <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="p-12 md:p-16 rounded-3xl text-center shadow-2xl bg-[#6A0DAD]">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
                        Let’s collaborate to bring your vision to life with
                        innovative strategies and creative excellence
                    </p>

                    <Link href="#" passHref>
                        <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full shadow-lg text-purple-700 bg-white hover:bg-gray-100 transition duration-300 transform hover:scale-[1.02]">
                            Get Started Today
                            <span className="ml-2 text-xl">→</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CtaBanner;
