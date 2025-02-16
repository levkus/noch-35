import React from "react";

interface Props {
  className?: string;
  semiTransparentText?: string;
  opaqueText?: string;
}

export const SeriesIntro = ({
  className,
  semiTransparentText = "ЭТО НЕ НОЧЬ!",
  opaqueText = "ЕСЛИ ТЫ НЕ СМОТРЕЛ ЭТОТ СЕРИАЛ - ПОСМОТРИ, ХОТЯ БЫ ТРЕЙЛЕР",
}: Props) => {
  return (
    <div
      className={`font-rubik-one text-black flex flex-col items-start ${className}`}
    >
      <div className="opacity-50">{semiTransparentText}</div>
      <div>{opaqueText}</div>
    </div>
  );
};
