import LogoAfrica from "@/components/logo-africa"
import Image from "next/image"
import Link from "next/link"
import { FirstSectionForm } from "./FirstSectionFormRegion"
import { ChefHat } from "lucide-react"
import { MdRestaurant } from "react-icons/md"
import { BsCloudSun } from "react-icons/bs"
import FirstSectionCountryCard from "./FirstSectionCountryCard"
import { FaLongArrowAltRight } from "react-icons/fa"
import HotelAfrica from "../HotelAfrica"
import { ChefCard } from "@/components/card/chef-card"

type textProps = {
    text1:string,
    text2:string,
    text1Size?:any,
    text2Size?:any,
}
    export default function NorthenAfricaSection({text1,text2,text1Size,text2Size}:textProps) {
  return (
    <div className="bg-white w-full pb-5">
        <div className="relative ">
            <div>
                <Image src="/images/image5.jpg" alt="" width={1000} height={700} loading="lazy" className="w-full rounded-b-[80px] overflow-hidden max-h-[500px] object-cover object-center" />
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
                <div className="font-bold text-xl my-3">{text1}</div>
                <div className="hidden sm:block">{text2}</div>
            </div>

            <div className="relative text-gray-500 mb-3 -mt-[75px] md:-mt-14 md:rounded-l-full overflow-hidden rounded-[35px] md:rounded-r-full pb-2 bg-gray-100 mx-5 md:mx-16 shadow-md">
                <div className="px-3">
                    <FirstSectionForm />
                    <h1 className="text-center mb-3">Recent searches</h1>
                </div>   
            </div>

            <div className="flex justify-around md:justify-center md:space-x-60">
                <MdRestaurant className="md:h-[80px] md:w-[80px] h-[30px] w-[40px]" />
                <BsCloudSun  className="md:h-[80px] md:w-[80px] h-[30px] w-[40px]"/>
                <ChefHat className="md:h-[80px] md:w-[80px] h-[30px] w-[40px]" />
            </div>

            <div className="text-center mt-9 text-2xl">
                Explore new dishes.
            </div>

            <div className="grid grid-cols-1 mt-5 md:grid-cols-4 place-items-center gap-6 mx-5">
                <div>
                    <FirstSectionCountryCard text="Tunisia" />
                </div>
                <div>
                    <FirstSectionCountryCard text="Morocco" />
                </div>
                <div>
                    <FirstSectionCountryCard text="Libya" />
                </div>
                <div>
                    <FirstSectionCountryCard text="Algerria" />
                </div>
            </div>

            <div className="font-bold">
                    <Link href="" className="flex justify-end"><span className="bg-green-500 rounded-lg px-2">More</span> <FaLongArrowAltRight className="h-[30px] w-[30px] text-green-500" /></Link>
            </div>

            <div className="h-[100px] w-full border-2 text-center mt-5">
                Ad Space
            </div>

            <div className=" text-2xl mt-5 text-gray-900">
                Spoil yourself in these places.
            </div>

            <div className="grid grid-cols-1 mt-5 md:grid-cols-4 place-items-center gap-6 mx-5">
                <div>
                    <FirstSectionCountryCard text="Cairo" />
                </div>
                <div>
                    <FirstSectionCountryCard text="Tunis" />
                </div>
                <div>
                    <FirstSectionCountryCard text="Marrakech" />
                </div>
                <div>
                    <FirstSectionCountryCard text="Khartoum" />
                </div>
            </div>

            <div className="font-bold mt-2">
                    <Link href="" className="flex justify-end"><span className="bg-orange-500 rounded-lg px-2">More</span> <FaLongArrowAltRight className="h-[30px] w-[30px] text-orange-500" /></Link>
            </div>

            <div className="text-xl mt-8 ml-2 text-gray-500">Trending</div>

            <div className="grid grid-cols-1 mx-2 md:grid-cols-4 mt-3 gap-5">
                <HotelAfrica text="Bear Best 1 Av, Tunis, Tunisia" />
                <HotelAfrica text="Peperoni, Marrakech, Morocco" />
                <HotelAfrica text="Bear Best 1 Av, Marrakech, Morocco" />
                <HotelAfrica text="Peperoni, unis, Tunisia" />
            </div>

            <div className="text-xl mt-8 ml-2 text-gray-900">Most viewed</div>

            <div className="grid grid-cols-1 mx-2 md:grid-cols-4 mt-3 gap-5">
                <HotelAfrica text="Bear Best 1 Av, Tunis, Tunisia" />
                <HotelAfrica text="Peperoni, Marrakech, Morocco" />
                <HotelAfrica text="Bear Best 1 Av, Marrakech, Morocco" />
                <HotelAfrica text="Peperoni, unis, Tunisia" />
            </div>

            <div className="text-xl mt-8 ml-2 text-gray-900">Most recommended</div>

            <div className="grid grid-cols-1 mx-2 md:grid-cols-4 mt-3 gap-5">
                <HotelAfrica text="Bear Best 1 Av, Tunis, Tunisia" />
                <HotelAfrica text="Peperoni, Marrakech, Morocco" />
                <HotelAfrica text="Bear Best 1 Av, Marrakech, Morocco" />
                <HotelAfrica text="Peperoni, unis, Tunisia" />
            </div>

            <div className="text-center mt-5">
                <Link href="" className="text-black px-3 py-1 font-bold border-2">View more</Link>
            </div>

            <div className="text-xl mt-8 ml-2 text-gray-900">Have it your way</div>

            <div className="grid grid-cols-1 mx-2 md:grid-cols-4 mt-3 gap-5">
                <HotelAfrica text="Bear Best 1 Av, Tunis, Tunisia" />
                <HotelAfrica text="Peperoni, Marrakech, Morocco" />
                <HotelAfrica text="Bear Best 1 Av, Marrakech, Morocco" />
                <HotelAfrica text="Peperoni, unis, Tunisia" />
            </div>

            <div className="text-xl mt-8 ml-2 text-gray-900">Tailored by exceptiona chefs.</div>

            <div className="grid grid-cols-1 mx-2 md:grid-cols-4 mt-10 gap-5">
                <ChefCard  />
                <ChefCard  />
                <ChefCard  />
                <ChefCard  />
            </div>

            <div className="text-xl mt-8 ml-2 text-gray-900">Suggested based on your location.</div>

            <div className="grid grid-cols-1 mx-2 md:grid-cols-4 mt-3 gap-5">
                <HotelAfrica text="Bear Best 1 Av, Tunis, Tunisia" />
                <HotelAfrica text="Peperoni, Marrakech, Morocco" />
                <HotelAfrica text="Bear Best 1 Av, Marrakech, Morocco" />
                <HotelAfrica text="Peperoni, unis, Tunisia" />
            </div>

            
        </div>
        
    </div>
  )
}

