import axios from "axios";
import { loginFeatureSlice } from "./LoginFeatureSlice";
import { AppDispatch } from "../../../App/rootStore";
import { baseAPI } from "../../../Shared/baseAPI";
import { ITokens } from "../types";

export const loginAction =
  (email: string, password: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(loginFeatureSlice.actions.setLoading());
      const user = new FormData();
      user.append("email", email);
      user.append("password", password);

      const response = await axios.post<ITokens>(`${baseAPI}`, user);

      dispatch(loginFeatureSlice.actions.setData(response.data));
    } catch (error: any) {
      dispatch(loginFeatureSlice.actions.setError(error.message));
    }
  };
