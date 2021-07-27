import React from "react";
import Image from "next/image";

import styles from "./category_carousel_item.module.scss";

interface CategoryCarouselItemProps {
  title: string;
  image: string;
}

const CategoryCarouselItem: React.FC<CategoryCarouselItemProps> = (props) => {
  const { title, image } = props;
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.image_wrapper}>
        <Image
          src={image}
          alt={title}
          layout={"fill"}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default CategoryCarouselItem;
