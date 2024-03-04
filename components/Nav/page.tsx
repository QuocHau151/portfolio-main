"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { id: 1, href: "/", label: "Home", icon: "icon-House" },
  { id: 2, href: "/resume", label: "Resume", icon: "icon-User" },
  { id: 3, href: "/portfolio", label: "Portfolio", icon: "icon-Bulb" },
  { id: 4, href: "/blog", label: "Blog", icon: "icon-ClipboardText" },
  { id: 5, href: "/contact", label: "Contact", icon: "icon-Imbox" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Sử dụng window.innerWidth để xác định kích thước màn hình ban đầu
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Thay đổi 768 bằng giới hạn kích thước bạn muốn
    };

    handleResize(); // Xác định trạng thái ban đầu

    window.addEventListener("resize", handleResize);

    // Xóa sự kiện lắng nghe khi component bị hủy
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header clearfix flex items-center justify-center">
      <Link href="#" className="menu_btn  " onClick={toggleMenu}>
        <i className="icofont-navigation-menu" />
        Menu
      </Link>
      {isOpen || (
        <nav className="mainMenu ">
          <ul className="clearfix">
            {links.map((link) => (
              <li
                key={link.id}
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
      {isMobile && isOpen && (
        <nav className="mainMenu activemenu">
          <ul className="clearfix">
            {links.map((link) => (
              <li
                key={link.id}
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
    </header>
  );
}
