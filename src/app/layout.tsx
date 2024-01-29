import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SubNavbar from "@/components/navbar/sub-navbar";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eatier",
  description: "Best Place to get Satisfied",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
        </body>
    </html>
  );
}
