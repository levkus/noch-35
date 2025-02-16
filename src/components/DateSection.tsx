import React from "react";
import { Label } from "./Label";

interface DateSectionProps {
  center?: boolean;
  address?: string;
  link?: string;
}

export const DateSection = ({
  center = false,
  address,
  link,
}: DateSectionProps) => {
  return (
    <>
      <div className="flex flex-col">
        <Label className="z-10 -bottom-[0.75em] mr-auto relative left-[2vw]">
          День Рождения Ночи
        </Label>

        <Label
          bold
          color="black"
          className="text-[2em] md:text-[3em] mb-[0.5em]"
        >
          {address}
        </Label>

        <div
          className={`relative text-[1.5em]/[1.2] md:text-[1.8em]/[1.2] left-[2vw]  text-black ${
            center ? "text-center" : "text-left"
          }`}
        >
          {address?.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          {link && (
            <a href={link} className="text-[#F75816] underline">
              {link}
            </a>
          )}
        </div>
      </div>
    </>
  );
};
