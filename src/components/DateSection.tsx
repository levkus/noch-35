import React from "react";
import { Label } from "./Label";
import { useContent } from "../context/ContentContext";

interface DateSectionProps {
  center?: boolean;
}

export const DateSection = ({ center = false }: DateSectionProps) => {
  const { dateAddress: address, dateLink: link, dateLinkLabel } = useContent();
  return (
    <>
      <div className="flex flex-col items-center md:items-start">
        <Label className="z-10 -bottom-[0.5em] md:-bottom-[0.75em] mr-auto relative left-[2vw]">
          Днюха Ночи
        </Label>

        <Label
          bold
          color="black"
          className="text-[1.9em] md:text-[3em] mb-[0.5em]"
        >
          7 МАРТА 18:00
        </Label>

        <div
          className={`max-w-[10em] md:max-w-[10em] relative text-[1em]/[1] md:text-[1.8em]/[1.2] left-[2vw]  text-black ${
            center ? "text-center" : "text-left"
          }`}
        >
          {address?.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          {link && (
            <a href={link} className="text-[#F75816] underline">
              {dateLinkLabel || link}
            </a>
          )}
        </div>
      </div>
    </>
  );
};
