import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IDetailedCourse {
    course: ICourseData,
    isLoading: boolean,
    error: string 
}

export interface ICourseData {
    type: string,
    name: string,
    description: string;
    videos: [number, number];
}

const initialState: IDetailedCourse = {
    course: {
        type: 'Бесплатный',
        name: 'Алгебра',
        description: 'А́лгебра — раздел математики, который можно нестрого охарактеризовать как обобщение и расширение арифметики; в этом разделе числа и другие математические объекты обозначаются буквами и другими символами, что позволяет записывать и исследовать их свойства в самом общем виде',
        videos: [1, 2]
    },
    isLoading: false,
    error: ''
} 

export const detailedCourseSlice = createSlice({
    name: "detailedCourseSlice",
    initialState,
    reducers: {
        setCourse: (state, action: PayloadAction<ICourseData>) => {
            state.course = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        }
    }
});

export default detailedCourseSlice.reducer;