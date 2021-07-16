import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Image from "next/image";

import { Header, Container, CarouselProduct, ProductCard } from "@/components";
import { ProductCardMainProps } from "types";
import {
  commentsData,
  energyValues,
  productCards,
  reccomendCard,
  tagsMock,
} from "../../utils/mock.js";
import {
  CarouselButton,
  CarouselItem,
  CarouselImage,
} from "components/CarouselImage/components";
import {
  AboutWrapper,
  EnergyValueItem,
  RatingView,
  RecommendationProductCard,
  Tag,
  Comment,
  Button,
  NavigationItem,
} from "@/elements";

import styles from "./styles.module.scss";
import Document from "@/images/icons/document.svg";
import Plus from "@/images/icons/plus.svg";
import Quot from "@/images/icons/quot.svg";
import Like from "@/images/icons/like";
import Cart from "@/images/icons/cart.svg";

export async function getStaticPaths() {
  const paths = productCards.map((product) => ({
    params: { id: product.path },
  }));
  return { paths, fallback: false };
}

interface StaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps({ params }: StaticProps) {
  const product = productCards.find((item) => {
    return item.path === params.id;
  });
  return {
    props: { product },
  };
}

const Product: React.FC<ProductCardMainProps> = ({ product }) => {
  const { image_path__main, imageAlt, price, discount = 0, tagName } = product;

  const discountPrice = ((100 - discount) * price) / 100;

  const slides = [image_path__main, image_path__main, image_path__main];

  return (
    <>
      <Header />
      <Container className={styles.product_container}>
        <article className={styles.product_wrapper}>
          <Carousel
            className={"product_slider"}
            isRTL={false}
            itemsToShow={1}
            pagination={false}
            renderArrow={CarouselButton}
            itemPadding={[0, 0]}
            preventDefaultTouchmoveEvent
          >
            {slides.map((img, id) => {
              return (
                <CarouselImage
                  key={id}
                  preview={img}
                  slideIndex={id}
                  slidesLength={slides.length}
                  isPagination
                />
              );
            })}
          </Carousel>
          <div className={styles.product_card_wrapper}>
            <NavigationItem revert text={"Свинина"} />
            <div
              style={{ position: "relative", marginTop: "1.5rem" }}
              className={"d-inline-flex"}
            >
              {tagsMock.map((item, id) => {
                return (
                  <Tag
                    tagName={item.tagName}
                    discount={item.discount}
                    key={id}
                  />
                );
              })}
            </div>
            <div className={"d-flex"} style={{ marginTop: "0.5rem" }}>
              <RatingView transition={false} ratingValue={5} size={14} />
              <span className={"text-sm"}>{commentsData.length} отзывов</span>
            </div>
            <h3 style={{ margin: 0 }}>{imageAlt}</h3>
            <p className={styles.product_price + " text-lg"}>
              {discount === 0 ? (
                <span>{price + " ₽"} / шт</span>
              ) : (
                <>
                  <span className={styles.product_price__discont}>
                    {discountPrice + " ₽"} / шт
                  </span>{" "}
                  <span className={"text-lg gray cross"}>{price + " ₽"}</span>
                </>
              )}
            </p>
            <div className={styles.product_scores + " text-sm green"}>
              +15 бонусных баллов
            </div>
            <div className={styles.product_button__wrapper}>
              <Button type={"primary"} width={236}>
                <span>В корзину </span>
                <Cart />
              </Button>
              <Button type={"transparent"} height={56} width={56}>
                <Like />
              </Button>
            </div>
            <p className={styles.product_price_help + " text-sm dark-gray"}>
              Точная стоимость товара зависит от веса и будет известна после
              сборки заказа.
            </p>
            <div className={styles.product_recommendation__wrapper}>
              {reccomendCard.map((recProduct, id) => {
                return (
                  <RecommendationProductCard
                    title={recProduct.title}
                    price={recProduct.price}
                    tag={recProduct.tagName}
                    recommendImg={recProduct.recommendImg}
                    key={id}
                  />
                );
              })}
            </div>
          </div>
        </article>
        <article className={styles.product_description}>
          <AboutWrapper about_title={""}>
            <h3>О товаре</h3>
          </AboutWrapper>
          <AboutWrapper about_title={"Описание"}>
            <p>
              Продукт крупнокусковой относится к категории Б, не содержит в
              составе кости и какие-либо примеси. Из говяжьей шеи <br />
              получаются очень наваристые и вкусные бульоны.
            </p>
            <br />
            <p>
              При длительной термической обработке получается нежной, мягкой с
              бархатистой текстурой. Также шею можно запекать, <br /> тушить и
              получать из нее великолепный фарш.
            </p>
          </AboutWrapper>
          <AboutWrapper
            about_title={"Энергетическая ценность на 100 г продукта"}
          >
            <div className="d-flex" style={{ gap: "0.75rem" }}>
              {energyValues.map((energyItem, id) => {
                return (
                  <EnergyValueItem
                    title={energyItem.title}
                    value={energyItem.value}
                    key={id}
                  />
                );
              })}
            </div>
          </AboutWrapper>
          <AboutWrapper about_title={"Условия хранения"}>
            <p>
              При температуре от -2 до +4 °С. После вскрытия хранится 24 часа
              при температуре от +2 до +5 °С. <br /> В замороженном виде 6
              месяцев.
            </p>
          </AboutWrapper>
          <AboutWrapper about_title={"Срок годности"}>
            <p>
              При температуре от -2 до +4 °С. После вскрытия хранится 24 часа
              при температуре от +2 до +5 °С. <br /> В замороженном виде 6
              месяцев.
            </p>
          </AboutWrapper>
          <AboutWrapper about_title={"Вес / объем"}>
            <p>1 530 г</p>
          </AboutWrapper>
          <AboutWrapper about_title={"Сертифкаты и лицензии"}>
            <div className={styles.product_document__wrapper}>
              <div className={styles.product_document + " text-sm"}>
                <Document />
                <a href="#" target={"_self"}>
                  Ветеринарское свидетельство
                </a>
              </div>
              <div className={styles.product_document + " text-sm"}>
                <Document />
                <a href="#" target={"_self"}>
                  Ветеринарское свидетельство
                </a>
              </div>
            </div>
          </AboutWrapper>
          <AboutWrapper
            font_size={25}
            about_title={`Отзывы (${commentsData.length})`}
          >
            <div className={styles.product_comment__wrapper}>
              {commentsData.map((comment, id) => {
                return (
                  <Comment
                    author={comment.author}
                    date={comment.date}
                    rating={comment.rating}
                    text={comment.text}
                    key={id}
                  />
                );
              })}
            </div>
          </AboutWrapper>
          <section>
            <CarouselProduct
              isHeading={false}
              title={"С этим товаром покупают"}
            >
              {productCards.map((product, id) => {
                return (
                  <a
                    href={`products/${product.path}`}
                    key={product.imageAlt && id}
                  >
                    <ProductCard
                      image_path__mini={product.image_path__mini}
                      imageAlt={product.imageAlt}
                      price={product.price}
                      discount={product.discount}
                      tagName={product.tagName}
                    />
                  </a>
                );
              })}
            </CarouselProduct>
            <CarouselProduct isHeading={false} title={"Подходящие рецепты"}>
              {productCards.map((product, id) => {
                return (
                  <a
                    href={`products/${product.path}`}
                    key={product.imageAlt && id}
                  >
                    <ProductCard
                      image_path__mini={product.image_path__mini}
                      imageAlt={product.imageAlt}
                      price={product.price}
                      discount={product.discount}
                      tagName={product.tagName}
                    />
                  </a>
                );
              })}
            </CarouselProduct>
          </section>
        </article>
      </Container>
    </>
  );
};

export default Product;
