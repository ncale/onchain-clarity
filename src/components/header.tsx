import { Navbar, NavbarBrand, NavbarContent, Image } from "@nextui-org/react";
import Link from "next/link";
import NavLinks from "./nav-links";

export default function Header() {
	return (
		<Navbar height="4rem" isBordered maxWidth="full">
			<NavbarBrand>
				<Link href="/" className="flex items-center">
					<Image src="/images/occ-logo.png" alt="Onchain clarity logo" height={80} className="h-10" />
					<p className="text-inherit text-2xl md:text-3xl font-extralight -ml-2">Onchain Clarity Co.</p>
				</Link>
			</NavbarBrand>
			<NavbarContent justify="end">
				<NavLinks />
			</NavbarContent>
		</Navbar>
	)
}