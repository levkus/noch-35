import React from "react";
import { Label } from "./Label";
import { Text } from "./Text";
import DrinksSelector from "./DrinksSelector";
import { FormData } from "../types/form";

interface ClothingInfoProps {
  className?: string;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  isSubmitting: boolean;
  onSubmit: () => Promise<void>;
}

export const ClothingInfo = ({
  className,
  formData,
  setFormData,
}: ClothingInfoProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Label color="black" className="mb-[0.5em] mr-auto">
        Шматье
      </Label>

      <div className="mb-[2em] space-y-[0.5em]">
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

      <Label color="black" className="mb-[0.5em] mr-auto">
        Точняк, про подарки забыла
      </Label>

      <div className="mb-[2em] space-y-[0.5em]">
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

      <DrinksSelector
        formData={formData}
        setFormData={setFormData}
        className="flex flex-col mb-[2em]"
      />
    </div>
  );
};
