import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFetch } from "../../../Shared/types";

const initialState: IFetch = {
  loading: false,
  data: [],
  error: "",
};

export interface IContact {
  id: string;
  fullName: string;
  phoneNumber: string;
  dateOfCreation: string;
}

export const contactListSlice = createSlice({
  name: "contactListSlice",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setData(state, action: PayloadAction<IContact[]>) {
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

export default contactListSlice.reducer;
