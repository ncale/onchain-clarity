import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import { NavLinks, NavLogo } from "./nav-items";

export default function Header() {
	return (
		<Navbar height="4rem" isBordered maxWidth="full">
			<NavbarBrand>
				<Link href="/" className="flex items-center">
					<NavLogo />
					<p className="text-2xl md:text-3xl">Onchain Clarity Co.</p>
				</Link>
			</NavbarBrand>
			<NavbarContent justify="end">
				<NavLinks />
			</NavbarContent>
		</Navbar>
	)
}