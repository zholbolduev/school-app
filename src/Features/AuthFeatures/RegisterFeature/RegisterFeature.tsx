import { useAppDispatch } from "../../../Shared/hooks/reduxHooks";
import { registerAction } from "./RegisterAction";
import "./RegisterFeature.scss";
import { ChangeEvent, useState } from "react";

const RegisterFeature = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <div className="loginFeature">
      <div className="loginFeature__wrapper">
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder="password"
          type="text"
        />
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="email"
          type="text"
        />
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          placeholder="password"
          type="text"
        />{" "}
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
          placeholder="password"
          type="text"
        />
        <button
          onClick={() =>
            dispatch(
              registerAction(name, email, password, confirmPassword)
            )
          }
        >
          Войти
        </button>
      </div>
    </div>
  );
};

export default RegisterFeature;
