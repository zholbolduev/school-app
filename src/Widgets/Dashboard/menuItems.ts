import blocks from "./assets/blocks.svg";
import cart from "./assets/cart.svg";
import home from "./assets/home.svg";
import info from "./assets/info.svg";

export const menuItems = [
  {
    path: "/",
    stateKey: "main" as const,
    imgSrc: home,
    alt: "home",
    label: "Главная",
  },
  {
    path: "/course-free",
    stateKey: "courses" as const,
    imgSrc: blocks,
    alt: "blocks",
    label: "Курсы",
  },
  {
    path: "/course-paid",
    stateKey: "paid" as const,
    imgSrc: cart,
    alt: "cart",
    label: "Платные курсы",
  },
  {
    path: "/about-us",
    stateKey: "aboutUs" as const,
    imgSrc: info,
    alt: "info",
    label: "О нас",
  },
];
