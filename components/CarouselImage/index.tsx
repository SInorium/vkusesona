import React from "react";
import Carousel from "react-elastic-carousel";
import { CarouselItem, CarouselButton } from "./components";

interface CarouselSlideProps {
  title: string;
  description: string;
  preview: string;
}
interface CarouselImageProps {
  slides: CarouselSlideProps[];
  isPagination: boolean;
}

const CarouselImage: React.FC<CarouselImageProps> = (props) => {
  const { slides, isPagination } = props;
  return (
    <article className={"slider-wrapper"}>
      <Carousel
        className={"slider"}
        isRTL={false}
        itemsToShow={1}
        pagination={false}
        renderArrow={CarouselButton}
        itemPadding={[0]}
      >
        {slides.map((slide, id) => {
          return (
            <CarouselItem
              slide={slide}
              key={id}
              slideIndex={id + 1}
              slidesLength={slides.length}
              isPagination={isPagination}
            />
          );
        })}
      </Carousel>
    </article>
  );
};

export default CarouselImage;
