import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function MaxWidthWrapper({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <main
      className={cn(
        "max-w-screen-lg mx-auto w-full h-full px-4 md:px-24",
        className
      )}>
      {children}
    </main>
  );
}
