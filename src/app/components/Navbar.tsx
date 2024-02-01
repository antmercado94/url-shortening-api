"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "@/app/ui/button";
import menuIcon from "@/public/icons/icon-menu.svg";
import logoImg from "@/public/logo.svg";
import MenuModal from "./MenuModal";

export default function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <header className="page-margin relative flex items-center justify-between gap-[min(2.813rem,2.5vw)] pt-10 lg:pt-12">
      {/* skip link */}
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>
      {/* logo */}
      <div className="min-w-max">
        <Image
          priority
          src={logoImg}
          className="w-full"
          alt="Shortly website logo"
        />
      </div>
      {/* navbar */}
      <nav
        id="main-nav"
        aria-label="Main"
        className="hidden w-full justify-between md:flex"
      >
        {/* nav links--left */}
        <ul className="nav-items flex items-center gap-[min(2rem,2vw)]">
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
        </ul>
        {/* nav links--right */}
        <ul className="nav-items flex items-center gap-[min(2.375rem,2.25vw)]">
          <li>
            <Link href="#">Login</Link>
          </li>
          <li>
            <Button size={"sm"}>Sign Up</Button>
          </li>
        </ul>
      </nav>
      {/* mobile nav toggle */}
      <button
        aria-label="Toggle Menu"
        type="button"
        className="group cursor-pointer md:hidden"
        aria-haspopup="dialog"
      >
        <Image
          aria-hidden="true"
          className="h-[1.313rem] w-6 transition-opacity group-hover:opacity-50"
          priority
          src={menuIcon}
          alt="Menu icon"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        />
      </button>
      {/* mobile nav modal */}
      <div
        role="dialog"
        aria-label="Main Menu"
        aria-modal="true"
        className="absolute top-full mt-[1.438rem] h-96 w-full overflow-y-hidden sm:h-[26rem] md:hidden"
      >
        <MenuModal isMenuToggled={isMenuToggled} />
      </div>
    </header>
  );
}
