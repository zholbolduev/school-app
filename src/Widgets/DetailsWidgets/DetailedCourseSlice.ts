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
        name: 'JavaScript для начинающих',
        description: 'JavaScript - мощный язык программирования, используемый для создания интерактивных и динамических веб-приложений. Он позволяет добавлять функциональность и взаимодействие на веб-страницах, делая пользовательский опыт более увлекательным и удобным.',
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