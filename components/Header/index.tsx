import React from "react";
import Link from "next/link";

import {
  BurgerButton,
  DeliverySettings,
  ProductNavigation,
} from "./components";

import { InputSearch } from "@/elements";

import { useWindowScroll } from "@/hooks";

import Logo from "@/images/logo.svg";
import Cart from "@/images/icons/cart.svg";
import Like from "@/images/icons/like";
import User from "@/images/icons/user.svg";
import Search from "@/images/icons/search.svg";

import headerStyle from "./header.module.scss";
import Sidebar from "components/Sidebar";

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

  const [isSidebarToggled, setSidebarToggled] = React.useState(false);

  return (
    <header className={headerStyle.header} data-hidden={isHiddenHeader}>
      <DeliverySettings deliveryWay={deliveryWay} />
      <div className={headerStyle.wrapper}>
        <div className={headerStyle.sidebar_wrapper}>
          <Sidebar isToggled={isSidebarToggled} onToggle={setSidebarToggled} />
        </div>
        <BurgerButton
          isToggled={isSidebarToggled}
          onToggle={setSidebarToggled}
        />
        <Link href={"/"}>
          <a>
            <Logo className={headerStyle.logo} />
          </a>
        </Link>
        <div className={headerStyle.input_wrapper}>
          <InputSearch
            iconType={"search"}
            placeholder={"Поиск по товарам и рецептам"}
          />
        </div>
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
        <Search className={headerStyle.search_icon__mobile} />
      </div>
      <ProductNavigation category={ProductCategory} />
      {/* <MobileMenu /> */}
    </header>
  );
};

export default Header;
