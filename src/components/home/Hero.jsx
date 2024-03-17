import Link from "next/link";

export default function Hero() {
  return (
    <div className="container mx-auto flex flex-col gap-10 justify-center">
      <div className="text-4xl md:text-6xl uppercase">
        Change the way you move around campuses
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deleniti recusandae ea voluptates facilis saepe accusantium error tempore blanditiis facere a distinctio voluptatibus pariatur veniam dolor eaque, ducimus earum consectetur?</p>
      <Link href="/signup" className="bg-yellow-600 py-3 px-12 md:py-6 md:px-20 font-medium text-xl w-fit rounded-lg mx-auto">Signup</Link>
    </div>
  )
}
