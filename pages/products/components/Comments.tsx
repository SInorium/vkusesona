import React from "react";
import { Comment } from "@/elements";

import PlusIcon from "@/images/icons/plus";
import { commentsData } from "utils/mock";

import styles from "../styles.module.scss";
const Comments = () => {
  return (
    <div className={styles.product_comment__wrapper}>
      <div className={styles.product_comment__item}>
        Оставить отзыв{" "}
        <PlusIcon
          strokeColor={"green"}
          strokeWidth={2}
          width={10}
          height={10}
        />
      </div>
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
  );
};

export default Comments;
