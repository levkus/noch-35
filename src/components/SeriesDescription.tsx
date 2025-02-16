import React from "react";
import { Text } from "./Text";

interface SeriesDescriptionProps {
  header?: string;
  content?: string;
}

export const SeriesDescription: React.FC<SeriesDescriptionProps> = ({
  header = "ДЛЯ ОСОБЕННО ВРЕДНЫХ:",
  content = `Это английский сериал 2011 года, про чуваков, которые напортачили по жизни, за что их отправили на отработки. В процессе ебнула молния, и у всех людей откуда-то появились суперспособности.

Конечно же главные герои - отморозки, гопота и много матюкаются. Поэтому сериал и назвали "Отбросы". Почти все время эти придурки зависают в центре, где отрабатывают срок, и там с ними случается всякая хуета. Чаще всего не очень приятная. Но они банда, так что справляются со всем вместе. Любовь-морковь, кидалово и прочая пурга там тоже есть.

Вот на ДР будет также. Но там же будут дети, постараемся не матюкаться при них.`,
}) => {
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
