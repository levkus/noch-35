import React from "react";
import { Text } from "./Text";
import { Label } from "./Label";
import { useContent } from "../context/ContentContext";

interface ScheduleItem {
  time: string;
  description: string;
}

interface ScheduleProps {
  className?: string;
}

export const Schedule = ({ className }: ScheduleProps) => {
  const { scheduleContent: content = [] } = useContent();
  const schedule: ScheduleItem[] = Array.isArray(content)
    ? (content as ScheduleItem[])
    : [];
  return (
    <div className={className}>
      <div className="flex gap-[1em] items-center mb-[1em]">
        <Label
          color="black"
          bold
          className="text-[2em] md:text-[1.5em] flex-shrink-0"
        >
          ПЛАН Б:
        </Label>
      </div>
      <div className="space-y-[0.25em]">
        {schedule.map((item, index) => (
          <div key={index}>
            <Text className="text-[1.2em]/[1.15] md:text-[1.2em]/[1.15] lg:text-[1.2em]/[1.15] font-bold">
              {item.time}
            </Text>
            <Text>{item.description}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};
