import axios from "axios";
import { registerFeatureSlice } from "./RegisterFeatureSlice";
import { AppDispatch } from "../../../App/rootStore";
import { ITokens } from "../types";
import { baseAPI } from "../../../Shared/baseAPI";

export const registerAction =
  (
    nameSurname: string,
    email: string,
    password: string,
    confirmPassword: string,
    agreement: boolean
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(registerFeatureSlice.actions.setLoading());
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (nameSurname.length > 20) {
        console.log(nameSurname.length);
        dispatch(
          registerFeatureSlice.actions.setError(
            "Поле имя содержит больше 20 символов"
          )
        );
        return;
      }

      if (!emailPattern.test(email)) {
        dispatch(
          registerFeatureSlice.actions.setError("Введите действительную почту")
        );
        return;
      }

      if (
        password.length < 6 ||
        !/\d/.test(password) ||
        !/[A-Z]/.test(password)
      ) {
        dispatch(
          registerFeatureSlice.actions.setError(
            "Минимум 6 символов, не менее 1 цифры, хотя бы 1 символ с верхним регистром"
          )
        );
        return;
      }

      if (!agreement) {
        dispatch(
          registerFeatureSlice.actions.setError("Примите условия соглашения")
        );
        return;
      }

      // const user = new FormData();
      // user.append("name", name);
      // user.append("email", email);
      // user.append("password", password);
      // user.append("confirmPassword", passwordConfirm);

      const user = {
        nameSurname,
        email,
        password,
        confirmPassword,
      };

      const response = await axios.post<ITokens>(
        `http://192.168.0.124:8082/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8", // Указываем правильный заголовок для FormData
          },
        }
      );

      dispatch(registerFeatureSlice.actions.setData(response.data));
    } catch (error: any) {
      dispatch(registerFeatureSlice.actions.setError(error.message));
    }
  };
