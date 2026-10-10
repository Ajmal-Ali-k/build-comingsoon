import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build | Coming soon",
  description: "The clearer way to compare UAE credit cards is coming soon.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
