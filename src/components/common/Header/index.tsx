"use client";

import { useState } from "react";

import cn from "classnames";
import { FaPhoneAlt, FaCommentDots } from "react-icons/fa";

import Logo from "@/assets/Icons/Logo";
import { Menu } from "./Menu";
import { IconButton } from "@/components/IconButton/IconButton";
import { BurgerIcon } from "./BurgerToggle";

const ICON_CLASS_NAME = "h-8 w-8 text-black";
const BUTTON_CLASS_NAME = "bg-white rounded-lg p-2";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-greydark">
      <div className="max-w-480 w-full mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <Menu />
        <div className="hidden md:flex gap-3 pr-8 lg:pr-16">
          <IconButton buttonClassName={BUTTON_CLASS_NAME}>
            <FaPhoneAlt className={ICON_CLASS_NAME} />
          </IconButton>

          <IconButton buttonClassName={BUTTON_CLASS_NAME}>
            <FaCommentDots className={ICON_CLASS_NAME} />
          </IconButton>
        </div>
        <BurgerIcon isOpen={isMenuOpen} toggleOpen={toggleMenu} />
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-graydark",
          {
            "max-h-125 opacity-100": isMenuOpen,
            "max-h-0 opacity-0": !isMenuOpen,
          }
        )}
      >
        <Menu isMobile />

        <div
          className={cn(
            "transition-opacity duration-500 ease-in-out flex justify-center gap-6 pb-4",
            {
              "opacity-100": isMenuOpen,
              "opacity-0": !isMenuOpen,
            }
          )}
        >
          <IconButton buttonClassName={BUTTON_CLASS_NAME}>
            <FaPhoneAlt className={ICON_CLASS_NAME} />
          </IconButton>

          <IconButton buttonClassName={BUTTON_CLASS_NAME}>
            <FaCommentDots className={ICON_CLASS_NAME} />
          </IconButton>
        </div>
      </div>
    </header>
  );
};
