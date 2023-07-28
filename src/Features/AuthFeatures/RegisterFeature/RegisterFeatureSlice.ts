import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITokens } from "../types";
import { IFetch } from "../../../Shared/types";

const initialState: IFetch = {
  loading: false,
  data: { access: "", refresh: "" },
  error: "",
};

export const registerFeatureSlice = createSlice({
  name: "registerFeatureSlice",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setData(state, action: PayloadAction<ITokens>) {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.loading = false;
      console.log(action.payload);
      state.error = action.payload;
    },
  },
});

export default registerFeatureSlice.reducer;
