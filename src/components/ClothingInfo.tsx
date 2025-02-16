import React from "react";
import { Label } from "./Label";
import { Text } from "./Text";

interface ClothingInfoProps {
  className?: string;
}

export const ClothingInfo = ({ className }: ClothingInfoProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Label className="mb-[0.5em] mr-auto">Шматье</Label>

      <div className="space-y-[0.5em]">
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
    </div>
  );
};
