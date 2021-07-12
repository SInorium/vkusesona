import React from "react";
import Carousel, { RenderArrowProps } from "react-elastic-carousel";

import styles from "./product_category.module.scss";

import Quot from "@/images/icons/quot.svg";
import { NavigationItem } from "@/elements";

const Button = ({ type, onClick, isEdge }: RenderArrowProps) => {
  const pointer = type === "PREV" ? "" : "";
  return (
    <button className={styles.btn} onClick={onClick} disabled={isEdge}>
      {pointer}
      <Quot className={styles.icon} />
    </button>
  );
};

interface CarouselProductProps {
  children: Element[] | any;
  title: string;
  isHeading?: boolean;
}

const CarouselProduct: React.FC<CarouselProductProps> = (props) => {
  const { title, isHeading } = props;
  return (
    <div className={styles.category_product__wrapper}>
      <div className={styles.category_description__wrapper}>
        <h2 className={styles.category_description__title}>{title}</h2>
        {isHeading ? <NavigationItem text={"все"} /> : null}
      </div>
      <Carousel
        isRTL={false}
        itemsToShow={5}
        pagination={false}
        renderArrow={Button}
        itemPadding={[0, 20, 0, 0]}
      >
        {props.children}
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
