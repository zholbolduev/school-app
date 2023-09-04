import React from "react";

const EditMode = ({ formData, handleInputChange, handleSaveClick }) => {
  return (
    <div className="profileWidgets__info editing">
      <h5>Основные данные</h5>
      <div className="profileWidgets__info_editBlock">
        <input
          name="fullName"
          value={formData.fullName}
          type="text"
          onChange={handleInputChange}
        />
        <input
          name="email"
          value={formData.email}
          type="text"
          onChange={handleInputChange}
        />
        <input
          name="schoolName"
          value={formData.schoolName}
          type="text"
          onChange={handleInputChange}
        />
        <input
          name="schoolNumber"
          value={formData.schoolNumber}
          type="text"
          onChange={handleInputChange}
        />
        <input
          name="schoolLocation"
          value={formData.schoolLocation}
          type="text"
          onChange={handleInputChange}
        />
        <input
          name="schoolGrade"
          value={formData.schoolGrade}
          type="text"
          onChange={handleInputChange}
        />
      </div>

      <button className="profileWidgets_btnSave" onClick={handleSaveClick}>
        Сохранить
      </button>
    </div>
  );
};

export default EditMode;
