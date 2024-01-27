'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
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
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {ListOfImages.map((item, index) => (
          <CarouselItem key={index}>
                <div className="flex aspect-square items-center justify-center p-2">
                  <img src={item.src} alt="" className="h-full w-full" />
                </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
