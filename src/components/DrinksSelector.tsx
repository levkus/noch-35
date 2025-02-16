import React, { useState, useEffect, useRef } from "react";
import { FormData } from "../types/form";
import { Label } from "./Label";
import { Text } from "./Text";
import Checkbox from "./Checkbox";

interface DrinksSelectorProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  className?: string;
}

const DrinksSelector: React.FC<DrinksSelectorProps> = ({
  formData,
  setFormData,
  className,
}) => {
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
      <Label color="black" className="mb-[1em] mr-auto">
        Бля, а пьешь ты чё ваще?
      </Label>

      <div ref={dropdownRef} className="relative mb-[1em] mr-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex min-w-[280px] items-center justify-between px-[0.75em] py-[0.375em] text-[1em] border-2 border-black rounded-sm bg-white"
        >
          <span className="text-gray-600 mr-[0.5em]">
            {formData.drinks.length > 0
              ? formData.drinks.join(", ")
              : "Выбери что пить будешь"}
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
          <div className="absolute z-10 w-[280px] mt-1 bg-white border-2 border-black rounded-md shadow-lg">
            {[
              "пиво",
              "белое вино",
              "красное вино",
              "крепкое",
              "безалкогольное",
            ].map((option) => (
              <div key={option} className="px-2 py-1 hover:bg-gray-100">
                <Checkbox
                  checked={formData.drinks.includes(option)}
                  onChange={(checked) => {
                    setFormData((prev) => ({
                      ...prev,
                      drinks: checked
                        ? [...prev.drinks, option]
                        : prev.drinks.filter((item) => item !== option),
                    }));
                  }}
                  label={option}
                  className="font-rubik-one"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-[0.5em]">
        <Text>
          Но не только за себя выбирай, про половинку свою не забудь... и детей!
          Они ж сами себе не выберут нихуя. Немощные
        </Text>
        <Text>
          Хавать фастудину всякую будем, отбросы-ж. Шаурма-хуюрма, хот-доги
          всякие. Так что для супернежных, сам покупаю жратву
        </Text>
      </div>
    </div>
  );
};

export default DrinksSelector;
