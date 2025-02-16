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
      className={`flex items-center gap-[0.5em] cursor-pointer ${className}`}
    >
      <input
        type="checkbox"
        className="w-[1.5em] h-[1.5em] accent-black"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="text-[1.2em] text-black">{label}</span>
    </label>
  );
};
