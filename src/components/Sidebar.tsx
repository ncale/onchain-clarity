"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	
	const currentPath = usePathname();
	
	return (
		<nav className="sidebar">
			<ul>
				<li className="sidebar-item">
					<Link href="/about" className={currentPath === "/about" ? "font-bold" : ""}>What we do</Link>
				</li>
				<li className="sidebar-item">
					<Link href="/projects" className={currentPath === "/projects" ? "font-bold" : ""}>Our projects</Link>
				</li>
				<li className="sidebar-item">
					<Link href="/team" className={currentPath === "/team" ? "font-bold" : ""}>Who we are</Link>
				</li>
				<li className="sidebar-item">
					<Link href="/socials" className={currentPath === "/socials" ? "font-bold" : ""}>Where to find us</Link>
				</li>
			</ul>
		</nav>
	)
}