import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Cart from "@/images/icons/cart.svg";
import Like from "@/images/icons/like.svg";
import styles from "./product_card.module.scss";
import { ProductCardProps } from "types";
import { Tag } from "@/elements";

const ProductCard: FC<ProductCardProps> = (props) => {
  const { image_path__mini, imageAlt, price, discount = 0, tagName } = props;
  const discountPrice = ((100 - discount) * price) / 100;
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card__tag_wrapper}>
        <Tag tagName={tagName} discount={discount} />
        <Like className={styles.product_card__icon_like} />
      </div>
      <Image
        className={styles.product_card__image}
        src={image_path__mini}
        alt={imageAlt}
        width={224}
        height={167}
      />
      <div className={styles.product_card__description_wrapper + " text-sm"}>
        <p className={styles.product_card__description}>
          Паштет «Индюшечка» 200 г
        </p>
        <p className={styles.product_card__price + " text-sm"}>
          {discount === 0 ? (
            <span>{price + " ₽"} / шт</span>
          ) : (
            <>
              <span style={{ marginRight: "0.25rem" }}>
                {discountPrice + " ₽"} / шт
              </span>{" "}
              <span className={"text-xs gray cross"}>{price + " ₽"}</span>
            </>
          )}
        </p>
      </div>
      <button
        className={styles.product_card__button + " text-sm--b"}
        type="submit"
      >
        В корзину <Cart className={styles.product_card__button_icon} />
      </button>
    </div>
  );
};

export default ProductCard;
