import React from "react";
import Carousel, { RenderArrowProps } from "react-elastic-carousel";
import styles from "./product_category.module.scss";

import QuotIcon from "@/images/icons/quot";
import { NavigationItem } from "@/elements";

const Button = ({ type, onClick, isEdge }: RenderArrowProps) => {
  const pointer = type === "PREV" ? "" : "";
  return (
    <button className={styles.btn} onClick={onClick} disabled={isEdge}>
      {pointer}
      <QuotIcon strokeColor={"green"} strokeWidth={2} className={styles.icon} />
    </button>
  );
};

interface CarouselProductProps {
  children: Element[] | any;
  title: string;
  isLink: boolean;
  params?: any;
}

const breakPoints = [
  //mobile
  { width: 343, itemsToShow: 2, itemsToScroll: 2, itemPadding: [0, 7, 0, 0] },
  //tablet_md
  { width: 658, itemsToShow: 3 },
  // tablet_lg
  { width: 700, itemsToShow: 3.1, outerSpacing: 0 },
  //desctop_sm
  { width: 900, itemsToShow: 5, outerSpacing: 0 },
];

const CarouselProduct: React.FC<CarouselProductProps> = (props) => {
  const { title, isLink, params } = props;
  return (
    <div className={styles.category_product__wrapper}>
      <div className={styles.category_description__wrapper}>
        <h2 className={styles.category_description__title}>{title}</h2>
        {isLink ? (
          <NavigationItem
            className={styles.category_description__link}
            text={"все"}
          />
        ) : null}
      </div>
      <Carousel
        breakPoints={params ? params : breakPoints}
        isRTL={false}
        // itemsToShow={5}
        itemPosition={"START"}
        pagination={false}
        renderArrow={Button}
        outerSpacing={0}
        itemPadding={[0, 20, 0, 0]}
      >
        {props.children}
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
