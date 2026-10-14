import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Billd | Find your kind of card.",
  description: "Compare UAE credit cards. See who can apply, what you’ll pay and what you get back. Join the Billd waitlist.",
  icons: {
    icon: "/icon.svg?v=3",
  },
  openGraph: {
    title: "Billd | Find your kind of card.",
    description: "UAE credit cards. Eligibility, fees and rewards in one comparison. Join the Billd waitlist.",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billd | Find your kind of card.",
    description: "UAE credit cards. Eligibility, fees and rewards in one comparison. Join the Billd waitlist.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AE">
      <head>
        <link rel="preload" href="/fonts/gloock-regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
