import { GetServerSideProps } from "next";
import { prisma } from "../../lib/prisma";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FormData } from "../types/form";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    drinks: [],
    attendance: {
      coming: false,
      withPartner: false,
      withKids: false,
      notComing: false,
    },
  });

  useEffect(() => {
    setFormData({
      drinks: [
        ...(user.drinkBeer ? ["пиво"] : []),
        ...(user.drinkWhiteWine ? ["белое вино"] : []),
        ...(user.drinkRedWine ? ["красное вино"] : []),
        ...(user.drinkStrong ? ["крепкое"] : []),
        ...(user.drinkNonAlcoholic ? ["безалкогольное"] : []),
      ],
      attendance: {
        coming: user.isAttending,
        withPartner: user.withPartner,
        withKids: user.withKids,
        notComing: user.notComing,
      },
    });
  }, [user]);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: user.slug,
          drinkBeer: formData.drinks.includes("пиво"),
          drinkWhiteWine: formData.drinks.includes("белое вино"),
          drinkRedWine: formData.drinks.includes("красное вино"),
          drinkStrong: formData.drinks.includes("крепкое"),
          drinkNonAlcoholic: formData.drinks.includes("безалкогольное"),
          isAttending: formData.attendance.coming,
          withPartner: formData.attendance.withPartner,
          withKids: formData.attendance.withKids,
          notComing: formData.attendance.notComing,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Форма успешно сохранена!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Произошла ошибка при отправке формы. Попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[url('/nobg.jpeg')] bg-[length:100%_100%] bg-center bg-no-repeat">
      {/* Mobile */}
      <div className="md:hidden text-[16px]">
        <Logo />
        <Date />
        <SeriesIntro />
        <SeriesDescription />
        <VideoSection />
        <Schedule />
        <Graph />
        <ClothingInfo
          formData={formData}
          setFormData={setFormData}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
        />

        <AttendanceForm
          formData={formData}
          setFormData={setFormData}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
        />
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
        <div className="flex items-end">
          <Boy className="-ml-[3em] w-[30em]" />
          <ClothingInfo
            formData={formData}
            setFormData={setFormData}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
          />
        </div>
        <div className="pb-[2em]">
          <AttendanceForm
            formData={formData}
            setFormData={setFormData}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
