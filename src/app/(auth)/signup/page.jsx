import ButtonLink from "@/components/ButtonLink";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="min-h-screen bg-yellow-50 w-full grid grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-20 w-full">
          <div className="text-7xl font-bold text-yellow-600">
            CampusLink
          </div>
          <div className="flex flex-col gap-2 items-center w-[70%]">
            <p className="text-xl font-semibold">Sign up as</p>
            <ButtonLink
              href="/signup/passenger"
            >
              As a Rassenger
            </ButtonLink>
            
            <ButtonLink
              href="/signup/passenger"
            >
              As a Rassenger
            </ButtonLink>
          </div>
        </div>
        <div className="bg-yellow-700 flex flex-col justify-center text-white gap-20 p-20">
          <div className="text-5xl tex-white font-bold">
            Welcome to CampusLink
          </div>
          <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur expedita distinctio modi, a aperiam dolor esse iusto nesciunt voluptatum veniam, est odio. Perspiciatis, eligendi eum dolorem eos optio natus aspernatur!</p>
          <Link href="/login" className="underline">Already have an account? Login here</Link>
        </div>
    </div>
  )
}
