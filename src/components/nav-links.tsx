"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import HamburgerIcon from "./icons/hamburger-icon";
import { NavbarItem } from "@nextui-org/react";

export default function NavLinks() {
	const isDesktop = useMediaQuery("(min-width: 768px)")
	return (
		isDesktop ? <DesktopMenu /> : <HamburgerMenu />
	)
}

function DesktopMenu() {
	const currentPath = usePathname()
	return (
		menuLinks.map(([name, path], i) => (
			<NavbarItem className={(currentPath === path) ? "text-blue-500" : ""}>
				<Link href={path}>
					{name}
				</Link>
			</NavbarItem>
		))
	)
}

function HamburgerMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<span><HamburgerIcon /></span>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
        {menuLinks.map(([name, path], i) => (
					<DropdownMenuItem key={i}>
						<Link href={path} className="text-xl w-full">{name}</Link>
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