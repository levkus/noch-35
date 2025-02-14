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
        `flex text-white px-6 py-2 text-[1.2em] relative rounded-md ${className}`,
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
