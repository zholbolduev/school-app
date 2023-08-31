import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/hooks/reduxHooks";
import "./CreateFreeCourse.scss";
import { useState } from "react";
import { postFreeCourse } from "./PostFreeCourse";

const CreateFreeCourse = () => {
  //   {
  //     "name":"молоко",
  //     "description":"fromnt dev is",
  //     // "price": 11230.0,
  //     "courseType": "FREE",
  //     "duration": 990,
  //     "lectureQuantity": 10,
  //     "courseDirection": "MOBILE"
  // }

  const { success, error } = useAppSelector(
    (state) => state.createFreeCourseReducer
  );

  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [duration, setDuration] = useState<number>(0);
  const [lectureQuantity, setLectureQuantity] = useState<number>(0);
  const [courseDirection, setCourseDirection] = useState<string>("");

  return (
    <div className="createFreeCourse">
      <div className="createFreeCourse__wrapper">
        <div className="createFreeCourse__input">
          <p>Название</p>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div className="createFreeCourse__input">
          <p>Описание курса</p>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
        </div>
        <div className="createFreeCourse__input">
          <p>Длительность курса(в цифрах)</p>
          <input
            onChange={(e) => setDuration(Number(e.target.value))}
            type="text"
          />
        </div>
        <div className="createFreeCourse__input">
          <p>Количество лекций(в цифрах)</p>
          <input
            onChange={(e) =>
              setLectureQuantity(Number(e.target.value))
            }
            type="text"
          />
        </div>
        <div className="createFreeCourse__input">
          <p>Направление</p>
          <select
            onChange={(e) => {
              setCourseDirection(e.target.value);
            }}
          >
            <option value="BACKEND">Химия</option>
            <option value="MOBILE">Биология</option>
            <option value="FRONTEND">Математика</option>
          </select>
        </div>
        <button
          onClick={() =>
            dispatch(
              postFreeCourse(
                name,
                description,
                duration,
                lectureQuantity,
                courseDirection
              )
            )
          }
        >
          Создать курс
        </button>
        <p>
          {success} {error}
        </p>
      </div>
    </div>
  );
};

export default CreateFreeCourse;
