import Image from "next/image"
import Link from "next/link"
import LogoAfrica from "../logo-africa"
import { FirstSectionForm } from "./FirstSectionForm"
import HotelAfrica from "./HotelAfrica"
import ContinentCarousel from "../ContinentCarousel"

export default function FirstSection() {

    const navItems = [
        { href: 'africa/northern-africa', text:'Northern Africa' },
        { href: 'africa/southern-africa', text:'Southern Africa' },
        { href: 'africa/shop-africa', text:'Shop Africa',icon:true },
        { href: 'africa/western-africa', text:'Western Africa' },
        { href: 'africa/eastern-africa', text:'Eastern Africa' },
        { href: 'africa/central-africa', text:'Central Africa' },
        
        
      ];
  return (
    <div className="bg-white w-full pb-5">
        <div className="relative ">
            <div>
                <Image src="/images/image5.jpg" alt="" width={1000} height={700} loading="lazy" className="w-full overflow-hidden max-h-[500px] object-cover object-center" />
            </div>

            <div className=" absolute z-10 top-2">
                <div className="bg-white ml-2">
                    <Link href="/"><LogoAfrica /></Link>
                </div>
            </div>

            <div className="absolute z-10 top-2 right-2">
                <div className="flex flex-col gap-2 sm:flex-row sm:mr-2 font-bold">
                    <Link href="" className="bg-white px-4 py-1 rounded-lg">Help</Link>
                    <Link href="/register" className="bg-white px-4 py-1 rounded-lg">Sign up</Link>
                    <Link href="/login" className="bg-white px-4 py-1 rounded-lg">Sign in</Link>
                </div>
            </div>

            <div className="text-white absolute top-20 sm:top-28 left-3 z-10">
                <div className="font-bold text-xl md:text-4xl my-3">Africa | Explore hospitality</div>
                <div className="hidden sm:block font-bold text-xl">Indulge yourself with African cuisine that transcends from traditional dishes dating back to past good times to modern times.</div>
                <div className="font-bold text-xl mt-1">Come, dine in Africa.</div>
            </div>

            <div className="relative text-gray-500 mb-3 -mt-14 rounded-tl-3xl overflow-hidden rounded-br-xl pb-2 bg-gray-100 mx-2 sm:mx-8 shadow-md">
                <div className="">
                    <FirstSectionForm color='text-red-500' />
                    <h1 className="text-center mb-3">Recent searches</h1>
                </div>   
            </div>

            <div className="">
                <div className="mt-5 mx-1 sm:mx-10 border-b-2 mb-1 text-gray-500">
                    <ContinentCarousel navItems={navItems}/>
                </div>
                <div className="text-gray-500 md:text-3xl font-bold  ml-10 mt-7">
                     Escaping to Africa soon? Here are some suggested places to help you get started.
                </div>
                <div>
                    <div className="text-gray-900 ml-10 mt-7 md:text-2xl font-bold">Promoted</div>
                    <div className="grid grid-cols-1 mx-5 md:grid-cols-3 mt-4 md:mx-20 gap-5">
                        <HotelAfrica text="Peperoni, Dakar, Senegal, W.A" />
                        <HotelAfrica text="Peperoni, Dakar, Senegal, W.A" />
                        <HotelAfrica text="Peperoni, Dakar, Senegal, W.A" />
                    </div>
                </div>
            </div>

            <h1 className="ml-5 mb-5 mt-5 text-gray-900 md:text-2xl font-bold">Hey, friend. Where and what are we having today?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-3">
                <div className="w-full max-h-[500px] relative">
                    <img src="/images/image4.jpg" alt=""   className="w-full overflow-hidden h-full  object-cover object-center" />
                    <div className="absolute top-2 left-1 font-bold bg-white py-1 px-2">
                        Algeria North Africa
                    </div>
                </div>
                <div className="flex flex-col space-y-2 justify-stretch items-stretch  max-h-[500px] w-full overflow-hidden">
                    <div className="h-full relative">
                        <img src="/images/image1.jpg" alt=""  className="w-full overflow-hidden h-[125px]  object-cover object-center transform skew-x-12 origin-left" />
                        <div className="absolute top-2 left-1 font-bold bg-white py-1 px-2">
                        Cape Verde West Africa
                    </div>
                    </div>
                    <div className="h-full relative">
                        <img src="/images/image2.jpg" alt=""  className="w-full overflow-hidden h-[125px] object-cover object-center" />
                        <div className="absolute top-2 left-1 font-bold bg-white py-1 px-2">
                        South Africa Southern Africa
                    </div>
                    </div>
                    <div className="h-full relative">
                        <img src="/images/image3.jpg" alt=""  className="w-full overflow-hidden h-[125px] object-cover object-center" />
                        <div className="absolute top-2 left-1 font-bold bg-white py-1 px-2">
                        Tanzania West Africa
                    </div>
                    </div>
                    <div className="h-full relative">
                        <img src="/images/image6.jpg" alt=""  className="w-full overflow-hidden h-[125px] object-cover object-center" />
                        <div className="absolute top-2 left-1 font-bold bg-white py-1 px-2">
                        Rwanda Central Africa
                    </div>
                    </div>
                </div>
                
            </div>

        </div>
        
    </div>
  )
}
