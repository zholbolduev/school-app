import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFetch } from "../../../Shared/types";

const initialState: IFetch = {
  loading: false,
  data: [],
  error: "",
};

export interface IRequest {
  id: string;
  fullName: string;
  phoneNumber: string;
  courseName: string;
  dateOfCreation: string;
}

export const requestListSlice = createSlice({
  name: "requestListSlice",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setData(state, action: PayloadAction<IRequest[]>) {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default requestListSlice.reducer;
