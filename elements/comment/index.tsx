import { RatingView } from "@/elements";
import React from "react";
import { CommentProps } from "@/types";
import comment from "./comment.module.scss";

const Comment: React.FC<CommentProps> = (props) => {
  const { author, date, text, rating } = props;
  return (
    <article className={comment.wrapper}>
      <p className={comment.heading}>
        <span className={comment.author + " text-sm--b"}>{author}</span>
        <span className={comment.date + " text-sm"}>{date}</span>
      </p>
      <RatingView
        fillColor={"#067935"}
        emptyColor={"#BDDCCA"}
        ratingValue={rating}
        size={14}
      />
      <p className={comment.text + " text-sm"}>{text}</p>
    </article>
  );
};

export default Comment;
