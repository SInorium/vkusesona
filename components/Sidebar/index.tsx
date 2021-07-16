import React from "react";

import Profile from "@/images/icons/profile.svg";
import Like from "@/images/icons/like";
import Cart from "@/images/icons/cart.svg";
import Quot from "@/images/icons/quot.svg";
import Edit from "@/images/icons/edit.svg";
import Location from "@/images/icons/location.svg";

import style from "./sidebar.module.scss";
import { MobileMenu } from "@/components";

interface SidebarProps {
  isToggled: boolean;
  onToggle: (x: boolean) => void;
}

const sidebarNavigation = [
  "Каталог товаров",
  "О нас",
  "Вакансии",
  "Контакты",
  "Бонусная программа",
  "Возврат товара",
  "Доставка и оплата",
  "Рецепты",
];

const Sidebar: React.FC<SidebarProps> = ({ isToggled, onToggle }) => {
  return (
    <>
      <div
        className={style.layout}
        onClick={() => onToggle(false)}
        data-toggled={isToggled}
      />
      <nav className={style.sidebar} data-toggled={isToggled}>
        {/* // TODO */}
        <div className={style.content_wrapper}>
          {/* // TODO */}
          <div className={style.cart_wrapper}>
            <Cart className={style.cart_icon} />
            <span>50 095 ₽ </span>
          </div>
          <ul className={style.content + " d-flex"}>
            <li className={style.content_item}>
              <Profile className={style.content_icon__profile} />
              <span className={style.content_description}>Профиль</span>
            </li>
            <li className={style.content_item}>
              <Like className={style.content_icon__like} />
              <span className={style.content_description}>Избранное</span>
            </li>
          </ul>
          <ul className={style.navigation}>
            {sidebarNavigation.map((item: string) => {
              return (
                <li className={style.navigation__item} key={item}>
                  <span className={style.navigation__description}>{item}</span>
                  <Quot className={style.navigation__icon} />
                </li>
              );
            })}
          </ul>
          <ul className={style.location}>
            <li className={style.location_item}>
              <div className={style.location_wrapper}>
                <span className={style.location_label}>Город</span>
                <span className={style.location_description}>Сыктывкар</span>
              </div>
              <Edit className={style.location_icon} />
            </li>
            <li className={style.location_item}>
              <div className={style.location_wrapper}>
                <span className={style.location_label}>Доставка курьером:</span>
                <span className={style.location_description}>
                  ул. Южный Власихинский проезд, дом 234
                </span>
              </div>
              <Location className={style.location_icon__location} />
            </li>
          </ul>
        </div>
        <div className={style.mobile_menu__wrapper}>
          <MobileMenu />
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
