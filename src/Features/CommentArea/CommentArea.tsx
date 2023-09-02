import {
  useAppDispatch,
  useAppSelector,
} from "../../Shared/hooks/reduxHooks";
import { commentSlice } from "../../Widgets/VideoPlayer/CommentSlice";
import "./CommentArea.scss";
import { useState } from "react";

interface ICommentAreaProps {
  setShowReplies?: (boolean: boolean) => void;
  setAnswer: (boolean: boolean) => void;
}

const CommentArea = ({
  setShowReplies,
  setAnswer,
}: ICommentAreaProps) => {
  const showReps = () => {
    if (setShowReplies) {
      setShowReplies(true);
    }
  };

  const [myReply, setMyReply] = useState<string>("");

  const dispatch = useAppDispatch();
  const { replies } = useAppSelector((state) => state.commentReducer);

  const publicReply = () => {
    if (!myReply.trim()) return;

    const newReply = {
      id: Date.now(),
      email: "static@gmail.com",
      comment: myReply,
    };

    const newReplies = [...replies, newReply];

    setMyReply("");
    dispatch(commentSlice.actions.setReplies(newReplies));
  };

  return (
    <div className="commentArea">
      <div className="commentArea__top">
        <img
          src="https://images.pexels.com/photos/18022547/pexels-photo-18022547.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="avatar"
        />
        <textarea
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMyReply(e.target.value)
          }
          placeholder="Оставить комментарий.."
          value={myReply}
        />
      </div>
      <div className="commentArea__bottom">
        <button
          onClick={() => setAnswer(false)}
          className="commentArea__cancel"
        >
          Отменить
        </button>
        <button
          disabled={myReply ? false : true}
          onClick={() => {
            publicReply();
            showReps();
            setAnswer(false);
          }}
          className={
            myReply
              ? "commentArea__btn-enabled"
              : "commentArea__btn-disabled"
          }
        >
          Оставить комментарий
        </button>
      </div>
    </div>
  );
};

export default CommentArea;
