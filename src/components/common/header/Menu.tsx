import Link from "next/link";
import { HEADER_MENU_ITEMS } from "./constants";

interface Props {
  isMobile?: boolean;
}

export const Menu = ({ isMobile = false }: Props) => {
  const navClassName = isMobile
    ? "flex flex-col gap-6 items-center py-4 w-full text-white text-lg md:text-sm lg:text-lg"
    : "hidden md:flex gap-20 text-white text-sm md:text-lg lg:text-xl font-Montserrat w-full justify-center";

  return (
    <nav className={navClassName}>
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
