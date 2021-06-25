import React from "react";
import { InputSearch, Switcher } from "@/elements";

import headerStyle from "./header.module.scss";
import deliverySettingsStyle from "./delivery-settings.module.scss";
import productNavigationStyle from "./product-navigation.module.scss";

import Logo from "@/images/logo.svg";
import Cart from "@/images/icons/cart.svg";
import Like from "@/images/icons/like.svg";
import User from "@/images/icons/user.svg";
import Clock from "@/images/icons/clock.svg";
import Send from "@/images/icons/send.svg";
import Location from "@/images/icons/location.svg";
interface ProductNavigationProps {
  category: string[];
}

const ProductNavigation: React.FC<ProductNavigationProps> = (props) => {
  const { category } = props;
  return (
    <ul className={productNavigationStyle.list + " d-flex text-xs"}>
      {category.map((categoryName, id) => (
        <li className={productNavigationStyle.list_item} key={id}>
          {categoryName}
        </li>
      ))}
    </ul>
  );
};
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

const DeliverySettings = () => {
  const [activeDeliveryWay, handleDeliveryWay] = React.useState("delivery");
  const isDeliveryWay = activeDeliveryWay === "delivery"; // это под модалку заготовочка

  return (
    <ul
      className={
        deliverySettingsStyle.list + " d-flex justify-space-between text-xs"
      }
    >
      <li className={deliverySettingsStyle.list_item}>
        <Switcher
          handleDeliveryWay={(deliveryWay: any) =>
            handleDeliveryWay(deliveryWay)
          }
          activeDeliveryWay={activeDeliveryWay}
          deliveryWay={deliveryWay}
        />
      </li>
      <li className={deliverySettingsStyle.list_item}>
        <Send className={deliverySettingsStyle.icon} />
        <span className="text-sm--b primary-yellow-gray">Куда:&nbsp;</span> ул.
        Власихинская, дом 21
      </li>
      <li className={deliverySettingsStyle.list_item}>
        <Clock className={deliverySettingsStyle.icon} />
        <span className="text-sm--b primary-yellow-gray">Когда:&nbsp;</span>
        сегодня, 17.00-19.00
      </li>
      <li className={deliverySettingsStyle.list_item}>
        <Location className={deliverySettingsStyle.icon} /> Сыктывкар
      </li>
    </ul>
  );
};
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
  return (
    <header className={headerStyle.header}>
      <DeliverySettings />
      <div className={headerStyle.wrapper}>
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
      </div>
      <ProductNavigation category={ProductCategory} />
    </header>
  );
};

export default Header;
