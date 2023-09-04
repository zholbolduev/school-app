import CommentArea from "../../Features/CommentArea/CommentArea";
import "./Reply.scss";
import { useState } from "react";

interface IReplyProps {
  email: string;
  reply: string;
}

const Reply: React.FC<IReplyProps> = ({
  email,
  reply,
}: IReplyProps) => {
  const [showFullComment, setShowFullComment] =
    useState<boolean>(false);

  const fullComment = () => {
    if (reply.length >= 270) {
      if (!showFullComment) {
        return `${reply.slice(0, 269)}...`;
      } else {
        return reply;
      }
    } else {
      return reply;
    }
  };

  const [answer, setAnswer] = useState<boolean>(false);

  return (
    <div className="reply">
      <div className="reply__item">
        <img
          src="https://images.pexels.com/photos/18022547/pexels-photo-18022547.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="avatar"
        />
        <div className="reply__right">
          <div className="reply__information">
            <h5>{email}</h5>
            <p>{fullComment()}</p>
          </div>
          <div className="reply__actions">
            {reply.length >= 269 ? (
              <button
                onClick={() => setShowFullComment(!showFullComment)}
              >
                {showFullComment ? "Скрыть" : "Читать дальше"}
              </button>
            ) : null}
            <button
              className={answer ? "reply__actions_answer" : ""}
              disabled={answer ? true : false}
              onClick={() => setAnswer(true)}
            >
              Ответить
            </button>
          </div>
        </div>
      </div>
      {answer ? <CommentArea setAnswer={setAnswer} /> : null}
    </div>
  );
};

export default Reply;
