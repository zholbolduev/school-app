import axios from "axios";
import { AppDispatch } from "../../App/rootStore";
import { videoPlayerSlice } from "./VideoPlayerSlice";
import { baseAPI } from "../../Shared/baseAPI";

export const getDetailedVideoLecture =
  (id: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      dispatch(videoPlayerSlice.actions.setLoading());

      const response = await axios.get(`${baseAPI}/l/v/get/${id}`);

      dispatch(videoPlayerSlice.actions.setData(response.data));
    } catch (error: any) {
      dispatch(videoPlayerSlice.actions.setError(error.message));
    }
  };
