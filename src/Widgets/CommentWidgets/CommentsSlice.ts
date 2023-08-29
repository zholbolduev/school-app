import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseAPI } from "../../Shared/baseAPI";

const initialState = {
    loading: false,
    comments: [],
    error: ""
};

export const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setLoading(state) {
            state.loading = true;
        },
        setComments(state, action: PayloadAction<string>) {
            state.loading = true;
            axios.get(`${baseAPI}/comment/get/course/${action.payload}`)
            .then(response => {
                state.comments = response.data;
                state.loading = false;
            });
        },
        setError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export default commentSlice.reducer;