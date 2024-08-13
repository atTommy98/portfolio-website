import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Page1() {
    const ref = useRef(null);
    const isInView = useInView(ref);

  return (
    <section ref={ref} className="sticky top-0 w-full h-[101vh] flex justify-start overflow-hidden bg-red-500 p-12">
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}>
        <h1>My Portfolio</h1>
      </span>
    </section>
  );
}
