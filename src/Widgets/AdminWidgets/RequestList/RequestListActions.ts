import axios from "axios";
import { baseAPI } from "../../../Shared/baseAPI";
import { IRequest, requestListSlice } from "./RequestListSlice";
import { AppDispatch } from "../../../App/rootStore";

export const downloadRequestList = async () => {
  try {
    const response = await axios.get(
      `${baseAPI}/admin/enrolls/download`,
      {
        responseType: "blob",
      }
    );

    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "request_list.xlsx";
    downloadLink.click();
  } catch (error) {
    console.error("Error downloading contact list:", error);
  }
};

export const getRequests = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(requestListSlice.actions.setLoading());

    const response = await axios.get<IRequest[]>(
      `${baseAPI}/admin/get/enrolls`
    );

    dispatch(requestListSlice.actions.setData(response.data));
  } catch (error: any) {
    dispatch(requestListSlice.actions.setError(error.message));
  }
};
