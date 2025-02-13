import React from "react";

const VideoSection: React.FC = () => {
  return (
    <>
      {/* Mobile: video */}
      <div className="md:hidden p-6 flex flex-col items-start justify-start relative">
        <div className="bg-[#E85D2A] text-white px-8 py-3 rounded-lg text-2xl font-medium mb-4">
          Вас ждет
        </div>
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
          <video
            className="w-full h-full object-cover"
            controls
            poster="/video-poster.jpg"
          >
            <source src="/promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-black border-b-[15px] border-b-transparent ml-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: video */}
      <div className="hidden md:block p-6 flex flex-col items-start justify-start relative">
        <div className="bg-[#E85D2A] text-white px-8 py-3 rounded-lg text-2xl font-medium mb-4">
          Вас ждет
        </div>
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
          <video
            className="w-full h-full object-cover"
            controls
            poster="/video-poster.jpg"
          >
            <source src="/promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-black border-b-[15px] border-b-transparent ml-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
