'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { TiEyeOutline } from "react-icons/ti";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
import { ChefProfile } from "../profile/chef-profile"

export function ChefCard() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const ListOfImages = [
    {
      id:1,
      src:"/images/image1.jpg",
    },
    {
      id:2,
      src:"/images/image2.jpg",
    },
    {
      id:3,
      src:"/images/image3.jpg",
    },
    {
      id:4,
      src:"/images/image4.jpg",
    },
    {
      id:5,
      src:'/images/image5.jpg',
    },
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative rounded-t-[50px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="rounded-t-[50px] ">
        {ListOfImages.map((item, index) => (
          <CarouselItem key={index} className="rounded-t-[50px] overflow-hidden">
                <div className="flex aspect-square items-center justify-center w-full rounded-t-[50px] overflow-hidden">
                  <img src={item.src} alt="" className="h-full w-full rounded-t-[50px] overflow-hidden" />
                </div>
          </CarouselItem>
        ))}
        
      </CarouselContent>
      <div className="absolute top-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <ChefProfile image='/images/image5.jpg' />
      </div>
      <div className="flex flex-col absolute bottom-[70px] right-2 px-2  bg-gray-100">
          <TiEyeOutline size={60} />
          <span>1 Million</span>
      </div>
      <div className="flex justify-end items-center">
        <p className='mr-2'>View more </p>
        <FaArrowRightLong size={60}/>
      </div>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
