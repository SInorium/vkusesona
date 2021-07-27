import React from "react";
import Image from "next/image";

import styles from "./category_card.module.scss";

interface CategoryCardProps {
  title: string;
  preview: string;
  listItems: string[];
}

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  const { title, preview, listItems = [] } = props;
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.list}>
        {listItems.map((item) => {
          return (
            item.length > 0 && (
              <li className={styles.list_item} key={item}>
                <a className={styles.link} href="$">
                  {item}
                </a>
              </li>
            )
          );
        })}
      </ul>
      <div className={styles.image_wrapper}>
        <Image
          src={preview}
          alt={title}
          layout={"fill"}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default CategoryCard;
