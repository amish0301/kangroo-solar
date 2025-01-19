import { AiFillHome as Home } from "react-icons/ai";
import { FaInfoCircle as Info } from "react-icons/fa";
import {
  MdMiscellaneousServices as Services,
  MdContactMail as Contact,
} from "react-icons/md";

export const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About Us",
    href: "/about",
    icon: Info,
  },
  {
    name: "Services",
    href: "/services",
    icon: Services,
    isDropdown: true,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Contact,
  },
];

export const services = [
  {
    name: "Installation",
    href: "/services/installation",
  },
  {
    name: "Maintenance",
    href: "/services/maintenance",
  },
  {
    name: "Repair",
    href: "/services/repair",
  },
];
