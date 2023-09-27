import Image from "next/image"
import Link from "next/link"

import Menu from "@/components/menu"

import {
	FaAt,
	FaLinkedin,
	FaWhatsapp,
	FaInstagram,
	FaYoutube,
	FaGithub,
	FaFacebookSquare,
	FaTiktok,
} from "react-icons/fa"

export default async function Home() {
	const skills = [
		"HTML",
		"CSS",
		"JavaScript",
		"TypeScript",
		"Node.Js",
		"Express.Js",
		"React.Js",
		"Next.Js",
		"Tailwindcss",
		"Git",
		"Github",
		"Docker",
		"VPS",
		"Ubuntu Server",
		"Nginx",
		"Figma",
		"Mysql",
		"PostgreSql",
		"Prisma",
	]
	const projects = [
		{
			image: "screenshot-jualkamera.jpg",
			title: "Website Jualkamera.com",
			description:
				"Website katalog untuk toko Kamea Mbantul dengan fitur POS (Point of Sale) sehingga stock selalu update karena semua transaksi tercatat di halaman kasir",
			link: "https://www.jualkamera.com",
		},
	]
	const workExperiences = [
		{
			position: "Web Programmer",
			company: "PT Fresh Galang Mandiri",
			date: "Agustus 2022 - Maret 2023",
		},
		{
			position: "IT Support & Programmer",
			company: "Toko Kamera Mbantul",
			date: "Juni 2017 - Juli 2022",
		},
	]

	return (
		<>
			<header className="h-[50px] w-full px-[20px] bg-white/80 border-b flex justify-between items-center fixed top-0 z-50">
				<h1 className="font-bold">AAAN REFARWAN</h1>
				<Menu />
			</header>
			<div
				id="beranda"
				className="p-[20px] mt-[50px] flex flex-col items-center gap-[30px] sm:p-[30px] sm:flex-row-reverse xl:w-[1200px] xl:mx-auto xl:px-[130px] xl:gap-[80px]"
			>
				<div className="flex flex-col gap-[10px] items-center sm:items-start sm:gap-[30px] xl:py-[80px] xl:gap-0">
					<div className="font-semibold text-teal-600">
						Hai Gaeeeeessss, saya
					</div>
					<div className="font-bold text-[35px]">Aan Refarwan</div>
					<div className="font-medium text-teal-600">
						Fullstack JavaScript Developer
					</div>
					<p className="text-zinc-400 text-center font-normal sm:text-left">
						saya membuat website dan web aplications dari sisi frontend maupun
						backend dengan sepenuh hati
					</p>
					<Link
						href={"/#projects"}
						className="bg-teal-600 text-white h-[40px] leading-[40px] text-center w-[150px] rounded-[6px] mt-[20px] xl:mt-[30px]"
					>
						Projects
					</Link>
				</div>
				<Image
					src={"/foto-profil.png"}
					width={450}
					height={450}
					alt="Foto Aan Refarwan"
					className="w-[250px] h-[250px] xl:w-[450px] xl:h-[450px]"
				/>
			</div>
			<div id="tentang" className="bg-teal-50 mt-[50px] p-[20px]">
				<div className="flex flex-col gap-[40px] xl:w-[1200px] xl:grid xl:grid-cols-2 xl:mx-auto">
					<div className="flex flex-col items-center gap-[10px] xl:w-full xl:col-span-2">
						<h2 className="text-teal-600 text-[20px] font-bold">
							Tentang Saya
						</h2>
						<p className="text-[12px] font-normal text-center xl:w-[471px]">
							Saya lulusan SMK N 1 Bantul jurusan Rekayasa Perangkat Lunak
							(RPL). Setelah saya lulus saya memutuskan untuk belajar Web
							Programming secara otodidak
						</p>
					</div>

					<div className="flex flex-col gap-[20px]">
						<h2 className="text-teal-600 font-semibold text-center">
							Pengalaman kerja
						</h2>
						{workExperiences.map((item, index) => (
							<div
								key={index}
								className="flex flex-col gap-[10px] items-center"
							>
								<h3 className="font-semibold">{item.position}</h3>
								<div className="font-medium text-teal-600">{item.company}</div>
								<div className="font-light">{item.date}</div>
							</div>
						))}
					</div>
					<div>
						<h2 className="text-teal-600 font-semibold text-center mb-[10px]">
							Skill Programming
						</h2>
						<div className="flex gap-[10px] flex-wrap justify-center">
							{skills.map((item, index) => (
								<div
									className="bg-teal-600 text-white h-[40px] px-[24px] rounded-[6px] leading-[40px]"
									key={index}
								>
									{item}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div
				id="projects"
				className="flex flex-col gap-[30px] mt-[50px] p-[20px] sm:gap-[50px] xl:w-[1200px] xl:m-auto"
			>
				<h2 className="text-teal-600 font-bold text-[20px] text-center">
					Projects
				</h2>
				<div className="flex flex-col gap-[80px] sm:gap-[30px] xl:gap-[50px]">
					{projects.map((item, index) => (
						<div
							key={index}
							className="flex flex-col gap-[30px] sm:flex-row xl:gap-[50px]"
						>
							<Image
								src={"/projects/" + item.image}
								width={380}
								height={186.76}
								alt="Screenshot jualkamera.com"
								className="w-full sm:w-[290px] sm:h-full xl:w-[380px]"
							/>
							<div className="flex flex-col gap-[10px]">
								<h3 className="text-[18px] font-semibold text-center sm:text-left">
									{item.title}
								</h3>
								<p className="text-zinc-400 font-normal text-center sm:text-left">
									{item.description}
								</p>
								<a
									href={item.link}
									className="bg-teal-600 text-white h-[40px] w-max leading-[40px] px-[24px] rounded-[6px] block m-auto sm:m-[unset]"
									target="_blank"
								>
									Kunjungi Website
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="bg-zinc-700 text-white mt-[50px]">
				<div className="xl:w-[1200px] xl:mx-auto">
					<div className="flex flex-col gap-[30px] px-[10px] py-[30px] xl:flex-row xl:justify-between">
						<div className="flex flex-col gap-[20px] xl:w-[450px]">
							<h2 className="font-bold text-[20px]">AAN REFARWAN</h2>
							<p>
								Seorang fullstack web developer yang berasal dari Bantul, Daerah
								Istimewa Yogyakarta
							</p>
						</div>
						<div className="flex flex-col gap-[10px]">
							<h2 className="font-bold">Media Sosial</h2>
							<div className="flex gap-[8px]">
								<a href="mailto:refarwan@gmail.com" target="_blank">
									<FaAt size={25} />
								</a>
								<a href="https://wa.me/62881082204658" target="_blank">
									<FaWhatsapp size={25} />
								</a>
								<a href="https://www.instagram.com/refarwan" target="_blank">
									<FaInstagram size={25} />
								</a>
								<a
									href="https://www.youtube.com/@kancaloco6159"
									target="_blank"
								>
									<FaYoutube size={25} />
								</a>
								<a href="https://github.com/refarwan" target="_blank">
									<FaGithub size={25} />
								</a>
								<a href="https://www.linkedin.com/in/refarwan" target="_blank">
									<FaLinkedin size={25} />
								</a>
								<a
									href="https://www.facebook.com/aan.refarwan.25/"
									target="_blank"
								>
									<FaFacebookSquare size={25} />
								</a>
								<a href="https://www.tiktok.com/@refarwan" target="_blank">
									<FaTiktok size={25} />
								</a>
							</div>
						</div>
					</div>
					<div className="border-t border-t-teal-50 text-center p-[10px]">
						Copyright {new Date().getFullYear()}. Dibuat oleh{" "}
						<strong>Aan Refarwan</strong>
					</div>
				</div>
			</div>
		</>
	)
}
