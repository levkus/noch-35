import React from "react";
import { Label } from "./Label";
import { Text } from "./Text";

interface PresentsInfoProps {
  className?: string;
}

export const PresentsInfo = ({ className }: PresentsInfoProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Label className="mb-[0.5em] mr-auto">Точняк, про подарки забыла</Label>

      <div className="space-y-[0.5em]">
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
