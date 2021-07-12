import React from "react";
import style from "./switcher.module.scss";

interface SwitcherProps {
  activeDeliveryWay: string;
  deliveryWay: deliveryWayType[];
  handleDeliveryWay(value: string): void;
}

interface deliveryWayType {
  label: string;
  value: string;
}

const Switcher: React.FC<SwitcherProps> = (props) => {
  const { deliveryWay, activeDeliveryWay, handleDeliveryWay } = props;
  return (
    <>
      {deliveryWay.map(({ label, value }, id) => {
        const active = value === activeDeliveryWay;
        return (
          <button
            key={id}
            data-active={active}
            className={style.switcher}
            onClick={() => handleDeliveryWay(value)}
          >
            {label}
          </button>
        );
      })}
    </>
  );
};

export default Switcher;
