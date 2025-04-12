import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO_ITEMS } from "./constants";

export const ContactIcon = () => (
  <div className="flex flex-col gap-5 items-center md:items-start">
    {CONTACT_INFO_ITEMS.map(({ id, icon, alt, href, text }) => (
      <Link
        key={id}
        href={href}
        className="flex items-center gap-5 hover:text-red-500 transition"
      >
        <Image className="w-8 h-8" src={icon} alt={alt} />
        {text}
      </Link>
    ))}
  </div>
);
