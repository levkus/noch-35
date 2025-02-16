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
  label,
  content = "",
  wishlistLink,
}: PresentsInfoProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Label className="mb-[0.5em] mr-auto">{label}</Label>

      <div className="space-y-[0.5em]">
        {content.split("\n\n").map((paragraph, index) => (
          <Text key={index}>{paragraph}</Text>
        ))}
        {wishlistLink && (
          <a href={wishlistLink} className="text-[#F75816] underline">
            Вишлист тут
          </a>
        )}
      </div>
    </div>
  );
};
