import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseAPI } from "../../Shared/baseAPI";
import image from "./assets/Image.svg";
import "./ProfileWidgets.scss";
import ViewMode from "./Mode/ViewMode";
import EditMode from "./Mode/EditMode";

const ProfileWidgets = () => {
  const storage: any = localStorage.getItem("user");
  const [user, setUser] = useState<object>({});
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    schoolName: "",
    schoolNumber: "",
    schoolLocation: "",
    schoolGrade: "",
  });

  const userStorage = JSON.parse(storage);
  const access = userStorage.access_token;

  const getUser = async () => {
    const Authorization = `Bearer ${access}`;
    const config = {
      headers: { Authorization },
    };

    try {
      const response = await axios.get(`${baseAPI}/user/personal-info`, config);
      setUser(response.data);
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = async () => {
    try {
      const Authorization = `Bearer ${access}`;
      const config = {
        headers: { Authorization },
      };

      await axios.put(`${baseAPI}/user/user/update`, formData, config);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="profileWidgets">
      <div className="profileWidgets_blockInfo">
        <div className="profileWidgets__img">
          <img src={image} alt="image" />
        </div>
        {isEditing ? (
          <EditMode
            formData={formData}
            handleInputChange={handleInputChange}
            handleSaveClick={handleSaveClick}
          />
        ) : (
          <ViewMode user={user} />
        )}
        <button className="profileWidgets_btnEdit" onClick={handleEditClick}>
          {isEditing ? "Отмена" : "Изменить"}
        </button>
      </div>
    </div>
  );
};

export default ProfileWidgets;
