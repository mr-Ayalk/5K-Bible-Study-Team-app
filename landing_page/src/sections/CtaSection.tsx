import React from "react";

const CtaSection: React.FC = () => {
    return (
        <section className="px-6 py-12 md:py-24">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r bg-[#6A0DAD] p-8 md:p-16">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="max-w-2xl text-center md:text-left">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                            Let&apos;s Build Something Great
                        </h2>
                        <p className="text-lg text-white/90">
                            Join thousands of professionals who are already
                            scaling their business with our platform. The future
                            of your workflow starts here.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <button
                            type="button"
                            className="group flex items-center gap-2 rounded-md bg-[#FF6600] px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:bg-[#ea580c] hover:scale-105 active:scale-95"
                        >
                            Schedule Your Consultation
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
