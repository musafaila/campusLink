import PHeader from "@/components/pdashboard/PHeader";
import PSideMenu from "@/components/pdashboard/PSideMenu";

export default function PLayout({ children }) {
    return (
        <div className="w-full bg-yellow-100">
            <div className="container mx-auto flex flex-col min-h-lvh">
            <PHeader />
            <div className="flex flex-1">
                <div className="fixed top-24">
                    <PSideMenu />
                </div>
                <div className="flex-1 ml-[20%] mt-24">
                    {children}
                </div>
            </div>
            </div>
        </div>
    );
  }