import React from "react";
import Carousel from "react-elastic-carousel";
import { CarouselItem, CarouselButton } from "./components";

interface CarouselImageProps {
  imgUrls: string[];
}

const CarouselImage: React.FC<CarouselImageProps> = (props) => {
  const { imgUrls } = props;
  return (
    <article className={"slider-wrapper"}>
      <Carousel
        className={"slider"}
        isRTL={false}
        itemsToShow={1}
        pagination={false}
        renderArrow={CarouselButton}
      >
        {imgUrls.map((item, id) => {
          return <CarouselItem imgPath={item} key={id} />;
        })}
      </Carousel>
    </article>
  );
};

export default CarouselImage;
