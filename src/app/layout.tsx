import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar  from "@/components/navbar";
import StepNav from "@/components/stepNav";

const Noto_Sans = Noto_Sans_Thai({ subsets: ["latin", "thai"] });

export const metadata: Metadata = {
  title: "Profile",
  description: "Universe profile page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={Noto_Sans.className}>{children}</body>
    </html>
    
  );
}
