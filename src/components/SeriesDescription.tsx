import React from "react";

const SeriesDescription: React.FC = () => {
  return (
    <>
      {/* Mobile: text */}
      <div className="md:hidden p-6 flex flex-col items-start justify-start relative">
        <div className="text-[#F75816] text-4xl font-rubik-one mb-6">
          ДЛЯ ОСОБЕННО ВРЕДНЫХ:
        </div>
        <div className="text-black text-2xl space-y-6 font-cuprum">
          <p>
            Это английский сериал 2011 года, про чуваков, которые напортачили по
            жизни, за что их отправили на отработки. В процессе ебнула молния, и
            у всех людей откуда-то появились суперспособности.
          </p>
          <p>
            Конечно же главные герои - отморозки, гопота и много матюкаются.
            Поэтому сериал и назвали &ldquo;Отбросы&rdquo;. Почти все время эти
            придурки зависают в центре, где отрабатывают срок, и там с ними
            случается всякая хуета. Чаще всего не очень приятная. Но они банда,
            так что справляются со всем вместе. Любовь-морковь, кидалово и
            прочая пурга там тоже есть.
          </p>
          <p>
            Вот на ДР будет также. Но там же будут дети, постараемся не
            матюкаться при них.
          </p>
        </div>
        <div className="absolute top-6 right-6 text-black text-4xl font-rubik-one">
          18+
        </div>
      </div>

      {/* Desktop: text */}
      <div className="hidden md:block p-6 flex flex-col items-start justify-start relative">
        <div className="text-[#F75816] text-4xl font-rubik-one mb-6">
          ДЛЯ ОСОБЕННО ВРЕДНЫХ:
        </div>
        <div className="text-black text-2xl space-y-6 font-cuprum">
          <p>
            Это английский сериал 2011 года, про чуваков, которые напортачили по
            жизни, за что их отправили на отработки. В процессе ебнула молния, и
            у всех людей откуда-то появились суперспособности.
          </p>
          <p>
            Конечно же главные герои - отморозки, гопота и много матюкаются.
            Поэтому сериал и назвали &ldquo;Отбросы&rdquo;. Почти все время эти
            придурки зависают в центре, где отрабатывают срок, и там с ними
            случается всякая хуета. Чаще всего не очень приятная. Но они банда,
            так что справляются со всем вместе. Любовь-морковь, кидалово и
            прочая пурга там тоже есть.
          </p>
          <p>
            Вот на ДР будет также. Но там же будут дети, постараемся не
            матюкаться при них.
          </p>
        </div>
        <div className="absolute top-6 right-6 text-black text-4xl font-rubik-one">
          18+
        </div>
      </div>
    </>
  );
};

export default SeriesDescription;
