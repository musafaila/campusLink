import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
    <div 
        className="relative w-full pb-20"
    >
        <img src="/homeBg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="px-1 md:px-4 relative text-white flex flex-col justify-between h-full gap-20 text-center">
            <Header />
            <Hero />
        </div>
    </div>
    <Footer />
    </>
  )
}
