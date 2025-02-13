import React from "react";
import { FormData } from "../types/form";

interface DrinksSelectorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const DrinksSelector: React.FC<DrinksSelectorProps> = ({
  isOpen,
  setIsOpen,
  formData,
  setFormData,
}) => {
  return (
    <>
      <button className="bg-[#F75816] text-white px-8 py-3 text-2xl font-rubik-one rounded-lg mb-4">
        Бля, а пьешь ты чё ваще?
      </button>

      <div className="relative w-full max-w-2xl mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-3 text-xl border-2 border-black rounded-lg flex items-center justify-between font-rubik-one"
        >
          <span className="text-gray-600">
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
          <div className="absolute z-10 w-full mt-1 bg-white border-2 border-black rounded-lg shadow-lg">
            {[
              "пиво",
              "белое вино",
              "красное вино",
              "крепкое",
              "безалкогольное",
            ].map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 px-6 py-2 hover:bg-gray-100 cursor-pointer font-rubik-one"
              >
                <input
                  type="checkbox"
                  checked={formData.drinks.includes(option)}
                  onChange={() => {
                    setFormData((prev) => ({
                      ...prev,
                      drinks: prev.drinks.includes(option)
                        ? prev.drinks.filter((item) => item !== option)
                        : [...prev.drinks, option],
                    }));
                  }}
                  className="w-5 h-5 accent-black"
                />
                <span className="text-xl">{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="text-black text-xl font-cuprum">
        <p>
          Но не только за себя выбирай, про половинку свою не забудь... и детей!
          Они ж сами себе не выберут нихуя. Немощные
        </p>
        <p>
          Хавать фастудину всякую будем, отбросы-ж. Шаурма-хуюрма, хот-доги
          всякие. Так что для супернежных, сам покупаю жратву
        </p>
      </div>
    </>
  );
};

export default DrinksSelector;
