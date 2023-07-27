import { ChangeEvent, useState } from "react";
import "./LoginFeature.scss";
import { loginAction } from "./LoginAction";
import { useAppDispatch } from "../../../Shared/hooks/reduxHooks";

const LoginFeature = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="loginFeature">
      <div className="loginFeature__wrapper">
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
        />
        <button
          onClick={() => dispatch(loginAction(email, password))}
        >
          Войти
        </button>
      </div>
    </div>
  );
};

export default LoginFeature;
