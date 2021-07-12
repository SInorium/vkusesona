import React from "react";

import Image from "next/image";
import { CarouselItemProps } from "types";
import Quot from "@/images/icons/quot.svg";

const CarouselItem: React.FC<CarouselItemProps> = (props) => {
  const {
    slide: { title, description, preview },
  } = props;
  return (
    <div className="slider-item">
      <div className="slider-item__text-wrapper">
        <h2 className="slider-item__title">{title}</h2>
        <p className="slider-item__description">{description}</p>
        <a className="slider-item__link text-sm--b" href="#">
          Подробнее <Quot className="icon" />
        </a>
      </div>
      <Image
        className="slider-item__image"
        width={713}
        height={404}
        src={preview || ""}
        alt="img"
      />
    </div>
  );
};

export default CarouselItem;
