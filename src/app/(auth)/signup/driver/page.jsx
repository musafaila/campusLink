import DriverSignup from "@/components/auth/DriverSignup";

export default function page() {
  return (
    <div className="min-h-screen w-full relative">
        <img src="/homeBg.jpg" alt="" className="absolute h-full w-full object-cover inset-0" />
        <div className="absolute bg-gray-900 bg-opacity-75 inset-0"></div>
        <DriverSignup />
    </div>
  )
}
