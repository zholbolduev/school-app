import { ChangeEvent, useState } from "react";
import "./AddCourse.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Shared/hooks/reduxHooks";
import { postCourse } from "./PostCourse";

const AddCourse = () => {
  //! redux
  const dispatch = useAppDispatch();
  const { response, error } = useAppSelector(
    (state) => state.newCourseReducer
  );

  //! Название курса
  const [name, setName] = useState<string>("");
  //! Его описание
  const [description, setDescription] = useState<string>("");
  //!Тип курса(платный - бесплатный)
  const [type, setType] = useState<string>("FREE");
  //! Длительность курса
  const [duration, setDuration] = useState<number>(0);
  //! Количество видеолекций
  const [quantity, setQuantity] = useState<number>(0);
  //! Направление курса
  const [courseDirection, setCourseDirection] = useState<string>("");

  return (
    <div className="addCourse">
      <div className="addCourse__wrapper">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
          type="text"
          placeholder="description"
        />
        <select
          value={type}
          name="type"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setType(e.target.value)
          }
        >
          <option value="FREE">FREE</option>
          <option value="PAID">PAID</option>
        </select>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDuration(Number(e.target.value))
          }
          type="text"
          placeholder="duration"
        />
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuantity(Number(e.target.value))
          }
          type="text"
          placeholder="quantity"
        />
        <select
          value={courseDirection}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setCourseDirection(e.target.value)
          }
        >
          <option value="Химия">Химия</option>
          <option value="Физика">Физика</option>
          <option value="Биология">Биология</option>
          <option value="Математика">Математика</option>
          <option value="Русский">Русский</option>
          <option value="Общий ОРТ(Математика + Русский)">
            Общий ОРТ(Математика + Русский)
          </option>
          <option value="История">История</option>
        </select>
        <button
          onClick={() =>
            dispatch(
              postCourse(
                name,
                description,
                type,
                duration,
                quantity,
                courseDirection
              )
            )
          }
        >
          Создать
        </button>
      </div>
      <p>{response !== "" ? response : error}</p>
    </div>
  );
};

export default AddCourse;
