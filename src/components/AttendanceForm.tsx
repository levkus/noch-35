import React from "react";
import { FormData } from "../types/form";
import Checkbox from "./Checkbox";

interface AttendanceFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  isSubmitting: boolean;
  onSubmit: () => Promise<void>;
}

const AttendanceForm: React.FC<AttendanceFormProps> = ({
  formData,
  setFormData,
  isSubmitting,
  onSubmit,
}) => {
  return (
    <div className="flex flex-col items-start justify-start md:col-span-2">
      <div className="bg-black text-white px-8 py-4 text-4xl font-rubik-one mb-6 rounded-md">
        БЛЯ, А ТЫ ПРИДЕШЬ-ТО?
      </div>
      <div className="space-y-6 w-full max-w-2xl mb-8">
        <Checkbox
          checked={formData.attendance.coming}
          onChange={(checked) => {
            setFormData((prev) => ({
              ...prev,
              attendance: {
                ...prev.attendance,
                coming: checked,
                notComing: false,
              },
            }));
          }}
          label="че за тупой вопрос!? конеш я буду!"
        />
        <Checkbox
          checked={formData.attendance.withPartner}
          onChange={(checked) => {
            setFormData((prev) => ({
              ...prev,
              attendance: {
                ...prev.attendance,
                withPartner: checked,
              },
            }));
          }}
          label="и парочку свою приведу, хули"
        />
        <Checkbox
          checked={formData.attendance.withKids}
          onChange={(checked) => {
            setFormData((prev) => ({
              ...prev,
              attendance: {
                ...prev.attendance,
                withKids: checked,
              },
            }));
          }}
          label="да и пиздюков тогда девать некуда, тоже возьму"
        />
        <Checkbox
          checked={formData.attendance.notComing}
          onChange={(checked) => {
            setFormData((prev) => ({
              ...prev,
              attendance: {
                coming: false,
                withPartner: false,
                withKids: false,
                notComing: checked,
              },
            }));
          }}
          label="хотя, ну ее нафиг, мы не придем"
        />
      </div>
      <button
        onClick={onSubmit}
        disabled={isSubmitting}
        className={`bg-[#F75816] text-white px-8 py-3 text-2xl font-rubik-one rounded-md ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "ОТПРАВЛЯЕМ..." : "ПОНЯЛ, ПРИНЯЛ, УЕБАЛ"}
      </button>
    </div>
  );
};

export default AttendanceForm;
