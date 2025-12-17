import Image from "next/image"
import Link from "next/link"


const Navbar = () => {

    const links = [
        {
            id: 1,
            name: "home",
            link: "/home"
        },
        {
            id: 2,
            name: "experience",
            link: "/experience"
        },
        {
            id: 3,
            name: "expertise",
            link: "/expertise"
        },
        {
            id: 4,
            name: "blog",
            link: "/blog"
        },
        {
            id: 5,
            name: "team",
            link: "/team"
        },
        {
            id: 6,
            name: "about",
            link: "/about"
        },
        {
            id: 7,
            name: "contact",
            link: "/contact"
        },
    ]


  return (
    <nav className="flex justify-between items-center flex-wrap px-[50px] py-5 bg-white">
        <Link href={"/"} className="flex items-center gap-5 text-[20px] font-semibold">
            <Image  src={"/logo.png"} width={50} height={50} alt="" />
            <span>Pearlaw Corporate</span>
        </Link>


        <div className="flex justify-center items-center gap-7">
            {
                links.map((link)=>(
                    <Link href={link.link} key={link.id} className="capitalize">{link.name}</Link>
                ))
            }
        </div>


        <button className="bg-[#C84E26] text-white text-[12px] font-semibold rounded-[4px] py-[13px] px-[18px] w-[113px] h-10">
            Get in Touch
        </button>

    </nav>
  )
}

export default Navbar