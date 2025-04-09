import Link from "next/link";
import { headerMenuItems } from "./constants";

interface HeaderNavProps {
  className?: string;
}

export default function HeaderNav({ className = "" }: HeaderNavProps) {
  return (
    <nav className={className}>
      {headerMenuItems.map(({ id, label, path }) => (
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
}
