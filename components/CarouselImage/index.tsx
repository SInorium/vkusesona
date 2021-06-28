import React from "react";
import Image from "next/image";
import Carousel, { RenderArrowProps } from "react-elastic-carousel";

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
      <img className="slider-item__image" src={imgPath} alt="hero-image" />
      {/* <Image
        
        className="slider-item__image"
        width={1200}
        height={"auto"}
        src={imgPath}
        alt="img"
      /> */}
    </div>
  );
};

interface CarouselImageProps {
  imgUrls: string[];
}

const Arrow = ({ type, onClick, isEdge }: RenderArrowProps) => {
  const pointer = type === "PREV" ? "" : "";
  return (
    <button className="slider-button" onClick={onClick} disabled={isEdge}>
      {pointer}
      <Quot className="slider-icon" />
    </button>
  );
};

const CarouselImage: React.FC<CarouselImageProps> = (props) => {
  const { imgUrls } = props;
  return (
    <article className={"slider-wrapper"}>
      <Carousel
        className={"slider"}
        isRTL={false}
        itemsToShow={1}
        pagination={false}
        renderArrow={Arrow}
      >
        {imgUrls.map((item, id) => {
          return <CarouselItem imgPath={item} key={id} />;
        })}
      </Carousel>
    </article>
  );
};

export default CarouselImage;
