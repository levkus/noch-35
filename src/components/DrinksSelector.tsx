import React, { useState, useEffect, useRef } from "react";
import { Label } from "./Label";
import { Text } from "./Text";
import { Checkbox } from "./Checkbox";
import { useForm } from "../context/FormContext";
import { useContent } from "../context/ContentContext";

interface DrinksSelectorProps {
  className?: string;
}

export const DrinksSelector: React.FC<DrinksSelectorProps> = ({
  className,
}) => {
  const {
    drinksLabel: label,
    drinksContent: content = "",
    availableDrinks = [],
  } = useContent();
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
        {label}
      </Label>

      <div ref={dropdownRef} className="relative mb-[0.5em] mr-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-[280px] md:w-[600px] items-center justify-between px-[0.5em] py-[0.25em] text-[1em] border-2 border-black rounded-sm bg-white"
        >
          <span className="text-gray-600 mr-[0.5em] whitespace-nowrap max-w-[280px] md:max-w-[600px] overflow-hidden text-ellipsis">
            {formData.drinks.selections.length > 0
              ? formData.drinks.selections
                  .map(
                    (id) =>
                      availableDrinks?.find((d) => d.id === id)?.label || id
                  )
                  .join(", ")
              : "Выбери что пить будешь"}
          </span>
          <svg
            className={`flex-shrink-0 w-5 h-5 transition-transform ${
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
          <div className="absolute z-10 w-[280px] mt-[0.25em] bg-white border-2 border-black rounded-md space-y-[0.5em] p-[0.5em]">
            {availableDrinks.map((option) => (
              <Checkbox
                key={option.id}
                checked={formData.drinks.selections.includes(option.id)}
                onChange={(checked) => {
                  const newData = {
                    ...formData,
                    drinks: {
                      selections: checked
                        ? [...formData.drinks.selections, option.id]
                        : formData.drinks.selections.filter(
                            (item) => item !== option.id
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

      <div className="space-y-[0.5em]">
        {content.split("\n\n").map((paragraph, index) => (
          <Text key={index}>{paragraph}</Text>
        ))}
      </div>
    </div>
  );
};
