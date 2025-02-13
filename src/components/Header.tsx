/* eslint-disable @next/next/no-img-element */
import React from "react";

const Header: React.FC = () => {
  return (
    <>
      {/* Logo Block */}
      <div className="flex items-center justify-center px-8 md:px-0 mb-2 m:mb-0">
        <img src="/misfits.png" alt="Misfits Logo" width="80%" />
      </div>

      {/* Date Block */}
      <div className="flex flex-col items-center justify-center text-[16px] md:text-[24px] lg:text-[32px]">
        {/* Orange header */}
        <div className="bg-[#F75816] text-white px-4 py-1 text-[0.8em] font-cuprum relative -bottom-2 -left-10 z-10">
          День Рождения Ночи
        </div>

        {/* Black date block */}
        <div className="bg-black text-white p-4 text-[1.5em] font-rubik-one mb-2">
          7 МАРТА 18:00
        </div>

        {/* Address text */}
        <div className="text-center font-cuprum text-black">
          <div>Тут должен быть адрес,</div>
          <div>но пока его нет,</div>
          <div className="text-[#F75816] underline">
            но где-то районе м. Курская
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
