"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks=[
    {
        href:"/",
        label:"Home",
    },
    {
        href:"/posts",
        label:"Posts",
    },
    {
        href:"/create-post",
        label:"Create Post",
    },

]
export default function Header() {
    const pathname=usePathname();
  return (
    <header className="w-full px-7 py-4 border-b-2 flex justify-between items-center">
        <Link href="/">
            <div className="flex gap-2">
                    <Image className="block" alt="logo-pic" src="/Y-logo.jpg" height={45} width={45}  />
                <h1 className="text-3xl my-auto font-semibold ">YONAS</h1>
            </div>
        </Link>
        <nav>
            <ul className="flex gap-x-5">
                {navLinks.map(link=>(
                <li key={link.href}>
                    <Link href={link.href} className={`${pathname===link.href?"text-zinc-900":"text-zinc-500"}`}>
                        {link.label}
                    </Link>
                </li>)
                )
                }
            </ul>
        </nav>
    </header>
  )
}
