"use client";

import React, { useEffect, useRef } from "react";



type VideoCastingProps = {
    url: string;
    caption?: string;
    width: any;
};

const VideoCasting: React.FC<VideoCastingProps> = ({ url, caption, width }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (videoRef.current) {
                if (document.hidden) {
                    videoRef.current.pause();
                } else {
                    videoRef.current.play();
                }
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return (
        <div className={`videoCasting grid-item grid-item--width ${width}`}>
            <video ref={videoRef} autoPlay muted playsInline>
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {caption && <span>{caption}</span>}
        </div>
    );
};

export default VideoCasting;
