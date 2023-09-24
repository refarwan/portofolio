import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"

const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Aan Refarwan | Fullstack JavaScript Developer",
	description:
		"Saya adalah seorang Fullstack JavaScript Developer. Saya menguasai beberapa framework seperti Next.Js, Express.Js, React.Js dan lainnya",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={poppins.className + " text-zinc-700"}>{children}</body>
		</html>
	)
}
