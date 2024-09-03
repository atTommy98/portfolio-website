import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Lenis from "@/components/Lenis";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Tommy Holt's Portfolio",
  description: "",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Lenis>
      <body className={inter.className}>{children}</body>
      </Lenis>
    </html>
  );
}
