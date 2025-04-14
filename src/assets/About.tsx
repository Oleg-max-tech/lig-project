// components/Imag.tsx
import Image from "next/image";
import Link from "next/link";

import imag from "../assets/imag.svg";

export const Image1 = () => (
  <div className="w-full flex justify-center">
    <Link href="/" passHref>
      <Image className="w-full h-auto" src={imag} alt="Logo" />
    </Link>
  </div>
);
