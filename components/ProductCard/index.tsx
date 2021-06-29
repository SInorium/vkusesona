import React, { FC } from "react";
import Image from "next/image";

import Cart from "@/images/icons/cart.svg";
import Like from "@/images/icons/like.svg";
import styles from "./product_card.module.scss";

interface ProductTagProps {
  tagName?: string;
  discount?: number;
}

const ProductTag: FC<ProductTagProps> = (props) => {
  const { tagName, discount } = props;
  return (
    <div className={styles.product_card__tag_wrapper}>
      {tagName ? (
        <span
          data-color_tag={tagName}
          className={styles.product_card__tag + " text-xs--b"}
        >
          {tagName}
        </span>
      ) : null}
      {discount ? (
        <span
          data-color_discount={!!discount}
          className={styles.product_card__tag + " text-xs--b"}
        >
          {"-" + discount + "%"}
        </span>
      ) : null}
    </div>
  );
};

interface ProductCardProps {
  imageUrl: string;
  imageAlt: string;
  price: number;
  discount?: number;
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const { imageUrl, imageAlt, price, discount = 0 } = props;
  const discountPrice = ((100 - discount) * price) / 100;
  return (
    <div className={styles.product_card}>
      <Like className={styles.product_card__icon_like} />
      <ProductTag tagName={undefined} discount={35} />
      <Image
        className={styles.product_card__image}
        src={imageUrl}
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
