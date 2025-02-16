import { PropsWithChildren } from "react";

export const Text = ({ children }: PropsWithChildren) => {
  return <p className="text-[1em]/[1.15] text-black font-cuprum">{children}</p>;
};
