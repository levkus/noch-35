import React from "react";
import { Label } from "./Label";
import { Text } from "./Text";

interface ClothingInfoProps {
  className?: string;
  label?: string;
  content?: string;
}

export const ClothingInfo = ({
  className,
  label = "Шматье",
  content = `Ты ж понял, что мы будем стены разукрашивать!? Вот форму зека мы тебе нашли, а как ты от мороза и краски будешь защищать остальное - сам решай.

Для пиздюков своих тож поищи что-нить оранжевое, чтобы на фото не светились. Старшакам среди пиздюков принесем шмот.

Точняк! Совсем забыла! Фотограв же будет!

А значит и фотостена и всякая хуета для прикольных фоток. Ну, чтоб на память хранить, хуле.`,
}: ClothingInfoProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Label className="mb-[0.5em] mr-auto">{label}</Label>

      <div className="space-y-[0.5em]">
        {content.split("\n\n").map((paragraph, index) => (
          <Text key={index}>{paragraph}</Text>
        ))}
      </div>
    </div>
  );
};
