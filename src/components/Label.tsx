import { PropsWithChildren } from "react";
import cn from "classnames";

interface LabelProps {
  bold?: boolean;
  color?: "black" | "orange";
  className?: string;
}

export const Label = ({
  bold = false,
  color = "orange",
  className,
  children,
}: PropsWithChildren<LabelProps>) => {
  return (
    <div
      className={cn(
        `flex text-white md:text-[1.2em] px-[0.5em] py-[0.125em] md:px-[0.75em] md:py-[0.375em] text-[1em] rounded-md ${className}`,
        {
          "font-rubik-one": bold,
          "font-cuprum": !bold,
          "bg-[#F75816]": color === "orange",
          "bg-black": color === "black",
        }
      )}
    >
      {children}
    </div>
  );
};
