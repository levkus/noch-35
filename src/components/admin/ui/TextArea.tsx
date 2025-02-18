interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function TextArea({ label, className = "", ...props }: TextAreaProps) {
  return (
    <div>
      {label && <label className="block text-sm font-medium">{label}</label>}
      <textarea
        {...props}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${className}`}
      />
    </div>
  );
}
