import Link from "next/link";

export default function CustomLink({ href, name, isActive = false }) {
  const className = "group flex items-center px-2 py-2 text-base font-medium rounded-md " + (isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white");
  return (
    <Link href={href}>
      <a className={className}>
        {name}
      </a>
    </Link>
  )
}