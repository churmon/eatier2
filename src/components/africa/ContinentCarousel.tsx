'use client'
import { AlignRight, ShoppingBag, X } from 'lucide-react';
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui-copy/carousel-copy"
import Image from 'next/image';
import Link from 'next/link';


const ContinentCarousel = () => {

    // <Link href="africa/northern-africa">Northern Africa</Link>
    //                 <Link href="africa/southern-africa">Southern Africa</Link>
    //                 <Link href="africa/shop-africa" className="flex"><ShoppingBag className="h-8 w-8 items-center" /> Shop Africa</Link>
    //                 <Link href="africa/western-africa">Western Africa</Link>
    //                 <Link href="africa/eastern-africa">Eastern Africa</Link>
    //                 <Link href="africa/central-africa">Central Africa</Link>

    // Array containing navigation items
  const navItems = [
    { href: 'africa/northern-africa', text:'Northern Africa' },
    { href: 'africa/southern-africa', text:'Southern Africa' },
    { href: 'africa/shop-africa', text:'Shop Africa',icon:true },
    { href: 'africa/western-africa', text:'Western Africa' },
    { href: 'africa/eastern-africa', text:'Eastern Africa' },
    { href: 'africa/central-africa', text:'Central Africa' },
    
    
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mb-6 bg-white min-w-full py-5"
    >
      <CarouselContent className='bg-gray-100 flex justify-between items-center h-12 w-full text-gray-700 border-t-2'>
        {navItems.map((item, index) => (
          <CarouselItem key={index} className="bg-gray-100 flex justify-evenly items-center h-12 basis-1/2 md:basis-1/4 lg:basis-1/5">
            <Link href={item.href}
            key={index}
            className='flex p-4 hover:bg-[#63e763] rounded-xl cursor-pointer duration-300 hover:text-gray-900'
          >
            { item?.icon ? <ShoppingBag className="h-8 w-8 items-center"/>:""}{item.text}
          </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
};

export default ContinentCarousel;


