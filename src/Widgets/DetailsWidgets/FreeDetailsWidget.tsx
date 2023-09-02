import {
  useAppDispatch,
  useAppSelector,
} from "../../Shared/hooks/reduxHooks";
import { useEffect, useState } from "react";
import "./DetailsWidget.scss";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import {
  getDetailedCourse,
  patchFreeCourse,
} from "./DetailedCourseActions";
import { deleteVideoLecture } from "../AdminWidgets/CreateVideoLecture/PostVideoLecture";
import { IVideoLecture } from "../AdminWidgets/CreateVideoLecture/VideoLectureSlice";
import VideoLecturesPopUp from "../VideoLecturesPopUp/VideoLecturesPopUp";

export const FreeDetailsWidget = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: freeCourse, success } = useAppSelector(
    (state) => state.detailedCourseReducer
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailedCourse(id));
    setName(freeCourse.name);
    setDescription(freeCourse.description);
    setLectureQuantity(freeCourse.lectureQuantity);
  }, [freeCourse.name]);

  const [patch, setPatch] = useState<boolean>(true);
  const [popUp, setPopUp] = useState<boolean>(false);

  const [name, setName] = useState<string>(freeCourse.name);
  const [description, setDescription] = useState<string>(
    freeCourse.description
  );
  const [lectureQuantity, setLectureQuantity] = useState<number>(
    freeCourse.lectureQuantity
  );

  return (
    <div className="freeDetails">
      <div className="freeDetails__information">
        <div className="freeDetails__information_title">
          <textarea
            onChange={(e) => setName(e.target.value)}
            disabled={patch}
            value={name}
          />
          {patch ? (
            <button onClick={() => setPatch(false)}>
              Редактировать
            </button>
          ) : (
            <button
              onClick={() => {
                setPatch(true);
                dispatch(
                  patchFreeCourse(
                    id,
                    name,
                    description,
                    lectureQuantity
                  )
                );
              }}
            >
              Сохранить
            </button>
          )}
        </div>
        <div className="freeDetails__information_description">
          <p>Описание:</p>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            disabled={patch}
            value={description}
          />
        </div>
        <div className="freeDetails__information_lecture">
          <p>Количество лекций:</p>
          <textarea
            onChange={(e) =>
              setLectureQuantity(Number(e.target.value))
            }
            disabled={patch}
            value={lectureQuantity}
          />
        </div>

        <p>{success}</p>
      </div>

      <div className="freeDetails__playlist">
        <div className="freeDetails__playlist_header">
          <h4>Видео Лекции</h4>
          <button onClick={() => setPopUp(true)}>Добавить</button>
          {popUp ? (
            <VideoLecturesPopUp
              courseId={id}
              courseVideoLectures={freeCourse.videoLectures}
              setPopUp={setPopUp}
            />
          ) : null}
        </div>
        {freeCourse.videoLectures.length !== 0 ? (
          freeCourse.videoLectures.map((lecture: IVideoLecture) => (
            <div
              key={lecture.id}
              className="freeDetails__playlist_item"
            >
              <img
                onClick={() => navigate(`/watch/${lecture.id}`)}
                src="https://images.pexels.com/photos/2385044/pexels-photo-2385044.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="video-preview"
              />
              <div className="playlist__item">
                <div className="playlist__item_title">
                  <h5>{lecture.title}</h5>
                  <div
                    onClick={() =>
                      dispatch(deleteVideoLecture(lecture.id, id))
                    }
                    className="playlist__item_icon"
                  >
                    <BsFillTrashFill />
                  </div>
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
