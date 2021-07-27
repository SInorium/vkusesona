import React from "react";
import Carousel from "react-elastic-carousel";
import Link from "next/link";

import {
  Header,
  Container,
  CarouselProduct,
  ProductCard,
  Footer,
} from "@/components";
import { ProductCardMainProps } from "types";
import {
  commentsData,
  productCards,
  reccomendCard,
  tagsMock,
} from "../../utils/mock.js";
import {
  CarouselButton,
  CarouselImage,
} from "components/CarouselImage/components";
import {
  AboutWrapper,
  RatingView,
  RecommendationProductCard,
  Tag,
  Button,
  NavigationItem,
  Switcher,
} from "@/elements";

import LikeIcon from "@/images/icons/like";
import QuotIcon from "@/images/icons/quot";

import Cart from "@/images/icons/cart.svg";

import styles from "./styles.module.scss";
import ProductDescription from "./components/ProductDescription";
import Comments from "./components/Comments";

interface StaticProps {
  params: {
    id: string;
  };
}

export async function getStaticPaths() {
  const paths = productCards.map((product) => ({
    params: { id: product.path },
  }));
  return { paths, fallback: false };
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
  const [activeAboutPage, handleAboutPage] = React.useState("description");
  const [isLiked, handleLike] = React.useState(false);

  const aboutPages = [
    { label: "О товаре", value: "description" },
    { label: "Отзывы", value: "comments" },
  ];
  const { image_path__main, imageAlt, price, discount = 0, tagName } = product;

  const carouselBreakPoints = [
    // { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 1, itemsToScroll: 1 },
    { width: 1440, itemsToShow: 1, itemsToScroll: 1, outerSpacing: 0 },
  ];

  const discountPrice = ((100 - discount) * price) / 100;

  const slides = [image_path__main, image_path__main, image_path__main];

  return (
    <>
      <Header />
      <Container className={styles.product_container}>
        <article className={styles.product_wrapper}>
          <Carousel
            breakPoints={carouselBreakPoints}
            className={"product_slider"}
            isRTL={false}
            itemsToShow={1}
            // pagination={false}
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
          <div className={styles.product_slider__button_wrapper}>
            <Link href={"#"}>
              <a>
                <Button type={"transparent"} width={40} height={40}>
                  <QuotIcon
                    strokeColor={"green"}
                    fillColor={"none"}
                    strokeWidth={2}
                    transformValue={"rotate(180deg)"}
                  />
                </Button>
              </a>
            </Link>
            <Button
              type={"transparent"}
              width={40}
              height={40}
              onClick={() => handleLike(!isLiked)}
            >
              <LikeIcon
                isLiked={isLiked}
                strokeColor={"green"}
                fillColor={"white"}
                strokeWidth={2}
              />
            </Button>
          </div>
          <div className={styles.product_card_wrapper}>
            <div className={styles.product_information__wrapper}>
              <NavigationItem
                className={styles.product__navigation_item}
                revert
                text={"Свинина"}
              />
              <div className={styles.product_tag}>
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
              <div
                className={"d-flex"}
                style={{ marginTop: "0.5rem", gap: "0.5rem" }}
              >
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
                <Button
                  type={"transparent"}
                  height={56}
                  width={56}
                  onClick={() => handleLike(!isLiked)}
                >
                  <LikeIcon
                    isLiked={isLiked}
                    strokeWidth={2}
                    strokeColor={"green"}
                    fillColor={"white"}
                  />
                </Button>
              </div>
              <p className={styles.product_price_help + " text-sm dark-gray"}>
                Точная стоимость товара зависит от веса и будет известна после
                сборки заказа.
              </p>
            </div>
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
          <div className={styles.description_wrapper__desktop}>
            <AboutWrapper
              font_size={25}
              about_title={"О товаре"}
            ></AboutWrapper>
            <ProductDescription />
            <AboutWrapper
              font_size={25}
              about_title={`Отзывы (${commentsData.length})`}
            >
              <Comments />
            </AboutWrapper>
          </div>
          <div className={styles.description_wrapper__mobile}>
            <Switcher
              values={aboutPages}
              handleValue={handleAboutPage}
              activeValue={activeAboutPage}
            />
            {activeAboutPage === "description" ? (
              <ProductDescription />
            ) : (
              <>
                <AboutWrapper
                  font_size={25}
                  about_title={`Отзывы (${commentsData.length})`}
                >
                  <Comments />
                </AboutWrapper>
              </>
            )}
          </div>
          <section className={styles.product_carousel}>
            <CarouselProduct isLink={false} title={"С этим товаром покупают"}>
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
            </CarouselProduct>
            <CarouselProduct isLink={false} title={"Подходящие рецепты"}>
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
            </CarouselProduct>
          </section>
        </article>
      </Container>
      <Footer />
    </>
  );
};

export default Product;
