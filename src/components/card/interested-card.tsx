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
export default function InterestedCard() {

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
    <div className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative mb-4">
    

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

</div>
  )
}
