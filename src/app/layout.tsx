import "./globals.css";
import LenisProvider from "@/components/Lenis";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LenisProvider>
        <body>{children}</body>
      </LenisProvider>
    </html>
  );
}
