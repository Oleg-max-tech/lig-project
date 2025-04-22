import phoneIcon from "@/assets/phone-Icon.svg";
import emailIcon from "@/assets/email-Icon.svg";

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
    icon: phoneIcon,
    alt: "phone",
    href: "tel:8144245702",
    text: "814-424-5702",
  },
  {
    id: 2,
    icon: emailIcon,
    alt: "email",
    href: "mailto:andrey@ilgconstruction.com",
    text: "andrey@ilgconstruction.com",
  },
];
export const CONTACT_ICONS = [
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

export const FOOTER_COLUMNS = {
  left: [
    { id: 1, label: "Services", path: "/" },
    { id: 2, label: "Gallery", path: "/about-us" },
  ],
  right: [
    { id: 3, label: "Home", path: "/services" },
    { id: 4, label: "About us", path: "/gallery" },
  ],
};
