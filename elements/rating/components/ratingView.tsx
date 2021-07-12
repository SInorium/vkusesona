import React from "react";
import StarIcon from "@/images/icons/star";
import style from "./rating.module.scss";

export interface RatingProps {
  ratingValue: number;
  stars?: number;
  size?: number;
  fillColor?: string;
  emptyColor?: string;
  className?: "" | any;
  children?: React.ReactNode;
  transition?: boolean;
}

const RatingView: React.FC<RatingProps> = (props) => {
  const {
    ratingValue,
    stars = 5,
    size = 25,
    fillColor = "#FFD84F",
    emptyColor = "#cccccc",
    className = "",
    children,
  } = props;

  return (
    <span className={className}>
      {[...Array(stars)].map((_, index) => (
        <span
          key={index}
          style={{
            color: ratingValue && ratingValue > index ? fillColor : emptyColor,
            width: size,
            height: size,
            display: "inline-flex",
          }}
        >
          {children || <StarIcon size={size} />}
        </span>
      ))}
    </span>
  );
};

export default RatingView;
