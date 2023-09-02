import axios from "axios";
import { baseAPI } from "../../../Shared/baseAPI";
import { AppDispatch } from "../../../App/rootStore";
import { IContact, contactListSlice } from "./ContactListSlice";

export const downloadContactList = async () => {
  try {
    const response = await axios.get(
      `${baseAPI}/admin/feedbacks/download`,
      {
        responseType: "blob",
      }
    );

    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "contact_list.xlsx";
    downloadLink.click();
  } catch (error) {
    console.error("Error downloading contact list:", error);
  }
};

export const getContacts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(contactListSlice.actions.setLoading());

    const response = await axios.get<IContact[]>(
      `${baseAPI}/admin/get/feedbacks`
    );

    dispatch(contactListSlice.actions.setData(response.data));
  } catch (error: any) {
    dispatch(contactListSlice.actions.setError(error.message));
  }
};
