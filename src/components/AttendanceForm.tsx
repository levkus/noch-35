import React from "react";
import { FormData } from "../types/form";
import Checkbox from "./Checkbox";
import { Label } from "./Label";

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
    <div className="flex flex-col">
      <Label bold color="black" className="mb-[0.5em] mr-auto">
        БЛЯ, А ТЫ ПРИДЕШЬ-ТО?
      </Label>
      <div className="space-y-[0.5em] mb-[0.5em]">
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
        className={`bg-white text-[#F75816] border-[#F75816] border-2 px-[0.75em] py-[0.375em] font-rubik-one rounded-md mr-auto ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "ОТПРАВЛЯЕМ..." : "ПОНЯЛ, ПРИНЯЛ, УЕБАЛ"}
      </button>
    </div>
  );
};

export default AttendanceForm;
