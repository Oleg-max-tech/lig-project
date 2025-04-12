import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/Icons/logo.svg";

const Logo = () => (
  <div className="flex items-center gap-2 pl-8 lg:pl-16">
    <Link href="/" passHref>
      <Image className="h-10 w-auto" src={logo} alt="Logo" />
    </Link>
  </div>
);

export default Logo;
