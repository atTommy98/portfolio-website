import { useRef } from "react";

export default function Page1() {
    const ref = useRef(null);

  return (
    <section ref={ref} className="sticky top-0 w-full h-[104vh] flex justify-start overflow-hidden bg-green-500 p-12 rounded-t-2xl">

    </section>
  );
}
