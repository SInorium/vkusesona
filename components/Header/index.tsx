import React from "react";
import { InputSearch } from "@/elements";
import headerStyle from "./header.module.scss";

import deliverySettingsStyle from "./delivery-settings.module.scss";

import Logo from "@/images/logo.svg";
import Cart from "@/images/icons/cart.svg";
import Like from "@/images/icons/like.svg";
import User from "@/images/icons/user.svg";
const ProductNavigation = () => {
  return (
    <li className={"d-flex justify-space-between"}>
      <li>Акции</li>
      <li>Мясо</li>
      <li>Птица</li>
      <li>Овощи, фрукты, ягоды</li>
      <li>Морепродукты</li>
      <li>Сыры</li>
      <li>Выпечка</li>
      <li>Орехи и сухофрукты</li>
      <li>Специи и соусы</li>
    </li>
  );
};
const DeliverySettings = () => {
  return (
    <ul
      className={deliverySettingsStyle.list + " d-flex justify-space-between"}
    >
      <li className={deliverySettingsStyle.list_item}>
        <button type="button">Доставка</button>
      </li>
      <li className={deliverySettingsStyle.list_item}>
        <button type="button">Самовывоз</button>
      </li>
      <li className={deliverySettingsStyle.list_item}>
        Куда: ул. Власихинская, дом 21
      </li>
      <li className={deliverySettingsStyle.list_item}>
        Когда: сегодня, 17.00-19.00
      </li>
      <li className={deliverySettingsStyle.list_item}>Сыктывкар</li>
    </ul>
  );
};

const Header = () => {
  return (
    <>
      <DeliverySettings />
      <header className={headerStyle.wrapper}>
        <Logo className={headerStyle.logo} />
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
      </header>
      <ProductNavigation />
    </>
  );
};

export default Header;
