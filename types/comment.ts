export type CommentProps = {
  author: string;
  date: string;
  text: string;
  rating: number;
};

export type CommentsDataProps = {
  comment: CommentProps[];
};
