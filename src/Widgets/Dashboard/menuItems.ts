import blocks from "./assets/blocks.svg";
import cart from "./assets/cart.svg";
import home from "./assets/home.svg";
import info from "./assets/info.svg";
import users from "./assets/users.svg";
import sliders from "./assets/sliders.svg";
import logout from "./assets/log-out.svg";

export const menuItemsTop = [
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
];

export const menuItemsMiddle = [
  {
    path: "/profile-page",
    stateKey: "profile" as const,
    imgSrc: users,
    alt: "profile",
    label: "Профиль",
  },
  {
    path: "/about-us",
    stateKey: "aboutUs" as const,
    imgSrc: info,
    alt: "info",
    label: "О нас",
  },
];

export const menuItemsBottom = [
  {
    path: "/admin-page",
    stateKey: "admin" as const,
    imgSrc: sliders,
    alt: "admin",
    label: "Админ панель",
  },
  {
    imgSrc: logout,
    alt: "logout",
    label: "Выйти",
  },
];
