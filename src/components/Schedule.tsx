import React from "react";

const Schedule: React.FC = () => {
  return (
    <>
      {/* Mobile: schedule */}
      <div className="md:hidden p-6 flex flex-col items-start justify-start">
        <div className="bg-black text-white px-8 py-4 text-4xl font-black mb-4">
          ПЛАН А:
        </div>
        <div className="text-gray-500 text-3xl font-bold mb-6">
          &ldquo;Б&rdquo; быть не должно, но кто знает
        </div>
        <div className="text-black text-2xl space-y-4">
          <p>18:00 - собираемся (можно опаздывать, но не сильно)</p>
          <p>18:30 - придет пиздюческий аниматор</p>
          <p>19:00 - пиздуем рисовать граффити</p>
          <p>21:30 - кончаем (хе-хе) с граффити и валим в лофт</p>
          <p>21:45 - отрываемся</p>
          <p>
            00:00 - расходимся по кроваткам (да пихдю я! едем дальше тусить ко
            мне на хату или в барчик какой-нибудь. время ж детское, накуй)
          </p>
        </div>
      </div>

      {/* Desktop: schedule */}
      <div className="hidden md:block p-6 flex flex-col items-start justify-start">
        <div className="bg-black text-white px-8 py-4 text-4xl font-black mb-4">
          ПЛАН А:
        </div>
        <div className="text-gray-500 text-3xl font-bold mb-6">
          &ldquo;Б&rdquo; быть не должно, но кто знает
        </div>
        <div className="text-black text-2xl space-y-4">
          <p>18:00 - собираемся (можно опаздывать, но не сильно)</p>
          <p>18:30 - придет пиздюческий аниматор</p>
          <p>19:00 - пиздуем рисовать граффити</p>
          <p>21:30 - кончаем (хе-хе) с граффити и валим в лофт</p>
          <p>21:45 - отрываемся</p>
          <p>
            00:00 - расходимся по кроваткам (да пихдю я! едем дальше тусить ко
            мне на хату или в барчик какой-нибудь. время ж детское, накуй)
          </p>
        </div>
      </div>
    </>
  );
};

export default Schedule;
