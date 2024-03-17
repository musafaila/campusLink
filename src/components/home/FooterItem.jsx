export default function FooterItem({ itemTitle, itemDetails }) {
  return (
    <div className="flex flex-col p-4 gap-4 bg-white text-black rounded-xl">
        <div className="text-xl font-semibold">{itemTitle}</div>
        <div className="">{itemDetails}</div>
    </div>
  )
}
