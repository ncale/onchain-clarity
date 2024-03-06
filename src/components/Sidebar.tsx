import Link from "next/link";

export default function Sidebar() {
	return (
		<nav className="sidebar">
			<ul>
				<li className="sidebar-item">
					<Link href="/about">What we do</Link>
				</li>
				<li className="sidebar-item">
					<Link href="/projects">Our projects</Link>
				</li>
				<li className="sidebar-item">
					<Link href="/team">Who we are</Link>
				</li>
				<li className="sidebar-item">
					<Link href="/socials">Where to find us</Link>
				</li>
			</ul>
		</nav>
	)
}