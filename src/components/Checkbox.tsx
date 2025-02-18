import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  className = "",
}) => {
  return (
    <label
      className={`flex flex-shrink-0 items-start gap-[0.5em] cursor-pointer ${className}`}
    >
      <input
        type="checkbox"
        className="flex-shrink-0 w-[1.5em] h-[1.5em] accent-black rounded-none relative top-[0.25em]"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="text-[1.2em] text-black">{label}</span>
    </label>
  );
};
