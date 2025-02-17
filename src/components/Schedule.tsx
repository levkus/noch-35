import React from "react";
import { Text } from "./Text";
import { Label } from "./Label";
import { useContent } from "../context/ContentContext";

interface ScheduleProps {
  className?: string;
}

export const Schedule = ({ className }: ScheduleProps) => {
  const { scheduleContent: content = "" } = useContent();
  return (
    <div className={className}>
      <div className="flex gap-[1em] items-center mb-[1em]">
        <Label
          color="black"
          bold
          className="text-[2em] md:text-[1.5em] flex-shrink-0"
        >
          ПЛАН А:
        </Label>
        <div className=" text-black opacity-50 text-[1.35em]/[0.9] font-rubik-one">
          &ldquo;Б&rdquo; быть не должно, но кто знает
        </div>
      </div>
      <div className="space-y-[0.25em]">
        {content.split("\n").map((line, index) => (
          <Text key={index}>{line}</Text>
        ))}
      </div>
    </div>
  );
};
