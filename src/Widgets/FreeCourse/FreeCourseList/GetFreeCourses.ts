import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFreeCourse } from "../FreeCourseSlice";

export const fetchFreeCourses = createAsyncThunk<IFreeCourse[]>(
    'freeCourses/fetchFreeCourses', async () => {
        
    try {
        const response = await axios.get<IFreeCourse[]>('https://dummyjson.com/products/');
        console.log(response.data);
        return response.data;

    } catch(error) {
        console.log();
        throw error;
    }
        
});
