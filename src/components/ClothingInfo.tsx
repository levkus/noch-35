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
  label,
  content = "",
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
