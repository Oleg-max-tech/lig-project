import Image from "next/image";
import logoIcon from "../../../assets/icons/logoIcon.svg";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 pl-8 lg:pl-16">
      <Image className="h-10 w-auto" src={logoIcon} alt="Logo" />
    </div>
  );
}
