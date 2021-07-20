import React from "react";

interface LikeIconProps {
  className?: string;
}

const LikeIcon: React.FC<LikeIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M1 6.02447C1 9.68217 9 16 9 16C9 16 17 9.68217 17 6.02447C17 2.36678 14.3333 1.17527 13 1.03672C12.0667 0.89818 10.6 1.03674 9 3.53061C7.4 1.03673 5.93333 0.89818 5 1.03672C3.66667 1.17527 1 2.36678 1 6.02447Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LikeIcon;
