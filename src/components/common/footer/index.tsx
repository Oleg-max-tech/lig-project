"use client";
import React from "react";
import { FaPhoneAlt, FaCommentDots } from "react-icons/fa";

import { Logo } from "../Header/icons";
import Menu from "./Menu";
import { IconButton } from "../../IconButton/IconButton";
import ContactInfo from "./ContactInfo";
import "@/styles/style.css";

const ICON_CLASS_NAME = "bg-[#e6dcd8] p-3 rounded-md";
const BUTTON_CLASS_NAME = "text-black w-6 h-6";

export const Footer = () => (
  <footer className="bg-dark max-w-full">
    <div className="footer-container">
      <Logo />
      <div className="flex flex-col md:flex-row md:gap-40 text-center md:text-left justify-between">
        <Menu />
        <ContactInfo />
      </div>
      <div className="flex flex-col gap-4 self-start">
        <IconButton
          icon={FaPhoneAlt}
          buttonClassName={ICON_CLASS_NAME}
          iconClassName={BUTTON_CLASS_NAME}
        />
        <IconButton
          icon={FaCommentDots}
          buttonClassName={ICON_CLASS_NAME}
          iconClassName={BUTTON_CLASS_NAME}
        />
      </div>
    </div>
  </footer>
);
