import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yunuo Wu | Academic Homepage",
  description:
    "Academic homepage of Yunuo Wu, doctoral student in spatial informatics and urban decline analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
