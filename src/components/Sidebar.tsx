"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuLinks } from "./Header";

export default function Sidebar() {
	
	const currentPath = usePathname();
	
	return (
		<nav className="sidebar hidden md:flex">
			<ul>
				{menuLinks.map(([name, path], i) => (
					<li className="sidebar-item" key={i}>
						<Link href={path} className={currentPath === path ? "font-bold" : ""}>{name}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}