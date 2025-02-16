import React, { createContext, useContext, useState } from "react";
import { FormData, GuestData } from "../types/form";
import toast from "react-hot-toast";

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  isSubmitting: boolean;
  handleSubmit: () => Promise<void>;
  initializeForm: (userData: GuestData) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProviderProps {
  children: React.ReactNode;
  userSlug: string;
  initialData: GuestData;
}

export const FormProvider: React.FC<FormProviderProps> = ({
  children,
  userSlug,
  initialData,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(() => ({
    drinks: initialData.drinks,
    attendance: initialData.attendance,
  }));

  const initializeForm = (userData: GuestData) => {
    setFormData({
      drinks: userData.drinks,
      attendance: userData.attendance,
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
          drinks: formData.drinks,
          attendance: formData.attendance,
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
