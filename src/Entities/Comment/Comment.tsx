import "./Comment.scss";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { useState } from "react";
import Reply from "../Reply/Reply";
import CommentArea from "../../Features/CommentArea/CommentArea";
import { useAppSelector } from "../../Shared/hooks/reduxHooks";

interface ICommentProps {
  email: string;
  comment: string;
}

const Comment: React.FC<ICommentProps> = ({
  email,
  comment,
}: ICommentProps) => {
  //! массив из комментариев

  const { replies } = useAppSelector((state) => state.commentReducer);

  //! отображение текста и его скрытие в случае, если символов больше 270
  const [showFullComment, setShowFullComment] =
    useState<boolean>(false);

  const fullComment = () => {
    if (comment.length >= 270) {
      if (!showFullComment) {
        return `${comment.slice(0, 269)}...`;
      } else {
        return comment;
      }
    } else {
      return comment;
    }
  };

  const [showReplies, setShowReplies] = useState<boolean>(false);

  const [answer, setAnswer] = useState<boolean>(false);
  return (
    <div className="comment">
      <div className="comment__item">
        <img
          src="https://images.pexels.com/photos/18022547/pexels-photo-18022547.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="avatar"
        />
        <div className="comment__item_right">
          <div className="comment__information">
            <h5>{email}</h5>
            <p>{fullComment()}</p>
          </div>
          <div className="comment__actions">
            {comment.length >= 269 ? (
              <button
                onClick={() => setShowFullComment(!showFullComment)}
              >
                {showFullComment ? "Скрыть" : "Читать дальше"}
              </button>
            ) : null}
            <button
              disabled={answer ? true : false}
              className={answer ? "comment__actions_answer" : ""}
              onClick={() => setAnswer(true)}
            >
              Ответить
            </button>
          </div>
        </div>
      </div>

      <div className="comment__area">
        {answer ? (
          <CommentArea
            setAnswer={setAnswer}
            setShowReplies={setShowReplies}
          />
        ) : null}
      </div>

      {showReplies ? (
        <div className="reply__list">
          {replies.map((reply) => (
            <Reply
              key={reply.id}
              email={reply.email}
              reply={reply.comment}
            />
          ))}
        </div>
      ) : null}

      <button
        onClick={() => setShowReplies(!showReplies)}
        className="comment__showReplies"
      >
        {showReplies ? (
          <MdKeyboardArrowUp className="comment__arrow-icon" />
        ) : (
          <MdKeyboardArrowDown className="comment__arrow-icon" />
        )}
        {showReplies ? "Скрыть" : "Показать"} ответы
      </button>
    </div>
  );
};

export default Comment;
