import React from "react";
import { Label } from "./Label";

const VideoSection: React.FC = () => {
  return (
    <>
      <div className="relative flex flex-col items-start justify-start">
        <Label className="-bottom-3 left-[5vw] xl:left-[4vw] z-10">
          Вас ждет
        </Label>
        <div className="relative w-full overflow-hidden bg-black rounded-md aspect-video">
          <video
            className="object-cover w-full h-full"
            controls
            poster="/video-poster.jpg"
          >
            <source src="/promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/80">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-black border-b-[15px] border-b-transparent ml-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
