import { ChangeEvent, useState } from "react";
import "./LoginFeature.scss";
import { loginAction } from "./LoginAction";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/hooks/reduxHooks";
import eye from "../assets/eye.svg";
import eye_closed from "../assets/eyeslash.svg";
import { AiOutlineCheck } from "react-icons/ai";
import { useNavigate } from "react-router";
import { USER_STORAGE } from "../../../Shared/storage";

const LoginFeature = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.loginReducer);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);

  const logToSystem = () => {
    dispatch(loginAction(email, password));
    navigate("/");
  };

  return (
    <div className="loginFeature">
      <div className="loginFeature__input">
        <p>Почта</p>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          type="text"
        />
      </div>
      <div className="loginFeature__input">
        <p>Пароль</p>
        <div id="loginFeature__password">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            type={showPassword ? "text" : "password"}
          />
          <img
            onClick={() => setShowPassword(!showPassword)}
            src={showPassword ? eye : eye_closed}
            alt=""
          />
        </div>
      </div>
      <p className="loginFeature__warning">{error}</p>
      <div className="loginFeature__additional">
        <div className="loginFeature__additional_btns">
          <div className="loginFeature__additional_btns_remember-me">
            <div onClick={() => setRemember(!remember)}>
              {remember ? <AiOutlineCheck /> : null}
            </div>
            <p>Запомнить меня</p>
          </div>
          <div className="loginFeature__additional_btns_forgot-password">
            <p>Забыли пароль?</p>
          </div>
        </div>
        <div className="loginFeature__additional_no-account">
          <p onClick={() => navigate("/register-page")}>
            Ещё нет аккаунта? Регистрация
          </p>
        </div>
      </div>

      <button
        onClick={() => {
          // logToSystem();
          navigate("/");
        }}
      >
        Войти
      </button>
    </div>
  );
};

export default LoginFeature;
