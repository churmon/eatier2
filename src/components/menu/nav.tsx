import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui-copy/carousel-copy"

export default function Nav({id}:any) {
  return (
    <div className="min-w-full border-t-2 mt-3">
          <Carousel
      opts={{
        align: "start",
      }}
      className="min-w-full mt-5">
      <CarouselContent className='min-w-full bg-white text-sm md:text-lg flex items-center justify-between px-3 md:mx-auto font-bold multiple-items'>
          <CarouselItem className="md:basis-1/3 lg:basis-1/6"><Link href={`/breakfast/${id}/menu/starters`} className="border-2 mt-3 px-3 py-1 rounded-lg">Starters</Link> </CarouselItem>
        <CarouselItem className="basis-1/3 md:basis-1/6"><Link href={`/breakfast/${id}/menu/breakfast`} className="border-2 border-y-2 mt-3 px-3 py-1 rounded-lg">Breakfast</Link> </CarouselItem>
        <CarouselItem className="basis-1/3 md:basis-1/6"><Link href={`/breakfast/${id}/menu/lunch`} className="border-2 mt-3 px-3 py-1 rounded-lg">Lunch</Link> </CarouselItem>
        <CarouselItem className="basis-1/3 md:basis-1/6"><Link href={`/breakfast/${id}/menu/drinks`} className="border-2 mt-3 px-3 py-1 rounded-lg">Drinks</Link> </CarouselItem>
        <CarouselItem className="basis-1/3 md:basis-1/6"><Link href={`/breakfast/${id}/menu/kiddies`} className="border-2 mt-3 px-3 py-1 rounded-lg">Kiddies</Link> </CarouselItem>
        <CarouselItem className="basis-1/3 md:basis-1/6"><Link href={`/breakfast/${id}/menu/salads`} className="border-2 mt-3 px-3 py-1 rounded-lg">Salads</Link> </CarouselItem>
    <CarouselItem className="basis-1/3 md:basis-1/6"><Link href={`/breakfast/${id}/menu/vegan`} className="border-2 mt-3 px-3 py-1 rounded-lg">Vegan/plant</Link> </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
          </Carousel>
    </div>
    
  )
}

