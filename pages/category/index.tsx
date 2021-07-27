import React from "react";
import { Header, Container, Footer, CarouselProduct } from "@/components";
import CategoryCard from "./components/CategoryCard";
import CategoryCarouselItem from "./components/CategoryCarouselItem";

import styles from "./category.module.scss";
import { categoryCardData } from "utils/mock";

const Category = () => {
  const carouselParams = [
    //mobile
    { width: 343, itemsToShow: 2, itemsToScroll: 2, itemPadding: [0, 7, 0, 0] },
    //tablet_md
    { width: 658, itemsToShow: 3 },
    // tablet_lg
    { width: 700, itemsToShow: 3.6, outerSpacing: 0 },
    //desctop_sm
    { width: 900, itemsToShow: 5, outerSpacing: 0, itemPadding: [0, 20, 0, 0] },
  ];

  const categoryCarouselData = [
    { label: "Для веганов", preview: "/images/product_card_mini7.png" },
    { label: "Любителям рыбы", preview: "/images/product_card_mini8.png" },
    { label: "Кето-диета", preview: "/images/product_card_mini2.png" },
    { label: "Без сахара", preview: "/images/product_card_mini5.png" },
    { label: "Без глютена", preview: "/images/product_card_mini7.png" },
  ];

  return (
    <>
      <Header />
      <Container>
        <>
          <CarouselProduct
            params={carouselParams}
            isLink={false}
            title={"Все индивидуально"}
          >
            {categoryCarouselData.map((item, key) => {
              return (
                <CategoryCarouselItem
                  key={key}
                  title={item.label}
                  image={item.preview}
                />
              );
            })}
          </CarouselProduct>
          <h2 className={styles.category_title}>Выберите категорию</h2>
          <article className={styles.card_wrapper}>
            {categoryCardData.map((item) => {
              return (
                <CategoryCard
                  key={item.title}
                  title={item.title}
                  preview={item.preview}
                  listItems={item.categoryList}
                />
              );
            })}
          </article>
        </>
      </Container>
      <Footer />
    </>
  );
};

export default Category;
