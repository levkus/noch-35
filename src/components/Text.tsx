import { PropsWithChildren } from "react";

export const Text = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <p
      className={`text-[1em]/[1.15] md:text-[1.2em]/[1.15] lg:text-[1em]/[1.15] text-black font-cuprum ${className}`}
    >
      {children}
    </p>
  );
};
