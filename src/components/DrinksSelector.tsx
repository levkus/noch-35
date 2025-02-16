import React, { useState, useEffect, useRef } from "react";
import { Label } from "./Label";
import { Text } from "./Text";
import Checkbox from "./Checkbox";
import { useForm } from "../context/FormContext";

interface DrinksSelectorProps {
  className?: string;
}

const DrinksSelector: React.FC<DrinksSelectorProps> = ({ className }) => {
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
      <Label className="mb-[0.5em] mr-auto">Бля, а пьешь ты чё ваще?</Label>

      <div ref={dropdownRef} className="relative mb-[0.5em] mr-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex min-w-[280px] items-center justify-between px-[0.5em] py-[0.25em] text-[1em] border-2 border-black rounded-sm bg-white"
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
          <div className="absolute z-10 w-[280px] mt-[0.25em] bg-white border-2 border-black rounded-md">
            {[
              "пиво",
              "белое вино",
              "красное вино",
              "крепкое",
              "безалкогольное",
            ].map((option) => (
              <div key={option} className="p-[0.25em] hover:bg-gray-100">
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
