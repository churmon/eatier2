import Link from 'next/link'
import MostViewAndRecommended from './MostViewAndRecommended'
import MunchieCarousel from './MunchieCarousel'
import { SecondSectionForm } from './SecondSectionForm'
import Footer from '../Footer'

export default function SecondSection() {
  return (
    <div className="bg-white w-full mt-10 pt-10">
        <div>
            <SecondSectionForm />
            <div className="mt-4 border-2 h-[100px] text-center mx-1">
                Ad Space
            </div>

            <div className="text-black mt-5 ml-8 md:text-2xl font-bold">
                Munchie
            </div>

            <div className="px-5">
                <MunchieCarousel />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-3 mb-3">
                <div className="-skew-x-[20deg] w-[300px] h-[300px] mx-auto ">
                    <MostViewAndRecommended text="Most viewed" />
                </div>
                <div className="w-[300px] h-[300px] mx-auto ">
                    <MostViewAndRecommended text="Trending" />
                </div>
                <div className="-skew-x-[20deg] w-[300px] h-[300px] mx-auto ">
                    <MostViewAndRecommended text="Most Recommented" />
                </div>
            </div>

            <div className="text-center font-bold">
                <Link href="" className=" border-2 px-5 py-1 rounded-lg md:text-2xl font-bold">View more</Link>
            </div>

            <div className="h-[100px] text-center border-2 mt-5">
                Ad Space
            </div>

            <Footer />
        </div>

        
        
    </div>
  )
}
