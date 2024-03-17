export default function PMain() {
  return (
    <div className="bg-white h-full rounded-md p-4">
      <div className="rounded-xl flex justify-between bg-red-500 p-6">
        <div className="flex flex-col gap-4">
          <p className="text-gray-700">Wallet Balance</p>
          <div className="font-bold text-xl">
            N5000
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-gray-700">Spent this month</p>
          <div className="font-bold text-xl">
            N5000
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-gray-700">Total travels</p>
          <div className="font-bold text-xl">
            12
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-10">
        <div className="shadow-xl w-1/2 p-10">
          <div className="text-3xl font-bold">
            Individual Order
          </div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem accusantium ducimus amet repudiandae laudantium consequatur ipsam ullam quo porro illum incidunt, error animi excepturi iste nostrum est molestias blanditiis praesentium!
        </div>
        <div className="shadow-xl w-1/2 p-10">
          <div className="text-3xl font-bold">
            Group Order
          </div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem accusantium ducimus amet repudiandae laudantium consequatur ipsam ullam quo porro illum incidunt, error animi excepturi iste nostrum est molestias blanditiis praesentium!
        </div>
      </div>
    </div>
  )
}
