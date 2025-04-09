"use client";
import { useState } from "react";
import { FaPhoneAlt, FaCommentDots } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import HeaderNav from "./navMenu";
import { BURGER_ICON } from "./styles";
import IconButton from "./IconButton";
import { buttonClassName, iconClassName } from "./styles";
import classNames from "classnames";
import Logo from "./icons";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-dark">
      <div className="max-w-480 mx-auto px-4 py-4 flex items-center justify-between">
        {/* Логотип */}
        <Logo />
        <HeaderNav className="hidden md:flex gap-20 text-white text-sm md:text-lg lg:text-xl font-Montserrat w-full justify-center" />
        <div className="hidden md:flex gap-3 pr-8 lg:pr-16">
          <IconButton
            icon={FaPhoneAlt}
            buttonClassName={buttonClassName}
            iconClassName={iconClassName}
          />
          <IconButton
            icon={FaCommentDots}
            buttonClassName={buttonClassName}
            iconClassName={iconClassName}
          />
        </div>

        {/* Бургер-меню для мобільних */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className={BURGER_ICON} />
          ) : (
            <FaBars className={BURGER_ICON} />
          )}
        </div>
      </div>

      {/* Випадаюче меню для мобільних */}
      <div
        className={classNames(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-dark",
          {
            "max-h-125 opacity-100": isMenuOpen,
            "max-h-0 opacity-0": !isMenuOpen,
          }
        )}
      >
        <HeaderNav className="flex flex-col gap-6 items-center py-4 w-full text-white text-lg md:text-sm lg:text-lg" />

        {/* Іконки внизу */}
        <div
          className={classNames(
            "transition-opacity duration-500 ease-in-out flex justify-center gap-6 pb-4",
            {
              "opacity-100": isMenuOpen,
              "opacity-0": !isMenuOpen,
            }
          )}
        >
          <IconButton
            icon={FaPhoneAlt}
            buttonClassName={buttonClassName}
            iconClassName={iconClassName}
          />
          <IconButton
            icon={FaCommentDots}
            buttonClassName={buttonClassName}
            iconClassName={iconClassName}
          />
        </div>
      </div>
    </header>
  );
};
