"use client"
import React, { useEffect, useRef } from 'react';
import { IMAGE_SIZE_CASTING } from '../stylingComponent/stylingComponent.component';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
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
    if (typeof size === 'undefined' || !IMAGE_SIZE_CASTING[size]) {
        return "twentyfiveWidth";
    }
    return IMAGE_SIZE_CASTING[size];
}

const MasonryComponent: React.FC<MasonryProps> = ({ castingItems }) => {
  const masonryContainerRef = useRef(null);

  useEffect(() => {
    const Masonry = require('masonry-layout');
    const imagesLoaded = require('imagesloaded');

    if (masonryContainerRef.current) {
      imagesLoaded(masonryContainerRef.current, function() {
        new Masonry(masonryContainerRef.current, {
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer',
          percentPosition: true,
        });
      });
    }
  }, [castingItems]); 

  


  return (
		
    <div ref={masonryContainerRef} className="grid">
      <div className="grid-sizer"></div>
                {castingItems.map((items: {
                    width: number; _type: string, url: string, _key: string, attribution: string, caption: string }) => {
        
    
                    if (items._type === 'casting_video') {
                        return (
                            <div key={uuidv4()} className={`videoCasting ${getSizeClassName(items.width)} grid-item  grid-item--width`}>
                                <video autoPlay loop muted playsInline>
                                    <source src={items.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                {items?.caption ? <span>{items.caption}</span> : null}
                            </div>
                        )
                    } else if (items._type === 'casting_image') {
                        return (
                            <figure key={uuidv4()} className={`castingImg ${getSizeClassName(items.width)} grid-item `}>
                                <Image src={items.url} width={700} height={700} className="homeImg" alt={`${items.attribution} 
                                `} loading="lazy" />
                                {items?.caption ? <span>{items.caption}</span> : null}
                                
                            </figure>
                        )
                    } else {
                        return null; 
                    }
    
                })}
    </div>
//     <div className="casting-column">
//   {castingItems.map((items) => {
//     const sizeClass = getSizeClassName(items.width);  // This function should return one of: 'twentyfiveWidth', 'fiftyWidth', or 'seventyfiveWidth'
    
//     if (items._type === 'casting_video') {
//       return (
//         <div key={items._key} className={`videoCasting grid-item ${sizeClass}`}>
//            <video autoPlay loop muted playsInline>
//               <source src={items.url} type="video/mp4" /> Your browser does not support the video tag. </video>
//              {items?.caption ? <span>{items.caption}</span> : null}
//         </div>
//       );
//     } else if (items._type === 'casting_image') {
//       return (
//         <figure key={items._key} className={`castingImg grid-item ${sizeClass}`}>
//            <Image src={items.url} width={700} height={700} className="homeImg" alt={`${items.attribution} `} loading="lazy" />
//             {items?.caption ? <span>{items.caption}</span> : null}
//         </figure>
//       );
//     } else {
//       return null;
//     }
//   })}
// </div>

  );
};

export default MasonryComponent;


