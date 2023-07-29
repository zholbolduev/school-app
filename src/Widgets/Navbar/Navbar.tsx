import "./Navbar.scss";
import avatar from "./assets/avatar.svg";
import bell from "./assets/bell.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__actions">
        <img src={bell} alt="bell" />
        <div className="navbar__actions_avatar">
          <img src={avatar} alt="avatar" />
          <span>Tetiana</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
