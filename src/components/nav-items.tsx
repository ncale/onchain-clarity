"use client";

import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import HamburgerIcon from "./icons/hamburger-icon";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";

export function NavLogo() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? (
    <Image
      src="/images/occ-logo.png"
      alt="Onchain clarity logo"
      height={80}
      width={80}
      className="h-16"
    />
  ) : null;
}

export function NavLinks() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? <DesktopMenu /> : <HamburgerMenu />;
}

function DesktopMenu() {
  const currentPath = usePathname();
  return menuLinks.map(([name, path], i) => (
    <div className={currentPath === path ? "text-blue-500" : ""} key={i}>
      <Link href={path}>{name}</Link>
    </div>
  ));
}

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const currentPath = usePathname();
  return (
    <Drawer direction="top" open={open}>
      <DrawerTrigger onClick={() => setOpen(true)}>
        <HamburgerIcon />
      </DrawerTrigger>
      <DrawerContent>
        <ul className="flex flex-col mt-6 gap-2">
          {menuLinks.map(([name, path], i) => (
            <li
              className="text-3xl ml-4"
              key={i}
              onClick={() => setOpen(false)}
            >
              <Link
                href={path}
                color="foreground"
                className={`${
                  currentPath === path ? "font-bold underline" : ""
                } text-3xl p-1`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  );
}

export const menuLinks: Array<[string, `/${string}`]> = [
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Team", "/team"],
  ["Socials", "/socials"],
];
