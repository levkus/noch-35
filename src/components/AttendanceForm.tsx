import React from "react";
import { FormData } from "../types/form";

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
    <div className="p-6 flex flex-col items-start justify-start md:col-span-2">
      <div className="bg-black text-white px-8 py-4 text-4xl font-rubik-one mb-6 rounded-md">
        БЛЯ, А ТЫ ПРИДЕШЬ-ТО?
      </div>
      <div className="space-y-6 w-full max-w-2xl mb-8">
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            className="w-8 h-8 accent-black"
            checked={formData.attendance.coming}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                attendance: {
                  ...prev.attendance,
                  coming: e.target.checked,
                  notComing: false,
                },
              }));
            }}
          />
          <span className="text-2xl text-black font-cuprum">
            че за тупой вопрос!? конеш я буду!
          </span>
        </label>
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            className="w-8 h-8 accent-black"
            checked={formData.attendance.withPartner}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                attendance: {
                  ...prev.attendance,
                  withPartner: e.target.checked,
                },
              }));
            }}
          />
          <span className="text-2xl text-black font-cuprum">
            и парочку свою приведу, хули
          </span>
        </label>
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            className="w-8 h-8 accent-black"
            checked={formData.attendance.withKids}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                attendance: {
                  ...prev.attendance,
                  withKids: e.target.checked,
                },
              }));
            }}
          />
          <span className="text-2xl text-black font-cuprum">
            да и пиздюков тогда девать некуда, тоже возьму
          </span>
        </label>
        <label className="flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            className="w-8 h-8 accent-black"
            checked={formData.attendance.notComing}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                attendance: {
                  coming: false,
                  withPartner: false,
                  withKids: false,
                  notComing: e.target.checked,
                },
              }));
            }}
          />
          <span className="text-2xl text-black font-cuprum">
            хотя, ну ее нафиг, мы не придем
          </span>
        </label>
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
