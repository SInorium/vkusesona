import React from "react";
import Link from "next/link";

import HomeIcon from "@/images/icons/home.svg";
import CatalogIcon from "@/images/icons/catalog_search.svg";
import Cart from "@/images/icons/cart.svg";
import LikeIcon from "@/images/icons/like";
import ProfileIcon from "@/images/icons/profile.svg";

import style from "./mobileMenu.module.scss";

const mobileMenuNavigation = [
  {
    label: "Главная",
    icon: <HomeIcon />,
    to: "/",
  },
  {
    label: "Каталог",
    icon: <CatalogIcon />,
    to: "/",
  },
  {
    label: "Корзина",
    icon: <Cart />,
    to: "/",
  },
  {
    label: "Избранное",
    icon: (
      <LikeIcon strokeColor={"green"} strokeWidth={2} className={style.like} />
    ),
    to: "/",
  },
  {
    label: "Профиль",
    icon: <ProfileIcon />,
    to: "/",
  },
];

const MobileMenu = () => {
  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
        {mobileMenuNavigation.map(({ label, icon, to }) => {
          return (
            <li className={style.item} key={label}>
              <Link href={to}>
                <a className={style.content_wrapper} data-icon_type={label}>
                  {icon}
                  <span className={style.label}>{label}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileMenu;
