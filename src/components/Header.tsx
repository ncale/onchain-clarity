import { Navbar, NavbarBrand, NavbarContent, Image } from "@nextui-org/react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import HamburgerIcon from "./icons/hamburger-icon";

export default function Header() {
	return (
		<Navbar height="6rem" isBordered maxWidth="full">
			<NavbarBrand>
				<Link href="/" className="flex items-center">
					<Image src="/images/occ-logo.png" alt="Onchain clarity logo" height={80} className="h-28" />
					<p className="text-inherit text-4xl font-extralight -ml-2">Onchain Clarity Co.</p>
				</Link>
			</NavbarBrand>
			<NavbarContent justify="end">
				<HamburgerMenu />
			</NavbarContent>
		</Navbar>
	)
}

function HamburgerMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<span><HamburgerIcon /></span>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuSeparator />
        {menuLinks.map(([name, path]) => (
					<DropdownMenuItem>
						<Link href={path}>{name}</Link>
					</DropdownMenuItem>
				))}
      </DropdownMenuContent>
		</DropdownMenu>
	)
}

export const menuLinks: Array<[string, `/${string}`]> = [
	['About', '/about'],
	['Projects', '/projects'],
	['Team', '/team'],
	['Socials', '/socials'],
]