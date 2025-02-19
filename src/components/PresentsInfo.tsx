import React from "react";
import { Label } from "./Label";
import { Text } from "./Text";
import { useContent } from "../context/ContentContext";

interface PresentsInfoProps {
  className?: string;
}

export const PresentsInfo = ({ className }: PresentsInfoProps) => {
  const {
    presentsLabel: label,
    presentsContent: content = "",
    wishlistLink,
    wishlistLinkLabel,
  } = useContent();
  return (
    <div className={`flex flex-col ${className}`}>
      <Label className="mb-[0.5em] mr-auto">{label}</Label>

      <div className="space-y-[0.5em]">
        {content.split("\n\n").map((paragraph, index) => (
          <Text key={index}>{paragraph}</Text>
        ))}
        {wishlistLink && (
          <a
            href={wishlistLink}
            className="text-[#F75816] text-[1.5em] font-bold underline"
            target="_blank"
          >
            {wishlistLinkLabel || "Вишлист тут"}
          </a>
        )}
      </div>
    </div>
  );
};
