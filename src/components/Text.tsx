import { PropsWithChildren } from "react";

export const Text = ({ children }: PropsWithChildren) => {
  return (
    <p className="leading-5 text-black md:leading-6 lg:leading-7 font-cuprum">
      {children}
    </p>
  );
};
