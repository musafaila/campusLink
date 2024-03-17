import { menuItems } from "@/lib/resources"
import Link from "next/link"

export default function PSideMenu() {
  return (
    <div className="h-full flex flex-col gap-4 w-fit mr-10">
      {menuItems.map((menuItem, i) => (
        <Link key={i} href="/" className="py-4 px-10 font-bold hover:bg-yellow-600 rounded-xl">{menuItem}</Link>
      ))}
    </div>
  )
}
