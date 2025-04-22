import Link from "next/link";

interface MenuLinkProps {
  href: string;
  children: React.ReactNode;
}

const MenuLink = ({ href, children }: MenuLinkProps) => {
  return (
    <Link
      href={href}
      className="hover:text-red-500 transition text-white text-lg md:text-sm lg:text-lg"
    >
      {children}
    </Link>
  );
};

export default MenuLink;
