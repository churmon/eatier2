import EachBreakfast from "@/components/breakfast/each-breakfast";
import { CiShare2 } from "react-icons/ci";
import { SlEye } from "react-icons/sl";
import { RiMessage2Line } from "react-icons/ri";
import ProfileNavbar from "@/components/navbar/profile-navbar";
import Image from "next/image";
export default function ProfileEachBreakfast({params}:{params:{id:string}}) {
  return (
    <div>
        {/* <EachBreakfast /> 
        <ProfileNavbar id={params.id} />
        <div className="mx-2 mt-3 mb-1">
          <div>
            <div className="flex mb-4">
              <div>jan 6, 2023 9:00PM</div>
              <div className="flex">
                <div className="ml-1 font-bold">Cape Town,</div>
                <div className="ml-1 font-bold">South Africa</div>
              </div>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit illo laborum fugiat ut dicta molestiae, vero mollitia deleniti rerum, voluptatem repudiandae doloribus, praesentium accusantium. Nostrum numquam architecto facere omnis beatae?</div>
            <Image src="/images/image8.jpg" width={300} height={300} alt="" className="w-full h-[400px] object-cover object-center" />
            <div className="flex justify-between">
              <div className="flex">
                <RiMessage2Line className="h-[40px] w-[40px]" />
                <div className="flex flex-col ml-9 justify-center items-center">
                    <SlEye className="h-[25px] w-[25px]"/>
                    <p>1000</p>
                </div>
              </div>
                <CiShare2 className="h-[40px] w-[40px]"/>
            </div>
          </div>
      </div> */}

      <div className="mx-2 mt-3 mb-1">
          <div>
            <div className="flex mb-4">
              <div>jan 6, 2023 9:00PM</div>
              <div className="flex">
                <div className="ml-1 font-bold">Cape Town,</div>
                <div className="ml-1 font-bold">South Africa</div>
              </div>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit illo laborum fugiat ut dicta molestiae, vero mollitia deleniti rerum, voluptatem repudiandae doloribus, praesentium accusantium. Nostrum numquam architecto facere omnis beatae?</div>
            <Image src="/images/image8.jpg" width={300} height={300} alt="" className="w-full h-[400px] object-cover object-center" />
            <div className="flex justify-between">
              <div className="flex">
                <RiMessage2Line className="h-[40px] w-[40px]" />
                <div className="flex flex-col ml-9 justify-center items-center">
                    <SlEye className="h-[25px] w-[25px]"/>
                    <p>1000</p>
                </div>
              </div>
                <CiShare2 className="h-[40px] w-[40px]"/>
            </div>
          </div>
      </div>
    </div>
  )
}
