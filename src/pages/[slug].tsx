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
    scheduleContent: string;
    clothingLabel: string;
    clothingContent: string;
    presentsLabel: string;
    presentsContent: string;
    wishlistLink: string;
    wishlistLinkLabel: string;
    drinksLabel: string;
    drinksContent: string;
    availableDrinks: { id: string; label: string }[];
    attendanceLabel: string;
    attendanceOptions: { id: string; label: string }[];
    submitButtonText: string;
    createdAt: string;
    updatedAt: string;
  };
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;

  const [user, content] = await Promise.all([
    prisma.guest.findUnique({
      where: { slug },
      select: {
        slug: true,
        drinks: true,
        attendance: true,
      },
    }),
    prisma.content.findFirst(),
  ]);

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
    scheduleContent: "",
    clothingLabel: "",
    clothingContent: "",
    presentsLabel: "",
    presentsContent: "",
    wishlistLink: "",
    wishlistLinkLabel: "",
    drinksLabel: "",
    drinksContent: "",
    availableDrinks: [],
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
            attendance:
              typeof user.attendance === "string"
                ? JSON.parse(user.attendance)
                : user.attendance,
          }
        : {
            slug,
            drinks: { selections: [] },
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
            attendanceOptions:
              typeof content.attendanceOptions === "string"
                ? JSON.parse(content.attendanceOptions)
                : content.attendanceOptions,
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
      <div className="md:hidden text-[4vw] px-[2em]">
        <div className="flex justify-center pt-[2em] pb-[0em]">
          <Logo className="max-w-[70vw]" />
        </div>
        <div className="flex justify-center pb-[2em]">
          <DateSection center />
        </div>
        <div className="flex">
          <SeriesIntro />
          <Girl />
        </div>
        <div>
          <SeriesDescription />
        </div>
        <div>
          <VideoSection />
        </div>
        <div>
          <Schedule />
        </div>
        <Graph />
        <ClothingInfo className="mb-[2em]" />
        <PresentsInfo className="mb-[2em]" />
        <DrinksSelector className="flex flex-col mb-[2em]" />
        <AttendanceForm />
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
        <div className="flex justify-between items-center gap-8 mb-[1.35em]">
          <VideoSection className="basis-1/2" />
          <Schedule className="basis-1/2" />
        </div>

        <div className="max-w-[80%] m-auto mb-[2em]">
          <Graph />
        </div>
        <div className="flex items-start gap-8">
          <Boy className="-ml-[3em] w-[30em]" />
          <div>
            <ClothingInfo className="mb-[2em]" />
            <PresentsInfo className="mb-[2em]" />
            <DrinksSelector className="flex flex-col mb-[2em]" />
          </div>
        </div>
        <div className="pb-[2em]">
          <AttendanceForm />
        </div>
      </div>
    </div>
  );
};
