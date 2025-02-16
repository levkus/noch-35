import { GetServerSideProps } from "next";
import { prisma } from "../../lib/prisma";
import { FormProvider } from "../context/FormContext";
import SeriesIntro from "../components/SeriesIntro";
import SeriesDescription from "../components/SeriesDescription";
import VideoSection from "../components/VideoSection";
import Schedule from "../components/Schedule";
import AttendanceForm from "../components/AttendanceForm";
import { Logo } from "@/components/Logo";
import { Date } from "@/components/Date";
import { Girl } from "@/components/Girl";
import { Graph } from "@/components/Graph";
import { Boy } from "@/components/Boy";
import { ClothingInfo } from "@/components/ClothingInfo";
import { PresentsInfo } from "@/components/PresentsInfo";
import DrinksSelector from "@/components/DrinksSelector";

interface Props {
  user: {
    slug: string;
    drinkBeer: boolean;
    drinkWhiteWine: boolean;
    drinkRedWine: boolean;
    drinkStrong: boolean;
    drinkNonAlcoholic: boolean;
    isAttending: boolean;
    withPartner: boolean;
    withKids: boolean;
    notComing: boolean;
  };
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;

  const user = await prisma.user.findUnique({
    where: { slug },
    select: {
      slug: true,
      drinkBeer: true,
      drinkWhiteWine: true,
      drinkRedWine: true,
      drinkStrong: true,
      drinkNonAlcoholic: true,
      isAttending: true,
      withPartner: true,
      withKids: true,
      notComing: true,
    },
  });

  return {
    props: {
      user: user || {
        slug,
        drinkBeer: false,
        drinkWhiteWine: false,
        drinkRedWine: false,
        drinkStrong: false,
        drinkNonAlcoholic: false,
        isAttending: false,
        withPartner: false,
        withKids: false,
        notComing: false,
      },
    },
  };
};

export default function UserPage({ user }: Props) {
  return (
    <FormProvider userSlug={user.slug} initialData={user}>
      <PageContent />
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
          <Date center />
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
          <Date />
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
