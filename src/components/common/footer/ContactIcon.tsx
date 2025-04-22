import Image from "next/image";
import Link from "next/link";

import { CONTACT_ICONS } from "./constants";

export const ContactIcon = () => {
  return (
    <div className="flex flex-col gap-5 items-center md:items-start">
      {CONTACT_ICONS.map(({ id, src, alt, href, text }) => (
        <div key={id} className="flex items-center gap-5">
          <Image className="w-8 h-8" src={src} alt={alt} />
          <Link href={href} className="hover:text-red-500 transition">
            {text}
          </Link>
        </div>
      ))}
    </div>
  );
};
