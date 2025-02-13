import React from "react";

const SeriesIntro: React.FC = () => {
  return (
    <>
      {/* Mobile: HI and P1 in same row */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        <div className="p-6 flex flex-col items-start justify-center">
          <div className="text-gray-600 text-4xl font-bold mb-4">
            ЭТО НЕ НОЧЬ!
          </div>
          <div className="text-black text-5xl font-black leading-tight">
            ЕСЛИ ТЫ НЕ СМОТРЕЛ ЭТОТ СЕРИАЛ - ПОСМОТРИ, ХОТЯ БЫ ТРЕЙЛЕР
          </div>
        </div>
        <div className="p-6 flex items-center justify-center">
          <img src="/girl.png" alt="Girl" className="w-auto h-auto" />
        </div>
      </div>

      {/* Desktop: HI and text on left, P1 on right with double height */}
      <div className="hidden md:block p-6 flex flex-col items-start justify-center">
        <div className="text-gray-600 text-4xl font-bold mb-4">
          ЭТО НЕ НОЧЬ!
        </div>
        <div className="text-black text-5xl font-black leading-tight">
          ЕСЛИ ТЫ НЕ СМОТРЕЛ ЭТОТ СЕРИАЛ - ПОСМОТРИ, ХОТЯ БЫ ТРЕЙЛЕР
        </div>
      </div>
      <div className="hidden md:block p-6 flex items-center justify-center md:row-span-2">
        <img src="/girl.png" alt="Girl" className="w-auto h-auto" />
      </div>
    </>
  );
};

export default SeriesIntro;
