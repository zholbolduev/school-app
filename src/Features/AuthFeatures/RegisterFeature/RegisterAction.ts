import axios from "axios";
import { registerFeatureSlice } from "./RegisterFeatureSlice";
import { AppDispatch } from "../../../App/rootStore";
import { ITokens } from "../types";
import { baseAPI } from "../../../Shared/baseAPI";

export const registerAction =
  (
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(registerFeatureSlice.actions.setLoading());
      const user = new FormData();
      user.append("name", name);
      user.append("email", email);
      user.append("password", password);
      user.append("confirmPassword", passwordConfirm);

      const response = await axios.post<ITokens>(`${baseAPI}`, user);

      dispatch(registerFeatureSlice.actions.setData(response.data));
    } catch (error: any) {
      dispatch(registerFeatureSlice.actions.setError(error.message));
    }
  };
