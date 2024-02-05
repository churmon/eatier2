import EachBreakfast from '@/components/breakfast/each-breakfast';
import ProfileNavbar from '@/components/navbar/profile-navbar';
import { Inter } from 'next/font/google';
import { Metadata } from 'next/types';
import React from 'react';
import { CiShare2 } from "react-icons/ci";
import { SlEye } from "react-icons/sl";
import { RiMessage2Line } from "react-icons/ri";
import Image from "next/image";
import Nav from '@/components/menu/nav';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eatier",
  description: "Best Place to get Satisfied",
};

export default function ProfileLayout({
    children,params
  }: Readonly<{
    children: React.ReactNode;
    params:{
      id:string
    }
  }>) {
  return (
    <main className={inter.className}>
      <div>
      <Nav id={params.id} />
      </div>
       {children}
     </main>
  )
}
