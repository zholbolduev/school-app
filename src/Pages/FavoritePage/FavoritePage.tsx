import React from "react";
import "./FavoritePage.scss";
import Banner from "../../Widgets/Banner/Banner";
import FavoriteWidgets from "../../Widgets/FavoriteWidgets/FavoriteWidgets";

const FavoritePage: React.FC = () => {
  return (
    <div>
      <Banner />
      <FavoriteWidgets />
    </div>
  );
};

export default FavoritePage;
