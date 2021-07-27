import React from "react";
import { Container, Footer, Header, ProductCard } from "@/components";
import { NavigationItem, Pagination, Select, Tabs } from "@/elements";

import { NavigationCategoryProps } from "types/category";
import { categoryCardData, productCards, productCategory } from "utils/mock";

import styles from "./catalogue.module.scss";
import Link from "next/link";
import QuotIcon from "@/images/icons/quot";

interface StaticProps {
  params: {
    id: string;
  };
}

export async function getStaticPaths() {
  const paths = productCategory.map((category) => ({
    params: { id: category.path },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: StaticProps) {
  const category = productCategory.find((item) => {
    return item.path === params.id;
  });
  return {
    props: { category },
  };
}

const options = ["Mangoes", "Apples", "Oranges"];
productCards;
const Catalogue: React.FC<NavigationCategoryProps> = ({ category }) => {
  const { name, path } = category;

  const [activeTab, handleTab] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePage = (value: number) => {
    setCurrentPage(value);
  };
  return (
    <>
      <Header />
      <Container>
        <>
          <div className={styles.title_wrapper}>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.select_wrapper}>
              <div className={styles.product_counter}>200 товаров</div>
              <Select title={"Тип питания"} options={options} />
              <Select title={"Наиболее популярные"} options={options} />
            </div>
          </div>
          {categoryCardData.map((item) => {
            if (item.title === name) {
              return (
                <div className={styles.tab_wrapper}>
                  {item.categoryList.map((tab) => (
                    <div
                      className={styles.tab}
                      data-active={activeTab === tab}
                      onClick={() => handleTab(tab)}
                    >
                      {tab}
                    </div>
                  ))}
                </div>
              );
            } else {
              null;
            }
          })}
          {/* {categoryCardData.map((item) => {
            item.title === name ? (
              <Tabs
                tabs={item.categoryList}
                activeTab={activeTab}
                handleTabChange={(tab: any) => handleTab(tab)}
              />
            ) : null;
          })} */}
          <div className={styles.card__wrapper}>
            {productCards.map((product, id) => {
              return (
                <Link
                  href={`products/${product.path}`}
                  key={product.imageAlt && id}
                >
                  <a>
                    <ProductCard
                      image_path__mini={product.image_path__mini}
                      imageAlt={product.imageAlt}
                      price={product.price}
                      discount={product.discount}
                      tagName={product.tagName}
                    />
                  </a>
                </Link>
              );
            })}
          </div>
          <div className={styles.pagination_wrapper}>
            <Pagination
              totalPages={15}
              page={currentPage}
              handleChangePage={handlePage}
            />
          </div>
          <div className={styles.description}>
            <h3>Купить фермерское мясо</h3>
            <p>
              На нашем сайте мы предлагаем вам попробовать фермерское мясо. Из
              этого питательного продукта получаются вкусные и всеми любимые
              блюда: рагу, котлеты, отбивные, рулеты и паштеты. Приготовленные с
              мясной начинкой запеканки и пироги способны украсить даже
              праздничный стол. Напоминаем, что натуральное мясо содержит
              витамины, белки и минеральные вещества, которые необходимы для
              правильного развития и функционирования организма человека.
            </p>
            <div className={styles.handle_wrapper}>
              <span className={styles.handle_desc}>Показать все описание</span>
              <QuotIcon
                strokeColor={"green"}
                strokeWidth={2}
                transformValue={"rotate(90deg)"}
              />
            </div>
          </div>
        </>
      </Container>
      <Footer />
    </>
  );
};

export default Catalogue;
