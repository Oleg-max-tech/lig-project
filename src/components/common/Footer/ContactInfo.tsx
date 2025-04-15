import Image from "next/image";
import phoneIcon from "@/assets/Icons/phoneIcon.svg";
import emailIcon from "@/assets/Icons/emailIcon.svg";
import Link from "next/link";

const CONTACT_INFO = [
  {
    id: 1,
    src: phoneIcon,
    alt: "phone",
    href: "tel:8144245702",
    text: "814-424-5702",
  },
  {
    id: 2,
    src: emailIcon,
    alt: "email",
    href: "mailto:andrey@ilgconstruction.com",
    text: "andrey@ilgconstruction.com",
  },
];

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-5 items-center md:items-start">
      {CONTACT_INFO.map(({ id, src, alt, href, text }) => (
        <div key={id} className="flex items-center gap-5">
          <Image className="w-8 h-8" src={src} alt={alt} />
          <Link href={href} className="hover:text-red-500 transition">
            {text}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
//contacts
