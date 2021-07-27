import React from "react";
import { InputSearch, Switcher } from "@/elements";

import Clock from "@/images/icons/clock.svg";
import Location from "@/images/icons/location.svg";
import Send from "@/images/icons/send.svg";

import deliverySettingsStyle from "./delivery-settings.module.scss";

interface DeliverySettingsProps {
  deliveryWay: {
    label: string;
    value: string;
  }[];
}

const DeliverySettings: React.FC<DeliverySettingsProps> = (props) => {
  const [activeDeliveryWay, handleDeliveryWay] = React.useState("delivery");
  const { deliveryWay } = props;
  const isDeliveryWay = activeDeliveryWay === "delivery"; // это под модалку заготовочка
  return (
    <ul className={deliverySettingsStyle.list + " d-flex text-xs"}>
      <li className={deliverySettingsStyle.list_item}>
        <Switcher
          handleValue={(deliveryWay: string) => handleDeliveryWay(deliveryWay)}
          activeValue={activeDeliveryWay}
          values={deliveryWay}
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

export default DeliverySettings;
