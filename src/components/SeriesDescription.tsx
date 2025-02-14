import React from "react";
import { Text } from "./Text";

const Content = () => {
  return (
    <>
      <div className="flex justify-between items-center text-[1em] leading-7 mb-2 font-rubik-one w-[100%]">
        <div className="text-[#F75816]">ДЛЯ ОСОБЕННО ВРЕДНЫХ:</div>
        <div className="text-black">18+</div>
      </div>
      <div className="space-y-2">
        <Text>
          Это английский сериал 2011 года, про чуваков, которые напортачили по
          жизни, за что их отправили на отработки. В процессе ебнула молния, и у
          всех людей откуда-то появились суперспособности.
        </Text>
        <Text>
          Конечно же главные герои - отморозки, гопота и много матюкаются.
          Поэтому сериал и назвали &ldquo;Отбросы&rdquo;. Почти все время эти
          придурки зависают в центре, где отрабатывают срок, и там с ними
          случается всякая хуета. Чаще всего не очень приятная. Но они банда,
          так что справляются со всем вместе. Любовь-морковь, кидалово и прочая
          пурга там тоже есть.
        </Text>
        <Text>
          Вот на ДР будет также. Но там же будут дети, постараемся не матюкаться
          при них.
        </Text>
      </div>
    </>
  );
};

const SeriesDescription: React.FC = () => {
  return (
    <>
      {/* Mobile: text */}
      <div className="md:hidden">
        <Content />
      </div>

      {/* Desktop: text */}
      <div className="hidden md:block ">
        <Content />
      </div>
    </>
  );
};

export default SeriesDescription;
