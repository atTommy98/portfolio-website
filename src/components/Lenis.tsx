"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { PropsWithChildren, useEffect } from "react";

const LenisProvider = ({ children }: PropsWithChildren) => {
  const lenis = useLenis();

  return (
    <ReactLenis
      className="h-full"
      options={{ lerp: 0.08, smoothWheel: true }}
      root
    >
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;
