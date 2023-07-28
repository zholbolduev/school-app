import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/hooks/reduxHooks";
import { registerAction } from "./RegisterAction";
import "./RegisterFeature.scss";
import { ChangeEvent, useState } from "react";
import eye from "../assets/eye.svg";
import eye_closed from "../assets/eyeslash.svg";
import { AiOutlineCheck } from "react-icons/ai";
import { useNavigate } from "react-router";
import { USER_STORAGE } from "../../../Shared/storage";

const RegisterFeature = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error } = useAppSelector((state) => state.registerReducer);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);
  const [agreement, setAgreement] = useState<boolean>(false);
  const [mailing, setMailing] = useState<boolean>(false);

  const logToSystem = () => {
    dispatch(
      registerAction(
        name,
        email,
        password,
        confirmPassword,
        agreement
      )
    );
    if (USER_STORAGE === null) return;
    navigate("/");
  };

  return (
    <div className="registerFeature">
      <div className="registerFeature__input">
        <p>Имя</p>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          type="text"
        />
      </div>
      <div className="registerFeature__input">
        <p>Почта</p>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          type="text"
        />
      </div>

      <div className="registerFeature__input">
        <p>Пароль</p>
        <div id="registerFeature__password">
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

      <div className="registerFeature__input">
        <p>Потвердите Пароль</p>
        <div id="registerFeature__password">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
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

      <p className="registerFeature__warning">{error}</p>
      <div className="registerFeature__additional">
        <div className="registerFeature__additional__agreement">
          <div onClick={() => setAgreement(!agreement)}>
            {agreement ? <AiOutlineCheck /> : null}
          </div>
          <p>Я даю согласие на обработку моих персональных данных</p>
        </div>
        <div className="registerFeature__additional__agreement">
          <div onClick={() => setMailing(!mailing)}>
            {mailing ? <AiOutlineCheck /> : null}
          </div>
          <p>
            Да,я согласен(а) получить информацию о новых поступлениях
            , акциях и распродажах
          </p>
        </div>

        <div className="registerFeature__additional__remember-me">
          <div onClick={() => setRemember(!remember)}>
            {remember ? <AiOutlineCheck /> : null}
          </div>{" "}
          <p>Запомнить меня</p>
        </div>
        <div className="registerFeature__additional__has-account">
          <p onClick={() => navigate("/login-page")}>
            Уже есть аккаунт? Войти
          </p>
        </div>
      </div>

      <button onClick={logToSystem}>Регистрация</button>
    </div>
  );
};

export default RegisterFeature;
