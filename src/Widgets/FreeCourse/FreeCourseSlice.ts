import { createSlice } from "@reduxjs/toolkit";

export interface IFreeCourse {
    title: string;
    duration: string;
    videos: number;
    isFavorite: boolean;
    to: string;
}

const initialState: IFreeCourse[] = [
    {
        title: 'Физика',
        duration: '1 месяц',
        videos: 8,
        isFavorite: false,
        to: '/physics',
    }
];

export const freeCourseSlice = createSlice({
    name: 'freeCourseSlice',
    initialState: initialState,
    reducers: {
        
    }
});

export default freeCourseSlice.reducer;