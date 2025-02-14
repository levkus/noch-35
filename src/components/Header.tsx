/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Label } from "./Label";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-center px-8 mt-8 mb-2 md:mt-0 md:px-0 m:mb-0">
        <img src="/misfits.png" alt="Misfits Logo" width="80%" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <Label className="-bottom-2 -left-[7vw] xl:-left-[4vw] z-10">
          День Рождения Ночи
        </Label>

        <Label bold color="black" className="text-[2em] md:text-[3em] mb-6">
          7 МАРТА 18:00
        </Label>

        <div className="text-[1.2em] md:text-[1.5em] leading-6 md:leading-9 text-center text-black font-cuprum">
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

export default Header;
