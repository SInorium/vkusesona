import React from "react";

interface LikeIconProps {
  className?: string;
  strokeColor: string;
  strokeWidth?: number;
  fillColor?: string;
  productId?: string;
  isLiked?: boolean | (() => void);
  // handleLike?(value: boolean): void | undefined;
}

const LikeIcon: React.FC<LikeIconProps> = (props) => {
  const {
    fillColor = "white",
    className,
    strokeColor,
    productId,
    strokeWidth,
    // handleLike,
    isLiked,
  } = props;
  // const favoritesProducts = Array();
  // const isAlreadyAdded = favoritesProducts.find(
  //   (product) => product.id === productId
  // );

  return (
    <svg
      className={className}
      width="18"
      height="17"
      viewBox="0 0 18 17"
      xmlns="http://www.w3.org/2000/svg"
      // onClick={() => handleLike(!isLiked)}
      data-active={isLiked}
    >
      <path
        style={isLiked ? { fill: "green" } : { fill: fillColor }}
        fill={fillColor}
        className={className}
        d="M1 6.02447C1 9.68217 9 16 9 16C9 16 17 9.68217 17 6.02447C17 2.36678 14.3333 1.17527 13 1.03672C12.0667 0.89818 10.6 1.03674 9 3.53061C7.4 1.03673 5.93333 0.89818 5 1.03672C3.66667 1.17527 1 2.36678 1 6.02447Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        data-active={isLiked}
      />
    </svg>
  );
};

export default LikeIcon;
