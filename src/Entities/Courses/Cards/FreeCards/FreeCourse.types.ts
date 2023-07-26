export interface IFreeCourse {
    id: string;
    title: string;
    duration: string;
    videos: number;
    isFavorite: boolean;
}

export interface IFreeCourseState {
    courses: IFreeCourse[],
    loading: boolean,
    error: string
}