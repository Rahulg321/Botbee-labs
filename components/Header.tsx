"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/public/hydranode_logo.png";
import WhiteLogo from "@/public/BotbeeWhiteLogo.png";
import { Button } from "./ui/button";
import { MdClose, MdMenu } from "react-icons/md";

const navLinks = [
  { link: "#home", label: "Pricing" },
  { link: "#make-different", label: "Features" },
  { link: "#benefits", label: "Benefits" },
  { link: "#clients", label: "Testimonials" },
  { link: "#set-up-avatar", label: "How To Use" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavLinkClick = (link: string) => {
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    } else {
      router.push(link);
    }
  };

  return (
    <>
      <header className={cn("w-full px-2 py-2 md:px-4 bg-mainDark lg:px-12")}>
        <nav aria-label="Main-navigation">
          <ul className="flex flex-col md:m-4 md:flex-row md:items-center md:justify-between md:rounded-xl">
            <div className="flex items-center justify-between">
              <NameLogo />
              <button
                aria-label="Open menu"
                className={cn("block text-2xl text-white md:hidden")}
                onClick={() => setIsOpen(true)}
              >
                <MdMenu />
              </button>
            </div>
            <div
              className={cn(
                "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-black pr-4 pt-14 text-white transition-transform duration-300 ease-in-out md:hidden",
                isOpen ? "translate-x-0" : "translate-x-[100%]"
              )}
            >
              <button
                aria-label="Close menu"
                className={cn(
                  "fixed right-4 top-3 block p-2 text-2xl text-white md:hidden",
                  pathname === "/token" || pathname === "/reward"
                    ? "text-white"
                    : null
                )}
                onClick={() => setIsOpen(false)}
              >
                <MdClose />
              </button>
              {navLinks.map((item, index) => {
                return (
                  <a
                    key={index}
                    onClick={() => handleNavLinkClick(item.link)}
                    className={cn(
                      "",
                      pathname === item.link ? "underline" : ""
                    )}
                    style={{ cursor: "pointer" }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <DesktopMenu handlefunc={handleNavLinkClick} />
            <ProfileMenu />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

function NameLogo({}: {}) {
  const pathname = usePathname();

  return (
    <div className="">
      <Link href="/" aria-label="Home page" className="">
        <Image
          src={WhiteLogo}
          alt="hyranode Logo"
          height={300}
          width={200}
          className="object-cover"
        />
      </Link>
    </div>
  );
}

function DesktopMenu({ handlefunc }: { handlefunc: (link: string) => void }) {
  const pathname = usePathname();

  return (
    <div className="hidden gap-8 md:flex md:items-center">
      {navLinks.map((item, index) => {
        return (
          <a
            key={index}
            onClick={() => handlefunc(item.link)}
            className={cn(
              "text-customMuted font-bold transition hover:underline hover:decoration-4 hover:underline-offset-8",
              pathname === item.link
                ? "underline decoration-4 underline-offset-8"
                : ""
            )}
            style={{ cursor: "pointer" }}
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}

function ProfileMenu() {
  return <div></div>;
}
