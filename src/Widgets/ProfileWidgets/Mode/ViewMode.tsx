import React from "react";

const ViewMode = ({ user }) => {
  return (
    <div className="profileWidgets__info">
      <h5>Основные данные</h5>
      <div className="profileWidgets__info_viewBlock">
        <div>{user.fullName}</div>
        <div>{user.email}</div>
        <div>{user.schoolName}</div>
        <div>{user.schoolNumber}</div>
        <div>{user.schoolLocation}</div>
        <div>{user.schoolGrade}</div>
      </div>
    </div>
  );
};

export default ViewMode;
