import Image from "next/image"
import Link from "next/link"
import LogoAfrica from "../logo-africa"
import { ChevronRight } from "lucide-react"
import { FirstSectionForm } from "../africa/FirstSectionForm"
import HotelAfrica from "../africa/HotelAfrica"
import ContinentCarousel from "../ContinentCarousel"
import FirstSectionCountryCard from "../africa/regions/FirstSectionCountryCard"


export default function FirstSection() {

    const navItems:any = [
        { href: 'europe/northern-europe', text:'Northern Europe' },
        { href: 'europe/central-europe', text:'Central Europe' },
        { href: 'europe/southern-europe', text:'Southern Europe' },
        { href: 'europe/shop-europe', text:'Shop Europe',icon:true },
        { href: 'europe/western-europe', text:'Western Europe' },
        { href: 'europe/eastern-europe', text:'Eastern Europe' },
        
        
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
                <div className="flex font-bold text-xl my-3">Europe <span className="flex"><ChevronRight className=" w-8 h-8"/><ChevronRight className="-ml-6 w-8 h-8"/></span> Simply satisfying</div>
                <div className="hidden sm:block">A home away from home.</div>
            </div>

            <div className="relative text-gray-500 mb-3 -mt-14 rounded-tl-3xl overflow-hidden rounded-br-xl pb-2 bg-gray-100 mx-2 sm:mx-8 shadow-md">
                <div className="">
                    <FirstSectionForm />
                    <h1 className="text-center mb-3">Recent searches</h1>
                </div>   
            </div>

            <div className="">
                <div className="mt-5 mx-1 sm:mx-10 text-gray-500">
                    <ContinentCarousel navItems={navItems}/>
                </div>
                <div className="md:ml-12 -mt-6 text-gray-500">Scrumptious continental Europe.</div>
                <div>
                    <div className="text-gray-900 ml-10 mt-7 font-bold">Promoted</div>
                    <div className="grid grid-cols-1 mx-5 md:grid-cols-3 mt-4 md:mx-20 gap-5">
                        <HotelAfrica text="Peperoni, Dakar, Senegal, W.A" />
                        <HotelAfrica text="Peperoni, Dakar, Senegal, W.A" />
                        <HotelAfrica text="Peperoni, Dakar, Senegal, W.A" />
                    </div>
                </div>
            </div>

            <h1 className="ml-5 mb-5 mt-5 text-gray-900 font-bold">Simply satisfying. Bring the vibes along.</h1>
            
            <div className="grid grid-cols-1 mt-5 md:grid-cols-4 place-items-center gap-6 mx-5">
                <div>
                    <FirstSectionCountryCard text="Italy • Southern Europe" />
                </div>
                <div>
                    <FirstSectionCountryCard text="Norway • Northern Europe" />
                </div>
                <div>
                    <FirstSectionCountryCard text="Moldova • Eastern Europe" />
                </div>
                <div>
                    <FirstSectionCountryCard text="Germany • Western Europe" />
                </div>
            </div>

        </div>
        
    </div>
  )
}
