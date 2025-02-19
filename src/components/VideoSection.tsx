import React, { useRef } from "react";
import { Label } from "./Label";

interface VideoSectionProps {
  className?: string;
}

export const VideoSection = ({ className }: VideoSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={`relative ${className} flex flex-col`}>
      <Label className="z-10 -top-[1.25em] mr-auto absolute left-[10vw] md:left-[4vw]">
        Че происходит?
      </Label>
      <div className="relative w-full overflow-hidden bg-black rounded-md aspect-video">
        <video
          ref={videoRef}
          className="object-cover w-full h-full"
          controls
          poster="/og.png"
          playsInline
          preload="metadata"
        >
          <source
            src="https://wishlist-supabase.starpact.io/storage/v1/object/public/temp/invite.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
