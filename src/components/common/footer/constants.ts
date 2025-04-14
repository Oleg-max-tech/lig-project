import phone from "@/assets/icons/phone.svg";
import email from "@/assets/icons/email.svg";

export const FOOTER_MENU_ITEMS = [
  {
    id: 1,
    label: "Services",
    path: "/",
  },
  {
    id: 2,
    label: "Gallery",
    path: "/about-us",
  },
  {
    id: 3,
    label: "Home",
    path: "/services",
  },
  {
    id: 4,
    label: "About us",
    path: "/gallery",
  },
];

export const CONTACT_INFO_ITEMS = [
  {
    id: 1,
    icon: phone,
    alt: "phone",
    href: "tel:8144245702",
    text: "814-424-5702",
  },
  {
    id: 2,
    icon: email,
    alt: "email",
    href: "mailto:andrey@ilgconstruction.com",
    text: "andrey@ilgconstruction.com",
  },
];
