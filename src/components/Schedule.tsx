import React from "react";
import { Text } from "./Text";
import { Label } from "./Label";

const Content = () => {
  return (
    <>
      <Label color="black" bold className="text-[2em] md:text-[3em] mb-6">
        ПЛАН А:
      </Label>
      <div className="mb-6 text-black opacity-50 text-l font-rubik-one">
        &ldquo;Б&rdquo; быть не должно, но кто знает
      </div>
      <div className="space-y-2">
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
    </>
  );
};

const Schedule: React.FC = () => {
  return (
    <>
      {/* Mobile: schedule */}
      <div className="flex flex-col items-start justify-start md:hidden">
        <Content />
      </div>

      {/* Desktop: schedule */}
      <div className="flex-col items-start justify-start hidden md:flex">
        <Content />
      </div>
    </>
  );
};

export default Schedule;
