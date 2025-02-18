import React, { useState, useEffect, useRef } from "react";
import { Checkbox } from "./Checkbox";
import { useForm } from "../context/FormContext";
import { useContent } from "../context/ContentContext";
import { GraffitiOption } from "@/types/options";

interface GraffitiSelectorProps {
  className?: string;
}

export const GraffitiSelector: React.FC<GraffitiSelectorProps> = ({
  className,
}) => {
  const { availableGraffiti = [] } = useContent();
  const { formData, setFormData } = useForm();
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
      <div ref={dropdownRef} className="relative mb-[0.5em] mr-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex min-w-[280px] items-center justify-between px-[0.5em] py-[0.25em] text-[1em] border-2 border-black rounded-sm bg-white"
        >
          <span className="text-gray-600 mr-[0.5em]">
            {formData.graffiti.selections.length > 0
              ? formData.graffiti.selections
                  .map(
                    (id: string) =>
                      availableGraffiti?.find(
                        (d: GraffitiOption) => d.id === id
                      )?.label || id
                  )
                  .join(", ")
              : "Выбери почему хочешь порисовать"}
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${
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
          <div className="absolute z-10 w-[280px] mt-[0.25em] bg-white border-2 border-black rounded-md">
            {availableGraffiti.map((option: GraffitiOption) => (
              <div key={option.id} className="p-[0.25em] hover:bg-gray-100">
                <Checkbox
                  checked={formData.graffiti.selections.includes(option.id)}
                  onChange={(checked) => {
                    setFormData((prev) => ({
                      ...prev,
                      graffiti: {
                        selections: checked
                          ? [...prev.graffiti.selections, option.id]
                          : prev.graffiti.selections.filter(
                              (item: string) => item !== option.id
                            ),
                      },
                    }));
                  }}
                  label={option.label}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
