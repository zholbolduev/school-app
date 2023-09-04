import {
  useAppDispatch,
  useAppSelector,
} from "../../Shared/hooks/reduxHooks";
import "./VideoPlayer.scss";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { getDetailedVideoLecture } from "./VideoPlayerActions";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import Comment from "../../Entities/Comment/Comment";
import { IComment } from "./types";

const VideoPlayer = () => {
  //! айди для видеолекции достаем из адресной строки с помощью useParams
  const { id } = useParams();
  //! redux - работа с реактом и работа с глобальными стейтами
  const dispatch = useAppDispatch();
  const { data: videoLecture } = useAppSelector(
    (state) => state.videoPlayerReducer
  );
  //! достаем данные при первом переходе на страницу
  useEffect(() => {
    dispatch(getDetailedVideoLecture(id));
  }, []);

  //! вытаскиваем значение из textarea в блоке .comment__textarea
  const [myComment, setMyComment] = useState<string>("");
  //! массив из комментариев
  const [comments, setComments] = useState<IComment[]>([
    {
      id: 1,
      email: "alibek@gmail.com",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aperiam optio odio, velit cupiditate rerum fugit tenetur provident ducimus ullam explicabo consectetur quo laboriosam quia ea deserunt magnam blanditiis aut? Omnis aspernatur beatae ut fugiat rem expedita officia repellat sapiente dolores molestiae eius magnam minus tenetur perferendis ducimus hic nulla, doloribus pariatur laudantium ipsam alias blanditiis atque? At, ipsa dignissimos? Earum inventore porro perspiciatis, pariatur eum nesciunt magnam dignissimos quidem dicta quos qui eligendi, ducimus a natus error possimus repellat modi exercitationem harum tempora cupiditate excepturi omnis sint nemo. Laudantium. Laboriosam autem, deleniti necessitatibus iste incidunt pariatur alias. Explicabo, harum. Esse ipsam ratione cum, architecto eaque voluptate! Quod deserunt libero ipsa temporibus quos esse cumque, enim quisquam qui, aliquam vitae. Qui maxime ex, ullam dolores eveniet quae, eaque placeat voluptatibus sed enim magnam possimus commodi? Et distinctio adipisci eius dicta corrupti, possimus fugit nam. Minus quisquam dolorum itaque sed impedit.",
    },
  ]);

  //! создаем комментарий и публикуем в массиве
  const publicComment = () => {
    if (!myComment.trim()) return;

    const newComment = {
      id: Date.now(),
      email: "static@gmail.com",
      comment: myComment,
    };

    const newComments = [...comments, newComment];

    setMyComment("");
    setComments(newComments);
  };

  return (
    <div className="videoPlayer">
      <div className="videoPlayer__video">
        <iframe
          src={videoLecture.link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="video__information">
          <h3>{videoLecture.title}</h3>

          <div className="video__information_actions">
            <button>Пройти тест</button>

            <div className="information__action">
              <div>
                <AiOutlineHeart />
              </div>
              <div className="information__action">
                <AiOutlineShareAlt />
              </div>
            </div>
          </div>

          <p>{videoLecture.description}</p>
        </div>

        <div className="comment__section">
          <div className="comment__textarea">
            <div className="comment__textarea_top">
              <img
                src="https://images.pexels.com/photos/18022547/pexels-photo-18022547.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="avatar"
              />
              <textarea
                onChange={(
                  e: React.ChangeEvent<HTMLTextAreaElement>
                ) => setMyComment(e.target.value)}
                placeholder="Оставить комментарий.."
                value={myComment}
              />
            </div>
            <div className="comment__textarea_bottom">
              <button
                disabled={myComment ? false : true}
                onClick={publicComment}
                className={
                  myComment
                    ? "comment__textarea_btn-enabled"
                    : "comment__textarea_btn-disabled"
                }
              >
                Оставить комментарий
              </button>
            </div>
          </div>

          <div className="comment__list">
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                email={comment.email}
                comment={comment.comment}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="videoPlayer__playlist"></div>
    </div>
  );
};

export default VideoPlayer;
