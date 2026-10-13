import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Billd | Coming soon",
  description: "Billd is the clearer way to compare UAE credit cards.",
  icons: {
    icon: "/icon.svg?v=2",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
