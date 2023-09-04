export interface IComment {
  id: number;
  email: string;
  comment: string;
}

export interface ICommentSlice {
  replies: IComment[];
  comments: IComment[];
}
