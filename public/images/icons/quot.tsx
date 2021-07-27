import React from "react";

interface QuotIconProps {
  strokeColor: string;
  fillColor?: string;
  strokeWidth?: number;
  className?: string;
  transformValue?: string;
}

const QuotIcon: React.FC<QuotIconProps> = (props) => {
  const { fillColor, strokeColor, strokeWidth, className, transformValue } =
    props;
  return (
    <svg
      style={{ transform: transformValue }}
      className={className}
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M1 1L6 6L1 11"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default QuotIcon;
