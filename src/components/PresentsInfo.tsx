import React from "react";
import { Label } from "./Label";
import { Text } from "./Text";

interface PresentsInfoProps {
  className?: string;
  label?: string;
  content?: string;
  wishlistLink?: string;
}

export const PresentsInfo = ({
  className,
  label = "Точняк, про подарки забыла",
  content = `Чё угодно из моего вишлиста. Не из вишлиста могу выкинуть, предупреждаю сразу. Я эта, выебистая!

Только выбирай не по моим хотелкам, а что себе купил бы. Ну, примерно хотя бы. Чтоб от души было.`,
  wishlistLink = "#",
}: PresentsInfoProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Label className="mb-[0.5em] mr-auto">{label}</Label>

      <div className="space-y-[0.5em]">
        {content.split("\n\n").map((paragraph, index) => (
          <Text key={index}>{paragraph}</Text>
        ))}
        <a href={wishlistLink} className="text-[#F75816] underline">
          Вишлист тут
        </a>
      </div>
    </div>
  );
};
