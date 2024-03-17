export default function PHeader() {
  return (
    <div className="container mx-auto flex items-center justify-between py-5 fixed top-0 z-10 bg-yellow-100">
        <div className="text-yellow-600 text-3xl md:text-4xl font-bold">CampusLink</div>
        <div className="flex gap-10 items-center">
            <p className="font-bold text-3xl">N</p>
            <div className="flex gap-4 items-center">
                <div className="h-12 w-12 rounded-full bg-gray-800"></div>
                <div className="flex flex-col justify-between">
                    <div className="text-xl font-bold">Abduldansani</div>
                    <p>#1234</p>
                </div>
            </div>
        </div>
    </div>
  )
}
