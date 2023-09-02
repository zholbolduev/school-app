import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IComment, ICommentSlice } from "./types";

const initialState: ICommentSlice = {
  replies: [
    {
      id: 1,
      email: "alibek@gmail.com",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aperiam optio odio, velit cupiditate rerum fugit tenetur provident ducimus ullam explicabo consectetur quo laboriosam quia ea deserunt magnam blanditiis aut? Omnis aspernatur beatae ut fugiat rem expedita officia repellat sapiente dolores molestiae eius magnam minus tenetur perferendis ducimus hic nulla, doloribus pariatur laudantium ipsam alias blanditiis atque? At, ipsa dignissimos? Earum inventore porro perspiciatis, pariatur eum nesciunt magnam dignissimos quidem dicta quos qui eligendi, ducimus a natus error possimus repellat modi exercitationem harum tempora cupiditate excepturi omnis sint nemo. Laudantium. Laboriosam autem, deleniti necessitatibus iste incidunt pariatur alias. Explicabo, harum. Esse ipsam ratione cum, architecto eaque voluptate! Quod deserunt libero ipsa temporibus quos esse cumque, enim quisquam qui, aliquam vitae. Qui maxime ex, ullam dolores eveniet quae, eaque placeat voluptatibus sed enim magnam possimus commodi? Et distinctio adipisci eius dicta corrupti, possimus fugit nam. Minus quisquam dolorum itaque sed impedit.",
    },
  ],
  comments: [
    {
      id: 1,
      email: "alibek@gmail.com",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aperiam optio odio, velit cupiditate rerum fugit tenetur provident ducimus ullam explicabo consectetur quo laboriosam quia ea deserunt magnam blanditiis aut? Omnis aspernatur beatae ut fugiat rem expedita officia repellat sapiente dolores molestiae eius magnam minus tenetur perferendis ducimus hic nulla, doloribus pariatur laudantium ipsam alias blanditiis atque? At, ipsa dignissimos? Earum inventore porro perspiciatis, pariatur eum nesciunt magnam dignissimos quidem dicta quos qui eligendi, ducimus a natus error possimus repellat modi exercitationem harum tempora cupiditate excepturi omnis sint nemo. Laudantium. Laboriosam autem, deleniti necessitatibus iste incidunt pariatur alias. Explicabo, harum. Esse ipsam ratione cum, architecto eaque voluptate! Quod deserunt libero ipsa temporibus quos esse cumque, enim quisquam qui, aliquam vitae. Qui maxime ex, ullam dolores eveniet quae, eaque placeat voluptatibus sed enim magnam possimus commodi? Et distinctio adipisci eius dicta corrupti, possimus fugit nam. Minus quisquam dolorum itaque sed impedit.",
    },
  ],
};

export const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {
    setReplies(state, action: PayloadAction<IComment[]>) {
      state.replies = action.payload;
    },
    setComments(state, action: PayloadAction<IComment[]>) {
      state.comments = action.payload;
    },
  },
});

export default commentSlice.reducer;
