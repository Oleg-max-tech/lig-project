"use client";

import { useState } from "react";

import cn from "classnames";
import { FaPhoneAlt, FaCommentDots } from "react-icons/fa";

import { Logo } from "./icons";
import { Menu } from "./Menu";
import { IconButton } from "../../IconButton/IconButton";
import { BurgerToggle } from "./BurgerToggle";
import "@/styles/style.css";

const ICON_CLASS_NAME = "h-8 w-8 text-black";
const BUTTON_CLASS_NAME = "bg-white rounded-lg p-2";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-dark">
      <div className="header-container">
        <Logo />
        <Menu />
        <div className="hidden md:flex gap-3 pr-8 lg:pr-16">
          <IconButton
            icon={FaPhoneAlt}
            buttonClassName={BUTTON_CLASS_NAME}
            iconClassName={ICON_CLASS_NAME}
          />
          <IconButton
            icon={FaCommentDots}
            buttonClassName={BUTTON_CLASS_NAME}
            iconClassName={ICON_CLASS_NAME}
          />
        </div>
        <BurgerToggle isOpen={isMenuOpen} onToggle={toggleMenu} />
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-dark",
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
          <IconButton
            icon={FaPhoneAlt}
            buttonClassName={BUTTON_CLASS_NAME}
            iconClassName={ICON_CLASS_NAME}
          />
          <IconButton
            icon={FaCommentDots}
            buttonClassName={BUTTON_CLASS_NAME}
            iconClassName={ICON_CLASS_NAME}
          />
        </div>
      </div>
    </header>
  );
};
