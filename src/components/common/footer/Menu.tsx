import Link from "next/link";
import { FOOTER_FIRST_COLUMN, FOOTER_SECOND_COLUMN } from "./constants";

export const Menu = () => {
  return (
    <nav className="flex flex-wrap gap-20 justify-center md:justify-start">
      <div className="flex flex-col gap-5">
        {FOOTER_FIRST_COLUMN.map(({ id, label, path }) => (
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
        {FOOTER_SECOND_COLUMN.map(({ id, label, path }) => (
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
