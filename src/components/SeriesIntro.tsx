import React from "react";
import { useContent } from "../context/ContentContext";

interface Props {
  className?: string;
}

export const SeriesIntro = ({ className }: Props) => {
  const {
    introSemiTransparentText: semiTransparentText,
    introOpaqueText: opaqueText,
  } = useContent();
  return (
    <div
      className={`text-[0.8em]/[1.2] md:text-[1.3em]/[1.5] font-rubik-one text-black flex flex-col items-start ${className}`}
    >
      <div className="opacity-50">{semiTransparentText}</div>
      <div>{opaqueText}</div>
    </div>
  );
};
