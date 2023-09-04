import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/hooks/reduxHooks";
import "./CreateVideoLecture.scss";
import { useState } from "react";
import { postVideoLecture } from "./PostVideoLecture";
import { IVideoLecture } from "./VideoLectureSlice";
import { useNavigate } from "react-router";

const CreateVideoLecture = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const dispatch = useAppDispatch();
  const { error, success } = useAppSelector(
    (state) => state.videoLectureReducer
  );

  const { data: freeCourse } = useAppSelector(
    (state) => state.detailedCourseReducer
  );

  return (
    <div className="createVideoLecture">
      <div className="createVideoLecture__wrapper">
        <div className="createVideoLecture__input">
          <p>Название</p>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </div>
        <div className="createVideoLecture__input">
          <p>Описание курса</p>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
        </div>

        <div className="createVideoLecture__input">
          <p>Ссылка(embed)</p>
          <input
            onChange={(e) => setLink(e.target.value)}
            type="text"
          />
        </div>
        <button
          onClick={() =>
            dispatch(postVideoLecture(title, description, link))
          }
        >
          Создать курс
        </button>
        <p>
          {success} {error}
        </p>
      </div>

      <div className="createVideoLecture__playlist">
        <div className="createVideoLecture__playlist_header">
          <h4>Видео Лекции</h4>
        </div>
        {freeCourse.videoLectures.length !== 0 ? (
          freeCourse.videoLectures.map((lecture: IVideoLecture) => (
            <div
              key={lecture.id}
              className="createVideoLecture__playlist_item"
            >
              <img
                onClick={() => navigate(`/watch/${lecture.id}`)}
                src="https://images.pexels.com/photos/2385044/pexels-photo-2385044.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="video-preview"
              />
              <div className="playlist__item">
                <div className="playlist__item_title">
                  <h5>{lecture.title}</h5>
                </div>
                <p>{lecture.description}</p>
              </div>
            </div>
          ))
        ) : (
          <h6>Видео лекций нет</h6>
        )}
      </div>
    </div>
  );
};

export default CreateVideoLecture;
