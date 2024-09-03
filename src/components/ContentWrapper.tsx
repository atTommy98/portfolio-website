import { useRef } from "react";

export default function ContentWrapper({ children, backgroundColor }: any) {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="sticky top-0 w-full h-[100vh] flex justify-start overflow-hidden bg-red-500 p-12"
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
    </section>
  );
}
