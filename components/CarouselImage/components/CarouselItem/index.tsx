import React from "react";

import Image from "next/image";
import { CarouselItemProps } from "types";
import QuotIcon from "@/images/icons/quot";

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
          Подробнее <QuotIcon className="icon" strokeColor={"green"} />
        </a>
      </div>
      {/* <div
        className="slider-item__bg"
        style={{
          backgroundImage: preview,
          backgroundPosition: "left, bottom",
          backgroundRepeat: "no-repeat",
        }}
      ></div> */}
      <div className="image__wrapper">
        <img
          className="slider-item__image"
          width={713}
          height={404}
          src={preview}
          // src={`${process.env.PUBLIC_URL + preview}`}
          alt="img"
        />
      </div>
    </div>
  );
};

export default CarouselItem;
