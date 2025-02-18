interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type="button"
      {...props}
      className={`px-4 py-2 rounded-md disabled:opacity-50 ${variantClasses[variant]} ${className}`}
    />
  );
}
