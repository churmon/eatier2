import LogoAfrica from "@/components/logo-africa"
import Image from "next/image"
import Link from "next/link"
import { ChefHat } from "lucide-react"
import { MdRestaurant } from "react-icons/md"
import { BsCloudSun } from "react-icons/bs"
import { FaLongArrowAltRight } from "react-icons/fa"
import { ChefCard } from "@/components/card/chef-card"
import Card from "../asia/Card"
import HotelAfrica from "../africa/HotelAfrica"
import FirstSectionCountryCard from "../africa/regions/FirstSectionCountryCard"
import { FirstSectionForm } from "../africa/regions/FirstSectionFormRegion"
import Footer from "../Footer"

type regionType={
    text: any, 
    countries :any,
    cities : any,
    twoCountries? : Boolean,

}

export default function AmericaRegion({text, countries,cities,twoCountries}:regionType) {
  return (
    <div className="bg-white w-full pb-5">
        <div className="relative ">
            <div>
                <Image src="/images/image5.jpg" alt="" width={1000} height={700} loading="lazy" className="w-full  overflow-hidden max-h-[500px] object-cover object-center" />
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
                <div className="font-bold text-xl my-3">{text.text1}</div>
                <div className="hidden sm:block">{text.text2}</div>
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
                {text.text3}
            </div>

            <div className={`grid grid-cols-1 mt-5 ${twoCountries ? 'md:grid-cols-2' : 'md:grid-cols-4'} place-items-center gap-6 mx-5`}>
             
                    {countries.map((country:any,index:any)=>(
                        <FirstSectionCountryCard text={country} key={index} />
                    ))}
            </div>

            <div className="font-bold">
                    <Link href="" className="flex justify-end"><span className="bg-green-500 rounded-lg px-2">More</span> <FaLongArrowAltRight className="h-[30px] w-[30px] text-green-500" /></Link>
            </div>

            <div className="h-[100px] w-full border-2 text-center mt-5">
                Ad Space
            </div>

            <div className=" text-2xl mt-5 text-gray-900">
                {text.text4}
            </div>

            <div className="grid grid-cols-1 mt-5 md:grid-cols-4 place-items-center gap-6 mx-5">
             
                    {cities.map((city:any,index:any)=>(
                        <FirstSectionCountryCard text={city} key={index} />
                    ))}
            </div>

            <div className="font-bold mt-2">
                    <Link href="" className="flex justify-end"><span className="bg-orange-500 rounded-lg px-2">More</span> <FaLongArrowAltRight className="h-[30px] w-[30px] text-orange-500" /></Link>
            </div>

            <div className="text-xl mt-8 ml-2 text-gray-900">Trending</div>

            <div className="grid grid-cols-1 mx-2 md:grid-cols-4 mt-3 gap-5">
                <Card text="Bear Best 1 Av, Brazzaville, Congo" />
                <Card text="Peperoni, Libreville, Gabon" />
                <Card text="Bear Best 1 Av, Yaounde, Cameroon" />
                <Card text="Peperoni, Kinshasa, DR Congo" />
            </div>

            <div className="text-xl mt-8 ml-2 text-gray-900">Most viewed</div>

            <div className="grid grid-cols-1 mx-2 md:grid-cols-4 mt-3 gap-5">
                <Card text="Bear Best 1 Av, Brazzaville, Congo" />
                <Card text="Peperoni, Libreville, Gabon" />
                <Card text="Bear Best 1 Av, Yaounde, Cameroon" />
                <Card text="Peperoni, Kinshasa, DR Congo" />
            </div>

            <div className="text-xl mt-8 ml-2 text-gray-900">Most recommended</div>

            <div className="grid grid-cols-1 mx-2 md:grid-cols-4 mt-3 gap-5">
                <HotelAfrica text="Bear Best 1 Av, Brazzaville, Congo" />
                <HotelAfrica text="Peperoni, Libreville, Gabon" />
                <HotelAfrica text="Bear Best 1 Av, Yaounde, Cameroon" />
                <HotelAfrica text="Peperoni, Kinshasa, DR Congo" />
            </div>

            <div className="text-center mt-5">
                <Link href="" className="text-black px-3 py-1 font-bold border-2">View more</Link>
            </div>

            <div className="text-xl mt-8 ml-2 text-gray-900">{text.text4}</div>

            <div className="grid grid-cols-1 mx-2 md:grid-cols-4 mt-3 gap-5">
                <HotelAfrica text="Bear Best 1 Av, Brazzaville, Congo" />
                <HotelAfrica text="Peperoni, Libreville, Gabon" />
                <HotelAfrica text="Bear Best 1 Av, Yaounde, Cameroon" />
                <HotelAfrica text="Peperoni, Kinshasa, DR Congo" />
            </div>

            <div className="text-xl mt-8 ml-2 text-gray-900">{text.text5}</div>

            <div className="grid grid-cols-1 mx-2 md:grid-cols-4 mt-3 gap-5">
                <HotelAfrica text="Bear Best 1 Av, Brazzaville, Congo" />
                <HotelAfrica text="Peperoni, Libreville, Gabon" />
                <HotelAfrica text="Bear Best 1 Av, Yaounde, Cameroon" />
                <HotelAfrica text="Peperoni, Kinshasa, DR Congo" />
            </div>

            <div className="text-xl mt-8 ml-2 text-gray-900">{text.text6}</div>

            <div className="grid grid-cols-1 mx-2 md:grid-cols-4 mt-[50px] gap-5">
                <ChefCard  />
                <ChefCard  />
                <ChefCard  />
                <ChefCard  />
            </div>

            <div className="text-xl mt-8 ml-2 text-gray-900">{text.text7}</div>

            <div className="grid grid-cols-1 mx-2 md:grid-cols-4 mt-3 gap-5">
                <HotelAfrica text="Bear Best 1 Av, Brazzaville, Congo" />
                <HotelAfrica text="Peperoni, Libreville, Gabon" />
                <HotelAfrica text="Bear Best 1 Av, Yaounde, Cameroon" />
                <HotelAfrica text="Peperoni, Kinshasa, DR Congo" />
            </div>

            
        </div>
        <Footer />
    </div>
  )
}

