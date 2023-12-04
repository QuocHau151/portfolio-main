"use client";
import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home", icon: "icon-House" },
  { href: "/resume", label: "Resume", icon: "icon-User" },
  { href: "/portfolio", label: "Portfolio", icon: "icon-Bulb" },
  { href: "/blog", label: "Blog", icon: "icon-ClipboardText" },
  { href: "/contact", label: "Contact", icon: "icon-Imbox" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className="header clearfix">
      <Link href="#" className="menu_btn active " onClick={toggleMenu}>
        <i className="icofont-navigation-menu" />
        Menu
      </Link>
      {isOpen && (
        <nav className="mainMenu activemenu">
          <ul className="clearfix">
            {links.map((link) => (
              <li
                key={link.label}
                className={clsx({ "active ": pathname === link.href })}
                onClick={closeMenu}
              >
                <Link href={link.href}>
                  <i className={clsx("icon", link.icon)} />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <a href="#" className="sidebarToggler">
        <span>
          <span />
          <span />
          <span />
        </span>
      </a>
    </header>
  );
}
