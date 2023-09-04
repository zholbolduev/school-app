import axios from "axios";
import { AppDispatch } from "../../App/rootStore";
import { baseAPI, webSocketAPI } from "../../Shared/baseAPI";
import "./TestPage.scss";
import { useState } from "react";
import { useEffect } from "react";

const TestPage = () => {
  const [comments, setComments] = useState<any>([
    {
      id: 1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat laudantium rerum nihil? Nisi iste suscipit, eius recusandae culpa quasi dolores ipsa repellendus quaerat! Qui quidem quia eveniet rem, magni dolorem!",
    },
  ]);

  const [replies, setReplies] = useState<any>([
    {
      id: 1,
      reply:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat laudantium rerum nihil? Nisi iste suscipit, eius recusandae culpa quasi dolores ipsa repellendus quaerat! Qui quidem quia eveniet rem, magni dolorem!reply reply reply",
    },
  ]);

  const [answer, setAnswer] = useState<boolean>(false);

  const [myComment, setMyComment] = useState<string>("");
  const [myReply, setMyReply] = useState<string>("");

  const commentVideo = () => {
    const newComment = {
      id: Date.now(),
      comment: myComment,
    };
    const newComments = [...comments, newComment];

    setComments(newComments);
  };

  const replyComment = () => {
    const newReply = {
      id: Date.now(),
      reply: myReply,
    };
    const newReplies = [...replies, newReply];

    setReplies(newReplies);
  };


  

  // const fetchComms = async () => {
  //   const response = await axios.get(`${baseAPI}/comment/get/all`);

  //   console.log(response.data);
  // };

  return (
    <div className="test-comment">
      <div className="test-comment__wrapper">
        <div className="test-comment__textarea">
          <input
            onChange={(e) => setMyComment(e.target.value)}
            type="text"
          />
          <button onClick={commentVideo}>post</button>
        </div>

        <div className="test-comment__list">
          <div className="test-userComment__list">
            {comments.map((comment: any) => (
              <div key={comment.id} className="test-comment__item">
                <p>name</p>
                <p>{comment.comment}</p>
                <button onClick={() => setAnswer(true)}>
                  answer
                </button>
              </div>
            ))}

            {/* {answer ? (
              <div className="test-comment__textarea">
                <input
                  onChange={(e) => setMyReply(e.target.value)}
                  type="text"
                />
                <button onClick={replyComment}>post</button>
              </div>
            ) : null} */}

            <div className="test-userComment__replyList">
              {replies.map((reply: any) => (
                <div
                  key={reply.id}
                  className="test-comment__item pl60"
                >
                  <p>name</p>
                  <p>{reply.reply}</p>
                  <button onClick={() => setAnswer(true)}>
                    answer
                  </button>
                </div>
              ))}
              {answer ? (
                <div className="test-comment__textarea">
                  <input
                    onChange={(e) => setMyReply(e.target.value)}
                    type="text"
                  />
                  <button onClick={replyComment}>post</button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
