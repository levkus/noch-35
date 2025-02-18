import React, { createContext, useContext, useState } from "react";
import { FormData, GuestData } from "../types/form";
import toast from "react-hot-toast";

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  isSubmitting: boolean;
  handleSubmit: (newData?: FormData) => Promise<void>;
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
  const [formData, setFormData] = useState<FormData>(() => {
    // Ensure we're using the initial selections from the database
    return {
      drinks: {
        selections: initialData.drinks?.selections || [],
      },
      graffiti: {
        selections: initialData.graffiti?.selections || [],
      },
      attendance: {
        selection: initialData.attendance?.selection || null,
      },
    };
  });

  const initializeForm = (userData: GuestData) => {
    setFormData({
      drinks: {
        selections: userData.drinks?.selections || [],
      },
      graffiti: {
        selections: userData.graffiti?.selections || [],
      },
      attendance: {
        selection: userData.attendance?.selection || null,
      },
    });
  };

  const handleSubmit = async (newData?: FormData) => {
    try {
      setIsSubmitting(true);

      const dataToSubmit = newData || formData;

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: userSlug,
          drinks: dataToSubmit.drinks,
          graffiti: dataToSubmit.graffiti,
          attendance: dataToSubmit.attendance,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Упс, я обосрался. хз че делать, попробуй позже");
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
