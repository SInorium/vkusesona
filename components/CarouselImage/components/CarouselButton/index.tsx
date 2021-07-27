import React from "react";
import { RenderArrowProps } from "react-elastic-carousel";

import QuotIcon from "@/images/icons/quot";

const Arrow = ({ type, onClick, isEdge }: RenderArrowProps) => {
  const pointer = type === "PREV" ? "" : "";
  return (
    <button className="slider-button" onClick={onClick} disabled={isEdge}>
      {pointer}
      <QuotIcon className="slider-icon" />
    </button>
  );
};

export default Arrow;
