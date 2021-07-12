import React from "react";
import styles from "./tag.module.scss";

interface TagProps {
  tagName?: string;
  discount?: number;
  price?: number;
  className?: string;
}

export const Tag: React.FC<TagProps> = (props) => {
  const { tagName, discount, price, className } = props;
  return (
    // <article className={className ? className : styles.tag_wrapper}>
    <>
      {tagName ? (
        <span data-color_tag={!!tagName} className={styles.tag + " text-xs--b"}>
          {tagName}
        </span>
      ) : null}
      {discount && discount !== 0 ? (
        <span
          data-color_discount={!!discount}
          className={styles.tag + " text-xs--b"}
        >
          {"-" + discount + "%"}
        </span>
      ) : null}
      {price ? (
        <span data-color_tag={price} className={styles.tag + " text-xs--b"}>
          {price}
        </span>
      ) : null}
    </>
  );
};

export default Tag;
