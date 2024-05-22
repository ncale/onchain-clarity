"use client";

import IconFarcaster from "@/components/icons/farcaster";
import IconX from "@/components/icons/x";
import { scrolltoHash } from "@/lib/utils";

export function Header() {
  return (
    <header className="flex items-end justify-between bg-gray-100 px-8 pb-6 pt-6 leading-none md:px-16 md:pb-8">
      {/* Logo */}
      <div>
        <span className="font-title text-xl">
          Onchain Clarity <span className="hidden md:inline">Company</span>
        </span>
      </div>

      {/* Nav */}
      <nav className="flex items-center space-x-3 text-lg">
        {/* Links */}
        <ul className="hidden md:block">
          {links.map((route, i) => (
            <li key={i} className="inline">
              <span
                className="cursor-pointer hover:underline"
                onClick={() => scrolltoHash(route.elementId)}
              >
                {route.name}
              </span>
              {i + 1 === links.length ? "" : "・"}
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="hidden md:block">{" | "}</div>

        {/* Socials */}
        <div className="flex items-center space-x-3">
          <a href="https://warpcast.com/occ.eth" target="_blank">
            <IconFarcaster />
          </a>
          <a href="https://twitter.com/OnchainClarity" target="_blank">
            <IconX />
          </a>
        </div>
      </nav>
    </header>
  );
}

type LinksType = { name: string; elementId: string }[];
const links: LinksType = [
  { name: "Home", elementId: "home" },
  { name: "Initiatives", elementId: "initiatives" },
  { name: "Team", elementId: "team" },
];
