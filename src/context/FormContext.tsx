import React, { createContext, useContext, useState } from "react";
import { FormData } from "../types/form";
import toast from "react-hot-toast";

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  isSubmitting: boolean;
  handleSubmit: () => Promise<void>;
  initializeForm: (userData: {
    drinkBeer: boolean;
    drinkWhiteWine: boolean;
    drinkRedWine: boolean;
    drinkStrong: boolean;
    drinkNonAlcoholic: boolean;
    isAttending: boolean;
    withPartner: boolean;
    withKids: boolean;
    notComing: boolean;
  }) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProviderProps {
  children: React.ReactNode;
  userSlug: string;
  initialData: {
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

export const FormProvider: React.FC<FormProviderProps> = ({
  children,
  userSlug,
  initialData,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(() => ({
    drinks: [
      ...(initialData.drinkBeer ? ["пиво"] : []),
      ...(initialData.drinkWhiteWine ? ["белое вино"] : []),
      ...(initialData.drinkRedWine ? ["красное вино"] : []),
      ...(initialData.drinkStrong ? ["крепкое"] : []),
      ...(initialData.drinkNonAlcoholic ? ["безалкогольное"] : []),
    ],
    attendance: {
      coming: initialData.isAttending,
      withPartner: initialData.withPartner,
      withKids: initialData.withKids,
      notComing: initialData.notComing,
    },
  }));

  const initializeForm = (userData: {
    drinkBeer: boolean;
    drinkWhiteWine: boolean;
    drinkRedWine: boolean;
    drinkStrong: boolean;
    drinkNonAlcoholic: boolean;
    isAttending: boolean;
    withPartner: boolean;
    withKids: boolean;
    notComing: boolean;
  }) => {
    setFormData({
      drinks: [
        ...(userData.drinkBeer ? ["пиво"] : []),
        ...(userData.drinkWhiteWine ? ["белое вино"] : []),
        ...(userData.drinkRedWine ? ["красное вино"] : []),
        ...(userData.drinkStrong ? ["крепкое"] : []),
        ...(userData.drinkNonAlcoholic ? ["безалкогольное"] : []),
      ],
      attendance: {
        coming: userData.isAttending,
        withPartner: userData.withPartner,
        withKids: userData.withKids,
        notComing: userData.notComing,
      },
    });
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: userSlug,
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
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        isSubmitting,
        handleSubmit,
        initializeForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useForm must be used within a FormProvider");
  }

  return context;
};
