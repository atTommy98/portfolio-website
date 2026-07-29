import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Centres page content and caps how wide it can grow.
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
        "max-w-screen-xl mx-auto w-full h-full px-4 md:px-24",
        className
      )}>
      {children}
    </main>
  );
}
