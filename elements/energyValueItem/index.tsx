import React from "react";
import { ProductEnergyValueType } from "types/product";

import energy_value_item from "./energy_value_item.module.scss";

const EnergyValueItem: React.FC<ProductEnergyValueType> = (props) => {
  const { title, value } = props;
  return (
    <article className={energy_value_item.wrapper}>
      <span className={energy_value_item.title}>{title}</span>
      <span className={energy_value_item.value}>{value} г</span>
    </article>
  );
};

export default EnergyValueItem;
