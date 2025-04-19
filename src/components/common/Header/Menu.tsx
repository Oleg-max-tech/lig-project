import Link from "next/link";
import cn from "classnames";

import { HEADER_MENU_ITEMS } from "./constants";

interface Props {
  isMobile?: boolean;
}

export const Menu = ({ isMobile = false }: Props) => {
  return (
    <nav
      className={cn("w-full text-white", {
        "flex flex-col gap-6 items-center py-4 text-lg md:text-sm lg:text-lg":
          isMobile,
        "hidden md:flex gap-20 text-sm md:text-lg lg:text-xl font-Montserrat justify-center":
          !isMobile,
      })}
    >
      {HEADER_MENU_ITEMS.map(({ id, label, path }) => (
        <Link
          key={id}
          href={path}
          className="hover:text-red-500 transition text-center whitespace-nowrap"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};
