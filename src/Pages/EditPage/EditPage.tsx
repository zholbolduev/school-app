import { useEffect, useState } from "react";
import "./EditPage.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Shared/hooks/reduxHooks";
import { editCourse } from "./EditCourse";
import axios from "axios";
import { baseAPI } from "../../Shared/baseAPI";
import { useParams } from "react-router";

const EditPage = () => {
  //! redux
  const dispatch = useAppDispatch();
  const { response, error } = useAppSelector(
    (state) => state.newCourseReducer
  );

  const { id } = useParams();

  const [freeCourse, setFreeCourse] = useState<any>({});

  const getFreeCourse = async () => {
    const response = await axios.get(
      `${baseAPI}/user/course/get/${id}`
    );

    setFreeCourse(response.data);

    console.log(freeCourse);
  };

  useEffect(() => {
    getFreeCourse();
  }, []);

  //! Название курса
  const [name, setName] = useState<string>(freeCourse.name);
  //! Его описание
  const [description, setDescription] = useState<string>(
    freeCourse.description
  );
  //!Тип курса(платный - бесплатный)
  const [type, setType] = useState<string>(freeCourse.type);
  //! Длительность курса
  const [duration, setDuration] = useState<number>(
    freeCourse.duration
  );
  //! Количество видеолекций
  const [quantity, setQuantity] = useState<number>(
    freeCourse.lectureQuantity
  );
  //! Направление курса
  const [courseDirection, setCourseDirection] = useState<string>(
    freeCourse.courseDirection
  );

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setType(e.target.value);
  };

  const handleDurationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDuration(Number(e.target.value));
  };

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuantity(Number(e.target.value));
  };

  const handleCourseDirectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCourseDirection(e.target.value);
  };

  return (
    <div className="editCourse">
      <div className="editCourse__wrapper">
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          placeholder="name"
        />
        <input
          value={description}
          onChange={handleDescriptionChange}
          type="text"
          placeholder="description"
        />
        <select value={type} name="type" onChange={handleTypeChange}>
          <option value="FREE">FREE</option>
          <option value="PAID">PAID</option>
        </select>
        <input
          value={duration}
          onChange={handleDurationChange}
          type="text"
          placeholder="duration"
        />
        <input
          value={quantity}
          onChange={handleQuantityChange}
          type="text"
          placeholder="quantity"
        />
        <select
          value={courseDirection}
          onChange={handleCourseDirectionChange}
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
              editCourse(
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

export default EditPage;
