interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div>
      {label && <label className="block text-sm font-medium">{label}</label>}
      <input
        {...props}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${className}`}
      />
    </div>
  );
}
