"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { PropsWithChildren } from "react";

export default function Lenis({ children }: PropsWithChildren) {
  return (
    <ReactLenis root options={{ smoothWheel: true, lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
}
