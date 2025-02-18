import { GetServerSideProps } from "next";
import { prisma } from "../../lib/prisma";
import { FormProvider } from "../context/FormContext";
import { ContentProvider } from "../context/ContentContext";
import { SeriesIntro } from "../components/SeriesIntro";
import { SeriesDescription } from "../components/SeriesDescription";
import { VideoSection } from "../components/VideoSection";
import { Schedule } from "../components/Schedule";
import { AttendanceForm } from "../components/AttendanceForm";
import { DrinksSelector } from "@/components/DrinksSelector";
import { GraffitiSelector } from "@/components/GraffitiSelector";
import { Logo } from "@/components/Logo";
import { DateSection } from "@/components/DateSection";
import { Girl } from "@/components/Girl";
import { Graph } from "@/components/Graph";
import { Boy } from "@/components/Boy";
import { ClothingInfo } from "@/components/ClothingInfo";
import { PresentsInfo } from "@/components/PresentsInfo";

interface Props {
  user: {
    slug: string;
    drinks: {
      selections: string[];
    };
    graffiti: {
      selections: string[];
    };
    attendance: {
      selection: string | null;
    };
  };
  content: {
    id: string;
    dateAddress: string;
    dateLink: string;
    dateLinkLabel: string;
    introSemiTransparentText: string;
    introOpaqueText: string;
    descriptionHeader: string;
    descriptionContent: string;
    videoLink: string;
    scheduleContent: { time: string; description: string }[];
    clothingLabel: string;
    clothingContent: string;
    presentsLabel: string;
    presentsContent: string;
    wishlistLink: string;
    wishlistLinkLabel: string;
    drinksLabel: string;
    drinksContent: string;
    availableDrinks: { id: string; label: string }[];
    graffitiLabel: string;
    graffitiContent: string;
    availableGraffiti: { id: string; label: string }[];
    attendanceLabel: string;
    attendanceOptions: { id: string; label: string }[];
    submitButtonText: string;
    createdAt: string;
    updatedAt: string;
  };
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;

  const [allowedSlug, user, content] = await Promise.all([
    prisma.allowedSlug.findUnique({
      where: { slug },
    }),
    prisma.guest.findUnique({
      where: { slug },
      select: {
        slug: true,
        drinks: true,
        graffiti: true,
        attendance: true,
      },
    }),
    prisma.content.findFirst(),
  ]);

  if (!allowedSlug) {
    return {
      notFound: true,
    };
  }

  if (!content) {
    await prisma.content.create({
      data: {},
    });
  }

  const now = new Date().toISOString();
  const defaultContent = {
    id: "new",
    dateAddress: "",
    dateLink: "",
    dateLinkLabel: "",
    introSemiTransparentText: "",
    introOpaqueText: "",
    descriptionHeader: "",
    descriptionContent: "",
    videoLink: "",
    scheduleContent: [],
    clothingLabel: "",
    clothingContent: "",
    presentsLabel: "",
    presentsContent: "",
    wishlistLink: "",
    wishlistLinkLabel: "",
    drinksLabel: "",
    drinksContent: "",
    availableDrinks: [],
    graffitiLabel: "",
    graffitiContent: "",
    availableGraffiti: [],
    attendanceLabel: "",
    attendanceOptions: [],
    submitButtonText: "",
    createdAt: now,
    updatedAt: now,
  };

  return {
    props: {
      user: user
        ? {
            slug: user.slug,
            drinks:
              typeof user.drinks === "string"
                ? JSON.parse(user.drinks)
                : user.drinks,
            graffiti:
              typeof user.graffiti === "string"
                ? JSON.parse(user.graffiti)
                : user.graffiti,
            attendance:
              typeof user.attendance === "string"
                ? JSON.parse(user.attendance)
                : user.attendance,
          }
        : {
            slug,
            drinks: { selections: [] },
            graffiti: { selections: [] },
            attendance: { selection: null },
          },
      content: content
        ? {
            ...content,
            createdAt: content.createdAt.toISOString(),
            updatedAt: content.updatedAt.toISOString(),
            availableDrinks:
              typeof content.availableDrinks === "string"
                ? JSON.parse(content.availableDrinks)
                : content.availableDrinks,
            availableGraffiti:
              typeof content.availableGraffiti === "string"
                ? JSON.parse(content.availableGraffiti)
                : content.availableGraffiti,
            attendanceOptions:
              typeof content.attendanceOptions === "string"
                ? JSON.parse(content.attendanceOptions)
                : content.attendanceOptions,
            scheduleContent:
              typeof content.scheduleContent === "string"
                ? JSON.parse(content.scheduleContent)
                : content.scheduleContent,
          }
        : defaultContent,
    },
  };
};

export default function UserPage({ user, content }: Props) {
  return (
    <FormProvider userSlug={user.slug} initialData={user}>
      <ContentProvider content={content}>
        <PageContent />
      </ContentProvider>
    </FormProvider>
  );
}

const PageContent: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Mobile */}
      <div className="md:hidden text-[5vw] px-[1em]">
        <div className="flex justify-center pt-[4em] pb-[0em]">
          <Logo className="max-w-[60vw]" />
        </div>
        <div className="flex justify-center pb-[2em]">
          <DateSection center />
        </div>
        <div className="flex items-center mb-[2em]">
          <SeriesIntro className="relative -mr-[2em]" />
          <Girl className="w-[40vw] flex-shrink-0" />
        </div>
        <div className="mb-[3em]">
          <SeriesDescription />
        </div>
        <div className="mb-[2em]">
          <VideoSection />
        </div>
        <div className="mb-[2em]">
          <Schedule />
        </div>
        <div className="mb-[3em]">
          <Graph />
        </div>
        <div>
          <div className="relative flex">
            <Boy className="absolute w-[15em] bottom-[1em] -left-[8em]" />
            <div className="z-10 pl-[5em]">
              <ClothingInfo className="mb-[1em]" />
            </div>
          </div>
          <PresentsInfo className="mb-[2em]" />
          <DrinksSelector className="flex flex-col mb-[1em]" />
          <GraffitiSelector className="relative flex flex-col mb-[1em] z-20" />
        </div>
        <div className="pb-[2em]">
          <AttendanceForm />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block text-[1.65vw] px-[3em]">
        <div className="flex justify-between items-center py-[4em]">
          <Logo className="w-[24em]" />
          <DateSection />
        </div>
        <div className="flex items-center justify-between gap-[2em] mb-[4em]">
          <div>
            <SeriesIntro className="text-[1.3em]/[1.25] mb-[1.25em]" />
            <SeriesDescription />
          </div>
          <Girl className="w-[22em] flex-shrink-0" />
        </div>
        <div className="flex flex-col gap-8 mb-[1.35em] items-center">
          <div className="flex justify-center">
            <VideoSection className="w-[70vw] mb-[2em]" />
          </div>
          <div className="max-w-[50vw]">
            <Schedule />
          </div>
        </div>

        <div className="max-w-[80%] m-auto mb-[2em]">
          <Graph />
        </div>
        <div className="flex items-end gap-8">
          <Boy className="-ml-[3em] w-[120em]" />
          <div>
            <ClothingInfo className="mb-[0.5em]" />
            <PresentsInfo className="mb-[1em]" />
            <DrinksSelector className="flex flex-col mb-[2em]" />
            <GraffitiSelector className="flex flex-col mb-[1em]" />
          </div>
        </div>
        <div className="pb-[4em]">
          <AttendanceForm />
        </div>
      </div>
    </div>
  );
};
