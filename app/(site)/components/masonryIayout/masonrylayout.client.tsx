"use client";
import React, { useEffect, useRef } from "react";
import { IMAGE_SIZE_CASTING } from "../stylingComponent/stylingComponent.component";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

type MasonryProps = {
  castingItems: Array<{
    _type: string;
    url: string;
    _key: string;
    attribution: string;
    caption: string;
    width: number;
  }>;
};

function getSizeClassName(size?: number): string {
  if (typeof size === "undefined" || !IMAGE_SIZE_CASTING[size]) {
    return "twentyfiveWidth";
  }
  return IMAGE_SIZE_CASTING[size];
}

const MasonryComponent: React.FC<MasonryProps> = ({ castingItems }) => {
  const masonryContainerRef = useRef(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  useEffect(() => {
    const handleVisibilityChange = () => {
      Object.values(videoRefs.current).forEach((video) => {
        if (video) {
          if (document.hidden) {
            video.pause();
          } else {
            video.play();
          }
        }
      });
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    // Check viewport width
    const viewportWidth = window.innerWidth;

    // Only proceed if viewport width is greater than 700px
    if (viewportWidth > 700) {
      const Masonry = require("masonry-layout");
      const imagesLoaded = require("imagesloaded");

      if (masonryContainerRef.current) {
        imagesLoaded(masonryContainerRef.current, function () {
          new Masonry(masonryContainerRef.current, {
            itemSelector: ".grid-item",
            columnWidth: ".grid-sizer",
            percentPosition: true,
          });
        });
      }
    }
  }, [castingItems]);

  return (
    <div ref={masonryContainerRef} className="grid">
      <div className="grid-sizer"></div>
{castingItems.map((items) => {
  const key = uuidv4();
  const sizeClass = getSizeClassName(items.width);

  if (items._type === 'casting_video' || items.url.endsWith('.mp4') || items.url.endsWith('.webm')) {
    return (
      <div key={key} className={`videoCasting ${sizeClass} grid-item`}>
        <video ref={el => (videoRefs.current[key] = el)} autoPlay muted playsInline loop>
          <source src={items.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {items?.caption && <span>{items.caption}</span>}
      </div>
    );
  }
  if (items.url.endsWith('.gif')) {
    return (
      <figure key={key} className={`castingImg ${sizeClass} grid-item`}>
        <Image src={items.url} alt={items.attribution} className="homeImg" loading="lazy" unoptimized/>
        {items?.caption && <span>{items.caption}</span>}
      </figure>
    );
  }

  // 🖼️ WebP or normal images
  return (
    <figure key={key} className={`castingImg ${sizeClass} grid-item`}>
      <Image
        src={items.url}
        width={700}
        height={700}
        className="homeImg"
        alt={items.attribution}
        sizes="(min-width:700px) 50vw, 75vw"
        quality={60}
        unoptimized
      />
      {items?.caption && <span>{items.caption}</span>}
    </figure>
  );
})}

    </div>
  );
};

export default MasonryComponent;
