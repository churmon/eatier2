import EachBreakfast from '@/components/breakfast/each-breakfast'
import ProfileNavbar from '@/components/navbar/profile-navbar'
import { IoWifiOutline, IoMan, IoWomanSharp, IoFastFoodOutline } from "react-icons/io5";
import { LuCigarette, LuCigaretteOff } from "react-icons/lu";
import { BsShop } from "react-icons/bs";
import { MdAccessTime, MdOutlinePets, MdOutlineBabyChangingStation, MdPool } from "react-icons/md";
import { FaChessKnight, FaCar } from "react-icons/fa";
import { GiCardAceHearts } from "react-icons/gi";
import { ImCreditCard } from "react-icons/im";
import { IoIosPhonePortrait } from "react-icons/io";
import { PiGuitar } from "react-icons/pi";
import { LiaDrumSolid } from "react-icons/lia";
import { CiParking1 } from "react-icons/ci";
import { RiMotorbikeFill } from "react-icons/ri";
import { PiWindThin } from "react-icons/pi";
import { TbDisabled } from "react-icons/tb";
import { FaTaxi } from "react-icons/fa6";
export default function InfosPage({params}:{params:{id:string}}) {
  return (
    <div>
      {/* <EachBreakfast /> 
      <ProfileNavbar id={params.id} /> */}
      <div className="grid grid-cols-2 md:grid-cols-5 place-items-center mt-6">
          <div>
              <IoWifiOutline className="h-[80px] w-[80px]" />
          </div>

          <div className="relative">
            <div>
              <BsShop className="h-[80px] w-[80px]" />
            </div>
            <div>
              <MdAccessTime className="absolute top-[48px] -left-3 h-[55px] w-[55px]" />
            </div>
          </div>
          
          <div className="flex items-center space-x-1 justify-center">
              <div className="flex flex-col items-center justify-center">
                  <div className=" border p-5 rounded-full">
                    <LuCigaretteOff className="h-[40px] w-[40px]"  />
                  </div>
                    <p>NO</p>
                    <p>SMOKING</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <div className=" border p-5 rounded-full">
                    <LuCigarette className="h-[40px] w-[40px]"  />
                  </div>
                  <p>SMOKING</p>
                  <p>AREA</p>
              </div>
          </div>

          <div className="relative">
            <div>
              <IoIosPhonePortrait className="h-[90px] w-[90px]" />
            </div>
            <div>
              <ImCreditCard className="absolute top-[20px] right-1 h-[40px] w-[40px]" />
            </div>
          </div>

          <div>
            <div className="flex">
              <div><IoMan className="h-[50px] w-[50px]"/></div>
              <div><IoWomanSharp className="h-[50px] w-[50px]"/></div>
            </div>
            <div className="flex">
              <div><MdOutlineBabyChangingStation className="h-[50px] w-[50px]"/></div>
              <div><TbDisabled className="h-[50px] w-[50px]"/></div>
            </div>
          </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 place-items-center mt-6">
          <div>
              <IoFastFoodOutline className="h-[80px] w-[80px]" />
          </div>

          <div className="relative">
            <div>
              <FaChessKnight className="h-[80px] w-[80px]" />
            </div>
            <div>
              <GiCardAceHearts className="absolute -top-[30px] -right-10 h-[100px] w-[80px]" />
            </div>
          </div>

          <div className="">
            <div>
              <MdPool className="h-[90px] w-[90px]" />
            </div>
          </div>

          <div>
            <div className="">
              <div><FaTaxi className="h-[50px] w-[50px]"/></div>
            </div>
          </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 place-items-center mt-6">
          <div className="flex flex-col items-center">
              <div>
                <CiParking1 className="h-[40px] w-[40px]" />
              </div>
              <div className="flex">
                  <div>
                     <FaCar className="h-[80px] w-[80px]" />
                  </div>
                   <div>
                    <RiMotorbikeFill className="h-[80px] w-[80px]" />
                  </div>
              </div>
          </div>

          <div className="flex">
            <div>
              <LiaDrumSolid className="h-[80px] w-[80px]" />
            </div>
            <div>
              <PiGuitar className="h-[100px] w-[80px]" />
            </div>
          </div>

          <div className="">
            <div>
              <MdOutlinePets className="h-[90px] w-[90px]" />
            </div>
          </div>

          <div>
            <div className="">
              <div><PiWindThin className="h-[80px] w-[120px]"/></div>
            </div>
          </div>
      </div>

    </div>
  )
}
