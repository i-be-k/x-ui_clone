"use client";

import { Image } from '@imagekit/next';

type ImageType = {
    path: string;
    width?: number;
    height?: number;
    alt: string;
    className?: string;
    tr?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const CustomImage = ({ path, width, height, alt, className, tr }: ImageType) => {
    return (
        <Image
            urlEndpoint={urlEndpoint}
            src={path}
            width={width}
            height={height}
            {...(tr
                ? { transformation: [{ width: `${width}`, height: `${height}` }] }
                : {}
            )}
            alt={alt}
            className={className}
            priority
        />
    );
};

export default CustomImage;