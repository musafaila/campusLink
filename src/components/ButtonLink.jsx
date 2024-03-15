import Link from "next/link";

export default function ButtonLink({ href, children }) {
  return (
    <Link 
        href={href}
        className="bg-yellow-600 rounded-lg px-8 py-4 font-semibold text-white w-full"
    >
        {children}
    </Link>
  )
}
