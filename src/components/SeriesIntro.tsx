import React from "react";

export const SeriesIntro = ({ className }: { className?: string }) => {
  return (
    <div
      className={`font-rubik-one text-black flex flex-col items-start ${className}`}
    >
      <div className="opacity-50">ЭТО НЕ НОЧЬ!</div>
      <div>ЕСЛИ ТЫ НЕ СМОТРЕЛ ЭТОТ СЕРИАЛ - ПОСМОТРИ, ХОТЯ БЫ ТРЕЙЛЕР</div>
    </div>
  );
};
