import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between container py-6 px-2 md:px-12 mx-auto bg-yellow-700 mt-2 md:mt-6 rounded-lg">
      <div className="text-white text-3xl md:text-4xl font-bold">CampusLink</div>
      <nav className="h-full flex items-center gap-8 md:gap-20">
        <Link href="/login" className="font-bold text-lg md:text-xl hover:underline" >Login</Link>
        <Link href="/signup" className="font-bold text-lg md:text-xl hover:underline" >Signup</Link>
      </nav>
    </header>
  )
}
