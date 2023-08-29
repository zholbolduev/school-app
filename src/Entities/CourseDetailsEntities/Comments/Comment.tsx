import React from "react";
import { IComments } from "../../../Widgets/CommentWidgets/types";
import { FaRegUserCircle } from "react-icons/fa";
import "./Comments.scss";

interface ICommentProps {
  comment: IComments;
  replies: IComments[];
}

export const Comment: React.FC<ICommentProps> = ({
  comment,
  replies,
}) => {
  return (
    <div className="comment">
      <div className="comment-icon-container">
        <FaRegUserCircle
          style={{ fontSize: "32px", color: "#2B59C3" }}
        />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{comment.createdAt}</div>
        </div>
        <div className="comment-text">{comment.body}</div>
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment key={reply.id} comment={reply} replies={[]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
