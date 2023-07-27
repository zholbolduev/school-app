import RegisterEntity from "../../../Entities/AuthEntites/RegisterEntity/RegisterEntity";
import "./RegisterPage.scss";
import background from "../LoginPage/assets/background.svg";

const RegisterPage = () => {
  return (
    <div className="registerPage">
      <div className="registerPage__wrapper">
        <img src={background} alt="background" />
      </div>
      <RegisterEntity />
    </div>
  );
};

export default RegisterPage;
