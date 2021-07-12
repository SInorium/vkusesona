import React from "react";
import Image from "next/image";

interface CarouselImageProps {
  isPagination: boolean;
  slideIndex: number;
  slidesLength: number;
  preview: string;
}

const CarouselImage: React.FC<CarouselImageProps> = (props) => {
  const { isPagination, slideIndex, slidesLength, preview } = props;
  return (
    <div className="slider-item">
      <Image
        className="slider-item__image"
        width={800}
        height={600}
        src={preview || ""}
        alt="img"
      />
      {isPagination && (
        <span className="slider-item__pagination">
          {slideIndex + 1} / {slidesLength}
        </span>
      )}
    </div>
  );
};

export default CarouselImage;
