import { ChangeEvent, useState } from "react";
import "./AddCourse.scss";
import { useAppDispatch } from "../../Shared/hooks/reduxHooks";
import { postCourse } from "./PostCourse";

const AddCourse = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<number>(11);
  const [duration, setDuration] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);

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
        <div>
          <button onClick={() => setType(0)}>free</button>
          <button onClick={() => setType(1)}>paid</button>
        </div>
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
        <button
          onClick={() =>
            dispatch(
              postCourse(name, description, type, duration, quantity)
            )
          }
        >
          Создать
        </button>
      </div>
    </div>
  );
};

export default AddCourse;
