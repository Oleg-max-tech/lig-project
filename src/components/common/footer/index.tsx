"use client";
import { FaPhoneAlt, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";
import { Logo } from "../Header/icons";
import Menu from "./Menu";
import Image from "next/image";
import Phone from "@/assets/Icons/Phone.svg";
import Email from "@/assets/Icons/Email.svg";
import { IconButton } from "../../IconButton/IconButton";
import ContactInfo from "./ContactInfo";
import { FOOTER_STYLES } from "@/styles";

const ICON_CLASS_NAME = "bg-[#e6dcd8] p-3 rounded-md";
const BUTTON_CLASS_NAME = "text-black w-6 h-6";

export default function Footer() {
  return (
    <footer className="bg-dark  max-w-full">
      <div className={FOOTER_STYLES}>
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
}
