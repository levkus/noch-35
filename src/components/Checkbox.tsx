import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  className = "",
}) => {
  return (
    <label className={`flex items-center gap-4 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        className="w-[1.5em] h-[1.5em] accent-black"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="text-2xl text-black font-cuprum">{label}</span>
    </label>
  );
};

export default Checkbox;
