import React, { Children } from "react";
import { cn } from "../lib/utils";

type Props = {
  className: string;
  children: React.ReactNode;
};

export const Container = ({ children, className }: Props) => {
  return <div className={cn("w-[70%] mx-auto")}>{children}</div>;
};
