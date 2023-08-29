import "./Banner.scss";
import bannerImg from "./assets/bannerImg.svg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__wrapper">
        <div className="banner__wrapper_title">
          <h2>
            Программируй свое будущее с нашими онлайн курсами!
            Приступить к урокам
          </h2>
        </div>
        <div className="banner__wrapper_img">
          <img src={bannerImg} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
