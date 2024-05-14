import Link from "next/link";
import { NavLinks, NavLogo } from "./nav-items";

export default function Header() {
  return (
    <div>
      <div>
        <Link href="/" className="flex items-center">
          <NavLogo />
          <p className="text-2xl md:text-3xl">Onchain Clarity Co.</p>
        </Link>
      </div>
      <div>
        <NavLinks />
      </div>
    </div>
  );
}
