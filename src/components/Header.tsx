import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function Header() {
	return (
		<Navbar height="6rem" isBordered maxWidth="full">
			<NavbarBrand>
				<Image src="/occ-logo.png" alt="Onchain clarity logo" height={80} className="h-28" />
				<p className="text-inherit text-4xl font-extralight -ml-2">Onchain Clarity Co.</p>
			</NavbarBrand>
			<NavbarContent>
				{/* link structure placeholder */}
			</NavbarContent>
		</Navbar>
	)
}