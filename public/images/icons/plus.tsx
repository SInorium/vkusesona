import React from "react";

interface PlusIconProps {
  strokeColor?: string;
  strokeWidth?: number;
  width: number;
  height: number;
}

const PlusIcon: React.FC<PlusIconProps> = (props) => {
  const { strokeColor, strokeWidth, width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7H13M7 1L7 13"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PlusIcon;
