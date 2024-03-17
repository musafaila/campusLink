import ButtonLink from "@/components/ButtonLink";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="min-h-screen bg-yellow-50 w-full grid lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-16 w-full my-20 lg:my-0">
          <div className="text-5xl md:text-6xl font-bold text-yellow-600">
              CampusLink
          </div>
          <div className="flex flex-col gap-2 items-center w-[85%] md:w-[70%]">
            <p className="text-xl font-semibold">Sign up as</p>
            <ButtonLink
              href="/signup/passenger"
            >
              As a Passenger
            </ButtonLink>
            
            <ButtonLink
              href="/signup/driver"
            >
              As a Driver
            </ButtonLink>
          </div>
        </div>
        <div className="relative">
          <img src="/homeBg.jpg" alt="" className="absolute h-full w-full object-cover inset-0" />
          <div className="absolute bg-gray-900 bg-opacity-75 inset-0"></div>
          <div className="flex flex-col justify-center h-full text-white gap-20 p-10 relative">
            <div className="text-5xl tex-white font-bold">
              Welcome to CampusLink
            </div>
            <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur expedita distinctio modi, a aperiam dolor esse iusto nesciunt voluptatum veniam, est odio. Perspiciatis, eligendi eum dolorem eos optio natus aspernatur!</p>
            <Link href="/login" className="underline">Already have an account? Login here</Link>
          </div>
        </div>
    </div>
  )
}
