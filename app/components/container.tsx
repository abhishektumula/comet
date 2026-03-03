import { cn } from "../lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Container = ({ children, className }: Props) => {
  return <div className={cn("mx-auto w-[92%] md:w-[82%] lg:w-[70%]", className)}>{children}</div>;
};
