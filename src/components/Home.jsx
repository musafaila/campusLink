import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

export default function Home() {
  return (
    <div 
        className="pb-12 relative w-full"
    >
        <img src="/homeBg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="px-1 md:px-4 relative text-white flex flex-col items-center justify-between h-full gap-8">
            <Header />
            <Hero />
            <Footer />
        </div>
    </div>
  )
}
