import React, { useState, useEffect, useRef } from "react";
import { Checkbox } from "./Checkbox";
import { useForm } from "../context/FormContext";
import { useContent } from "../context/ContentContext";
import { GraffitiOption } from "@/types/options";
import { Label } from "./Label";

interface GraffitiSelectorProps {
  className?: string;
}

export const GraffitiSelector: React.FC<GraffitiSelectorProps> = ({
  className,
}) => {
  const { availableGraffiti = [] } = useContent();
  const { formData, setFormData, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={className}>
      <Label color="black" className="mb-[0.5em] mr-auto">
        А граффити рисовать будешь?
      </Label>
      <div ref={dropdownRef} className="relative mb-[0.5em] mr-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-[280px] md:w-[600px] items-center justify-between px-[0.5em] py-[0.25em] text-[1em] border-2 border-black rounded-sm bg-white"
        >
          <span className="text-gray-600 mr-[0.5em] whitespace-nowrap max-w-[280px] md:max-w-[600px] overflow-hidden text-ellipsis">
            {formData.graffiti.selections.length > 0
              ? formData.graffiti.selections
                  .map(
                    (id: string) =>
                      availableGraffiti?.find(
                        (d: GraffitiOption) => d.id === id
                      )?.label || id
                  )
                  .join(", ")
              : "Выбери"}
          </span>
          <svg
            className={`w-5 h-5 transition-transform flex-shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-20 min-w-[280px] mt-[0.25em] bg-white border-2 border-black rounded-md space-y-[0.5em] p-[0.5em]">
            {availableGraffiti.map((option: GraffitiOption) => (
              <Checkbox
                key={option.id}
                checked={formData.graffiti.selections.includes(option.id)}
                onChange={(checked) => {
                  const newData = {
                    ...formData,
                    graffiti: {
                      selections: checked
                        ? [...formData.graffiti.selections, option.id]
                        : formData.graffiti.selections.filter(
                            (item: string) => item !== option.id
                          ),
                    },
                  };
                  setFormData(newData);
                  handleSubmit(newData);
                }}
                label={option.label}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
