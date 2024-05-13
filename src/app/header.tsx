import IconFarcaster from "@/components/icons/farcaster";
import IconX from "@/components/icons/x";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex justify-between">
      {/* Logo */}
      <div>
        <span>Onchain Clarity Company</span>
      </div>

      {/* Nav */}
      <nav className="flex space-x-2">
        {/* Links */}
        <ul>
          {links.map((route, i) => (
            <li id={i.toString()} className="inline">
              <Link href={route.href}>{route.name}</Link>
              {i + 1 === links.length ? "" : "・"}
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div>{" | "}</div>

        {/* Socials */}
        <div className="flex items-center space-x-2">
          <a href="https://warpcast.com/occ.eth" target="_blank">
            <IconFarcaster />
          </a>
          <a href="https://twitter.com/OnchainClarity" target="_blank">
            <IconX />
          </a>
        </div>
      </nav>
    </div>
  );
}

type LinksType = { name: string; href: `#${string}` }[];
const links: LinksType = [
  { name: "Home", href: "#home" },
  { name: "Initiatives", href: "#initiatives" },
  { name: "Team", href: "#team" },
];
