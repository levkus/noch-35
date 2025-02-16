/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Label } from "./Label";

export const Date = ({ center = false }: { center?: boolean }) => {
  return (
    <>
      <div className="flex flex-col">
        <Label className="z-10 -bottom-[0.75em] mr-auto relative left-[2vw]">
          День Рождения Ночи
        </Label>

        <Label
          bold
          color="black"
          className="text-[2em] md:text-[3em] mb-[0.25em]"
        >
          7 МАРТА 18:00
        </Label>

        <div
          className={`relative text-[1.5em] md:text-[1.8em]/[1.2] left-[2vw]  text-black ${
            center ? "text-center" : "text-left"
          }`}
        >
          <div>Тут должен быть адрес,</div>
          <div>но пока его нет,</div>
          <a href="#" className="text-[#F75816] underline">
            но где-то районе м. Курская
          </a>
        </div>
      </div>
    </>
  );
};
