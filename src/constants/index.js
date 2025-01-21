import { AiFillHome as Home, AiFillContacts as Contact } from "react-icons/ai";
import {
  FaInfoCircle as Info,
  FaDownload as Installation,
  FaCheckCircle,
  FaClipboardList,
} from "react-icons/fa";
import { TfiGallery as Gallery } from "react-icons/tfi";
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
    name: "Gallery",
    href: '/gallery',
    icon: Gallery
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

export const testimonials = [
  {
    clientName: 'John Doe',
    desc: 'I was so happy with these guys .the installation team are a fantastic crew .I have never in my 60 years seen such a well tuned team , so organized and professional . Plus they are very polite worked well together and left no mess. Thanks guys very happy and well done. My son recommended them to me and I will continue to tell all my friends',
    img: '../assets/images/c-1.webp'
  },
  {
    clientName: 'Wayne Brenan',
    desc: 'Amazing service. The guys were polite and explained everything in simple terms. Highly recommended. We were referred to Solar Masters by a friend and no regrets. Especially after hearing some horror stories of other companies. I wouldn’t hesitate passing on the number to family or friends.',
    img: '../assets/images/c-2.webp'
  },
  {
    clientName: 'Azzy Scott',
    desc: 'Amazing service. The guys were polite and explained everything in simple terms. Highly recommended. We were referred to Solar Masters by a friend and no regrets. Especially after hearing some horror stories of other companies. I wouldn’t hesitate passing on the number to family or friends.',
    img: '../assets/images/c-3.webp'
  },
  {
    clientName: 'John Doe',
    img: '../assets/images/c-4.webp',
    desc: 'Their attention to detail and customer-first approach is unmatched. I\'m thrilled with the results!',
    designation: 'CEO, Bakely\'s Pvt Ltd'
  }
];