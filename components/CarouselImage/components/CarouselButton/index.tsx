import React from "react";
import { RenderArrowProps } from "react-elastic-carousel";

import Quot from "@/images/icons/quot.svg";

const Arrow = ({ type, onClick, isEdge }: RenderArrowProps) => {
  const pointer = type === "PREV" ? "" : "";
  return (
    <button className="slider-button" onClick={onClick} disabled={isEdge}>
      {pointer}
      <Quot className="slider-icon" />
    </button>
  );
};

export default Arrow;
