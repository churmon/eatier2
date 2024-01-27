'use client'
import { AlignRight, X } from 'lucide-react';
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link';


const SubNavbar = () => {

    // Array containing navigation items
  const navItems = [
    { text: 'Vegan or Plant', href:'/vegan' },
    { text: 'Hotel restaurants +', href:'/hotel' },
    { text: 'Safari', href:'/safari' },
    { text: 'Eatier GO', href:'/go' },
    { text: 'Hotel restaurants +', href:'/hotel' },
    { text: 'Country', href:'/country' },
    { text: 'Kasi Eatier', href:'/kasi' },
    { text: 'Eatier ADV', href:'/adv' },
    { text: 'Street Bites', href:'/bites' },
    { text: 'Winery +', href:'/winery' },
    { text: 'Golf club restaurants', href:'/club' },
    { text: 'Sushi', href:'/sushi' },
    { text: 'Pizza', href:'/pizza' },
    { text: 'Steak', href:'/steak' },
    { text: 'Biltong', href:'/biltong' },
    { text: 'Ice Cream', href:'/cream' },
    { text: 'Chisanyama', href:'/chisanyama' },
    { text: 'BBQ', href:'/bbg' },
    { text: 'Cafes', href:'/cafes' },
    { text: 'Bar', href:'/bar' },
    { text: 'Fine Dinning', href:'/fine' },
    { text: 'Fish & Chips', href:'/fishchip' },

 
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mb-6 bg-gray-100"
    >
      <CarouselContent className='bg-gray-100 flex justify-between items-center h-12 w-full mx-auto px- text-gray-700 border-t-2'>
        {navItems.map((item, index) => (
          <CarouselItem key={index} className="bg-gray-100 flex justify-evenly items-center h-12 basis-1/2 md:basis-1/4 lg:basis-1/5">
            <Link href={item.href}
            key={index}
            className='p-4 hover:bg-[#63e763] rounded-xl m-2 cursor-pointer duration-300 hover:text-gray-900'
          >
            {item.text}
          </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
};

export default SubNavbar;


