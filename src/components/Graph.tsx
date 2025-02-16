/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Graph = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img src="/graph.png" alt="Graph" className="w-[100%]" />
    </div>
  );
};
