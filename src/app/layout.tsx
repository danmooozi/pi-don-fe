import type { Metadata } from "next";
import { Poor_Story } from "next/font/google";
import "./globals.css";

const poorStory = Poor_Story({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "커밋 결산",
  description: "2023 커밋 결산",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poorStory.className}>{children}</body>
    </html>
  );
}
