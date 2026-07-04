import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Shihab Uddin | Portfolio",
  description:
    "I am a passionate web developer with expertise in React, Next.js, and Tailwind CSS. I create responsive and user-friendly web applications that deliver exceptional user experiences.",
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
