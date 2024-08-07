"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Image from "next/image";
import Logo from "@/public/hydranode_logo.png";
import WhiteLogo from "@/public/BotbeeWhiteLogo.png";
import { Button } from "./ui/button";

type HeaderProps = {
  classname?: string;
};

const navLinks = [
  { link: "#home", label: "Pricing" },
  { link: "#make-different", label: "Features" },
  { link: "#benefits", label: "Benefits" },
  { link: "#clients", label: "Testimonials" },
  { link: "#set-up-avatar", label: "How To Use" },
];

const Header = ({ classname }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className={clsx(
          "w-full px-2 py-2 md:px-4 bg-mainDark lg:px-12",
          classname
        )}
      >
        <nav aria-label="Main-navigation">
          <ul className="flex flex-col md:m-4 md:flex-row md:items-center md:justify-between md:rounded-xl">
            <div className="flex items-center justify-between">
              <NameLogo />
              <button
                aria-label="Open menu"
                className={clsx("block text-2xl text-white md:hidden")}
                onClick={() => setIsOpen(true)}
              >
                <MdMenu />
              </button>
            </div>
            <div
              className={clsx(
                "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-black pr-4 pt-14 text-white transition-transform duration-300 ease-in-out md:hidden",
                isOpen ? "translate-x-0" : "translate-x-[100%]"
              )}
            >
              <button
                aria-label="Close menu"
                className={clsx(
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
                  <Link
                    href={item.link}
                    key={index}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={clsx(
                      "",
                      pathname === item.link ? "underline" : ""
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <DesktopMenu />
            <ProfileMenu />
            {/* if session does not exist user is not logged in and dont show the login and sign up links */}
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

function DesktopMenu() {
  const pathname = usePathname();
  return (
    <div className="hidden gap-8 md:flex md:items-center">
      {navLinks.map((item, index) => {
        return (
          <Link
            href={item.link}
            key={index}
            className={clsx(
              "text-customMuted font-bold transition hover:underline hover:decoration-4 hover:underline-offset-8",
              pathname === item.link
                ? "underline decoration-4 underline-offset-8"
                : ""
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

function AuthDialogNavs() {
  return (
    <div className="hidden space-x-4 md:flex md:items-center">
      <Link href={"/login"}>Login</Link>
      <Link href={"/signup"}>Signup</Link>
    </div>
  );
}

function ProfileMenu() {
  return <div></div>;
}
// function ProfileMenu() {
//   return (
//     <Button className="rounded-lg hidden md:block" variant={"secondary"}>
//       Signout
//     </Button>
//   );
// }
