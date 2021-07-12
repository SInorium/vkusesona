import React from "react";
import Image from "next/image";
import { Tag } from "@/elements";
import { RecommendationProductCardType } from "@/types";

import recomendProduct from "./recommendationProductCard.module.scss";

const RecommendationProductCard: React.FC<RecommendationProductCardType> = (
  props
) => {
  const { recommendImg, title, price, tag } = props;
  return (
    <article className={recomendProduct.wrapper}>
      <Image
        className={recomendProduct.image}
        src={recommendImg}
        alt={title}
        width={80}
        height={80}
      />
      <div className={recomendProduct.description_wrapper}>
        <span className={recomendProduct.title + " text-sm"}>{title}</span>
        <div className={recomendProduct.price_wrapper}>
          <Tag className={recomendProduct.recomend_tag} tagName={tag} />
          <span className={recomendProduct.price + " text-sm--b"}>
            {price} ₽
          </span>
        </div>
      </div>
    </article>
  );
};

export default RecommendationProductCard;
