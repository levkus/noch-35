import React from "react";

const ClothingInfo: React.FC = () => {
  return (
    <div className="p-6 pl-[100px] md:pl-[400px] flex flex-col items-start justify-start md:col-span-2 bg-[url('/boy.png')] bg-[length:100px_auto] md:bg-[length:400px_auto] bg-no-repeat bg-left-bottom">
      <button className="bg-[#F75816] text-white px-8 py-3 text-2xl font-rubik-one rounded-lg mb-4">
        Шматье
      </button>

      <div className="text-black text-xl space-y-6 mb-8 font-cuprum">
        <p>
          Ты ж понял, что мы будем стены разукрашивать!? Вот форму зека мы тебе
          нашли, а как ты от мороза и краски будешь защищать остальное - сам
          решай.
        </p>
        <p>
          Для пиздюков своих тож поищи что-нить оранжевое, чтобы на фото не
          светились. Старшакам среди пиздюков принесем шмот.
        </p>
        <p>Точняк! Совсем забыла! Фотограв же будет!</p>
        <p>
          А значит и фотостена и всякая хуета для прикольных фоток. Ну, чтоб на
          память хранить, хуле.
        </p>
      </div>

      <button className="bg-[#F75816] text-white px-8 py-3 text-2xl font-rubik-one rounded-lg mb-4">
        Точняк, про подарки забыла
      </button>

      <div className="text-black text-xl space-y-4 mb-8 font-cuprum">
        <p>
          Чё угодно из моего вишлиста. Не из вишлиста могу выкинуть,
          предупреждаю сразу. Я эта, выебистая!
        </p>
        <p>
          Только выбирай не по моим хотелкам, а что себе купил бы. Ну, примерно
          хотя бы. Чтоб от души было.
        </p>
        <a href="#" className="text-[#F75816] underline">
          Вишлист тут
        </a>
      </div>
    </div>
  );
};

export default ClothingInfo;
