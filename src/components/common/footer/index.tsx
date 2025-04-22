"use client";

import React from "react";
import { FaPhoneAlt, FaCommentDots } from "react-icons/fa";

import { Logo } from "@/assets/Icons/Logo";
import { Menu } from "./Menu";
import { IconButton } from "@/components/IconButton/IconButton";
import { ContactIcon } from "./ContactIcon";

const BUTTON_CLASS_NAME = "bg-beige p-3 rounded-md";
const ICON_CLASS_NAME = "text-black w-6 h-6";

export const Footer = () => (
  <footer className="bg-baseDark max-w-full">
    <div className=" mx-auto rounded-xl px-8 md:px-48 py-8 md:p-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-white text-base md:text-lg">
      <Logo />
      <div className="flex flex-col md:flex-row md:gap-40 text-center md:text-left justify-between">
        <Menu />
        <ContactIcon />
      </div>
      <div className="flex flex-col gap-4 self-start">
        <IconButton buttonClassName={BUTTON_CLASS_NAME}>
          <FaPhoneAlt className={ICON_CLASS_NAME} />
        </IconButton>

        <IconButton buttonClassName={BUTTON_CLASS_NAME}>
          <FaCommentDots className={ICON_CLASS_NAME} />
        </IconButton>
      </div>
    </div>
  </footer>
);
