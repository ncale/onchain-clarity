"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuLinks } from "./Header";

export default function Sidebar() {
	
	const currentPath = usePathname();
	
	return (
		<nav className="sidebar">
			<ul>
				{menuLinks.map(( [name, path] ) => (
					<li className="sidebar-item">
						<Link href={path} className={currentPath === path ? "font-bold" : ""}>{name}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}