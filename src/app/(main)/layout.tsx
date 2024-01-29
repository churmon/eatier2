import { Inter } from 'next/font/google';
import { Metadata } from 'next/types';
import React from 'react'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eatier",
  description: "Best Place to get Satisfied",
};

export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <main className={inter.className}>
          {children}
     </main>
  )
}
