import React from "react";
import { Text } from "./Text";
import { Label } from "./Label";

const Schedule = ({ className }: { className?: string }) => {
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
        <Text>18:00 - собираемся (можно опаздывать, но не сильно)</Text>
        <Text>18:30 - придет пиздюческий аниматор</Text>
        <Text>19:00 - пиздуем рисовать граффити</Text>
        <Text>21:30 - кончаем (хе-хе) с граффити и валим в лофт</Text>
        <Text>21:45 - отрываемся</Text>
        <Text>
          00:00 - расходимся по кроваткам (да пихдю я! едем дальше тусить ко мне
          на хату или в барчик какой-нибудь. время ж детское, накуй)
        </Text>
      </div>
    </div>
  );
};

export default Schedule;
