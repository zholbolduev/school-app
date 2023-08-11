import "./User.scss";

const User = () => {
  return (
    <div>
      <div className="blockUser">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
        >
          <circle cx="75" cy="75" r="75" fill="#CCCCCC" />
        </svg>
        <div className="blockInfoUser">
          <span className="nameUser">Name</span>
          <span className="typeUser">student</span>
        </div>
      </div>
    </div>
  );
};

export default User;
