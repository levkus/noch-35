import React from "react";

const SeriesIntro: React.FC = () => {
  return (
    <>
      {/* Mobile: HI and P1 in same row */}
      <div className="md:hidden  bg-[url('/girl.png')] bg-[length:auto_180px] bg-no-repeat bg-right">
        <div className="text-black h-[180] flex flex-col items-start justify-center pr-32">
          <div className="text-l font-rubik-one opacity-50">ЭТО НЕ НОЧЬ!</div>
          <div className="text-l font-rubik-one leading-tight">
            ЕСЛИ ТЫ НЕ СМОТРЕЛ ЭТОТ СЕРИАЛ - ПОСМОТРИ, ХОТЯ БЫ ТРЕЙЛЕР
          </div>
        </div>
      </div>

      {/* Desktop: HI and text on left, P1 on right with double height */}
      <div className="hidden md:block p-6 flex flex-col items-start justify-center">
        <div className="text-gray-600 text-4xl font-rubik-one mb-4">
          ЭТО НЕ НОЧЬ!
        </div>
        <div className="text-black text-5xl font-rubik-one leading-tight">
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
