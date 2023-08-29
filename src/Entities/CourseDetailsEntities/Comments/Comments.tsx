import { CommentForm } from "./CommentForm";
import "./Comments.scss";
import { FC, useState, useEffect } from "react";
import {
  createComment,
  getComments, deleteComment,
} from "../../../Widgets/CommentWidgets/CommentsApi";
import { IComments } from "../../../Widgets/CommentWidgets/types";
import { Comment } from "./Comment";

interface IUser {
  currentUserId: string;
}

export const Comments: FC<IUser> = ({ currentUserId }) => {
  const [commentsArray, setCommentsArray] = useState<IComments[]>([]);
  const rootComments = commentsArray.filter((comment) => {
    return comment.parentId === null;
  });

  const getReplies = (commentId: string): IComments[] => {
    return commentsArray
      .filter((comment) => comment.parentId === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() -
          new Date(b.createdAt).getTime()
        );
      });
  };

  const addComment = (text: string, parentId: null) => {
    createComment(text, parentId).then((comment) => {
      setCommentsArray([comment, ...commentsArray]);
    });
  };

    useEffect(() => {
        getComments()
        .then(data => {
            setCommentsArray(data);
        })
    }, []);

    console.log(currentUserId);
    console.log(commentsArray);

    return (
        <div className="comments">
            <h2>Комментарии</h2>
            <CommentForm handleSubmit={addComment} />
            <div className="commentsContainer">
                {
                    rootComments.map(rootComment => (
                        <Comment 
                            key={rootComment.id} 
                            comment={rootComment}
                            replies={getReplies(rootComment.id)}/>
                    ))
                }
            </div>
        </div>
    );
}