'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { FaStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
export default function RestaurantCard() {

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
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
    <div className="absolute top-2 left-2 text-white bg-black bg-opacity-30 z-30 p-1 rounded-lg">
        <h3 className="font-bold">Le Rouge Restaurant</h3>
        <p className="font-bold">9 Station Street, Wynberg</p>
    </div>

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

    <div className="flex justify-center my-2">
        <FaStar size={20} color="yellow" />
        <FaStar size={20} color="yellow" />
        <FaStar size={20} color="yellow" />
        <FaStar size={20} color="yellow" />
        <FaStar size={20} color="yellow" />
         
    </div>

</div>
  )
}
