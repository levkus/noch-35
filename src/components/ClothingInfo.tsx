import React from "react";
import { Label } from "./Label";
import { Text } from "./Text";

const ClothingInfo: React.FC = () => {
  return (
    <div className="pl-[120px] md:pl-[400px] flex flex-col items-start justify-start md:col-span-2 bg-[url('/boy.png')] bg-[length:100px_auto] md:bg-[length:400px_auto] bg-no-repeat bg-left-bottom">
      <Label className="mb-4">Шматье</Label>

      <div className="mb-4 space-y-2">
        <Text>
          Ты ж понял, что мы будем стены разукрашивать!? Вот форму зека мы тебе
          нашли, а как ты от мороза и краски будешь защищать остальное - сам
          решай.
        </Text>
        <Text>
          Для пиздюков своих тож поищи что-нить оранжевое, чтобы на фото не
          светились. Старшакам среди пиздюков принесем шмот.
        </Text>
        <Text>Точняк! Совсем забыла! Фотограв же будет!</Text>
        <Text>
          А значит и фотостена и всякая хуета для прикольных фоток. Ну, чтоб на
          память хранить, хуле.
        </Text>
      </div>

      <Label className="mb-4">Точняк, про подарки забыла</Label>

      <div className="mb-8 space-y-2">
        <Text>
          Чё угодно из моего вишлиста. Не из вишлиста могу выкинуть,
          предупреждаю сразу. Я эта, выебистая!
        </Text>
        <Text>
          Только выбирай не по моим хотелкам, а что себе купил бы. Ну, примерно
          хотя бы. Чтоб от души было.
        </Text>
        <a href="#" className="text-[#F75816] underline">
          Вишлист тут
        </a>
      </div>
    </div>
  );
};

export default ClothingInfo;
