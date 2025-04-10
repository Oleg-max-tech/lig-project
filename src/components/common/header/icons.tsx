import Image from "next/image";
import logo from "@/assets/icons/logo.svg";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 pl-8 lg:pl-16">
      <Image className="h-10 w-auto" src={logo} alt="Logo" />
    </div>
  );
};
