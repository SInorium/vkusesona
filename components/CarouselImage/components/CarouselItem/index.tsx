import React from "react";

import Image from "next/image";

import Quot from "@/images/icons/quot.svg";

interface CarouselItemProps {
  imgPath: string;
}

const CarouselItem: React.FC<CarouselItemProps> = (props) => {
  const { imgPath } = props;
  return (
    <div className="slider-item">
      <div className="slider-item__text-wrapper">
        <h2 className="slider-item__title">Масленичная скидка на все блины</h2>
        <p className="slider-item__description">
          Каждый третий блин бесплатно, <br /> даже если он вышел комом
        </p>
        <a className="slider-item__link text-sm--b" href="#">
          Подробнее <Quot className="icon" />
        </a>
      </div>
      {/* <img className="slider-item__image" src={imgPath} alt="hero-image" /> */}
      <Image
        className="slider-item__image"
        width={713}
        height={404}
        src={imgPath}
        alt="img"
      />
    </div>
  );
};

export default CarouselItem;
