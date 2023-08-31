import Banner from "../../Widgets/Banner/Banner";
import ContactBtn from "../../Widgets/ContactBtn/ContactBtn";
import RecommendList from "../../Widgets/RecommendList/RecommendList";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <RecommendList />
      <ContactBtn />
    </div>
  );
};

export default HomePage;
