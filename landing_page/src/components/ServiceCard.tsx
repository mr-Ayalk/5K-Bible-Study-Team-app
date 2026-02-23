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
    // const isImageObject =
    //     typeof icon === "object" && icon !== null && "src" in icon;
    // Check if it's an object with a src property (StaticImageData)
    const isImageObject =
        typeof icon === "object" && icon !== null && "src" in icon;

    // Check if it's a short string (for the circle text)
    const isShortString = typeof icon === "string" && icon.length <= 3;
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 overflow-hidden">
            <div className="h-48 md:h-56 bg-gray-100 overflow-hidden relative">
                <Image
                    src={thumbnailImage}
                    alt={`Thumbnail for ${title} service`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                    <div
                        className={`w-8 h-8 ${iconBgClass} text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 relative`}
                    >
                        {isImageObject ? (
                            <Image
                                src={icon as StaticImageData} // Type assertion for safety
                                alt={`${title} icon`}
                                width={16}
                                height={16}
                                style={{ objectFit: "contain" }}
                            />
                        ) : isShortString ? (
                            <span className="text-[10px] uppercase font-extrabold">
                                {icon}
                            </span>
                        ) : (
                            icon
                        )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                        {title}
                    </h3>
                </div>

                <p className="text-gray-600 mb-6 text-sm line-clamp-4">
                    {description}
                </p>

                <Link
                    href={linkUrl}
                    className="text-purple-600 hover:text-purple-700 font-medium text-sm transition duration-150 inline-flex items-center"
                >
                    {linkText}
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
