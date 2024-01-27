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

export function EventCard() {
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
    <div className='relative'>
    <Carousel
      plugins={[plugin.current]}
      className="w-full rounded-t-[50px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="rounded-t-[50px] ">
        {ListOfImages.map((item, index) => (
          <CarouselItem key={index} className="">
                <div className="flex aspect-square items-center justify-center w-full ">
                  <img src={item.src} alt="" className="h-full w-full " />
                </div>
          </CarouselItem>
        ))}
        
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <div className="">
        <Link href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Noteworthy technology </h5>
        </Link>
        <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <div className="flex justify-between">
            <div className="flex">
                <p>from</p>
                <h1 className="ml-2 font-extrabold">BHD 20</h1>
            </div>
            <div>
                <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-full hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    BOOK NOW    
                </Link>
            </div>
        </div>
        
    </div>

    <div className="absolute top-6 left-4 ">
        <Link href="#" className="inline-flex rounded-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            MORE INFO    
        </Link>
    </div>
    </div>
  )
}
