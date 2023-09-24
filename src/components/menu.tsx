"use client"

import Link from "next/link"
import { useState } from "react"

import { FaBars } from "react-icons/fa"

const Menu = () => {
	const [menuActive, setMenuActive] = useState<boolean>(true)

	const buttonMenuClick = () => {
		setMenuActive(!menuActive)
	}

	return (
		<>
			<button className="xl:hidden" onClick={buttonMenuClick}>
				<FaBars size={25} />
			</button>
			<ul
				className={`${menuActive ? "h-0" : "h-[120px]"}
                bg-white/80 fixed w-full right-0 top-[50px] z-10 transition-all overflow-hidden xl:relative xl:h-[unset] xl:w-[unset] xl:top-[unset]`}
			>
				<li className="xl:inline-block">
					<Link
						href={"/#beranda"}
						className="block border-b h-[40px] leading-[40px] px-[24px] text-center cursor-pointer hover:text-teal-600 xl:border-none"
					>
						Beranda
					</Link>
				</li>
				<li className="xl:inline-block">
					<Link
						href={"/#tentang"}
						className="block border-b h-[40px] leading-[40px] px-[24px] text-center cursor-pointer hover:text-teal-600 xl:border-none"
					>
						Tentang Saya
					</Link>
				</li>
				<li className="xl:inline-block">
					<Link
						href={"/#projects"}
						className="block border-b h-[40px] leading-[40px] px-[24px] text-center cursor-pointer hover:text-teal-600 xl:border-none"
					>
						Projects
					</Link>
				</li>
			</ul>
		</>
	)
}

export default Menu
