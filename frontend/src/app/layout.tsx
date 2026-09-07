import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Shihab Uddin | Portfolio",
  description:
    "I am a passionate web developer with expertise in React, Next.js, and Tailwind CSS. I create responsive and user-friendly web applications that deliver exceptional user experiences.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/favicon.png", type: "image/png", sizes: "256x256" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
