import { AiFillHome as Home, AiFillContacts as Contact } from "react-icons/ai";
import {
  FaInfoCircle as Info,
  FaDownload as Installation,
  FaCheckCircle,
  FaClipboardList,
} from "react-icons/fa";
import {
  MdMiscellaneousServices as Services,
  MdOutlineStarBorder as Star,
} from "react-icons/md";
import { GiLaurelsTrophy as Trophy } from "react-icons/gi";
import { LuCalendarSync as Calendar } from "react-icons/lu";

export const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About",
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

export const heroImages = [
  "../assets/images/heroslider/i1.webp",
  "../assets/images/heroslider/i2.webp",
  "../assets/images/heroslider/i3.webp",
];

// Why Solar Component
export const whyUsList = [
  {
    name: "Quality Workmanship",
    icon: Trophy,
  },
  {
    name: "Tailored Solutions",
    icon: Star,
  },
  { name: "Flexible Finance Option", icon: Calendar },
  { name: "Quick Installation Turn around", icon: Installation },
  {
    name: "Quality Assurance",
    icon: FaCheckCircle,
  },
  {
    icon: FaClipboardList,
    name: "Free site Assessment",
  },
];

// Service Cards
export const serviceCardImgDesc = [
  {
    heading: "Solar Panels",
    desc: "At Kangroo Solar, we have been installing and enabling solar panels across Brisbane, Melbourne & Sydney for years. We pride ourselves on our proficient service and high-quality workmanship. We effortlessly install solar panels in extremely harsh environments where they have to undergo a wide assortment of temperatures, high winds, UV radiations, heavy rains, and hail.",
    href: "/solar-panel",
    img: "../assets/images/about_img.webp"
  },
  {
    heading: "Solar Inverter",
    desc: "At the core of every solar power system is a solar inverter. Our solar power inverters turn the continuously varying DC power from the solar panels into a steady AC power supply. Selecting a higher quality inverter that is precisely accurate for your usage is quite critical for receiving maximum ROI.",
    href: "/solar-inverter",
    img: "../assets/images/solar_inverter.avif"
  },
  {
    heading: "Solar Rebate",
    desc: "The solar rebate is part of Australia’s Renewable Energy Target and was introduced at the start of 2011. The Australian Federal Government solar incentive scheme entitles you to claim rebate on purchase and installation of solar system. The rebate or subsidy referred to as STC (Small Scale Technology Certificate) allows a discount on the final price of the solar system that you actually have to pay out of your pocket.",
    href: "/solar-rebate",
    img: "../assets/images/solar_rebate.webp"
  },
];
