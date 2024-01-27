'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"

export function BreakFastCard({item, url}:any) {
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
      className="w-full relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {ListOfImages.map((item, index) => (
          <CarouselItem key={index}>
                <div className="flex aspect-square items-center justify-center w-full">
                  <img src={item.src} alt="" className="h-full w-full" />
                </div>
          </CarouselItem>
        ))}
        
      </CarouselContent>
      <Link href={url} className="absolute p-2 bg-black/35 text-3xl w-full font-bold text-white top-3">{item}</Link>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
