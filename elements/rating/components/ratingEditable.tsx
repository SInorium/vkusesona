import React, { useState } from "react";
import StarIcon from "@/images/icons/star";

import { RatingProps } from "./ratingView";

interface EditableRatingProps extends RatingProps {
  onClick: (index: number) => void;
  transition?: boolean;
}

const RatingEditable: React.FC<EditableRatingProps> = (props) => {
  const {
    ratingValue,
    onClick,
    stars = 5,
    size = 25,
    transition = false,
    fillColor = "#FFD84F",
    emptyColor = "#cccccc",
    className = "",
    children,
  } = props;

  const [hoverValue, setHoverValue] = useState(ratingValue || null);

  return (
    <span className={className}>
      {[...Array(stars)].map((_, index) => (
        <span
          key={index}
          onMouseEnter={() => setHoverValue(index + 1)}
          onMouseLeave={() => setHoverValue(null)}
          onClick={() => onClick && onClick(index + 1)}
          aria-hidden="true"
          style={{
            color:
              (hoverValue || ratingValue) && (hoverValue || ratingValue) > index
                ? fillColor
                : emptyColor,
            width: size,
            height: size,
            cursor: "pointer",
            transition: transition ? "color 0.2s ease-in-out 0s" : "",
            display: "inline-flex",
          }}
        >
          {children || <StarIcon size={size} />}
        </span>
      ))}
    </span>
  );
};

export default RatingEditable;
