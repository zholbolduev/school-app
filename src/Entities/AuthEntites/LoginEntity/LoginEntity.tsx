import LoginFeature from "../../../Features/AuthFeatures/LoginFeature/LoginFeature";
import "./LoginEntity.scss";
import logo from "../../../Shared/assets/logo-black.svg";

const LoginEntity = () => {
  return (
    <div className="loginEntity">
      <img className="loginEntity__logo" src={logo} alt="logo" />
      <div className="loginEntity__wrapper">
        <h2>Вход</h2>
        <LoginFeature />
      </div>
    </div>
  );
};

export default LoginEntity;
