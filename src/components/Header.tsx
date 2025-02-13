import React from "react";

const Header: React.FC = () => {
  return (
    <>
      {/* Logo Block */}
      <div className="p-6 flex items-center justify-center">
        <img src="/misfits.png" alt="Misfits Logo" className="w-auto h-auto" />
      </div>

      {/* Date Block */}
      <div className="p-6 flex flex-col items-center justify-center">
        {/* Orange header */}
        <div className="bg-[#E85D2A] text-white px-8 py-3 rounded-lg text-2xl font-medium mb-2 z-10">
          День Рождения Ночи
        </div>

        {/* Black date block */}
        <div className="bg-black text-white  py-8 -mt-2 rounded-lg text-6xl font-bold tracking-wider">
          7 МАРТА 18:00
        </div>

        {/* Address text */}
        <div className="mt-6 text-center text-2xl">
          <div>Тут должен быть адрес,</div>
          <div>но пока его нет,</div>
          <div className="text-[#E85D2A] underline">
            но где-то районе м. Курская
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
