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
export default function MostViewAndRecommended({text}:{text:string}) {

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
    <div className="w-full bg-white border border-gray-200 rounded-t-3xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 relative">
    
    <Carousel
      plugins={[plugin.current]}
      className="w-full rounded-t-3xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="rounded-t-3xl">
        {ListOfImages.map((item, index) => (
          <CarouselItem key={index} className="rounded-t-3xl">
                <div className="flex aspect-square items-center justify-center w-full rounded-t-3xl">
                  <img src={item.src} alt="" className="h-full w-full rounded-t-3xl overflow-hidden" />
                </div>
          </CarouselItem>
        ))}
        
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <div className="absolute top-8 font-bold text-center bg-black/35 text-white px-5 py-2 rounded-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        {text}
    </div>

</div>
  )
}
