"use client";

import { Image } from '@imagekit/next';

type ImageType = {
    src: string;
    w?: number;
    h?: number;
    alt: string;
    className?: string;
    tr?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const CustomImage = ({ src, w, h, alt, className, tr }: ImageType) => {
    return (
        <Image
            urlEndpoint={urlEndpoint}
            src={src}
            width={w}
            height={h}
            {...(tr
                ? { transformation: [{ width: `${w}`, height: `${h}` }] }
                : { width: w, height: h })}
            alt={alt}
            className={className}
        />
    );
};

export default CustomImage;