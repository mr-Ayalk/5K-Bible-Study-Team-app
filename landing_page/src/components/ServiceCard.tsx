import React from "react";
import Link from "next/link";

import Image, { ImageProps, StaticImageData } from "next/image";
interface ServiceCardProps {
    icon: string | StaticImageData | React.ReactNode; // Changed from any
    title: string;
    description: string;
    linkText: string;
    linkUrl: string;
    iconBgClass: string;
    thumbnailImage: ImageProps["src"];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon,
    title,
    description,
    linkText,
    linkUrl,
    iconBgClass,
    thumbnailImage,
}) => {
    const isImageObject =
        typeof icon === "object" && icon !== null && "src" in icon;

    const isShortString = typeof icon === "string" && icon.length <= 3;

    return (
        // Added dark:bg-slate-900, dark:border-white/10, and transition-all
        <div className="bg-white dark:bg-slate-900/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-white/10 overflow-hidden group">
            <div className="h-48 md:h-56 bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
                <Image
                    src={thumbnailImage}
                    alt={`Thumbnail for ${title} service`}
                    layout="fill"
                    objectFit="cover"
                    // Added a subtle scale effect on hover for extra "Amazing" factor
                    className="group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                    <div
                        className={`w-8 h-8 ${iconBgClass} text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 relative`}
                    >
                        {isImageObject ? (
                            <Image
                                src={icon as StaticImageData}
                                alt={`${title} icon`}
                                width={16}
                                height={16}
                                style={{ objectFit: "contain" }}
                                // Ensure white icons show up well on both themes
                                className="brightness-0 invert"
                            />
                        ) : isShortString ? (
                            <span className="text-[10px] uppercase font-extrabold">
                                {icon}
                            </span>
                        ) : (
                            icon
                        )}
                    </div>
                    {/* Added dark:text-white */}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-snug">
                        {title}
                    </h3>
                </div>

                {/* Added dark:text-gray-400 */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm line-clamp-4 leading-relaxed">
                    {description}
                </p>

                {/* Added dark:text-purple-400 and dark:hover:text-purple-300 */}
                <Link
                    href={linkUrl}
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-bold text-sm transition duration-150 inline-flex items-center group/link"
                >
                    {linkText}
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
