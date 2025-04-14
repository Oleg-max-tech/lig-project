import Link from "next/link";
import { FOOTER_MENU_ITEMS } from "./constants";

const firstColumnItems = FOOTER_MENU_ITEMS.slice(0, 2);
const secondColumnItems = FOOTER_MENU_ITEMS.slice(2);

export const Menu = () => {
  return (
    <nav className="flex flex-wrap gap-20 justify-center md:justify-start">
      <div className="flex flex-col gap-5">
        {firstColumnItems.map(({ id, label, path }) => (
          <Link
            key={id}
            href={path}
            className="hover:text-red-500 transition text-white text-lg md:text-sm lg:text-lg"
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-5 ml-20">
        {secondColumnItems.map(({ id, label, path }) => (
          <Link
            key={id}
            href={path}
            className="hover:text-red-500 transition text-white text-lg md:text-sm lg:text-lg"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
