import LoginEntity from "../../../Entities/AuthEntites/LoginEntity/LoginEntity";
import "./LoginPage.scss";
import background from "./assets/background.svg";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="loginPage__wrapper">
        <img src={background} alt="background" />
      </div>
      <LoginEntity />
    </div>
  );
};

export default LoginPage;
