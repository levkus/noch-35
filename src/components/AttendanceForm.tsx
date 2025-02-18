import React from "react";
import { Checkbox } from "./Checkbox";
import { Label } from "./Label";
import { useForm } from "../context/FormContext";
import { useContent } from "../context/ContentContext";
import { Text } from "@/components/Text";

export const AttendanceForm: React.FC = () => {
  const {
    attendanceLabel: label,
    attendanceOptions: options = [],
    submitButtonText,
  } = useContent();
  const { formData, setFormData, isSubmitting, handleSubmit } = useForm();

  const handleOptionChange = (option: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      attendance: {
        selection: checked ? option : null,
      },
    }));

    if (checked) {
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col">
      <Label bold color="black" className="mb-[0.5em] mr-auto">
        {label}
      </Label>
      <Text className="mb-[0.5em]">
        Вообще-то, я тебя, пиздец, как жду! Одного, чтоб ты был у меня в
        рабстве, с половинкой чтоб вместе страдать (ой, простите, сочувствовать
        ей), или со своими спиногрызами - приходи. Лишь бы настроение заебок
        было, а если тебе будет херово - в тему днюхи впишешься! Лучше хреновый
        приятель на днюхе, чем сидеть одному в этом сраном мир.
      </Text>
      <div className="space-y-[0.5em] mb-[1em]">
        {options.map((option, index) => (
          <Checkbox
            key={index}
            checked={formData.attendance.selection === option.id}
            onChange={(checked) => handleOptionChange(option.id, checked)}
            label={option.label}
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className={`bg-white text-[#F75816] border-[#F75816] border-2 px-[0.75em] py-[0.375em] font-rubik-one rounded-md mr-auto ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "ОТПРАВЛЯЕМ..." : submitButtonText}
      </button>
    </div>
  );
};
