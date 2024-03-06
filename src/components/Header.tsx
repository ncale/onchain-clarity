import { Navbar, NavbarBrand, NavbarContent, Image } from "@nextui-org/react";
import Link from "next/link";

export default function Header() {
	return (
		<Navbar height="6rem" isBordered maxWidth="full">
			<NavbarBrand>
				<Link href="/" className="flex items-center">
					<Image src="/occ-logo.png" alt="Onchain clarity logo" height={80} className="h-28" />
					<p className="text-inherit text-4xl font-extralight -ml-2">Onchain Clarity Co.</p>
				</Link>
			</NavbarBrand>
			<NavbarContent>
				{/* link structure placeholder */}
			</NavbarContent>
		</Navbar>
	)
}