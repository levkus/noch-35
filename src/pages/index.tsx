import { Geist } from "next/font/google";
import { useState } from "react";

const geist = Geist({
  subsets: ["latin"],
});

interface FormData {
  drinks: string[];
  attendance: {
    coming: boolean;
    withPartner: boolean;
    withKids: boolean;
    notComing: boolean;
  };
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    drinks: [],
    attendance: {
      coming: false,
      withPartner: false,
      withKids: false,
      notComing: false,
    },
  });

  return (
    <div
      className={`${geist.className} min-h-screen p-4 md:p-6 flex justify-center`}
    >
      <div className="grid gap-4 md:grid-cols-2 md:gap-6 w-screen max-w-[1440px] bg-[url('/nobg.jpeg')] bg-[length:100%_100%] bg-center bg-no-repeat">
        {/* Logo Block */}
        <div className="p-6 flex items-center justify-center">
          <img
            src="/misfits.png"
            alt="Misfits Logo"
            className="w-auto h-auto"
          />
        </div>

        {/* Date Block */}
        <div className="p-6 flex flex-col items-center justify-center">
          {/* Orange header */}
          <div className="bg-[#E85D2A] text-white px-8 py-3 rounded-lg text-2xl font-medium mb-2 z-10">
            День Рождения Ночи
          </div>

          {/* Black date block */}
          <div className="bg-black text-white  py-8 -mt-2 rounded-lg text-6xl font-bold tracking-wider">
            7 МАРТА 18:00
          </div>

          {/* Address text */}
          <div className="mt-6 text-center text-2xl">
            <div>Тут должен быть адрес,</div>
            <div>но пока его нет,</div>
            <div className="text-[#E85D2A] underline">
              но где-то районе м. Курская
            </div>
          </div>
        </div>

        {/* Mobile: HI and P1 in same row */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          <div className="p-6 flex flex-col items-start justify-center">
            <div className="text-gray-600 text-4xl font-bold mb-4">
              ЭТО НЕ НОЧЬ!
            </div>
            <div className="text-black text-5xl font-black leading-tight">
              ЕСЛИ ТЫ НЕ СМОТРЕЛ ЭТОТ СЕРИАЛ - ПОСМОТРИ, ХОТЯ БЫ ТРЕЙЛЕР
            </div>
          </div>
          <div className="p-6 flex items-center justify-center">
            <img src="/girl.png" alt="Girl" className="w-auto h-auto" />
          </div>
        </div>

        {/* Desktop: HI and text on left, P1 on right with double height */}
        <div className="hidden md:block p-6 flex flex-col items-start justify-center">
          <div className="text-gray-600 text-4xl font-bold mb-4">
            ЭТО НЕ НОЧЬ!
          </div>
          <div className="text-black text-5xl font-black leading-tight">
            ЕСЛИ ТЫ НЕ СМОТРЕЛ ЭТОТ СЕРИАЛ - ПОСМОТРИ, ХОТЯ БЫ ТРЕЙЛЕР
          </div>
        </div>
        <div className="hidden md:block p-6 flex items-center justify-center md:row-span-2">
          <img src="/girl.png" alt="Girl" className="w-auto h-auto" />
        </div>
        <div className="hidden md:block p-6 flex flex-col items-start justify-start relative">
          <div className="text-[#E85D2A] text-4xl font-black mb-6">
            ДЛЯ ОСОБЕННО ВРЕДНЫХ:
          </div>
          <div className="text-black text-2xl space-y-6">
            <p>
              Это английский сериал 2011 года, про чуваков, которые напортачили
              по жизни, за что их отправили на отработки. В процессе ебнула
              молния, и у всех людей откуда-то появились суперспособности.
            </p>
            <p>
              Конечно же главные герои - отморозки, гопота и много матюкаются.
              Поэтому сериал и назвали &ldquo;Отбросы&rdquo;. Почти все время
              эти придурки зависают в центре, где отрабатывают срок, и там с
              ними случается всякая хуета. Чаще всего не очень приятная. Но они
              банда, так что справляются со всем вместе. Любовь-морковь,
              кидалово и прочая пурга там тоже есть.
            </p>
            <p>
              Вот на ДР будет также. Но там же будут дети, постараемся не
              матюкаться при них.
            </p>
          </div>
          <div className="absolute top-6 right-6 text-black text-4xl font-black">
            18+
          </div>
        </div>

        {/* Mobile: text, video, sch stacked */}
        <div className="md:hidden p-6 flex flex-col items-start justify-start relative">
          <div className="text-[#E85D2A] text-4xl font-black mb-6">
            ДЛЯ ОСОБЕННО ВРЕДНЫХ:
          </div>
          <div className="text-black text-2xl space-y-6">
            <p>
              Это английский сериал 2011 года, про чуваков, которые напортачили
              по жизни, за что их отправили на отработки. В процессе ебнула
              молния, и у всех людей откуда-то появились суперспособности.
            </p>
            <p>
              Конечно же главные герои - отморозки, гопота и много матюкаются.
              Поэтому сериал и назвали &ldquo;Отбросы&rdquo;. Почти все время
              эти придурки зависают в центре, где отрабатывают срок, и там с
              ними случается всякая хуета. Чаще всего не очень приятная. Но они
              банда, так что справляются со всем вместе. Любовь-морковь,
              кидалово и прочая пурга там тоже есть.
            </p>
            <p>
              Вот на ДР будет также. Но там же будут дети, постараемся не
              матюкаться при них.
            </p>
          </div>
          <div className="absolute top-6 right-6 text-black text-4xl font-black">
            18+
          </div>
        </div>
        <div className="md:hidden p-6 flex flex-col items-start justify-start relative">
          <div className="bg-[#E85D2A] text-white px-8 py-3 rounded-lg text-2xl font-medium mb-4">
            Вас ждет
          </div>
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/video-poster.jpg"
            >
              <source src="/promo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-black border-b-[15px] border-b-transparent ml-2"></div>
              </div>
            </div>
          </div>
        </div>
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

        {/* Desktop: video and sch side by side */}
        <div className="hidden md:block p-6 flex flex-col items-start justify-start relative">
          <div className="bg-[#E85D2A] text-white px-8 py-3 rounded-lg text-2xl font-medium mb-4">
            Вас ждет
          </div>
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/video-poster.jpg"
            >
              <source src="/promo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-black border-b-[15px] border-b-transparent ml-2"></div>
              </div>
            </div>
          </div>
        </div>
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

        {/* Common for both: graph, poll, poll2 full width */}
        <div className="p-6 flex items-center justify-center md:col-span-2">
          <img src="/graph.png" alt="Graph" className="w-auto h-auto" />
        </div>
        <div className="p-6 pl-[100px] md:pl-[400px] flex flex-col items-start justify-start md:col-span-2 bg-[url('/boy.png')] bg-[length:100px_auto] md:bg-[length:400px_auto] bg-no-repeat bg-left-bottom">
          <button className="bg-[#E85D2A] text-white px-8 py-3 text-2xl font-medium rounded-lg mb-4">
            Шматье
          </button>

          <div className="text-black text-xl space-y-6 mb-8">
            <p>
              Ты ж понял, что мы будем стены разукрашивать!? Вот форму зека мы
              тебе нашли, а как ты от мороза и краски будешь защищать остальное
              - сам решай.
            </p>
            <p>
              Для пиздюков своих тож поищи что-нить оранжевое, чтобы на фото не
              светились. Старшакам среди пиздюков принесем шмот.
            </p>
            <p>Точняк! Совсем забыла! Фотограв же будет!</p>
            <p>
              А значит и фотостена и всякая хуета для прикольных фоток. Ну, чтоб
              на память хранить, хуле.
            </p>
          </div>

          <button className="bg-[#E85D2A] text-white px-8 py-3 text-2xl font-medium rounded-lg mb-4">
            Точняк, про подарки забыла
          </button>

          <div className="text-black text-xl space-y-4 mb-8">
            <p>
              Чё угодно из моего вишлиста. Не из вишлиста могу выкинуть,
              предупреждаю сразу. Я эта, выебистая!
            </p>
            <p>
              Только выбирай не по моим хотелкам, а что себе купил бы. Ну,
              примерно хотя бы. Чтоб от души было.
            </p>
            <a href="#" className="text-[#E85D2A] underline">
              Вишлист тут
            </a>
          </div>

          <button className="bg-[#E85D2A] text-white px-8 py-3 text-2xl font-medium rounded-lg mb-4">
            Бля, а пьешь ты чё ваще?
          </button>

          <div className="relative w-full max-w-2xl mb-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-6 py-3 text-xl border-2 border-black rounded-lg flex items-center justify-between"
            >
              <span className="text-gray-600">
                {formData.drinks.length > 0
                  ? formData.drinks.join(", ")
                  : "Выбери что пить будешь"}
              </span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border-2 border-black rounded-lg shadow-lg">
                {[
                  "пиво",
                  "белое вино",
                  "красное вино",
                  "крепкое",
                  "безалкогольное",
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 px-6 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.drinks.includes(option)}
                      onChange={() => {
                        setFormData((prev) => ({
                          ...prev,
                          drinks: prev.drinks.includes(option)
                            ? prev.drinks.filter((item) => item !== option)
                            : [...prev.drinks, option],
                        }));
                      }}
                      className="w-5 h-5 accent-black"
                    />
                    <span className="text-xl">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="text-black text-xl">
            <p>
              Но не только за себя выбирай, про половинку свою не забудь... и
              детей! Они ж сами себе не выберут нихуя. Немощные
            </p>
            <p>
              Хавать фастудину всякую будем, отбросы-ж. Шаурма-хуюрма, хот-доги
              всякие. Так что для супернежных, сам покупаю жратву
            </p>
          </div>
        </div>
        <div className="p-6 flex flex-col items-start justify-start md:col-span-2">
          <div className="bg-black text-white px-8 py-4 text-4xl font-black mb-6 rounded-lg">
            БЛЯ, А ТЫ ПРИДЕШЬ-ТО?
          </div>
          <div className="space-y-6 w-full max-w-2xl mb-8">
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="checkbox"
                className="w-8 h-8 accent-black"
                checked={formData.attendance.coming}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    attendance: {
                      ...prev.attendance,
                      coming: e.target.checked,
                      notComing: false,
                    },
                  }));
                }}
              />
              <span className="text-2xl text-black">
                че за тупой вопрос!? конеш я буду!
              </span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="checkbox"
                className="w-8 h-8 accent-black"
                checked={formData.attendance.withPartner}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    attendance: {
                      ...prev.attendance,
                      withPartner: e.target.checked,
                    },
                  }));
                }}
              />
              <span className="text-2xl text-black">
                и парочку свою приведу, хули
              </span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="checkbox"
                className="w-8 h-8 accent-black"
                checked={formData.attendance.withKids}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    attendance: {
                      ...prev.attendance,
                      withKids: e.target.checked,
                    },
                  }));
                }}
              />
              <span className="text-2xl text-black">
                да и пиздюков тогда девать некуда, тоже возьму
              </span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="checkbox"
                className="w-8 h-8 accent-black"
                checked={formData.attendance.notComing}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    attendance: {
                      coming: false,
                      withPartner: false,
                      withKids: false,
                      notComing: e.target.checked,
                    },
                  }));
                }}
              />
              <span className="text-2xl text-black">
                хотя, ну ее нафиг, мы не придем
              </span>
            </label>
          </div>
          <button className="bg-[#E85D2A] text-white px-8 py-3 text-2xl font-black rounded-lg">
            ПОНЯЛ, ПРИНЯЛ, УЕБАЛ
          </button>
        </div>
      </div>
    </div>
  );
}
