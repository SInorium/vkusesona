import React from "react";
import { DeliverySettings, ProductNavigation } from "./components";
import { InputSearch } from "@/elements";

import { useWindowScroll } from "@/hooks";

import Logo from "@/images/logo.svg";
import Cart from "@/images/icons/cart.svg";
import Like from "@/images/icons/like.svg";
import User from "@/images/icons/user.svg";

import headerStyle from "./header.module.scss";
import Link from "next/link";

const deliveryWay = [
  {
    label: "Доставка",
    value: "delivery",
  },
  {
    label: "Самовывоз",
    value: "pickup",
  },
];

const ProductCategory = [
  "Акции",
  "Мясо",
  "Птица",
  "Овощи, фрукты, ягоды",
  "Морепродукты",
  "Сыры",
  "Выпечка",
  "Орехи и сухофрукты",
  "Специи и соусы",
];

const Header = () => {
  const scroll = useWindowScroll();
  const isHiddenHeader = scroll > 30;
  return (
    <header className={headerStyle.header} data-hidden={isHiddenHeader}>
      <DeliverySettings deliveryWay={deliveryWay} />
      <div className={headerStyle.wrapper}>
        <a href={"/"}>
          <Logo className={headerStyle.logo} />
        </a>
        <InputSearch
          iconType={"search"}
          placeholder={"Поиск по товарам и рецептам"}
        />
        <nav className={headerStyle.navigation}>
          <ul className={headerStyle.navigation_list}>
            <li className={headerStyle.list_item + " text-xs"}>
              <User
                className={`${headerStyle.item_icon} ${headerStyle.item_icon__user}`}
              />
              Профиль
            </li>
            <li className={headerStyle.list_item + " text-xs"}>
              <Like
                className={`${headerStyle.item_icon} ${headerStyle.item_icon__like}`}
              />
              Избранное
            </li>
            <li className={headerStyle.list_item + " text-xs"}>
              <Cart
                className={`${headerStyle.item_icon} ${headerStyle.item_icon__cart}`}
              />
              Корзина
            </li>
          </ul>
        </nav>
      </div>
      <ProductNavigation category={ProductCategory} />
    </header>
  );
};

export default Header;
