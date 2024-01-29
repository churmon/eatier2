import { LoginAccount } from "@/components/auth/login";
import { CreateAccount } from "@/components/auth/register";
import Logo from "@/components/logo";
import Link from "next/link";

export default function Login() {
  return (
      <div className="md:flex h-full justify-center items-center">
        <div className="flex flex-col w-full px-10 md:px-0 md:mx-3 md:w-1/2  md:h-screen md:overflow-y-auto">
          <Link href={'/'} className="self-center h-[100px]"><Logo /></Link>
        <LoginAccount />
        </div>
        <div className="hidden md:block md:w-1/2 md:h-screen">
          <img src="/images/image6.jpg" alt="" className="object-cover object-center h-screen w-full" />
        </div>
      </div>
  )
}
