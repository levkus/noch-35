import { GetServerSideProps } from "next";
import { prisma } from "../../lib/prisma";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FormData } from "../types/form";
import Header from "../components/Header";
import SeriesIntro from "../components/SeriesIntro";
import SeriesDescription from "../components/SeriesDescription";
import VideoSection from "../components/VideoSection";
import Schedule from "../components/Schedule";
import Graph from "../components/Graph";
import ClothingInfo from "../components/ClothingInfo";
import DrinksSelector from "../components/DrinksSelector";
import AttendanceForm from "../components/AttendanceForm";

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
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="min-h-screen flex justify-center font-cuprum text-[16px] md:text-[18px] lg:text-[20px]">
      <div className="p-6 grid gap-8 md:grid-cols-2 w-screen max-w-[1440px] bg-[url('/nobg.jpeg')] bg-[length:100%_100%] bg-center bg-no-repeat">
        <Header />
        <SeriesIntro />
        <SeriesDescription />
        <VideoSection />
        <Schedule />
        <Graph />
        <ClothingInfo />
        <DrinksSelector
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          formData={formData}
          setFormData={setFormData}
        />
        <AttendanceForm
          formData={formData}
          setFormData={setFormData}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
