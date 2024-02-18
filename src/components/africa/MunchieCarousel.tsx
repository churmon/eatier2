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
} from "@/components/ui-copy/carousel-copy"
import Image from 'next/image';


const MunchieCarousel = () => {

    // Array containing navigation items
  const navItems = [
    { text: '50 Cent Official', img:'/images/image8.jpg' },
    { text: 'EX Events Company', img:'/images/image9.jpg' },
    { text: 'EX Events Company', img:'/images/image7.jpg' },
    
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mb-6 bg-white min-w-full py-5"
    >
      <CarouselContent className='flex justify-center sm:justify-around items-center w-full'>
        {navItems.map((item, index) => (
          <CarouselItem key={index} className="flex justify-center sm:justify-around items-center basis-full md:basis-1/4 lg:basis-1/5">
            <div key={index}
          >
            <div className='flex flex-col justify-center items-center'>
            <div><Image src={item.img} width={70} height={70} alt="" className="h-[70px] w-[70px] rounded-full object-cover" /></div>
            <div className='border-2 px-2 mt-1'>{item.text}</div>
            </div>
          </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
};

export default MunchieCarousel;


