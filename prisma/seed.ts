/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const generateId = () => Math.random().toString(36).substr(2, 9);

async function main() {
  // Delete existing content
  await prisma.content.deleteMany();

  // Create default content
  await prisma.content.create({
    data: {
      dateAddress: "7 МАРТА 18:00",
      dateLink: "но где-то районе м. Курская",
      introSemiTransparentText: "ЭТО НЕ НОЧЬ!",
      introOpaqueText:
        "ЕСЛИ ТЫ НЕ СМОТРЕЛ ЭТОТ СЕРИАЛ - ПОСМОТРИ, ХОТЯ БЫ ТРЕЙЛЕР",
      descriptionHeader: "ДЛЯ ОСОБЕННО ВРЕДНЫХ:",
      descriptionContent: `Это английский сериал 2011 года, про чуваков, которые напортачили по жизни, за что их отправили на отработки. В процессе ебнула молния, и у всех людей откуда-то появились суперспособности.

Конечно же главные герои - отморозки, гопота и много матюкаются. Поэтому сериал и назвали "Отбросы". Почти все время эти придурки зависают в центре, где отрабатывают срок, и там с ними случается всякая хуета. Чаще всего не очень приятная. Но они банда, так что справляются со всем вместе. Любовь-морковь, кидалово и прочая пурга там тоже есть.

Вот на ДР будет также. Но там же будут дети, постараемся не матюкаться при них.`,
      videoLink: "/promo.mp4",
      scheduleContent: JSON.stringify([
        {
          time: "18:00",
          description: "собираемся (можно опаздывать, но не сильно)",
        },
        { time: "18:30", description: "придет пиздюческий аниматор" },
        { time: "19:00", description: "пиздуем рисовать граффити" },
        {
          time: "21:30",
          description: "кончаем (хе-хе) с граффити и валим в лофт",
        },
        { time: "21:45", description: "отрываемся" },
        {
          time: "00:00",
          description:
            "расходимся по кроваткам (да пихдю я! едем дальше тусить ко мне на хату или в барчик какой-нибудь. время ж детское, накуй)",
        },
      ]),
      clothingLabel: "Шматье",
      clothingContent: `Ты ж понял, что мы будем стены разукрашивать!? Вот форму зека мы тебе нашли, а как ты от мороза и краски будешь защищать остальное - сам решай.

Для пиздюков своих тож поищи что-нить оранжевое, чтобы на фото не светились. Старшакам среди пиздюков принесем шмот.

Точняк! Совсем забыла! Фотограв же будет!

А значит и фотостена и всякая хуета для прикольных фоток. Ну, чтоб на память хранить, хуле.`,
      presentsLabel: "Точняк, про подарки забыла",
      presentsContent: `Чё угодно из моего вишлиста. Не из вишлиста могу выкинуть, предупреждаю сразу. Я эта, выебистая!

Только выбирай не по моим хотелкам, а что себе купил бы. Ну, примерно хотя бы. Чтоб от души было.`,
      wishlistLink: "#",
      drinksLabel: "Бля, а пьешь ты чё ваще?",
      drinksContent: `Но не только за себя выбирай, про половинку свою не забудь... и детей! Они ж сами себе не выберут нихуя. Немощные

Хавать фастудину всякую будем, отбросы-ж. Шаурма-хуюрма, хот-доги всякие. Так что для супернежных, сам покупаю жратву`,
      availableDrinks: JSON.stringify([
        { id: generateId(), label: "пиво" },
        { id: generateId(), label: "белое вино" },
        { id: generateId(), label: "красное вино" },
        { id: generateId(), label: "крепкое" },
        { id: generateId(), label: "безалкогольное" },
      ]),
      graffitiLabel: "Ну чё, порисуем?",
      graffitiContent:
        "Выбирай, чё тебя больше всего мотивирует порисовать. Можно несколько вариантов, хули.",
      availableGraffiti: JSON.stringify([
        { id: generateId(), label: "Конечно хочу! Че за вопросы вообще?" },
        {
          id: generateId(),
          label: "да нах оно мне нужно!? я лучше побухаю или маркерами порисую",
        },
        {
          id: generateId(),
          label: "половинка сердца моя помулевать хочет, а яж люблю ее",
        },
        { id: generateId(), label: "отпрыск мой тоже порисовать хочет, хуле!" },
      ]),
      attendanceLabel: "БЛЯ, А ТЫ ПРИДЕШЬ-ТО?",
      attendanceOptions: JSON.stringify([
        { id: generateId(), label: "че за тупой вопрос!? конеш я буду!" },
        { id: generateId(), label: "и парочку свою приведу, хули" },
        {
          id: generateId(),
          label: "да и пиздюков тогда девать некуда, тоже возьму",
        },
        { id: generateId(), label: "хотя, ну ее нафиг, мы не придем" },
      ]),
      submitButtonText: "ПОНЯЛ, ПРИНЯЛ, УЕБАЛ",
    },
  });

  // Delete existing allowed slugs
  await prisma.allowedSlug.deleteMany();

  // Create allowed slugs
  await prisma.allowedSlug.createMany({
    data: [
      { slug: "levkus" },
      { slug: "magun" },
      { slug: "adm1n" },
      { slug: "oksana" },
      { slug: "ruslan" },
      { slug: "dasha" },
      { slug: "shadrin" },
      { slug: "virka" },
      { slug: "kassad" },
      { slug: "daerus" },
      { slug: "leyka" },
      { slug: "max" },
      { slug: "masha" },
      { slug: "lena" },
      { slug: "julya" },
      { slug: "alesya" },
      { slug: "sokolov" },
      { slug: "alenka" },
    ],
  });

  console.log(
    "Database has been seeded with default content and allowed slugs"
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

module.exports = main;
