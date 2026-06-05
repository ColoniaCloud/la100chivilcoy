import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La 100 - Chivilcoy",
  description: "La 100 Chivilcoy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
