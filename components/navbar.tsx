"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Icon } from "@iconify/react"

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const links = [
        { id: 1, name: "home", link: "/home" },
        { id: 2, name: "experience", link: "/experience" },
        { id: 3, name: "expertise", link: "/expertise" },
        { id: 4, name: "blog", link: "/blog" },
        { id: 5, name: "team", link: "/team" },
        { id: 6, name: "about", link: "/about" },
        { id: 7, name: "contact", link: "/contact" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full flex justify-between items-center px-5 md:px-[50px] py-5 bg-white shadow-md">

            <Link href="/" className="flex items-center gap-3">
                <Image src="/assets/logo.png" width={45} height={45} alt="logo" />
                <span className="hidden md:block font-semibold text-[20px]">
                    Pearlaw Corporate
                </span>
            </Link>

            <div className="hidden md:flex gap-7">
                {links.map(link => (
                    <Link key={link.id} href={link.link} className="capitalize">
                        {link.name}
                    </Link>
                ))}
            </div>


            <div className="flex items-center gap-4">


                <button className="bg-[#C84E26] text-white text-[12px] font-semibold rounded-[4px] py-[10px] px-[14px]">
                    Get in Touch
                </button>


                <div
                    className="md:hidden text-3xl cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <Icon icon="ion:close-outline"  />
                    ) : (
                        <Icon icon="ion:menu-outline"  />
                    )}
                </div>
            </div>


            {open && (
                <div className="absolute top-[75px] left-0 w-full bg-white py-5 shadow-lg flex flex-col items-center gap-6 md:hidden">
                    {links.map(link => (
                        <Link
                            key={link.id}
                            href={link.link}
                            className="capitalize text-[16px]"
                            onClick={() => setOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}

        </nav>
    )
}

export default Navbar
