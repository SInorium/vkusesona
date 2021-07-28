import React from "react";

import { Container, Header } from "@/components";
import {
  RatingEditable,
  RatingView,
  Tag,
  Comment,
  RecommendationProductCard,
  EnergyValueItem,
  AboutWrapper,
  Button,
  Pagination,
} from "@/elements";
import {
  tagsMock,
  commentsData,
  reccomendCard,
  energyValues,
} from "utils/mock";

import Cart from "@/images/icons/cart.svg";

const Elements = () => {
  const [rating, setRating] = React.useState(3);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePage = (value: number) => {
    setCurrentPage(value);
  };

  const comments = commentsData;
  return (
    <>
      <Header />
      <Container>
        <>
          <h1>ELEMENTS</h1>
          <Button type="primary">
            В корзину
            <Cart />
          </Button>
          <RatingView transition={false} ratingValue={rating} size={30} />
          <RatingEditable
            onClick={handleRating}
            ratingValue={rating}
            size={25}
          />
          <div className={"d-inline-flex"}>
            {tagsMock.map((item, id) => {
              return (
                <Tag tagName={item.tagName} discount={item.discount} key={id} />
              );
            })}
          </div>
          <div>
            <AboutWrapper about_title={`Отзывы (${comments.length})`}>
              {comments.map((comment, id) => {
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
            </AboutWrapper>
          </div>
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
          <Pagination
            page={currentPage}
            totalPages={12}
            handleChangePage={handlePage}
          />
        </>
      </Container>
    </>
  );
};

export default Elements;
