import React from "react";
import { Text } from "./Text";
import { useContent } from "../context/ContentContext";

export const SeriesDescription: React.FC = () => {
  const { descriptionHeader: header, descriptionContent: content = "" } =
    useContent();
  return (
    <div>
      <div className="flex justify-between items-center text-[1.3em]/[1.5] mb-[0.5em] font-rubik-one w-[100%]">
        <div className="text-[#F75816]">{header}</div>
        <div className="text-black">18+</div>
      </div>
      <div className="space-y-[0.5em]">
        {content.split("\n\n").map((paragraph, index) => (
          <Text key={index}>{paragraph}</Text>
        ))}
      </div>
    </div>
  );
};
