"use client";
import Link from "next/link";
import { useState } from "react";
import { FaPhoneAlt, FaCommentDots } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import classNames from "classnames";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Gallery", href: "#" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#1a1a1a]">
      <div className="max-w-[1920px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Логотип */}
        <div className="flex items-center gap-2 pl-8 lg:pl-16">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </div>

        {/* Навігація (прихована на малих екранах) */}
        <nav className="hidden md:flex gap-8 text-white text-sm md:text-lg lg:text-xl font-Montserrat w-full justify-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="w-1/10 hover:text-red-500 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Іконки (приховані на малих екранах) */}
        <div className="hidden md:flex gap-3 pr-8 lg:pr-16">
          <button className="bg-white rounded-lg p-2">
            <FaPhoneAlt className="h-8 w-8 text-black" />
          </button>
          <button className="bg-white rounded-lg p-2">
            <FaCommentDots className="h-8 w-8 text-black" />
          </button>
        </div>

        {/* Бургер-меню для мобільних */}
        <div
          className="md:hidden flex items-center cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FaTimes className="text-white h-6 w-6" />
          ) : (
            <FaBars className="text-white h-6 w-6" />
          )}
        </div>
      </div>

      {/* Випадаюче меню для мобільних */}
      <div
        className={`${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#1a1a1a]`}
      >
        <nav className="flex flex-col gap-6 items-center py-4 w-full">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white text-lg md:text-sm lg:text-base py-2 hover:text-red-500 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Іконки внизу */}
        <div
          className={classNames(
            {
              "opacity-100": isMenuOpen,
              "opacity-0": !isMenuOpen,
            },
            "transition-opacity duration-500 ease-in-out flex justify-center gap-6 pb-4"
          )}
        >
          <button className="bg-white rounded-lg p-2">
            <FaPhoneAlt className="h-8 w-8 text-black" />
          </button>
          <button className="bg-white rounded-lg p-2">
            <FaCommentDots className="h-8 w-8 text-black" />
          </button>
        </div>
      </div>
    </header>
  );
}
