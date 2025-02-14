import React from "react";

const SeriesIntro: React.FC = () => {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden  bg-[url('/girl.png')] bg-[length:auto_160px] bg-no-repeat bg-right">
        <div className="font-rubik-one text-black text-[3vw] h-[180px] flex flex-col items-start justify-center pr-40 leading-[1.2em]">
          <div className="opacity-50">ЭТО НЕ НОЧЬ!</div>
          <div>ЕСЛИ ТЫ НЕ СМОТРЕЛ ЭТОТ СЕРИАЛ - ПОСМОТРИ, ХОТЯ БЫ ТРЕЙЛЕР</div>
        </div>
      </div>

      {/* Desktop: HI and text on left, P1 on right with double height */}
      <div className=" font-rubik-one hidden md:flex text-[1.5rem] leading-7 text-black flex-col items-start justify-end">
        <div className="opacity-50">ЭТО НЕ НОЧЬ!</div>
        <div>ЕСЛИ ТЫ НЕ СМОТРЕЛ ЭТОТ СЕРИАЛ - ПОСМОТРИ, ХОТЯ БЫ ТРЕЙЛЕР</div>
      </div>
      <div className="items-center justify-center hidden md:flex md:row-span-2">
        <img src="/girl.png" alt="Girl" className="w-auto h-[420px]" />
      </div>
    </>
  );
};

export default SeriesIntro;
